import React, { useEffect } from "react";

const EXPERIENCE = [
  {
    title: "SCADA & Leak Detection Intern",
    company: "Cenovus Energy",
    location: "Lloydminster, Alberta",
    dates: "Sep 2026 – Sep 2027",
    current: true,
    bullets: [
      "Incoming 12-month co-op in SCADA and leak detection within upstream oil and gas operations.",
      "Supporting pipeline monitoring, control systems, and real-time data infrastructure.",
      "Embedded within the field engineering team, reporting directly to the operations supervisor.",
    ],
  },
  {
    title: "Vice President of Events",
    company: "DeepRacer Calgary",
    location: "Calgary, Alberta",
    dates: "Sep 2023 – Sep 2025",
    bullets: [
      "Led planning and execution of technical and community events for the University of Calgary's autonomous racing organization, with 100+ attendees across multi-day competitions.",
      "Coordinated with sponsors, vendors, and partners, including Amazon-affiliated stakeholders.",
      "Oversaw logistics, marketing materials, and on-site execution across 8+ events over two years.",
      "Strengthened internal team coordination and operational workflows within the executive team.",
    ],
  },
  {
    title: "Front-End Lead",
    company: "Glorek International Co.",
    location: "Jeddah, Saudi Arabia",
    dates: "May 2025 – Aug 2025",
    bullets: [
      "Designed and implemented a cross-platform mobile application using React Native for iOS and Android.",
      "Led development of secure authentication flows including login and OTP verification.",
      "Integrated REST APIs using Axios, improving data synchronization and application stability.",
      "Collaborated with backend teams and conducted user testing to reduce UI issues and improve performance.",
    ],
  },
  {
    title: "Operations Coordinator",
    company: "Glorek International Co.",
    location: "Saudi Arabia",
    dates: "May 2024 – Aug 2024",
    bullets: [
      "Managed manpower and equipment logistics across multiple client sites.",
      "Served as primary point of contact for clients, addressing concerns and resolving operational issues.",
      "Oversaw equipment readiness and compliance with safety standards.",
      "Coordinated scheduling and resource allocation to reduce downtime.",
    ],
  },
  {
    title: "Operations Coordinator Intern",
    company: "Glorek International Co.",
    location: "Jeddah, Saudi Arabia",
    dates: "May 2023 – Aug 2023",
    bullets: [
      "Supported operations from initiation to completion, meeting deadlines and budgets.",
      "Assisted with recruitment efforts including job postings, interview scheduling, and onboarding.",
      "Helped improve process efficiency through staff scheduling and task coordination.",
    ],
  },
  {
    title: "Operations Coordinator (Seasonal)",
    company: "Al-Raya Supermarkets",
    location: "Saudi Arabia",
    dates: "May 2021 – Sep 2021",
    bullets: [
      "Streamlined operational workflows and cross-department communication.",
      "Coordinated staff scheduling and task allocation during high-demand periods.",
      "Assisted with budget tracking, cost control, and daily operational reporting.",
    ],
  },
  {
    title: "Operations Coordinator (Seasonal)",
    company: "Al-Raya Supermarkets",
    location: "Saudi Arabia",
    dates: "May 2020 – Aug 2020",
    bullets: [
      "Supported day-to-day store operations and cross-team coordination.",
      "Helped organize staffing and task allocation to maintain service quality.",
      "Assisted with operational reporting and issue resolution during peak traffic.",
    ],
  },
];

export default function Experience() {
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
      document.querySelectorAll("#experience .card").forEach((el) => {
        el.classList.remove("in");
        io.observe(el);
      });
    }, 0);
    return () => { clearTimeout(t); io.disconnect(); };
  }, []);

  return (
    <main className="container" id="experience">
      <h1 className="page-heading">Experience</h1>

      <div className="timeline">
        {EXPERIENCE.map((job, idx) => (
          <div key={idx} className="tl-item">
            <div className="tl-node">
              <div className={`tl-dot${job.current ? " tl-dot-current" : ""}`} />
              {idx < EXPERIENCE.length - 1 && <div className="tl-line" />}
            </div>

            <article className={`tl-card card${job.current ? " tl-card-current" : ""}`}>
              <header className="tl-header">
                <div className="tl-title-row">
                  <h2 className="tl-title">{job.title}</h2>
                  {job.current && <span className="tl-current-badge">Upcoming</span>}
                </div>
                <div className="tl-meta">
                  <span className="tl-company">{job.company}</span>
                  <span className="tl-sep">·</span>
                  <span className="tl-dates">{job.dates}</span>
                  <span className="tl-sep">·</span>
                  <span className="tl-location">{job.location}</span>
                </div>
              </header>

              <ul className="tl-bullets">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          </div>
        ))}
      </div>

      <style>{`
        .timeline {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .tl-item {
          display: grid;
          grid-template-columns: 28px 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }

        .tl-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
        }

        .tl-dot {
          width: 10px; height: 10px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          border: 2px solid rgba(255,255,255,0.1);
          flex-shrink: 0;
          z-index: 1;
        }

        .tl-dot-current {
          background: #38bdf8;
          border-color: rgba(56,189,248,0.3);
          box-shadow: 0 0 12px rgba(56,189,248,0.6);
        }

        .tl-line {
          flex: 1;
          width: 1px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.08), transparent);
          margin-top: 6px;
          min-height: 24px;
        }

        .tl-card {
          padding: 22px 26px;
          margin-bottom: 0;
        }

        .tl-card-current {
          border-color: rgba(56,189,248,0.2);
          background: rgba(56,189,248,0.04);
        }

        .tl-title-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .tl-title {
          margin: 0;
          font-size: 17px;
          font-weight: 700;
          color: rgba(238,242,255,0.96);
          letter-spacing: -0.01em;
        }

        .tl-current-badge {
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #38bdf8;
          background: rgba(56,189,248,0.1);
          border: 1px solid rgba(56,189,248,0.25);
          padding: 2px 8px;
          border-radius: 999px;
        }

        .tl-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 6px;
          margin-top: 5px;
          font-size: 13px;
          color: rgba(108,125,168,0.75);
        }

        .tl-company { font-weight: 600; color: rgba(165,178,210,0.82); }
        .tl-sep { opacity: 0.4; }

        .tl-bullets {
          margin: 14px 0 0;
          padding-left: 18px;
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .tl-bullets li {
          font-size: 14px;
          line-height: 1.65;
          color: rgba(165,178,210,0.82);
        }

        @media (max-width: 600px) {
          .tl-item { grid-template-columns: 20px 1fr; gap: 10px; }
          .tl-card { padding: 18px; }
        }
      `}</style>
    </main>
  );
}
