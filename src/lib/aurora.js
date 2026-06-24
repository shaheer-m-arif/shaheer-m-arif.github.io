// WebGL Aurora / Nebula (DARK THEME)
export function startAurora(canvas) {
  const gl = canvas.getContext('webgl', { antialias: false, premultipliedAlpha: false });
  if (!gl) return () => {};

  const vert = `
    attribute vec2 a;
    void main(){ gl_Position = vec4(a,0.0,1.0); }
  `;

  const frag = `
    precision highp float;
    uniform vec2  u_res;
    uniform float u_time;

    // --- simplex-ish noise ---
    vec2 hash(vec2 p){
      p = vec2(dot(p,vec2(127.1,311.7)), dot(p,vec2(269.5,183.3)));
      return -1.0 + 2.0*fract(sin(p)*43758.5453123);
    }
    float noise(vec2 p){
      const float K1 = 0.366025404; // (sqrt(3)-1)/2
      const float K2 = 0.211324865; // (3-sqrt(3))/6
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
      for(int i=0;i<5;i++){ v+=a*noise(p); p*=1.9; a*=0.55; }
      return v;
    }

    // --- dark palette ---
    vec3 baseBG(){ return vec3(0.01, 0.012, 0.03); }            // deep navy
    vec3 indigo(){  return vec3(0.20, 0.22, 0.55); }             // deep navy-indigo
    vec3 purple(){  return vec3(0.45, 0.32, 0.65); }             // smoky violet
    vec3 grayish(){ return vec3(0.55, 0.58, 0.70); }             // soft cool gray

    void main(){
      vec2 uv = gl_FragCoord.xy / u_res;
      uv.x *= u_res.x / u_res.y;

      float t = u_time * 0.07;
      vec2 p = uv * 2.2;
      float f = fbm(p + vec2(0.0, t));
      float g = fbm(p * 1.7 + vec2(5.2, -t * 0.8));
      float bands = smoothstep(0.25, 0.95, f * 0.6 + g * 0.4);

      // color blend (desaturated & dark)
      vec3 bandCol = mix(indigo(), purple(), bands);
      bandCol = mix(bandCol, grayish(), smoothstep(0.55, 1.0, g)); // fade into gray-violet
      bandCol *= 0.35;  // darken overall intensity

      // subtle extra ribbons (indigo -> grayish)
      float ribbon = sin((uv.y * 3.0 + g * 2.0 - t * 1.2) * 3.14159) * 0.5 + 0.5;
      vec3 ribbonCol = mix(indigo(), grayish(), ribbon) * 0.20;

      vec3 col = baseBG();
      col += bandCol + ribbonCol;

      // vignette for readability
      float d = distance(uv, vec2(0.65, 0.4));
      float vig = 1.0 - smoothstep(0.70, 1.18, d);
      col = mix(baseBG(), col, vig);

      // gentle gamma
      col = pow(col, vec3(1.1));

      gl_FragColor = vec4(col, 1.0);
    }
  `;

  const sh = (t,s)=>{ const o=gl.createShader(t); gl.shaderSource(o,s); gl.compileShader(o);
    if(!gl.getShaderParameter(o,gl.COMPILE_STATUS)) throw gl.getShaderInfoLog(o); return o; };
  const pr = gl.createProgram();
  gl.attachShader(pr, sh(gl.VERTEX_SHADER, vert));
  gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, frag));
  gl.linkProgram(pr);
  if(!gl.getProgramParameter(pr, gl.LINK_STATUS)) throw gl.getProgramInfoLog(pr);
  gl.useProgram(pr);

  // fullscreen triangles
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    -1,-1,  1,-1,  -1,1,
    -1, 1,  1,-1,   1,1
  ]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(pr, 'a');
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

  const uRes = gl.getUniformLocation(pr, 'u_res');
  const uTime = gl.getUniformLocation(pr, 'u_time');

  function resize(){
    const dpr = Math.min(window.devicePixelRatio||1, 2);
    canvas.style.position = 'fixed';
    canvas.style.inset = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    const w = Math.floor(canvas.clientWidth * dpr);
    const h = Math.floor(canvas.clientHeight * dpr);
    if (canvas.width !== w || canvas.height !== h){ canvas.width = w; canvas.height = h; gl.viewport(0,0,w,h); }
    gl.uniform2f(uRes, w, h);
  }

  let raf, t0 = performance.now();
  function frame(){
    gl.uniform1f(uTime, (performance.now()-t0)/1000.0);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    raf = requestAnimationFrame(frame);
  }

  const ro = new ResizeObserver(resize);
  ro.observe(canvas);
  resize(); frame();

  return ()=>{ cancelAnimationFrame(raf); ro.disconnect(); };
}