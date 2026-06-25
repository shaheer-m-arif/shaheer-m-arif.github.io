// Reactive WebGL field — flowing amber/graphite noise, warps toward the cursor.
// Deliberately not a particle/node network: pure fragment-shader fluid.
export function startFluid(canvas) {
  const gl = canvas.getContext("webgl", { antialias: false, premultipliedAlpha: false });
  if (!gl) return () => {};

  const vert = `
    attribute vec2 a;
    void main(){ gl_Position = vec4(a,0.0,1.0); }
  `;

  const frag = `
    precision highp float;
    uniform vec2  u_res;
    uniform float u_time;
    uniform vec2  u_mouse;
    uniform float u_mouseActive;

    vec2 hash(vec2 p){
      p = vec2(dot(p,vec2(127.1,311.7)), dot(p,vec2(269.5,183.3)));
      return -1.0 + 2.0*fract(sin(p)*43758.5453123);
    }
    float noise(vec2 p){
      const float K1 = 0.366025404;
      const float K2 = 0.211324865;
      vec2 i = floor(p + (p.x+p.y)*K1);
      vec2 a = p - i + (i.x+i.y)*K2;
      vec2 o = (a.x>a.y) ? vec2(1.0,0.0) : vec2(0.0,1.0);
      vec2 b = a - o + K2;
      vec2 c = a - 1.0 + 2.0*K2;
      vec3 h = max(0.5 - vec3(dot(a,a), dot(b,b), dot(c,c)), 0.0);
      vec3 n = h*h*h*h * vec3( dot(a,hash(i+0.0)), dot(b,hash(i+o)), dot(c,hash(i+1.0)) );
      return dot(n, vec3(70.0));
    }
    float fbm(vec2 p){
      float v=0.0, a=0.5;
      for(int i=0;i<5;i++){ v+=a*noise(p); p*=2.0; a*=0.5; }
      return v;
    }

    vec3 baseBG()  { return vec3(0.024, 0.027, 0.039); }
    vec3 graphite(){ return vec3(0.10, 0.105, 0.13); }
    vec3 amber()   { return vec3(1.0, 0.706, 0.329); }
    vec3 amberDim(){ return vec3(0.35, 0.24, 0.10); }

    void main(){
      vec2 uv = gl_FragCoord.xy / u_res;
      uv.x *= u_res.x / u_res.y;

      vec2 mouse = u_mouse;
      mouse.x *= u_res.x / u_res.y;

      float dMouse = distance(uv, mouse);
      float pull = u_mouseActive * (1.0 - smoothstep(0.0, 0.4, dMouse)) * 0.1;
      vec2 dir = normalize(uv - mouse + 0.0001);

      float t = u_time * 0.05;
      vec2 p = uv * 2.0 + dir * pull;
      float f = fbm(p + vec2(0.0, t));
      float g = fbm(p * 1.6 + vec2(4.1, -t * 0.7));
      float bands = smoothstep(0.15, 0.92, f * 0.6 + g * 0.4);

      vec3 col = baseBG();
      col = mix(col, graphite(), bands * 0.8);

      // thin amber trace lines following the flow field
      float trace = abs(sin((f * 6.0 + g * 3.0 + t * 1.5) * 3.14159));
      float traceLine = smoothstep(0.99, 1.0, trace);
      col += amber() * traceLine * 0.4;

      // ambient dim amber glow drifting through
      float glow = smoothstep(0.5, 1.0, g);
      col += amberDim() * glow * 0.12;

      // cursor halo
      float halo = (1.0 - smoothstep(0.0, 0.4, dMouse)) * u_mouseActive;
      col += amber() * halo * 0.06;

      // vignette
      vec2 c = uv - vec2((u_res.x/u_res.y)*0.5, 0.5);
      float vig = 1.0 - smoothstep(0.35, 1.05, length(c));
      col = mix(baseBG() * 0.7, col, vig);

      col = pow(col, vec3(1.05));
      gl_FragColor = vec4(col, 1.0);
    }
  `;

  const sh = (t, s) => {
    const o = gl.createShader(t);
    gl.shaderSource(o, s);
    gl.compileShader(o);
    if (!gl.getShaderParameter(o, gl.COMPILE_STATUS)) throw gl.getShaderInfoLog(o);
    return o;
  };
  const pr = gl.createProgram();
  gl.attachShader(pr, sh(gl.VERTEX_SHADER, vert));
  gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, frag));
  gl.linkProgram(pr);
  if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) throw gl.getProgramInfoLog(pr);
  gl.useProgram(pr);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
    gl.STATIC_DRAW
  );
  const loc = gl.getAttribLocation(pr, "a");
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

  const uRes = gl.getUniformLocation(pr, "u_res");
  const uTime = gl.getUniformLocation(pr, "u_time");
  const uMouse = gl.getUniformLocation(pr, "u_mouse");
  const uMouseActive = gl.getUniformLocation(pr, "u_mouseActive");

  let mouseX = 0.5, mouseY = 0.5, mouseActive = 0;

  function onMove(e) {
    const r = canvas.getBoundingClientRect();
    mouseX = (e.clientX - r.left) / r.width;
    mouseY = 1.0 - (e.clientY - r.top) / r.height;
    mouseActive = 1;
  }
  function onLeave() { mouseActive = 0; }
  window.addEventListener("pointermove", onMove, { passive: true });
  window.addEventListener("pointerleave", onLeave);

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    canvas.style.position = "fixed";
    canvas.style.inset = "0";
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    const w = Math.floor(canvas.clientWidth * dpr);
    const h = Math.floor(canvas.clientHeight * dpr);
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
      gl.viewport(0, 0, w, h);
    }
    gl.uniform2f(uRes, w, h);
  }

  let raf, t0 = performance.now();
  let curMouseActive = 0;
  function frame() {
    curMouseActive += (mouseActive - curMouseActive) * 0.06;
    gl.uniform1f(uTime, (performance.now() - t0) / 1000.0);
    gl.uniform2f(uMouse, mouseX, mouseY);
    gl.uniform1f(uMouseActive, curMouseActive);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    raf = requestAnimationFrame(frame);
  }

  const ro = new ResizeObserver(resize);
  ro.observe(canvas);
  resize();
  frame();

  return () => {
    cancelAnimationFrame(raf);
    ro.disconnect();
    window.removeEventListener("pointermove", onMove);
    window.removeEventListener("pointerleave", onLeave);
  };
}
