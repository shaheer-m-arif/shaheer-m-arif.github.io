import React, { useEffect } from "react";

const PROJECTS = [
  {
    title: "SHAX",
    role: "Founder & Lead Developer",
    dates: "May 2026 – Present",
    successor: "Successor to S.H.A.R.I.F.",
    description:
      "SHAX is a long-term personal mission to build a true AI operating system: one intelligent layer that knows everything about you and runs your life autonomously. Not a chatbot. Not an assistant app. An ambient AI that operates 24/7, owns your full context, and acts without being asked.",
    highlights: [
      "The vision: a personal AI OS with deep integrations across calendar, health, finances, communications, and everything else you care about, proactively managing all of it.",
      "Today: runs always-on on a dedicated Android device via Termux, connected to the Claude API over WhatsApp. Zero install, zero friction, always there.",
      "Handles daily briefings, stock and weather updates, schedule management, and open-ended queries through natural conversation.",
      "Built on a Node.js backend with Claude API for reasoning, multi-turn memory, and intent routing.",
      "WhatsApp is the first terminal. The goal is an ambient AI presence across every surface.",
    ],
    tags: ["Node.js", "Claude API", "WhatsApp", "Termux", "Android", "Automation", "AI Systems"],
    href: "",
  },
  {
    title: "VaultTen",
    role: "Co-Founder & CEO",
    dates: "Mar 2026 – Present",
    description:
      "Pre-revenue fintech startup building the financial layer Canadian retail banks never built for their users. VaultTen aggregates accounts across institutions via Plaid, tracks every transaction, and surfaces a real-time net worth dashboard in a clean SwiftUI interface.",
    highlights: [
      "Integrated Plaid API for Canadian multi-bank account aggregation and real-time transaction syncing.",
      "SwiftUI net worth dashboard with account balances, spending breakdowns, and financial trend tracking.",
      "Secure OAuth flow and encrypted token storage for multi-institution account linking.",
      "Building toward a full personal finance intelligence platform for Canadian users.",
    ],
    tags: ["Swift", "SwiftUI", "Plaid API", "iOS", "Fintech", "Startup"],
    href: "",
  },
  {
    title: "Environmental Monitoring RC Boat",
    role: "Documentation Lead & Systems Engineer",
    dates: "Jan 2026 – Apr 2026",
    org: "ENEL 400",
    description:
      "6-person capstone project to design, build, and field-test an unmanned surveying RC boat for freshwater environmental monitoring. Full hardware-software-mechanical integration from scratch: STM32-based data acquisition, custom PCB, waterproofed hull, and a handheld RF controller that receives and displays live sensor data.",
    highlights: [
      "Led all engineering documentation and technical reports across the full project lifecycle.",
      "STM32 microcontroller firmware for real-time acquisition of pH, temperature, turbidity, and underwater depth.",
      "RF telemetry link between boat and custom handheld controller; controller post-processes and exports depth data as topographic graphs.",
      "Contributed to hull selection, waterproofing strategy, and physical sensor mounting integration.",
      "System validated in controlled pool testing and open freshwater field conditions.",
    ],
    tags: ["C", "STM32", "Embedded Systems", "RF Telemetry", "PCB Design", "Sensor Integration", "Python"],
    href: "",
  },
  {
    title: "FPGA Digital Systems Projects",
    role: "Student Developer",
    dates: "Sep 2025 – Dec 2025",
    org: "ENEL 453",
    description:
      "Built and verified multiple FPGA modules on the Basys3 platform, focusing on clean RTL design, testability, and practical digital-system integration.",
    highlights: [
      "Implemented common digital subsystems (state machines, counters, debouncers, timing logic) and integrated them into working lab demos.",
      "Wrote SystemVerilog modules with clear interfaces and reusable components.",
      "Verified behavior using simulation testbenches and on-hardware validation on Basys3.",
    ],
    tags: ["SystemVerilog", "FPGA", "Basys3", "Vivado", "Digital Design"],
    href: "",
  },
  {
    title: "S.H.A.R.I.F.",
    role: "Founder & Lead Developer",
    dates: "Jun 2025 – May 2026",
    predecessor: "Evolved into SHAX",
    description:
      "S.H.A.R.I.F. (Shaheer's Highly Advanced Ridiculously Intelligent Framework) was the first version of the personal AI assistant project, inspired by Iron Man's J.A.R.V.I.S. Built around a Telegram bot core, it proved the concept that a personal AI could run usefully in the background of daily life.",
    highlights: [
      "Phase 1: Deployed a Telegram bot delivering daily weather, stock, and news briefings.",
      "Phase 2: Added hourly stock updates, academic schedule integration, and assessment reminders.",
      "Phase 3: Built an iOS dashboard in SwiftUI with chat functionality, calendar widgets via .ics, and portfolio views.",
      "Validated the core thesis: ambient AI context over a messaging interface is more useful than a dedicated app.",
      "Succeeded by SHAX, which carries the vision forward as a full AI OS.",
    ],
    tags: ["Node.js", "Telegram Bot API", "Automation", "SwiftUI", "iOS", "AI Systems"],
    href: "",
  },
  {
    title: "Glorek Client Mobile App",
    role: "Lead Mobile Developer",
    dates: "May 2025 – Sep 2025",
    org: "Glorek International Company",
    description:
      "Led development of a facility management platform (client + technician mobile apps plus a web dashboard) designed to manage B2C interactions, job workflows, and service bookings through a unified digital system.",
    highlights: [
      "Built a secure authentication system with login, OTP verification, and signup flows.",
      "Developed React Native mobile apps with reusable UI components and consistent theming (glass-like iOS-style UI).",
      "Implemented profile management and a scalable navigation architecture for future feature growth.",
      "Integrated Axios-based API calls for service ordering, job status updates, and payment flows via external gateways.",
      "Coordinated a Node.js backend + React web frontend for admin/client views and role-based workflows.",
    ],
    tags: ["React Native", "JavaScript", "Axios", "OTP Auth", "Node.js", "React"],
    href: "",
  },
  {
    title: "Z-Transform Teaching Project",
    role: "Author",
    dates: "Apr 2025",
    org: "ENEL 327",
    description:
      "Created a full teaching and worksheet package covering Z-transform theory, region of convergence (ROC), properties, inverse methods, and real-world applications with step-by-step solutions.",
    highlights: [
      "Explained ROC intuition, stability/causality connections, and common transforms.",
      "Built multiple inverse Z-transform approaches (partial fractions, power series, long division).",
      "Structured concept checks, problems, and full worked solutions for study and instruction.",
    ],
    tags: ["Signals", "Z-Transform", "Math", "Teaching", "Sympy"],
    href: "",
  },
  {
    title: "RC Car",
    role: "Programming Lead & Hardware Integration Lead",
    dates: "Jan 2025 – Apr 2025",
    org: "ENEL 300",
    description:
      "Final project for ENEL 300 involving the design and implementation of a remote-controlled vehicle with wireless control, obstacle detection, and real-time feedback.",
    highlights: [
      "Programmed the AVR128DB28 microcontroller in C for motor control, servo-based steering, ultrasonic sensing, and LCD feedback.",
      "Established wireless communication using a 433 MHz RF transmitter/receiver pair.",
      "Assisted in PCB design and system integration, later adapting to a hardwired breadboard setup after PCB failure.",
      "Delivered a fully functional RC car capable of obstacle detection up to 1 m and real-time distance display.",
    ],
    tags: ["C", "AVR128DB28", "Embedded Systems", "433 MHz RF", "Ultrasonic Sensors", "PCB Design"],
    href: "",
  },
];

