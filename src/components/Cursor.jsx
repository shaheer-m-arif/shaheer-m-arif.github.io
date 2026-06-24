import React, { useEffect, useRef, useState } from "react";

const TRAIL = 7;

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const trailRefs = useRef([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let mx = -300, my = -300, rx = -300, ry = -300;
    const trail = Array.from({ length: TRAIL }, () => ({ x: -300, y: -300 }));
    let hovering = false;
    let raf;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (!active) setActive(true);
    };
    const onEnter = () => { hovering = true; };
    const onLeave = () => { hovering = false; };

    window.addEventListener("mousemove", onMove);

    const bindLinks = () => {
      document.querySelectorAll("a,button,[data-hover]").forEach(el => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    bindLinks();

    const tick = () => {
      rx += (mx - rx) * 0.11;
      ry += (my - ry) * 0.11;

      // Shift trail positions
      for (let i = trail.length - 1; i > 0; i--) {
        trail[i] = { ...trail[i - 1] };
      }
      trail[0] = { x: rx, y: ry };

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx - 3}px,${my - 3}px)`;
      }
      if (ringRef.current) {
        const sz = hovering ? 52 : 34;
        ringRef.current.style.transform = `translate(${rx - sz / 2}px,${ry - sz / 2}px)`;
        ringRef.current.style.width = sz + "px";
        ringRef.current.style.height = sz + "px";
        ringRef.current.style.borderColor = hovering
          ? "rgba(255,180,84,0.8)"
          : "rgba(255,180,84,0.3)";
      }

      trailRefs.current.forEach((el, i) => {
        if (!el) return;
        const { x, y } = trail[i] || { x: -300, y: -300 };
        const t = 1 - i / TRAIL;
        const sz = 1.5 + t * 2.5;
        el.style.transform = `translate(${x - sz / 2}px,${y - sz / 2}px)`;
        el.style.width = sz + "px";
        el.style.height = sz + "px";
        el.style.opacity = String(t * 0.18);
      });

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>

      {/* Trail dots */}
      {Array.from({ length: TRAIL }, (_, i) => (
        <div
          key={i}
          ref={(el) => { trailRefs.current[i] = el; }}
          style={{
            position: "fixed", top: 0, left: 0,
            borderRadius: "50%",
            background: "#ffb454",
            pointerEvents: "none",
            zIndex: 99990 - i,
            opacity: active ? undefined : 0,
            transition: "opacity 0.2s",
          }}
        />
      ))}

      {/* Main dot */}
      <div ref={dotRef} style={{
        position: "fixed", top: 0, left: 0,
        width: "6px", height: "6px",
        borderRadius: "50%",
        background: "#ffb454",
        pointerEvents: "none",
        zIndex: 99999,
        opacity: active ? 1 : 0,
        transition: "opacity 0.2s",
      }} />

      {/* Ring */}
      <div ref={ringRef} style={{
        position: "fixed", top: 0, left: 0,
        width: "34px", height: "34px",
        borderRadius: "50%",
        border: "1px solid rgba(255,180,84,0.3)",
        pointerEvents: "none",
        zIndex: 99998,
        opacity: active ? 1 : 0,
        transition: "opacity 0.2s, width 0.18s ease, height 0.18s ease, border-color 0.18s ease",
      }} />
    </>
  );
}
