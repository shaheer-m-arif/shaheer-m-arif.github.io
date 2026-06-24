import React, { useRef } from "react";
import { useReveal } from "../lib/useReveal.js";

const SKILLS = [
  "C", "Python", "JavaScript", "Java", "SystemVerilog", "MATLAB", "SQL",
  "React", "React Native", "Node.js", "Express", "SwiftUI", "Axios",
  "Git", "Vite", "Docker", "Claude API", "Termux", "STM32", "AVR128DB28",
  "Arduino", "I2C", "SPI", "UART", "RF Telemetry", "Vivado", "LTspice",
];

const STATS = [
  { num: "4th", label: "Year EE" },
  { num: "3", label: "Co-op Terms" },
  { num: "2", label: "PCBs Designed" },
  { num: "2", label: "FPGAs Programmed" },
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

        <div className="stat-row reveal">
          {STATS.map((s) => (
            <div className="stat-cell" key={s.label}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="about-grid">
          <div className="about-bio reveal">
            <p>
              I'm Shaheer — a fourth-year Electrical Engineering student at the
              University of Calgary (Schulich School of Engineering).
            </p>
            <p>
              My work sits at the intersection of hardware and software.{" "}
              <strong>C firmware on STM32 and AVR microcontrollers</strong>,
              custom PCB design, RF telemetry links, and sensor integration on
              one side. <strong>React Native, Node.js backends</strong>, and AI
              tools built on the Claude API on the other.
            </p>
            <p>
              Outside the lab I run two ventures.{" "}
              <strong>VaultTen</strong> is a fintech startup I co-founded to
              build the financial layer Canadian banks never shipped.{" "}
              <strong>SHAX</strong> is a longer-term project to build a real AI
              operating system that manages your life without being asked.
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
