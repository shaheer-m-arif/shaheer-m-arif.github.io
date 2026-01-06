import React, { useEffect } from "react";
import TypewriterTitle from "../components/TypewriterTitle";

function ProjectCard({ title, role, dates, org, description, highlights = [], tags = [], href, delayMs = 0 }) {
  return (
    <article className="projectCard card" style={{ transitionDelay: `${delayMs}ms` }}>
      <header className="projectHeader">
        {href ? (
          <a className="projectTitleLink" href={href} target="_blank" rel="noreferrer">
            <h3 className="projectTitle">
              {title}
              <span className="projectExternal" aria-hidden="true">
                ↗
              </span>
            </h3>
          </a>
        ) : (
          <h3 className="projectTitle">{title}</h3>
        )}
      </header>

      {(role || dates || org) && (
        <div className="projectMeta">
          {role && <span className="projectRole">{role}</span>}
          {dates && <span className="projectDates">{dates}</span>}
          {org && <span className="projectOrg">{org}</span>}
        </div>
      )}

      <p className="projectDesc">{description}</p>

      {highlights?.length > 0 && (
        <ul className="projectBullets">
          {highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}

      {tags?.length > 0 && (
        <div className="projectTags" aria-label="Tools and technologies">
          {tags.map((t) => (
            <span className="projectTag" key={t}>
              {t}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "S.H.A.R.I.F.",
      role: "Founder & Lead Developer",
      dates: "Jun 2025 – Present",
      description:
        "Inspired by Iron Man’s J.A.R.V.I.S., S.H.A.R.I.F. (Shaheer’s Highly Advanced Ridiculously Intelligent Framework) is a long-term personal AI assistant project spanning a deployed Telegram bot and an in-progress iOS dashboard app for personalized information and interaction.",
      highlights: [
        "Designed a phased roadmap spanning automation, scheduling, mobile apps, and AI-driven interaction.",
        "Phase 1: Deployed a Telegram bot delivering daily weather, stock, and news briefings.",
        "Phase 2: Added hourly stock updates, academic schedule integration, and assessment reminders.",
        "Phase 3 (In Progress): Building an iOS app with chat functionality and a JARVIS-style personalized dashboard.",
        "Dashboard focus: portfolio view, calendar widgets via .ics, news, and assistant components in a clean SwiftUI layout.",
        "Phase 4 (Planned): Full personal assistant with AI features, STT/TTS, and fitness/health data integration.",
      ],
      tags: ["Node.js", "APIs", "Telegram Bot API", "Automation", "SwiftUI", "iOS", "AI Systems"],
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
  ];

  // Ensure reveal animation runs even when navigating to this page via the navbar.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((ent) => {
          if (ent.isIntersecting) {
            ent.target.classList.add("in");
            io.unobserve(ent.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const t = setTimeout(() => {
      document.querySelectorAll("#projects .card").forEach((el) => {
        el.classList.remove("in");
        io.observe(el);
      });
    }, 0);

    return () => {
      clearTimeout(t);
      io.disconnect();
    };
  }, []);

  return (
    <main className="container">
      <section id="projects" className="projectsSection">
        <h2 className="projectsTitle" style={{ fontSize: "calc(1em + 15pt)" }}>
          <TypewriterTitle text="Projects" speed={55} />
        </h2>

        <div className="projectsGrid">
          {projects.map((p, idx) => (
            <ProjectCard
              key={p.title}
              title={p.title}
              role={p.role}
              dates={p.dates}
              org={p.org}
              description={p.description}
              highlights={p.highlights}
              tags={p.tags}
              href={p.href}
              delayMs={idx * 110}
            />
          ))}
        </div>

        <style>{`
          .projectsSection {
            margin-top: 24px;
          }

          .projectsGrid {
            margin-top: 22px;
            display: grid;
            grid-template-columns: 1fr;
            gap: 22px;
            max-width: 980px;
          }

          .projectCard {
            border-radius: 16px;
            padding: 28px;
            background: rgba(20, 18, 40, 0.62);
            box-shadow: 0 12px 42px rgba(0, 0, 0, 0.35);
            backdrop-filter: blur(10px);

            opacity: 0;
            transform: translateY(14px);
            transition: opacity 500ms ease, transform 500ms ease;
          }

          .projectCard.in {
            opacity: 1;
            transform: translateY(0);
          }

          .projectHeader {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px;
          }

          .projectTitle {
            margin: 0;
            font-size: 22px;
            line-height: 1.2;
            font-weight: 700;
            color: rgba(255, 255, 255, 0.92);
          }

          .projectTitleLink {
            text-decoration: none;
            color: inherit;
          }

          .projectTitleLink:hover .projectTitle {
            color: rgba(255, 255, 255, 1);
          }

          .projectExternal {
            margin-left: 10px;
            font-size: 16px;
            opacity: 0.85;
          }

          .projectDesc {
            margin: 12px 0 0 0;
            color: rgba(255, 255, 255, 0.72);
            font-size: 15px;
            line-height: 1.6;
          }

          .projectBullets {
            margin: 14px 0 0 0;
            padding-left: 18px;
            color: rgba(255, 255, 255, 0.72);
            font-size: 14px;
            line-height: 1.6;
          }

          .projectBullets li {
            margin: 8px 0;
          }

          .projectTags {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 16px;
          }

          .projectTag {
            display: inline-flex;
            align-items: center;
            padding: 7px 12px;
            border-radius: 999px;
            font-size: 13px;
            line-height: 1;
            color: rgba(120, 190, 255, 0.95);
            background: rgba(30, 70, 140, 0.25);
            border: 1px solid rgba(70, 130, 220, 0.25);
          }

          .projectMeta {
            margin-top: 6px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            font-size: 13px;
            color: rgba(255, 255, 255, 0.6);
          }

          .projectRole {
            font-weight: 600;
            color: rgba(255, 255, 255, 0.75);
          }

          .projectDates::before {
            content: "• ";
          }

          .projectOrg::before {
            content: "• ";
          }
        `}</style>
      </section>
    </main>
  );
}