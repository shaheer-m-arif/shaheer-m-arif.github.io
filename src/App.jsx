import React, { useEffect, useState } from "react";
import IntroOverlay from "./components/IntroOverlay.jsx";
import { startAurora } from "./lib/aurora";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Experience from "./pages/Experience.jsx";
import Skills from "./pages/Skills.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  const location = useLocation();

  // HashRouter still provides a normal pathname ("/", "/projects", etc.)
  const isHome = location.pathname === "/" || location.pathname === "";

  const INTRO_KEY = "intro_seen_v2";

  const readSeen = () => {
    try {
      return sessionStorage.getItem(INTRO_KEY) === "1";
    } catch {
      return false;
    }
  };

  const markSeen = () => {
    try {
      sessionStorage.setItem(INTRO_KEY, "1");
    } catch {
      // ignore
    }
  };

  const [showIntro, setShowIntro] = useState(() => {
    // Only show intro on Home, and only once per session.
    // If storage is unavailable, it will just show on Home.
    return !readSeen();
  });

  const [reveal, setReveal] = useState(() => {
    // If we are not going to show the intro, ensure the stage is visible.
    return false;
  });

  const onStartClose = () => setReveal(true);
  const dismissIntro = () => {
    setShowIntro(false);
    setReveal(true);
  };

  // Ensure the intro never blocks non-home routes.
  // Also ensures refresh on /#/projects doesn't blank out the UI.
  useEffect(() => {
    // Non-home routes should never be blocked by the intro.
    if (!isHome) {
      setShowIntro(false);
      setReveal(true);
      return;
    }

    // Home route: show only if not seen yet
    const seen = readSeen();
    if (seen) {
      setShowIntro(false);
      setReveal(true);
    } else {
      setShowIntro(true);
      setReveal(false);
    }
  }, [isHome]);

  // Auto-dismiss intro after ~3.5s (Home only, first time per session)
  useEffect(() => {
    if (!isHome) return;
    if (!showIntro) return;

    const t1 = window.setTimeout(() => {
      // Start reveal transition first (if your CSS uses it)
      onStartClose();

      // Mark as seen immediately so refresh won't show it again this session
      markSeen();

      // Give a short moment for any fade animation
      const t2 = window.setTimeout(() => {
        dismissIntro();
      }, 450);

      // cleanup nested timeout
      return () => window.clearTimeout(t2);
    }, 3500);

    return () => window.clearTimeout(t1);
  }, [isHome, showIntro]);

  useEffect(() => {
    const c = document.getElementById("bgfx");
    if (!c || c.dataset.auroraStarted === "1") return;
    c.dataset.auroraStarted = "1";
    startAurora(c);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((ent) => {
          if (ent.isIntersecting) {
            ent.target.classList.add("in");
            io.unobserve(ent.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".card").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [location.pathname]);

  return (
    <>
      <canvas
        id="bgfx"
        style={{ pointerEvents: "none", position: "fixed", inset: 0, zIndex: 0 }}
      />

      {/* Always render the app; only render the overlay on top when needed */}
      {showIntro && isHome && (
        <IntroOverlay
          visible={showIntro}
          onDismiss={() => {
            markSeen();
            dismissIntro();
          }}
          onStartClose={onStartClose}
        />
      )}

      <div
        className={`app-stage ${reveal ? "reveal" : ""}`}
        aria-hidden={showIntro && isHome}
        style={{ position: "relative", zIndex: 1 }}
      >
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer>
          © {new Date().getFullYear()} • Shaheer Arif • All Rights Reserved.
        </footer>
      </div>
    </>
  );
}