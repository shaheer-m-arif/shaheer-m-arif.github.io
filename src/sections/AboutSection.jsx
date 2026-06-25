import React, { useRef } from "react";
import { useReveal } from "../lib/useReveal.js";

const SKILLS = [
  "C", "Python", "JavaScript", "Java", "SystemVerilog", "MATLAB", "SQL",
  "React", "React Native", "Node.js", "Express", "SwiftUI", "Axios",
  "Git", "Vite", "Docker", "Claude API", "Termux", "STM32", "AVR128DB28",
  "Arduino", "I2C", "SPI", "UART", "RF Telemetry", "Vivado", "LTspice", "Multisim",
];

const FACTS = [
  "Born and raised in Jeddah, Saudi Arabia, now based in Calgary, AB.",
  "Fluent in Arabic, English, and Urdu.",
  "Grew up taking apart electronics before I knew what a resistor was.",
  "Third culture kid: Middle Eastern upbringing, South Asian roots, Western education.",
];

export default function AboutSection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="section-num">01 / ABOUT</div>
            <h2 className="section-title">About</h2>
          </div>
        </div>

        <div className="about-grid">
          <div className="about-bio reveal">
            <p>
              I'm Shaheer — a fourth-year Electrical Engineering student at the
              University of Calgary (Schulich School of Engineering), building
              real systems instead of just studying them.
            </p>
            <p>
              My work lives at the intersection of hardware and software:{" "}
              <strong>C firmware on STM32 and AVR microcontrollers</strong>,
              custom PCB design, RF telemetry links, and sensor integration on
              one side; <strong>React Native, Node.js backends</strong>, and AI
              tools built on the Claude API on the other. I ship the whole
              stack, from copper traces to production deploys.
            </p>
            <p>
              Outside the lab I'm building two companies.{" "}
              <strong>VaultTen</strong> is the banking infrastructure Canadian
              fintechs have been missing — a Banking-as-a-Service platform
              that lets them issue cards and move money without building a
              bank from scratch, and I'm building it end-to-end as co-founder
              and CEO. <strong>SHAX</strong> is the longer bet: a personal AI
              operating system that runs my life instead of waiting to be
              asked — and it already does.
            </p>

            <div className="facts-list">
              {FACTS.map((f, i) => (
                <div className="fact-row" key={i}>
                  <div className="fi">{String(i + 1).padStart(2, "0")}</div>
                  <div className="ft">{f}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-panel reveal">
            <div className="eyebrow">Stack</div>
            <div className="skills-tags">
              {SKILLS.map((s) => (
                <span className="skill-tag" key={s}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
