import React, { useEffect, useState } from "react";

export default function TypewriterTitle({ text, speed = 55 }) {
  const [out, setOut] = useState("");

  useEffect(() => {
    let i = 0;
    setOut("");

    const interval = setInterval(() => {
      i += 1;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <>
      <span className="twTitle">
        {out}
        <span className="twCursor" aria-hidden="true">▍</span>
      </span>

      <style>{`
        .twTitle {
          display: inline-block;
          white-space: nowrap;
        }

        .twCursor {
          display: inline-block;
          margin-left: 2px;
          opacity: 0.9;
          animation: twBlink 0.9s steps(1) infinite;
        }

        @keyframes twBlink {
          50% { opacity: 0; }
        }
      `}</style>
    </>
  );
}