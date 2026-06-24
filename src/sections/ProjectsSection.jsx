import React, { useRef } from "react";
import { useReveal } from "../lib/useReveal.js";

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
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section className="section" id="projects" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="section-num">02 / WORK</div>
            <h2 className="section-title">Projects</h2>
          </div>
        </div>

        <div className="project-list">
          {PROJECTS.map((p, i) => (
            <div className="project-row reveal" key={p.title} data-hover>
              <div className="project-idx">{String(i + 1).padStart(2, "0")}</div>
              <div className="project-main">
                <h3>
                  {p.title} <span className="yr">({p.year})</span>
                </h3>
                <div className="project-role">{p.role}</div>
                <p className="project-desc">{p.desc}</p>
              </div>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="projects-note reveal">
          Not all projects shown here are available for public viewing. Some
          are under IP agreements or work-product arrangements. I'm working on
          releasing everything I can. Reach out if you want to know more about
          a specific one.
        </div>
      </div>
    </section>
  );
}
