import React, { useEffect, useRef, useState } from "react";

const PROJECTS = [
  {
    title: "SHAX",
    year: "2026",
    role: "Founder & Lead Developer",
    tags: ["Node.js", "Claude API", "WhatsApp", "AI OS"],
    desc: "The idea came from realising I spent more time managing context and tasks than actually doing them. It runs 24/7 on a dedicated Android phone through Termux, connected to the Claude API over WhatsApp. I can message it at 2am and it handles whatever I need. The longer goal is building something that knows my routines, tracks what I care about, and acts before I ask. Version three has been running reliably for months. Still building.",
  },
  {
    title: "VaultTen",
    year: "2026",
    role: "Co-Founder & CEO",
    tags: ["Swift", "SwiftUI", "Plaid API", "Fintech"],
    desc: "Every Canadian personal finance app I tried was either broken, discontinued, or missing features Mint had in 2010. So we built our own. Plaid connects to your actual bank accounts through open banking and pulls every transaction. The SwiftUI dashboard updates your net worth in real time with everything categorised. We use it ourselves and it works. Pre-revenue, but the product is real.",
  },
  {
    title: "Environmental Monitoring RC Boat",
    year: "2026",
    role: "Documentation Lead & Systems Engineer · ENEL 400",
    tags: ["C", "STM32", "RF Telemetry", "PCB Design", "Python"],
    desc: "Six of us built an unmanned boat from the ground up for our fourth-year capstone. We designed the PCB, waterproofed the hull ourselves, wrote STM32 firmware to read the water quality sensors, and set up a 433 MHz RF link back to a handheld controller. The Python script on the ground side takes the telemetry stream and plots a topographic depth map of the area. It went on water and came back with data.",
  },
  {
    title: "FPGA Digital Systems",
    year: "2025",
    role: "Student Developer · ENEL 453",
    tags: ["SystemVerilog", "FPGA", "Basys3", "Vivado"],
    desc: "A semester of designing real digital hardware on a Xilinx Basys3 board. State machines, synchronous counters, debounce logic, seven-segment display controllers. The discipline was writing clean synthesisable SystemVerilog and actually meeting timing constraints on real silicon, not just passing simulation. If your clock constraints were off by even a little, the board would do unpredictable things.",
  },
  {
    title: "S.H.A.R.I.F.",
    year: "2025",
    role: "Founder & Lead Developer",
    tags: ["Node.js", "Telegram", "SwiftUI", "AI"],
    desc: "Built during third year to see whether a personal AI assistant was actually worth having day to day. It ran on Telegram, sent a morning briefing before I was awake, tracked my portfolio, and had an iOS companion app in SwiftUI. I kept it running for over a year before moving on to SHAX. The core question it answered was yes, this is genuinely useful.",
  },
  {
    title: "Glorek Mobile App",
    year: "2025",
    role: "Lead Mobile Developer",
    tags: ["React Native", "Node.js", "OTP Auth", "Axios"],
    desc: "Built the iOS and Android apps for Glorek's field service platform during my internship. Two separate apps, one for clients and one for technicians, with login and OTP flows, service ordering, job status tracking, and payment processing. All API calls went through Axios against the Node.js backend. I owned the mobile side from the first screen to the app being on people's phones.",
  },
  {
    title: "Z-Transform Teaching Package",
    year: "2025",
    role: "Author · ENEL 327",
    tags: ["Signals and Systems", "SymPy", "LaTeX", "DSP"],
    desc: "The course notes for ENEL 327 had almost nothing useful on Z-transforms for practice. I put together a full package: theory, region of convergence, all the properties, three inverse methods worked through from scratch, and real signal processing examples with complete solutions. I used SymPy to double-check every answer and typeset the whole thing in LaTeX. My professor ended up distributing it to the class.",
  },
  {
    title: "RC Car",
    year: "2025",
    role: "Programming Lead · ENEL 300",
    tags: ["C", "AVR128DB28", "433 MHz RF", "Ultrasonic"],
    desc: "Bare-metal C on an AVR128DB28. No RTOS, no HAL. I wrote interrupt handlers for the RF receiver, timer-based PWM for steering and throttle, an HC-SR04 driver for obstacle detection at up to about a metre, and a display driver for a small LCD. The PCB had to fit inside the car body which meant tight routing. It drove and stopped before hitting things.",
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.05 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} style={{ padding: "120px 8vw", minHeight: "100vh" }}>

      <div className="reveal" style={{
        fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase",
        color: "#d4f050", marginBottom: "64px",
        display: "flex", alignItems: "center", gap: "12px",
      }}>
        <span style={{ width: "32px", height: "1px", background: "#d4f050", display: "inline-block" }} />
        Projects
      </div>

      <div style={{ maxWidth: "900px" }}>
        {PROJECTS.map((p, i) => (
          <div
            key={p.title}
            className="reveal"
            style={{ transitionDelay: `${i * 45}ms` }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div style={{
              display: "grid",
              gridTemplateColumns: "56px 1fr auto",
              alignItems: "center",
              gap: "24px",
              padding: "22px 0",
              borderTop: `1px solid ${hovered === i ? "rgba(212,240,80,0.15)" : "rgba(255,255,255,0.06)"}`,
              cursor: "default",
              transition: "border-color 0.2s",
            }}>
              <span style={{
                fontSize: "12px", fontWeight: 700,
                color: hovered === i ? "rgba(212,240,80,0.8)" : "rgba(212,240,80,0.4)",
                letterSpacing: "0.06em",
                transition: "color 0.2s",
              }}>
                {String(i + 1).padStart(2, "0")}
              </span>

              <div>
                <div style={{
                  fontSize: "clamp(16px, 2vw, 20px)",
                  fontWeight: 700,
                  color: hovered === i ? "#d4f050" : "#fff",
                  transition: "color 0.2s",
                  marginBottom: "4px",
                }}>
                  {p.title}
                </div>
                <div style={{ fontSize: "12.5px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.02em" }}>
                  {p.role}
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.28)" }}>{p.year}</span>
                <span style={{
                  fontSize: "16px",
                  color: hovered === i ? "#d4f050" : "rgba(255,255,255,0.25)",
                  transition: "all 0.25s ease",
                  transform: hovered === i ? "rotate(45deg)" : "none",
                  display: "inline-block",
                }}>+</span>
              </div>
            </div>

            <div style={{
              maxHeight: hovered === i ? "280px" : "0",
              overflow: "hidden",
              transition: "max-height 0.4s cubic-bezier(0.16,1,0.3,1)",
            }}>
              <div style={{ padding: "4px 0 28px 80px" }}>
                <p style={{
                  fontSize: "14.5px",
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.58)",
                  marginBottom: "16px",
                  maxWidth: "600px",
                }}>
                  {p.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {p.tags.map((t) => (
                    <span key={t} style={{
                      fontSize: "11.5px",
                      letterSpacing: "0.06em",
                      padding: "4px 10px",
                      border: "1px solid rgba(212,240,80,0.25)",
                      borderRadius: "4px",
                      color: "rgba(212,240,80,0.75)",
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />
      </div>
    </section>
  );
}
