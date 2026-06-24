import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const NAME = "SHAHEER ARIF";
const GLYPHS = "01@#$%&*+=?/<>[]{}";

export default function IntroAnimation({ onDone }) {
  const [text, setText] = useState(Array(NAME.length).fill("·").join(""));
  const [fading, setFading] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    // Skip on repeat views within same session
    if (sessionStorage.getItem("intro_v3")) {
      setGone(true);
      onDone();
      return;
    }
    sessionStorage.setItem("intro_v3", "1");

    let frame = 0;
    const totalFrames = 55;

    const id = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      setText(
        NAME.split("").map((ch, i) => {
          if (ch === " ") return " ";
          if (i < progress * NAME.length) return ch;
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }).join("")
      );
      if (frame >= totalFrames) {
        clearInterval(id);
        setText(NAME);
        setTimeout(() => {
          setFading(true);
          setTimeout(() => {
            setGone(true);
            onDone();
          }, 650);
        }, 420);
      }
    }, 30);

    return () => clearInterval(id);
  }, [onDone]);

  if (gone) return null;

  return ReactDOM.createPortal(
    <div style={{
      position: "fixed",
      top: 0, left: 0,
      width: "100vw", height: "100vh",
      background: "#000",
      zIndex: 9999,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "24px",
      opacity: fading ? 0 : 1,
      transition: "opacity 0.65s cubic-bezier(0.4,0,1,1)",
      pointerEvents: fading ? "none" : "all",
    }}>
      <div style={{
        fontSize: "clamp(24px, 5.5vw, 72px)",
        fontWeight: 900,
        letterSpacing: "-0.04em",
        color: "#fff",
        fontFamily: "Inter, sans-serif",
        lineHeight: 1,
      }}>
        {text}
      </div>
      <div style={{
        width: "40px",
        height: "2px",
        background: "#d4f050",
        opacity: 0.7,
        animation: "introBar 1.65s ease infinite",
      }} />
      <style>{`
        @keyframes introBar {
          0%,100% { transform: scaleX(0.3); opacity: 0.4; }
          50% { transform: scaleX(1); opacity: 1; }
        }
      `}</style>
    </div>,
    document.body
  );
}
