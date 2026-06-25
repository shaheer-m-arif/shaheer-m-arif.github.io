import React, { useRef } from "react";
import { useReveal } from "../lib/useReveal.js";

const PROJECTS = [
  {
    title: "SHAX",
    year: "2026",
    role: "Founder & Lead Developer",
    tags: ["Node.js", "Claude API", "WhatsApp", "AI OS"],
    desc: "SHAX is the personal AI operating system I'm building to actually run my life, not just answer questions about it. It already lives on a dedicated Android phone through Termux, wired into the Claude API over WhatsApp, so I can message it at 2am and it handles things on its own. I'm extending it into a full execution layer: one that holds long-running context across everything I care about, tracks goals and routines without me logging a thing, triages and schedules tasks on its own, and moves toward acting on my behalf before I ask. Version three has been running reliably for months — it's the foundation I'm building everything else on top of.",
  },
  {
    title: "VaultTen",
    year: "2026",
    role: "Co-Founder & CEO",
    tags: ["Node.js", "TypeScript", "Next.js", "PostgreSQL", "Fintech", "BaaS"],
    desc: "VaultTen is a Banking-as-a-Service platform for Canadian fintechs: companies plug into our API to run KYC, open compliant CAD spending accounts, issue Mastercard virtual cards, and settle transactions in real time against an immutable double-entry ledger, without building banking infrastructure themselves. I built the backend (Node.js, TypeScript, Fastify, PostgreSQL, Redis) and the Next.js dashboards our tenants and internal team run on, multi-tenant from day one so sandbox and live traffic never cross. What started as a pitch deck is now a deployed product on Railway and Vercel that my cofounder and I both build against, live.",
  },
  {
    title: "Environmental Monitoring RC Boat",
    year: "2025",
    role: "Documentation Lead & Systems Engineer · Third-Year Design Project",
    tags: ["C", "STM32", "RF Telemetry", "PCB Design", "Python"],
    desc: "Six of us built an unmanned boat from the ground up for a third-year systems design project. We designed the PCB, waterproofed the hull ourselves, wrote STM32 firmware to read the water quality sensors, and set up a 433 MHz RF link back to a handheld controller. The Python script on the ground side takes the live telemetry stream and plots a topographic depth map of the area. It went on water and came back with real data.",
  },
  {
    title: "FPGA Digital Systems",
    year: "2025",
    role: "Student Developer · ENEL 453",
    tags: ["SystemVerilog", "FPGA", "Basys3", "Vivado"],
    desc: "A semester of designing real digital hardware on a Xilinx Basys3 board: state machines, synchronous counters, debounce logic, seven-segment display controllers, all built bottom-up in synthesizable SystemVerilog. The bar wasn't passing a simulation, it was meeting timing constraints on real silicon — get a clock constraint wrong by even a little and the board does something unpredictable, immediately.",
  },
  {
    title: "S.H.A.R.I.F.",
    year: "2025",
    role: "Founder & Lead Developer",
    tags: ["Node.js", "Telegram", "SwiftUI", "AI"],
    desc: "Built in third year to test whether a personal AI assistant was actually worth having day to day, not just a fun demo. It ran on Telegram, sent a morning briefing before I was even awake, tracked my portfolio, and had a SwiftUI companion app on iOS. I kept it running for over a year before retiring it in favour of SHAX — proof the idea worked, and the seed for everything I'm building now.",
  },
  {
    title: "Glorek Mobile App",
    year: "2025",
    role: "Lead Mobile Developer",
    tags: ["React Native", "Node.js", "OTP Auth", "Axios"],
    desc: "Built and shipped the iOS and Android apps for Glorek's field service platform during my internship — two distinct apps, one for clients and one for technicians, covering OTP auth, service ordering, job status tracking, and payment processing end to end. Every API call ran through Axios against the Node.js backend I coordinated with directly. I owned the mobile side from the first screen to real people using it on their phones.",
  },
  {
    title: "Z-Transform Teaching Package",
    year: "2025",
    role: "Author · ENEL 327",
    tags: ["Signals and Systems", "SymPy", "LaTeX", "DSP"],
    desc: "The official ENEL 327 course notes had almost nothing useful on Z-transforms for practice, so I wrote the resource I wished existed: full theory, region of convergence, every property, three inverse methods worked from scratch, and real signal-processing examples with complete solutions. I verified every answer in SymPy and typeset the whole thing in LaTeX. My professor liked it enough to hand it out to the entire class.",
  },
  {
    title: "RC Car",
    year: "2025",
    role: "Programming Lead · ENEL 300",
    tags: ["C", "AVR128DB28", "433 MHz RF", "Ultrasonic"],
    desc: "Bare-metal C on an AVR128DB28 — no RTOS, no HAL, nothing between me and the hardware. I wrote interrupt handlers for the RF receiver, timer-based PWM for steering and throttle, an HC-SR04 driver for obstacle detection out to about a metre, and a display driver for the onboard LCD, all routed onto a PCB tight enough to fit inside the car body. It drove, and it stopped before hitting things — exactly the brief.",
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
