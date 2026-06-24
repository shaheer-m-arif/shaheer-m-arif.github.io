import React from "react";

// Stylized IC die — pins, package outline, internal block layout, center marking.
export default function ChipGraphic({ className }) {
  const pins = (count, axis) => {
    const arr = [];
    const span = 320;
    const start = -span / 2 + span / (count * 2);
    const step = span / count;
    for (let i = 0; i < count; i++) {
      const pos = start + i * step;
      arr.push(
        axis === "x" ? { x: pos, y: 0 } : { x: 0, y: pos }
      );
    }
    return arr;
  };

  const topPins = pins(9, "x");
  const sidePins = pins(7, "y");

  return (
    <svg
      viewBox="-260 -260 520 520"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="#ffb454" strokeWidth="1.4" opacity="0.85">
        {topPins.map((p, i) => (
          <line key={`t${i}`} x1={p.x} y1={-160} x2={p.x} y2={-220} />
        ))}
        {topPins.map((p, i) => (
          <line key={`b${i}`} x1={p.x} y1={160} x2={p.x} y2={220} />
        ))}
        {sidePins.map((p, i) => (
          <line key={`l${i}`} x1={-160} y1={p.y} x2={-220} y2={p.y} />
        ))}
        {sidePins.map((p, i) => (
          <line key={`r${i}`} x1={160} y1={p.y} x2={220} y2={p.y} />
        ))}
      </g>

      <rect
        x="-160" y="-160" width="320" height="320"
        stroke="#edeff2" strokeOpacity="0.5" strokeWidth="1.5" fill="#0a0c11"
      />
      <rect
        x="-160" y="-160" width="320" height="320"
        stroke="#ffb454" strokeOpacity="0.18" strokeWidth="10" fill="none"
      />

      <circle cx="-138" cy="-138" r="5" fill="none" stroke="#ffb454" strokeWidth="1.4" />

      <g stroke="#edeff2" strokeOpacity="0.16" strokeWidth="1">
        <rect x="-130" y="-130" width="90" height="60" />
        <rect x="-20" y="-130" width="150" height="40" />
        <rect x="-130" y="-50" width="60" height="100" />
        <rect x="-50" y="-50" width="80" height="45" />
        <rect x="50" y="-50" width="80" height="100" />
        <rect x="-50" y="15" width="80" height="115" />
        <rect x="-130" y="70" width="60" height="60" />
      </g>

      <g stroke="#ffb454" strokeOpacity="0.45" strokeWidth="1">
        <line x1="-40" y1="-130" x2="-40" y2="130" />
        <line x1="-160" y1="-50" x2="160" y2="-50" />
      </g>

      <text
        x="0" y="6"
        textAnchor="middle"
        fontFamily="JetBrains Mono, monospace"
        fontSize="22"
        letterSpacing="2"
        fill="#edeff2"
      >
        SA—01
      </text>
    </svg>
  );
}
