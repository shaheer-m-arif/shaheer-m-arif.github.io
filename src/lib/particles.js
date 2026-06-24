export function startParticles(canvas) {
  const ctx = canvas.getContext("2d");
  let W = 0, H = 0, raf;
  const mouse = { x: -9999, y: -9999 };
  const LINK = 180;
  const N = 100;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  const onMouse = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
  const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };
  const onResize = () => resize();

  window.addEventListener("mousemove", onMouse);
  window.addEventListener("mouseleave", onLeave);
  window.addEventListener("resize", onResize);
  resize();

  const pts = Array.from({ length: N }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    vx: (Math.random() - 0.5) * 1.1,
    vy: (Math.random() - 0.5) * 1.1,
    r: 0.9 + Math.random() * 1.3,
    phase: Math.random() * Math.PI * 2,
  }));

  function draw() {
    ctx.clearRect(0, 0, W, H);

    for (const p of pts) {
      p.phase += 0.022;
      p.x += p.vx;
      p.y += p.vy;

      const mdx = mouse.x - p.x;
      const mdy = mouse.y - p.y;
      const md = Math.hypot(mdx, mdy);
      if (md < 240 && md > 0) {
        p.vx += (mdx / md) * 0.03;
        p.vy += (mdy / md) * 0.03;
      }

      const spd = Math.hypot(p.vx, p.vy);
      if (spd > 1.5) { p.vx *= 0.97; p.vy *= 0.97; }

      if (p.x <= 0) { p.x = 0; p.vx = Math.abs(p.vx); }
      else if (p.x >= W) { p.x = W; p.vx = -Math.abs(p.vx); }
      if (p.y <= 0) { p.y = 0; p.vy = Math.abs(p.vy); }
      else if (p.y >= H) { p.y = H; p.vy = -Math.abs(p.vy); }
    }

    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const dx = pts[i].x - pts[j].x;
        const dy = pts[i].y - pts[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < LINK) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(212,240,80,${(1 - d / LINK) * 0.3})`;
          ctx.lineWidth = 0.7;
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          ctx.stroke();
        }
      }
    }

    for (const p of pts) {
      const d = Math.hypot(mouse.x - p.x, mouse.y - p.y);
      if (d < 220) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(212,240,80,${(1 - d / 220) * 0.6})`;
        ctx.lineWidth = 0.9;
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }
    }

    for (const p of pts) {
      const pulse = Math.sin(p.phase) * 0.5;
      const md = Math.hypot(mouse.x - p.x, mouse.y - p.y);
      const boost = md < 180 ? (1 - md / 180) * 1.8 : 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r + pulse + boost, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212,240,80,${0.5 + boost * 0.4})`;
      ctx.fill();
    }

    raf = requestAnimationFrame(draw);
  }

  draw();

  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("mousemove", onMouse);
    window.removeEventListener("mouseleave", onLeave);
    window.removeEventListener("resize", onResize);
  };
}
