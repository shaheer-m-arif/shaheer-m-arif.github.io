import React, { useEffect, useState } from "react";
import { startParticles } from "./lib/particles.js";
import Cursor from "./components/Cursor.jsx";
import Grain from "./components/Grain.jsx";
import IntroAnimation from "./components/IntroAnimation.jsx";
import DotNav from "./components/DotNav.jsx";
import HeroSection from "./sections/HeroSection.jsx";
import AboutSection from "./sections/AboutSection.jsx";
import ProjectsSection from "./sections/ProjectsSection.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import ContactSection from "./sections/ContactSection.jsx";

export default function App() {
  const [ready, setReady] = useState(false);

  // Start particles only after intro finishes
  useEffect(() => {
    if (!ready) return;
    const canvas = document.getElementById("particle-canvas");
    if (!canvas || canvas.dataset.started === "1") return;
    canvas.dataset.started = "1";
    const stop = startParticles(canvas);
    return stop;
  }, [ready]);

  return (
    <div style={{ position: "relative" }}>
      <Cursor />
      <Grain />
      <IntroAnimation onDone={() => setReady(true)} />

      <canvas
        id="particle-canvas"
        style={{
          opacity: ready ? 1 : 0,
          transition: "opacity 0.8s ease",
        }}
      />

      <div style={{
        opacity: ready ? 1 : 0,
        transition: "opacity 0.6s ease 0.15s",
        pointerEvents: ready ? "all" : "none",
      }}>
        <DotNav />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </div>
  );
}
