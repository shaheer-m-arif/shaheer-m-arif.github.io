import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ChipGraphic from "../components/ChipGraphic.jsx";

gsap.registerPlugin(ScrollTrigger);

const STRIP_ITEMS = [
  "STM32F4", "AVR128DB28", "433MHz RF", "PCB Layout", "UART", "SPI", "I2C",
  "SystemVerilog", "Basys3 FPGA", "C Firmware", "LTspice", "RF Telemetry",
  "Claude API", "React Native", "Node.js", "SwiftUI", "Plaid API",
];

export default function HeroSection() {
  const stageRef = useRef(null);
  const chipRef = useRef(null);
  const metaRef = useRef(null);
  const nameRef = useRef(null);
  const cueRef = useRef(null);
  const stripRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      gsap.set(chipRef.current, { scale: 1 });
      gsap.set([metaRef.current, nameRef.current, stripRef.current], { opacity: 1 });
      gsap.set(cueRef.current, { opacity: 1 });
      return;
    }

    gsap.set(chipRef.current, { scale: 6.2 });
    gsap.set(metaRef.current, { opacity: 0, y: -12 });
    gsap.set(nameRef.current, { opacity: 0, y: 28 });
    gsap.set(cueRef.current, { opacity: 1 });
    gsap.set(stripRef.current, { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: stageRef.current.parentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.4,
      },
    });

    tl.to(chipRef.current, { scale: 1.65, ease: "none", duration: 0.4 }, 0)
      .to(metaRef.current, { opacity: 1, y: 0, ease: "none", duration: 0.15 }, 0.05)
      .to(cueRef.current, { opacity: 0, ease: "none", duration: 0.1 }, 0.06)
      .to(chipRef.current, { scale: 0.34, ease: "none", duration: 0.34 }, 0.4)
      .to(nameRef.current, { opacity: 1, y: 0, ease: "none", duration: 0.2 }, 0.45)
      .to(stripRef.current, { opacity: 1, ease: "none", duration: 0.15 }, 0.85);

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section className="hero-pin-spacer" id="hero">
      <div className="hero-stage" ref={stageRef}>
        <div className="chip-wrap" ref={chipRef}>
          <ChipGraphic className="chip-svg" />
        </div>

        <div className="hero-meta-top" ref={metaRef}>
          <span>PORTFOLIO · 2026</span>
          <span>UNIVERSITY OF CALGARY — SCHULICH</span>
        </div>

        <div className="hero-name" ref={nameRef}>
          <h1>
            <span>SHAHEER</span>
            <span>ARIF</span>
          </h1>
          <div className="role">
            Electrical <b>Engineer</b> / Developer / Builder / Student
          </div>
          <div className="role" style={{ marginTop: 8 }}>
            Sep 2026 · Cenovus Energy · <b>SCADA Co-op</b>
          </div>
        </div>

        <div className="hero-scroll-cue" ref={cueRef}>
          <span>SCROLL</span>
          <div className="bar" />
        </div>

        <div className="hero-strip" ref={stripRef}>
          <div className="hero-strip-track">
            {[...STRIP_ITEMS, ...STRIP_ITEMS].map((item, i) => (
              <React.Fragment key={i}>
                <span>{item}</span>
                {i < STRIP_ITEMS.length * 2 - 1 && <span className="sep">—</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
