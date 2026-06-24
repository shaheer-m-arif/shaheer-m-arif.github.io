const SPACING = 58;
const BASE_RADIUS = 1.6;
const PULSE_RADIUS = 2.8;
const MOUSE_REPEL = 150;
const REPEL_STRENGTH = 0.38;
const RIPPLE_SPEED = 280;
const RIPPLE_RADIUS = 0.9;
const DOT_COLOR = "212,240,80";

export function startGrid(canvas) {
  const ctx = canvas.getContext("2d");
  let W, H, cols, rows, dots;
  let mx = -9999, my = -9999;
  let ripples = [];
  let raf;

  function buildDots() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
    cols = Math.ceil(W / SPACING) + 1;
    rows = Math.ceil(H / SPACING) + 1;
    dots = [];
    const ox = (W - (cols - 1) * SPACING) / 2;
    const oy = (H - (rows - 1) * SPACING) / 2;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        dots.push({
          bx: ox + c * SPACING,
          by: oy + r * SPACING,
          x: 0, y: 0,
          vx: 0, vy: 0,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }
  }

  function onResize() { buildDots(); }

  function onMouseMove(e) { mx = e.clientX; my = e.clientY; }
  function onMouseLeave() { mx = -9999; my = -9999; }

  function onTouchMove(e) {
    const t = e.touches[0];
    mx = t.clientX; my = t.clientY;
  }

  function onClick(e) {
    ripples.push({ x: e.clientX, y: e.clientY, r: 0, born: performance.now() });
  }

  function onTouchEnd(e) {
    const t = e.changedTouches[0];
    ripples.push({ x: t.clientX, y: t.clientY, r: 0, born: performance.now() });
  }

  let last = 0;
  function draw(now) {
    raf = requestAnimationFrame(draw);
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;

    ctx.clearRect(0, 0, W, H);

    const t = now * 0.001;

    // Expand and prune ripples
    ripples = ripples.filter((rp) => now - rp.born < 1800);
    for (const rp of ripples) rp.r = ((now - rp.born) / 1800) * W * 0.8;

    for (const d of dots) {
      // Ambient wave
      const wave = Math.sin(d.phase + t * 0.7 + d.bx * 0.008 + d.by * 0.006) * 4;
      let tx = d.bx + wave * 0.35;
      let ty = d.by + wave * 0.35;

      // Mouse repulsion
      const dxm = d.bx - mx;
      const dym = d.by - my;
      const distM = Math.sqrt(dxm * dxm + dym * dym);
      if (distM < MOUSE_REPEL && distM > 0) {
        const force = (1 - distM / MOUSE_REPEL) * REPEL_STRENGTH;
        tx += (dxm / distM) * force * MOUSE_REPEL;
        ty += (dym / distM) * force * MOUSE_REPEL;
      }

      // Ripple push
      let rippleR = BASE_RADIUS;
      for (const rp of ripples) {
        const dxr = d.bx - rp.x;
        const dyr = d.by - rp.y;
        const distR = Math.sqrt(dxr * dxr + dyr * dyr);
        const ring = rp.r;
        const diff = distR - ring;
        if (Math.abs(diff) < 40) {
          const wave2 = Math.exp(-diff * diff / 600) * (1 - (now - rp.born) / 1800);
          if (distR > 0) {
            tx += (dxr / distR) * wave2 * 22;
            ty += (dyr / distR) * wave2 * 22;
          }
          rippleR = Math.max(rippleR, BASE_RADIUS + wave2 * (PULSE_RADIUS - BASE_RADIUS));
        }
      }

      // Spring toward target
      const ax = (tx - d.x) * 8;
      const ay = (ty - d.y) * 8;
      d.vx = (d.vx + ax * dt) * 0.72;
      d.vy = (d.vy + ay * dt) * 0.72;
      d.x += d.vx * dt;
      d.y += d.vy * dt;

      // Init on first frame
      if (d.x === 0 && d.y === 0) { d.x = d.bx; d.y = d.by; }

      // Distance-based opacity from mouse
      const dxDisp = d.x - mx;
      const dyDisp = d.y - my;
      const distDisp = Math.sqrt(dxDisp * dxDisp + dyDisp * dyDisp);
      const proximity = Math.max(0, 1 - distDisp / 320);
      const alpha = 0.12 + proximity * 0.3;

      ctx.beginPath();
      ctx.arc(d.x, d.y, rippleR, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${DOT_COLOR},${alpha.toFixed(3)})`;
      ctx.fill();
    }
  }

  buildDots();

  window.addEventListener("resize", onResize);
  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("mouseleave", onMouseLeave);
  window.addEventListener("click", onClick);
  window.addEventListener("touchmove", onTouchMove, { passive: true });
  window.addEventListener("touchend", onTouchEnd, { passive: true });

  last = performance.now();
  raf = requestAnimationFrame(draw);

  return function stop() {
    cancelAnimationFrame(raf);
    window.removeEventListener("resize", onResize);
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseleave", onMouseLeave);
    window.removeEventListener("click", onClick);
    window.removeEventListener("touchmove", onTouchMove);
    window.removeEventListener("touchend", onTouchEnd);
  };
}
