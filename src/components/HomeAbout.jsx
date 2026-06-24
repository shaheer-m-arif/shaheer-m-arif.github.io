import React from "react";

const SKILLS = [
  { label: "Languages",            items: ["C", "Python", "JavaScript", "Java", "SystemVerilog", "MATLAB", "SQL"] },
  { label: "Frameworks",           items: ["React", "React Native", "Node.js", "Express", "SwiftUI", "Axios"] },
  { label: "Tools",                items: ["Git", "Vite", "Docker", "Heroku", "Postman", "Termux", "Claude API"] },
  { label: "Hardware & Embedded",  items: ["STM32", "AVR128DB28", "Arduino", "Raspberry Pi", "I2C", "SPI", "UART", "PWM", "RF Telemetry", "Vivado", "LTspice"] },
];

const FACTS = [
  "Born and raised in Jeddah, Saudi Arabia, now based in Calgary, AB.",
  "I speak Arabic, English, and Urdu.",
  "Grew up fascinated by how things work, especially cars and consumer electronics. That curiosity has never left.",
  "Third culture kid: Middle Eastern upbringing, South Asian roots, Western education.",
];

export default function HomeAbout() {
  return (
    <section id="about" className="about-section">
      <div className="bento-grid">

        {/* WHO I AM */}
        <div className="bento-tile tile-about card">
          <span className="tile-label">Who I am</span>
          <p className="tile-text">
            I'm Shaheer, a fourth-year Electrical Engineering student at the
            University of Calgary (Schulich School of Engineering).
          </p>
          <p className="tile-text">
            My work sits at the intersection of hardware and software. On the
            hardware side: C firmware on STM32 and AVR microcontrollers, PCB
            design, RF telemetry links, and sensor integration from scratch. On
            the software side: React Native mobile apps, Node.js backends, and
            AI tools built on the Claude API.
          </p>
          <p className="tile-text">
            Outside the lab I run two personal ventures.{" "}
            <strong>VaultTen</strong> is a pre-revenue fintech startup I
            co-founded to fix personal finance for Canadian users.{" "}
            <strong>SHAX</strong> is a longer-term project to build a real AI
            operating system, one that knows your full context and manages your
            life without being asked.
          </p>
          <p className="tile-footer">
            Feel free to look around and explore. I would love to get in touch.
          </p>
        </div>

        {/* COMING UP */}
        <div className="bento-tile tile-status card">
          <span className="tile-pill">Coming up</span>
          <h3 className="tile-company">Cenovus Energy</h3>
          <p className="tile-text">
            12-month SCADA and Leak Detection co-op in Lloydminster, working in
            upstream oil and gas on pipeline monitoring and real-time control
            infrastructure.
          </p>
          <div className="tile-date-badge">Sep 2026 – Sep 2027</div>
        </div>

        {/* SKILLS */}
        <div className="bento-tile tile-skills card">
          <span className="tile-label">Skills</span>
          <div className="skill-groups">
            {SKILLS.map((group) => (
              <div key={group.label} className="skill-group">
                <div className="skill-group-label">{group.label}</div>
                <div className="skill-chips">
                  {group.items.map((s) => (
                    <span key={s} className="skill-chip">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FACTS */}
        <div className="bento-tile tile-facts card">
          <span className="tile-label">Facts about me</span>
          <ul className="facts-list">
            {FACTS.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>

      </div>

      <style>{`
        .about-section {
          padding-bottom: 80px;
        }

        .bento-grid {
          width: min(1000px, 90%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          grid-template-rows: auto auto;
          gap: 14px;
        }

        .tile-about  { grid-column: 1; grid-row: 1; }
        .tile-status { grid-column: 2; grid-row: 1; }
        .tile-skills { grid-column: 1; grid-row: 2; }
        .tile-facts  { grid-column: 2; grid-row: 2; }

        .bento-tile {
          padding: 28px;
        }

        /* tile label */
        .tile-label {
          display: block;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #38bdf8;
          margin-bottom: 16px;
        }

        /* body text */
        .tile-text {
          margin: 0 0 14px;
          font-size: 14.5px;
          line-height: 1.72;
          color: rgba(220, 228, 248, 0.88);
        }
        .tile-text:last-of-type { margin-bottom: 0; }
        .tile-text strong { color: rgba(238, 242, 255, 0.98); font-weight: 700; }

        .tile-footer {
          margin-top: 20px;
          font-size: 13.5px;
          font-style: italic;
          color: rgba(108, 125, 168, 0.65);
        }

        /* coming up tile */
        .tile-pill {
          display: inline-block;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #818cf8;
          margin-bottom: 12px;
        }

        .tile-company {
          margin: 0 0 12px;
          font-size: 20px;
          font-weight: 800;
          letter-spacing: -0.01em;
          color: rgba(238, 242, 255, 0.96);
        }

        .tile-date-badge {
          display: inline-flex;
          margin-top: 18px;
          padding: 5px 12px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 600;
          color: rgba(165, 178, 210, 0.82);
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.04);
        }

        /* skills */
        .skill-groups {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .skill-group-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(108, 125, 168, 0.75);
          margin-bottom: 8px;
        }

        .skill-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .skill-chip {
          display: inline-flex;
          align-items: center;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 12.5px;
          font-weight: 500;
          color: rgba(165, 178, 210, 0.9);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
        }

        /* facts */
        .facts-list {
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .facts-list li {
          font-size: 14.5px;
          line-height: 1.65;
          color: rgba(220, 228, 248, 0.88);
          padding-left: 16px;
          position: relative;
        }

        .facts-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 9px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #38bdf8;
          opacity: 0.7;
        }

        @media (max-width: 700px) {
          .bento-grid { grid-template-columns: 1fr; }
          .tile-about, .tile-status, .tile-skills, .tile-facts {
            grid-column: 1;
            grid-row: auto;
          }
        }
      `}</style>
    </section>
  );
}
