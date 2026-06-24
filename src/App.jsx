import React, { useEffect, useState } from "react";
import { startFluid } from "./lib/fluid.js";
import Cursor from "./components/Cursor.jsx";
import Grain from "./components/Grain.jsx";
import IntroAnimation from "./components/IntroAnimation.jsx";
import Nav from "./components/Nav.jsx";
import HeroSection from "./sections/HeroSection.jsx";
import AboutSection from "./sections/AboutSection.jsx";
import ProjectsSection from "./sections/ProjectsSection.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import ContactSection from "./sections/ContactSection.jsx";

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!ready) return;
    const canvas = document.getElementById("bg-canvas");
    if (!canvas || canvas.dataset.started === "1") return;
    canvas.dataset.started = "1";
    const stop = startFluid(canvas);
    return stop;
  }, [ready]);

  useEffect(() => {
    if (!ready) return;
    const dimmer = document.getElementById("bg-dimmer");
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const heroEnd = document.querySelector(".hero-pin-spacer")?.offsetHeight || 0;
        const fadeRange = window.innerHeight * 0.8;
        const past = window.scrollY - (heroEnd - window.innerHeight);
        const t = Math.min(Math.max(past / fadeRange, 0), 1);
        if (dimmer) dimmer.style.opacity = String(t * 0.62);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ready]);

  return (
    <div className="app">
      <Cursor />
      <Grain />
      <div className="scanline-overlay" />
      <IntroAnimation onDone={() => setReady(true)} />

      <canvas
        id="bg-canvas"
        style={{
          opacity: ready ? 1 : 0,
          transition: "opacity 1s ease",
        }}
      />
      <div id="bg-dimmer" style={{ opacity: 0 }} />

      <div style={{
        position: "relative",
        zIndex: 1,
        opacity: ready ? 1 : 0,
        transition: "opacity 0.6s ease 0.15s",
        pointerEvents: ready ? "all" : "none",
      }}>
        <Nav />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </div>
  );
}
