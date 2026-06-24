import React, { useEffect, useRef, useState } from "react";

const WAVE_PATH = (() => {
  let d = "M 0,30";
  for (let x = 2; x <= 900; x += 2) {
    const t = x / 900;
    const y = 30 + 22 * Math.sin(x * 0.055) * Math.exp(-t * 2.2);
    d += ` L ${x},${y.toFixed(2)}`;
  }
  return d;
})();

const SPECS = [
  "STM32F4", "AVR128DB28", "433MHz RF", "PCB Layout",
  "UART · SPI · I2C", "SystemVerilog", "Basys3 FPGA",
  "C Firmware", "LTspice", "RF Telemetry", "Claude API",
  "React Native", "Node.js", "SwiftUI", "Plaid API",
];

function scramble(el, next, duration = 520) {
  const glyphs = "@#$%&*+=-?/<>";
  const len = Math.max(el.textContent.length, next.length);
  let start = null;
  function step(ts) {
    if (!start) start = ts;
    const p = Math.min(1, (ts - start) / duration);
    let out = "";
    for (let i = 0; i < len; i++) {
      out += p < (i / len) * 0.7
        ? glyphs[Math.floor(Math.random() * glyphs.length)]
        : (next[i] || "");
    }
    el.textContent = out;
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

export default function HeroSection() {
  const nameRef = useRef(null);
  const contentRef = useRef(null);
  const [role, setRole] = useState("Engineer");

  // Magnetic letters on "SHAHEER"
  useEffect(() => {
    const wrap = nameRef.current;
    const text = wrap.textContent.trim();
    wrap.textContent = "";
    const letters = [...text].map((ch) => {
      const s = document.createElement("span");
      s.style.cssText = "display:inline-block;will-change:transform;transition:transform 0.15s ease;";
      s.textContent = ch;
      wrap.appendChild(s);
      return s;
    });
    const onMove = (e) => {
      const r = wrap.getBoundingClientRect();
      letters.forEach((L, i) => {
        const cx = r.left + (i + 0.5) * (r.width / letters.length);
        const cy = r.top + r.height / 2;
        const dx = (e.clientX - cx) / r.width;
        const dy = (e.clientY - cy) / r.height;
        L.style.transform = `translate(${dx * 20}px,${dy * 20}px)`;
      });
    };
    const onLeave = () => letters.forEach((L) => (L.style.transform = ""));
    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);
    return () => {
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // Role scramble
  useEffect(() => {
    const roles = ["Engineer", "Developer", "Builder", "Student"];
    const el = document.getElementById("hero-role");
    let i = 0;
    const id = setInterval(() => {
      i = (i + 1) % roles.length;
      setRole(roles[i]);
      if (el) scramble(el, roles[i]);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  // Scroll parallax
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      if (contentRef.current) {
        const progress = Math.min(y / vh, 1);
        contentRef.current.style.transform = `translateY(${y * 0.42}px)`;
        contentRef.current.style.opacity = String(Math.max(0, 1 - progress * 1.9));
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="hero" style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      padding: "0 8vw",
      position: "relative",
      overflow: "hidden",
    }}>
      <div ref={contentRef} style={{ width: "100%", willChange: "transform, opacity" }}>

        <div style={{
          fontSize: "11px",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.28)",
          marginBottom: "36px",
        }}>
          Portfolio · 2026
        </div>

        {/* Split name — SHAHEER outlined, ARIF solid + offset */}
        <div style={{ marginBottom: "36px", lineHeight: 0.88 }}>
          <div style={{
            fontSize: "clamp(72px, 16.5vw, 220px)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            color: "rgba(255,255,255,0.11)",
          }}>
            <span ref={nameRef}>SHAHEER</span>
          </div>
          <div style={{
            fontSize: "clamp(72px, 16.5vw, 220px)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            color: "#fff",
            paddingLeft: "clamp(36px, 4.5vw, 72px)",
          }}>
            ARIF
          </div>
        </div>

        <div style={{
          height: "1px",
          background: "linear-gradient(to right, #d4f050, rgba(212,240,80,0.15), transparent)",
          marginBottom: "28px",
          maxWidth: "600px",
        }} />

        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginBottom: "28px",
          flexWrap: "wrap",
        }}>
          <p style={{
            fontSize: "clamp(18px, 2.4vw, 26px)",
            color: "rgba(255,255,255,0.5)",
            fontWeight: 300,
            letterSpacing: "0.01em",
          }}>
            Electrical{" "}
            <span id="hero-role" style={{ color: "#d4f050", fontWeight: 600 }}>{role}</span>
            {" "}· University of Calgary
          </p>

          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "12px",
            color: "rgba(255,255,255,0.35)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "999px",
            padding: "7px 16px",
          }}>
            <span style={{
              width: "5px", height: "5px", borderRadius: "50%",
              background: "#4ade80",
              boxShadow: "0 0 8px rgba(74,222,128,0.8)",
              animation: "pip 2s ease infinite",
              flexShrink: 0,
            }} />
            Sep 2026 · Cenovus Energy · SCADA Co-op
          </div>
        </div>

        {/* Scrolling tech specs strip */}
        <div style={{
          overflow: "hidden",
          maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          marginBottom: "64px",
        }}>
          <div style={{
            display: "flex",
            gap: "0",
            animation: "specScroll 22s linear infinite",
            width: "max-content",
          }}>
            {[...SPECS, ...SPECS].map((s, i) => (
              <span key={i} style={{
                fontSize: "10.5px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(212,240,80,0.35)",
                whiteSpace: "nowrap",
                padding: "0 28px",
              }}>
                {s}
                <span style={{ marginLeft: "28px", opacity: 0.4 }}>—</span>
              </span>
            ))}
          </div>
        </div>

        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "11px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.18)",
          animation: "floatHint 3s ease infinite",
        }}>
          <span>↓</span>
          <span>Scroll</span>
        </div>
      </div>

      {/* Oscilloscope waveform */}
      <svg
        viewBox="0 0 900 60"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          bottom: "48px",
          left: "8vw",
          width: "calc(100% - 16vw)",
          height: "56px",
          opacity: 0.22,
          pointerEvents: "none",
        }}
      >
        <path
          d={WAVE_PATH}
          stroke="#d4f050"
          fill="none"
          strokeWidth="1.4"
          style={{
            strokeDasharray: 2200,
            strokeDashoffset: 2200,
            animation: "drawWave 2.8s cubic-bezier(0.16,1,0.3,1) forwards 0.5s",
          }}
        />
      </svg>

      <style>{`
        @keyframes pip {
          0%,100% { opacity:1; box-shadow: 0 0 8px rgba(74,222,128,0.8); }
          50% { opacity:0.6; box-shadow: 0 0 16px rgba(74,222,128,1); }
        }
        @keyframes floatHint {
          0%,100% { transform:translateY(0); opacity:0.18; }
          50% { transform:translateY(6px); opacity:0.35; }
        }
        @keyframes drawWave {
          to { stroke-dashoffset: 0; }
        }
        @keyframes specScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
