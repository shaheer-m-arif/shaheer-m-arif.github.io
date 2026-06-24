import React from "react";

export default function Grain() {
  return (
    <>
      <svg
        style={{
          position: "fixed",
          top: "-50%", left: "-50%",
          width: "200%", height: "200%",
          pointerEvents: "none",
          zIndex: 998,
          opacity: 0.038,
          animation: "grainShift 0.25s steps(1) infinite",
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="grain-filter" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.72"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-filter)" />
      </svg>
      <style>{`
        @keyframes grainShift {
          0%   { transform: translate(0, 0); }
          20%  { transform: translate(-4%, 5%); }
          40%  { transform: translate(-8%, -3%); }
          60%  { transform: translate(4%, -6%); }
          80%  { transform: translate(8%, 4%); }
          100% { transform: translate(-3%, 0); }
        }
      `}</style>
    </>
  );
}