export default function Projects() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((ent) => {
          if (ent.isIntersecting) { ent.target.classList.add("in"); io.unobserve(ent.target); }
        });
      },
      { threshold: 0.08 }
    );
    const t = setTimeout(() => {
      document.querySelectorAll("#projects .card").forEach((el) => {
        el.classList.remove("in");
        io.observe(el);
      });
    }, 0);
    return () => { clearTimeout(t); io.disconnect(); };
  }, []);

  return (
    <main className="container" id="projects">
      <h1 className="page-heading">Projects</h1>

      <div className="proj-grid">
        {PROJECTS.map((p, idx) => (
          <article
            key={p.title}
            className="proj-card card"
            style={{ transitionDelay: `${idx * 80}ms` }}
          >
            <div className="proj-num">{String(idx + 1).padStart(2, "0")}</div>

            <header className="proj-header">
              <div className="proj-title-row">
                {p.href ? (
                  <a className="proj-title-link" href={p.href} target="_blank" rel="noreferrer">
                    <h2 className="proj-title">{p.title} <span className="proj-ext">↗</span></h2>
                  </a>
                ) : (
                  <h2 className="proj-title">{p.title}</h2>
                )}
                <div className="proj-badges">
                  {p.successor && <span className="lineage-badge badge-succ">{p.successor} ↓</span>}
                  {p.predecessor && <span className="lineage-badge badge-pred">↑ {p.predecessor}</span>}
                </div>
              </div>

              <div className="proj-meta">
                {p.role && <span className="proj-role">{p.role}</span>}
                {p.dates && <span className="proj-dates">{p.dates}</span>}
                {p.org && <span className="proj-org">{p.org}</span>}
              </div>
            </header>

            <p className="proj-desc">{p.description}</p>

            {p.highlights?.length > 0 && (
              <ul className="proj-bullets">
                {p.highlights.map((h) => <li key={h}>{h}</li>)}
              </ul>
            )}

            {p.tags?.length > 0 && (
              <div className="proj-tags">
                {p.tags.map((t) => <span key={t} className="proj-tag">{t}</span>)}
              </div>
            )}
          </article>
        ))}
      </div>

      <style>{`
        .proj-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          max-width: 860px;
        }

        .proj-card {
          padding: 26px 28px;
          position: relative;
        }

        .proj-num {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: rgba(56,189,248,0.5);
          margin-bottom: 10px;
        }

        .proj-header { margin-bottom: 10px; }

        .proj-title-row {
          display: flex;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 8px;
        }

        .proj-title {
          margin: 0;
          font-size: 19px;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: rgba(238,242,255,0.96);
        }

        .proj-title-link { text-decoration: none; }
        .proj-title-link:hover .proj-title { color: #38bdf8; }
        .proj-ext { font-size: 14px; margin-left: 6px; opacity: 0.7; }

        .proj-badges {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          align-items: center;
        }

        .lineage-badge {
          display: inline-block;
          padding: 3px 9px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.02em;
        }
        .badge-succ {
          color: rgba(56,189,248,0.9);
          background: rgba(56,189,248,0.08);
          border: 1px solid rgba(56,189,248,0.2);
        }
        .badge-pred {
          color: rgba(129,140,248,0.9);
          background: rgba(129,140,248,0.08);
          border: 1px solid rgba(129,140,248,0.2);
        }

        .proj-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 6px;
          font-size: 12.5px;
          color: rgba(108,125,168,0.75);
        }
        .proj-role { font-weight: 600; color: rgba(165,178,210,0.85); }
        .proj-dates::before, .proj-org::before { content: "· "; opacity: 0.5; }

        .proj-desc {
          margin: 0 0 12px;
          font-size: 14px;
          line-height: 1.7;
          color: rgba(165,178,210,0.82);
        }

        .proj-bullets {
          margin: 0 0 12px;
          padding-left: 18px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .proj-bullets li {
          font-size: 13.5px;
          line-height: 1.6;
          color: rgba(140,158,200,0.8);
        }

        .proj-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 14px;
        }
        .proj-tag {
          display: inline-flex;
          align-items: center;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 12px;
          color: rgba(56,189,248,0.85);
          background: rgba(56,189,248,0.06);
          border: 1px solid rgba(56,189,248,0.14);
        }
      `}</style>
    </main>
  );
}
