import React, { useEffect } from "react";
import TypewriterTitle from "../components/TypewriterTitle";

export default function Experience() {
  const experience = [
    {
      title: "Vice President of Events",
      company: "DeepRacer Calgary",
      location: "Calgary, Alberta, Canada",
      dates: "Sep 2023 – Sep 2025",
      bullets: [
        "Led planning and execution of large-scale technical and community events for the University of Calgary’s autonomous racing organization.",
        "Coordinated with sponsors, vendors, and partners, including Amazon-affiliated stakeholders.",
        "Oversaw logistics, marketing materials, and on-site execution to ensure smooth event delivery.",
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
    {
      title: "Volunteer (Seasonal)",
      company: "Ministry of Hajj & Umrah",
      location: "Saudi Arabia",
      dates: "Jan 2018 – Sep 2023",
      bullets: [
        "Supported large-scale international events involving hundreds of volunteers and pilgrims.",
        "Assisted pilgrims from diverse cultural backgrounds throughout the pilgrimage process.",
        "Enhanced cross-cultural communication and coordination in high-pressure environments.",
      ],
    },
  ];

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
      document.querySelectorAll("#experience .card").forEach((el) => {
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
      <section id="experience" className="experienceSection">
        <h2 className="experienceTitle" style={{ fontSize: "calc(1em + 15pt)" }}>
          <TypewriterTitle text="Experience" speed={55} />
        </h2>

        <div className="experienceList">
          {experience.map((e, idx) => (
            <article className="experienceCard card" key={`${e.title}-${e.company}`} style={{ transitionDelay: `${idx * 110}ms` }}>
              <header className="projectHeader">
                <h3 className="projectTitle">{e.title}</h3>
                <div className="projectMeta">
                  <span className="projectRole">{e.company}</span>
                  <span className="projectDates">{e.dates}</span>
                  <span className="projectOrg">{e.location}</span>
                </div>
              </header>

              <ul className="projectBullets">
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <style>{`
          .experienceSection {
            margin-top: 24px;
            max-width: 980px;
          }

          .experienceList {
            margin-top: 22px;
            display: flex;
            flex-direction: column;
            gap: 22px;
          }

          /* Card styling to match Projects */
          .experienceCard {
            border-radius: 16px;
            padding: 28px;
            background: rgba(20, 18, 40, 0.62);
            box-shadow: 0 12px 42px rgba(0, 0, 0, 0.35);
            backdrop-filter: blur(10px);

            opacity: 0;
            transform: translateY(14px);
            transition: opacity 500ms ease, transform 500ms ease;
          }

          .experienceCard.in {
            opacity: 1;
            transform: translateY(0);
          }

          .projectHeader {
            display: flex;
            flex-direction: column;
            gap: 6px;
          }

          .projectTitle {
            margin: 0;
            font-size: 24px;
            line-height: 1.2;
            font-weight: 700;
            color: rgba(255, 255, 255, 0.92);
          }

          .projectMeta {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            font-size: 14px;
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

          .projectBullets {
            margin: 14px 0 0 0;
            padding-left: 18px;
            color: rgba(255, 255, 255, 0.72);
            font-size: 15px;
            line-height: 1.6;
          }

          .projectBullets li {
            margin: 8px 0;
          }
        `}</style>
      </section>
    </main>
  );
}