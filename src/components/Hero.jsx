import React, { useEffect, useRef, useState } from "react";

function scramble(el, nextText, duration = 600) {
  const glyphs = "@#$%&*+=-?/<>";
  const len = Math.max(el.textContent.length, nextText.length);
  let start = null;
  function step(ts) {
    if (!start) start = ts;
    const p = Math.min(1, (ts - start) / duration);
    let out = "";
    for (let i = 0; i < len; i++) {
      const threshold = (i / len) * 0.7;
      out += p < threshold ? glyphs[Math.floor(Math.random() * glyphs.length)] : (nextText[i] || "");
    }
    el.textContent = out;
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

export default function Hero() {
  const nameRef = useRef(null);
  const [role, setRole] = useState("Student");
  const [article, setArticle] = useState("a");

  useEffect(() => {
    const wrap = nameRef.current;
    const text = wrap.textContent.trim();
    wrap.textContent = "";
    const letters = [...text].map((ch) => {
      const s = document.createElement("span");
      s.className = "letter";
      s.textContent = ch;
      wrap.appendChild(s);
      return s;
    });
    const strength = 18;
    const onMove = (e) => {
      const r = wrap.getBoundingClientRect();
      letters.forEach((L, i) => {
        const cx = r.left + (i + 0.5) * (r.width / letters.length);
        const cy = r.top + r.height / 2;
        const dx = (e.clientX - cx) / r.width;
        const dy = (e.clientY - cy) / r.height;
        L.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
      });
    };
    const reset = () => letters.forEach((L) => (L.style.transform = ""));
    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", reset);
    return () => {
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", reset);
    };
  }, []);

  useEffect(() => {
    const roles = ["Student", "Developer", "Engineer"];
    const pick = (w) => (/^[AEIOU]/i.test(w) ? "an" : "a");
    const el = document.getElementById("role-word");
    let i = 0;
    setArticle(pick(roles[i]));
    const id = setInterval(() => {
      i = (i + 1) % roles.length;
      const next = roles[i];
      setRole(next);
      setArticle(pick(next));
      if (el) scramble(el, next);
    }, 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero-section" id="hero">
      <div className="hero-wrap">
        <div className="hero-eyebrow">Calgary, AB</div>

        <h1 className="hero-name">
          <span ref={nameRef} className="letters">SHAHEER&nbsp;ARIF</span>
        </h1>

        <div className="hero-rule" />

        <p className="hero-sub">
          I am {article} <span id="role-word">{role}</span>.
        </p>

        <div className="hero-badge">
          <span className="hero-pip" />
          Sep 2026 · Cenovus Energy · SCADA Co-op
        </div>

        <div className="hero-scroll-hint">
          <span className="scroll-arrow">↓</span>
          <span>Scroll to explore</span>
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
        }

        .hero-wrap {
          width: min(1000px, 90%);
          margin: 0 auto;
        }

        .hero-eyebrow {
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(108, 125, 168, 0.68);
          margin-bottom: 22px;
        }

        .hero-name {
          margin: 0;
          font-size: clamp(58px, 11vw, 148px);
          font-weight: 900;
          letter-spacing: -0.035em;
          line-height: 0.92;
          color: rgba(238, 242, 255, 0.96);
        }

        .letter {
          display: inline-block;
          will-change: transform;
          transition: transform 0.18s ease;
        }

        .hero-rule {
          margin: 28px 0;
          height: 1px;
          background: linear-gradient(
            to right,
            rgba(56, 189, 248, 0.65),
            rgba(129, 140, 248, 0.45),
            transparent
          );
        }

        .hero-sub {
          margin: 0;
          font-size: clamp(18px, 2.8vw, 28px);
          color: rgba(165, 178, 210, 0.82);
          font-weight: 400;
          letter-spacing: 0.01em;
        }

        #role-word {
          color: #38bdf8;
          font-weight: 600;
        }

        .hero-badge {
          margin-top: 24px;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-size: 13px;
          color: rgba(108, 125, 168, 0.68);
          padding: 8px 16px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 999px;
          background: rgba(56, 189, 248, 0.05);
        }

        .hero-pip {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 8px rgba(74, 222, 128, 0.7);
          animation: pip-pulse 2.2s ease infinite;
          flex-shrink: 0;
        }

        @keyframes pip-pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px rgba(74,222,128,0.7); }
          50%       { opacity: 0.7; box-shadow: 0 0 14px rgba(74,222,128,1); }
        }

        .hero-scroll-hint {
          margin-top: 64px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11.5px;
          color: rgba(108, 125, 168, 0.55);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          animation: float-hint 3s ease infinite;
        }

        .scroll-arrow { font-size: 14px; }

        @keyframes float-hint {
          0%, 100% { transform: translateY(0); opacity: 0.55; }
          50%       { transform: translateY(5px); opacity: 0.85; }
        }
      `}</style>
    </section>
  );
}
