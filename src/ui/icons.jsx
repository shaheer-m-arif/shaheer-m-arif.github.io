// Small inline SVG glyphs used inside section headings and the footer.
// Kept as plain markup (not modules with animation loops) — static, decorative,
// aria-hidden. No canvas, no WebGL, no rAF: see the project's performance rule.

export function WaveformSymbol(props) {
  return (
    <svg
      className="sym"
      width="44"
      height="12"
      viewBox="0 0 44 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      aria-hidden="true"
      {...props}
    >
      <path d="M0 6 H10 l2.5 -4.5 l5 9 l5 -9 l5 9 l2.5 -4.5 H44" />
    </svg>
  );
}

export function ResistorSymbol(props) {
  return (
    <svg
      className="sym"
      width="44"
      height="12"
      viewBox="0 0 44 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      aria-hidden="true"
      {...props}
    >
      <path d="M0 6 H10 a3 3 0 0 1 6 0 a3 3 0 0 1 6 0 a3 3 0 0 1 6 0 a3 3 0 0 1 6 0 H44" />
    </svg>
  );
}

export function CapacitorSymbol(props) {
  return (
    <svg
      className="sym"
      width="44"
      height="12"
      viewBox="0 0 44 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      aria-hidden="true"
      {...props}
    >
      <path d="M0 6 H18 M18 0.5 V11.5 M26 0.5 V11.5 M26 6 H44" />
    </svg>
  );
}

export function GroundSymbol(props) {
  return (
    <svg
      width="24"
      height="14"
      viewBox="0 0 24 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 0 V5 M4 5 H20 M7 8.5 H17 M10 12 H14" />
    </svg>
  );
}

export function SunSymbol(props) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="4.3" />
      <path d="M12 2.5v2.6M12 18.9v2.6M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2.5 12h2.6M18.9 12h2.6M4.2 19.8l1.8-1.8M18 6l1.8-1.8" />
    </svg>
  );
}

export function MoonSymbol(props) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M20 14.3A8.4 8.4 0 1 1 9.7 4a6.4 6.4 0 0 0 10.3 10.3Z" />
    </svg>
  );
}

// The settling-scope trace under the hero headline — a fixed decaying
// sinusoid path, pre-computed and static (no animation, no per-frame work).
export function ScopeTrace(props) {
  return (
    <svg
      className="trace"
      viewBox="0 0 720 64"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M0 32.00 L3 30.16 L6 28.36 L9 26.62 L12 24.94 L15 23.32 L18 21.78 L21 20.30 L24 18.91 L27 17.59 L30 16.36 L33 15.21 L36 14.16 L39 13.19 L42 12.32 L45 11.54 L48 10.85 L51 10.25 L54 9.76 L57 9.35 L60 9.04 L63 8.82 L66 8.69 L69 8.65 L72 8.70 L75 8.84 L78 9.06 L81 9.35 L84 9.73 L87 10.18 L90 10.70 L93 11.29 L96 11.94 L99 12.65 L102 13.41 L105 14.23 L108 15.10 L111 16.01 L114 16.95 L117 17.93 L120 18.94 L123 19.98 L126 21.04 L129 22.11 L132 23.20 L135 24.29 L138 25.39 L141 26.48 L144 27.58 L147 28.66 L150 29.73 L153 30.79 L156 31.82 L159 32.83 L162 33.82 L165 34.78 L168 35.70 L171 36.59 L174 37.44 L177 38.26 L180 39.03 L183 39.75 L186 40.44 L189 41.07 L192 41.66 L195 42.19 L198 42.68 L201 43.12 L204 43.50 L207 43.84 L210 44.12 L213 44.35 L216 44.53 L219 44.65 L222 44.73 L225 44.76 L228 44.74 L231 44.68 L234 44.57 L237 44.41 L240 44.21 L243 43.98 L246 43.70 L249 43.38 L252 43.03 L255 42.65 L258 42.24 L261 41.79 L264 41.32 L267 40.83 L270 40.32 L273 39.78 L276 39.23 L279 38.67 L282 38.09 L285 37.51 L288 36.92 L291 36.32 L294 35.72 L297 35.12 L300 34.52 L303 33.93 L306 33.34 L309 32.76 L312 32.19 L315 31.64 L318 31.10 L321 30.57 L324 30.06 L327 29.57 L330 29.10 L333 28.65 L336 28.23 L339 27.83 L342 27.45 L345 27.10 L348 26.77 L351 26.48 L354 26.20 L357 25.96 L360 25.75 L363 25.56 L366 25.40 L369 25.27 L372 25.17 L375 25.09 L378 25.04 L381 25.02 L384 25.03 L387 25.06 L390 25.12 L393 25.20 L396 25.30 L399 25.43 L402 25.58 L405 25.75 L408 25.93 L411 26.14 L414 26.36 L417 26.60 L420 26.86 L423 27.12 L426 27.40 L429 27.69 L432 27.99 L435 28.30 L438 28.61 L441 28.93 L444 29.26 L447 29.58 L450 29.91 L453 30.24 L456 30.56 L459 30.89 L462 31.21 L465 31.53 L468 31.84 L471 32.15 L474 32.44 L477 32.73 L480 33.01 L483 33.28 L486 33.54 L489 33.79 L492 34.02 L495 34.24 L498 34.45 L501 34.65 L504 34.83 L507 34.99 L510 35.14 L513 35.28 L516 35.40 L519 35.50 L522 35.59 L525 35.67 L528 35.73 L531 35.77 L534 35.80 L537 35.81 L540 35.81 L543 35.80 L546 35.77 L549 35.73 L552 35.67 L555 35.61 L558 35.53 L561 35.44 L564 35.33 L567 35.22 L570 35.10 L573 34.97 L576 34.84 L579 34.69 L582 34.54 L585 34.38 L588 34.22 L591 34.05 L594 33.88 L597 33.71 L600 33.53 L603 33.35 L606 33.17 L609 32.99 L612 32.82 L615 32.64 L618 32.46 L621 32.29 L624 32.12 L627 31.95 L630 31.79 L633 31.63 L636 31.47 L639 31.32 L642 31.18 L645 31.05 L648 30.92 L651 30.79 L654 30.68 L657 30.57 L660 30.47 L663 30.38 L666 30.30 L669 30.22 L672 30.15 L675 30.09 L678 30.04 L681 30.00 L684 29.97 L687 29.94 L690 29.93 L693 29.92 L696 29.92 L699 29.92 L702 29.94 L705 29.96 L708 29.99 L711 30.02 L714 30.06 L717 30.11 L720 30.17"
      />
      <circle cx="720" cy="32" r="2.8" />
    </svg>
  );
}
