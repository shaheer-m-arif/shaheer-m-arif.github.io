import React, { useEffect, useRef } from "react";

const SKILLS = [
  "C", "Python", "JavaScript", "Java", "SystemVerilog", "MATLAB", "SQL",
  "React", "React Native", "Node.js", "Express", "SwiftUI", "Axios",
  "Git", "Vite", "Docker", "Claude API", "Termux",
  "STM32", "AVR128DB28", "Arduino", "I2C", "SPI", "UART", "RF Telemetry", "Vivado", "LTspice",
];

const STATS = [
  { value: "4th", label: "Year EE" },
  { value: "3", label: "Co-op Terms" },
  { value: "2", label: "PCBs Designed" },
  { value: "2", label: "FPGAs Programmed" },
];

const FACTS = [
  "Born and raised in Jeddah, Saudi Arabia, now based in Calgary, AB.",
  "Fluent in Arabic, English, and Urdu.",
  "Grew up taking apart electronics before I knew what a resistor was.",
  "Third culture kid: Middle Eastern upbringing, South Asian roots, Western education.",
];

export default function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} style={{
      minHeight: "100vh",
      padding: "120px 8vw",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* "EE" watermark behind everything */}
      <div style={{
        position: "absolute",
        right: "-8%",
        top: "50%",
        transform: "translateY(-50%)",
        fontSize: "clamp(280px, 40vw, 560px)",
        fontWeight: 900,
        letterSpacing: "-0.08em",
        color: "transparent",
        WebkitTextStroke: "1px rgba(212,240,80,0.055)",
        pointerEvents: "none",
        lineHeight: 1,
        userSelect: "none",
        zIndex: 0,
      }}>
        EE
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="reveal" style={{
          fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase",
          color: "#d4f050", marginBottom: "64px",
          display: "flex", alignItems: "center", gap: "12px",
        }}>
          <span style={{ width: "32px", height: "1px", background: "#d4f050", display: "inline-block" }} />
          About
        </div>

        {/* Stats row — big numbers */}
        <div className="reveal" style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          maxWidth: "900px",
          marginBottom: "80px",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          borderLeft: "1px solid rgba(255,255,255,0.07)",
          transitionDelay: "40ms",
        }}>
          {STATS.map(({ value, label }) => (
            <div key={label} style={{
              padding: "32px 24px",
              borderRight: "1px solid rgba(255,255,255,0.07)",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}>
              <div style={{
                fontSize: "clamp(40px, 5.5vw, 72px)",
                fontWeight: 900,
                color: "#d4f050",
                letterSpacing: "-0.04em",
                lineHeight: 1,
                marginBottom: "10px",
              }}>
                {value}
              </div>
              <div style={{
                fontSize: "11.5px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
              }}>
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Bio + Facts */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr",
          gap: "80px",
          maxWidth: "1100px",
          marginBottom: "100px",
        }}>
          <div className="reveal" style={{ transitionDelay: "80ms" }}>
            <p style={{
              fontSize: "clamp(15px, 1.6vw, 18px)",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.72)",
              marginBottom: "28px",
            }}>
              I'm Shaheer — a fourth-year Electrical Engineering student at the
              University of Calgary (Schulich School of Engineering).
            </p>
            <p style={{
              fontSize: "clamp(15px, 1.6vw, 18px)",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.72)",
              marginBottom: "28px",
            }}>
              My work sits at the intersection of hardware and software. C firmware
              on STM32 and AVR microcontrollers, custom PCB design, RF telemetry links,
              and sensor integration on one side. React Native, Node.js backends, and AI
              tools built on the Claude API on the other.
            </p>
            <p style={{
              fontSize: "clamp(15px, 1.6vw, 18px)",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.72)",
            }}>
              Outside the lab I run two ventures.{" "}
              <span style={{ color: "#fff", fontWeight: 600 }}>VaultTen</span> is a
              fintech startup I co-founded to build the financial layer Canadian banks
              never shipped.{" "}
              <span style={{ color: "#fff", fontWeight: 600 }}>SHAX</span> is a
              longer-term project to build a real AI operating system that manages your
              life without being asked.
            </p>
          </div>

          <div className="reveal" style={{ transitionDelay: "140ms" }}>
            <div style={{
              fontSize: "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
              marginBottom: "28px",
            }}>
              Facts
            </div>
            <ol style={{ counterReset: "fact", display: "flex", flexDirection: "column", gap: "20px" }}>
              {FACTS.map((f, i) => (
                <li key={i} style={{
                  display: "grid",
                  gridTemplateColumns: "28px 1fr",
                  gap: "12px",
                  alignItems: "start",
                }}>
                  <span style={{
                    fontSize: "11px",
                    color: "#d4f050",
                    fontWeight: 700,
                    paddingTop: "2px",
                    opacity: 0.7,
                  }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{
                    fontSize: "14.5px",
                    lineHeight: 1.65,
                    color: "rgba(255,255,255,0.65)",
                  }}>
                    {f}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Skills marquee */}
        <div className="reveal" style={{ transitionDelay: "200ms" }}>
          <div style={{
            fontSize: "11px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
            marginBottom: "20px",
          }}>
            Skills
          </div>
          <div style={{
            overflow: "hidden",
            maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}>
            <div style={{
              display: "flex",
              gap: "32px",
              animation: "marquee 28s linear infinite",
              width: "max-content",
            }}>
              {[...SKILLS, ...SKILLS].map((s, i) => (
                <span key={i} style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "0.06em",
                  whiteSpace: "nowrap",
                }}>
                  {s}
                  <span style={{ marginLeft: "32px", color: "#d4f050", opacity: 0.4 }}>·</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (max-width: 900px) {
          #about .reveal > div[style*="grid-template-columns: repeat(4"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          #about > div > div[style*="1.4fr"] {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
