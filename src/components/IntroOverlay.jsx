import React, { useEffect, useMemo, useState } from "react";

// Intro overlay that:
// - shows ONLY on first load
// - shows ONLY on the Home route
// - auto-dismisses after ~3.5s
// - uses the same site background (no separate background image)
export default function IntroOverlay({
  visible = true,
  onDismiss,
  onStartClose,
  durationMs = 3600,
}) {
  const [closing, setClosing] = useState(false);

  // Detect if we're on the Home page.
  // Supports both BrowserRouter and HashRouter.
  const isHome = useMemo(() => {
    const path = window.location.pathname || "/";
    const hash = window.location.hash || "";

    // BrowserRouter home
    if (path === "/" || path === "") return true;

    // HashRouter home (common: #/ or #/home)
    if (hash === "#/" || hash === "#" || hash === "" || hash === "#/home") return true;

    // Also treat "#/" with query/anchors
    if (hash.startsWith("#/") && (hash === "#/" || hash.startsWith("#/?"))) return true;

    return false;
  }, []);

  // Show only once per session.
  const shouldShow = useMemo(() => {
    try {
      const seen = sessionStorage.getItem("introSeen") === "1";
      return !seen;
    } catch {
      // If storage is blocked, still show once (best effort)
      return true;
    }
  }, []);

  const effectiveVisible = visible && isHome && shouldShow;

  // Lock scroll while the overlay is up.
  useEffect(() => {
    document.documentElement.style.overflow = effectiveVisible && !closing ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [effectiveVisible, closing]);

  // Auto close after duration.
  useEffect(() => {
    if (!effectiveVisible) return;

    const t = setTimeout(() => {
      onStartClose && onStartClose();
      setClosing(true);

      // Mark as seen immediately so refreshes during fade don't re-show.
      try {
        sessionStorage.setItem("introSeen", "1");
      } catch {}

      setTimeout(() => {
        // small buffer so overlay fully disappears before app reveals
        setTimeout(() => {
          onDismiss && onDismiss();
        }, 300);
      }, 520);
    }, Math.max(2500, durationMs));

    return () => clearTimeout(t);
  }, [effectiveVisible, durationMs, onDismiss, onStartClose]);

  if (!effectiveVisible) return null;

  return (
    <div className={`intro-full ${closing ? "closing" : ""}`} role="dialog" aria-modal="true">
      <div className="intro-name" aria-label="Shaheer Arif">SHAHEER ARIF</div>

      {/* component-scoped styles */}
      <style>{`
        .intro-full {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: grid;
          place-items: center;
          /* Same background as the page: keep it transparent and just add a subtle veil */
          background: rgba(10, 12, 30, 0.15);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          opacity: 1;
          transition: opacity 520ms ease;
        }
        .intro-full.closing {
          opacity: 0;
          pointer-events: none;
        }

        .intro-name {
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-size: clamp(28px, 4.6vw, 58px);
          line-height: 1.05;

          /* reveal sweep + subtle pulse so it feels like it's "loading" */
          display: inline-block;
          padding: 2px 6px;
          color: rgba(255, 255, 255, 0.92);
          clip-path: inset(0 100% 0 0);
          opacity: 0.25;
          animation: introReveal 1.35s ease-in-out infinite;
          will-change: clip-path, opacity, transform;
        }

        @keyframes introReveal {
          0% {
            clip-path: inset(0 100% 0 0);
            opacity: 0.22;
            transform: translateX(-10px);
          }
          45% {
            clip-path: inset(0 0 0 0);
            opacity: 1;
            transform: translateX(0px);
          }
          70% {
            clip-path: inset(0 0 0 0);
            opacity: 0.95;
            transform: translateX(0px);
          }
          100% {
            clip-path: inset(0 0 0 100%);
            opacity: 0.22;
            transform: translateX(10px);
          }
        }
      `}</style>
    </div>
  );
}