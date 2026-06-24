import React, { useEffect, useRef } from "react";

const EXP = [
  {
    title: "SCADA and Leak Detection Intern",
    company: "Cenovus Energy",
    dates: "Sep 2026 – Sep 2027",
    location: "Lloydminster, AB",
    current: true,
    bullets: [
      "Joining the upstream operations team at Cenovus for a 12-month co-op starting September 2026, working in SCADA and pipeline leak detection.",
      "The work covers pipeline monitoring systems, control systems, and the real-time data infrastructure that keeps field operations running.",
      "Embedded directly within the field engineering team on active operations.",
    ],
  },
  {
    title: "Vice President of Events",
    company: "DeepRacer Calgary",
    dates: "Sep 2023 – Sep 2025",
    location: "Calgary, AB",
    bullets: [
      "Ran the events side of UCalgary's AWS DeepRacer club for two years. We put on 8 competitions and had over 100 people show up to each one.",
      "Handled sponsor conversations, vendor coordination, and the Amazon reps who came in for the bigger events.",
      "If something broke on race day, I was the one sorting it out.",
    ],
  },
  {
    title: "Front-End Lead",
    company: "Glorek International Co.",
    dates: "May 2025 – Aug 2025",
    location: "Jeddah, Saudi Arabia",
    bullets: [
      "Built the iOS and Android apps for Glorek's facility management platform in React Native.",
      "Owned the auth flow, service ordering, job status tracking, and payment integration end to end.",
      "Worked directly with the backend team on the API contracts so the mobile side had what it needed.",
    ],
  },
  {
    title: "Operations Coordinator",
    company: "Glorek International Co.",
    dates: "May 2024 – Aug 2024",
    location: "Saudi Arabia",
    bullets: [
      "Coordinated crews and equipment across multiple active client sites during a busy summer.",
      "Became the main contact for several clients, handling scheduling changes, resource calls, and anything that came up last minute.",
    ],
  },
  {
    title: "Operations Coordinator Intern",
    company: "Glorek International Co.",
    dates: "May 2023 – Aug 2023",
    location: "Jeddah, Saudi Arabia",
    bullets: [
      "First proper job. Helped run operations from the initial brief through to job completion across a high-volume summer.",
      "Supported recruitment and onboarding for new workers and kept day-to-day coordination moving.",
    ],
  },
  {
    title: "Operations Coordinator (Seasonal)",
    company: "Al-Raya Supermarkets",
    dates: "2020 – 2021",
    location: "Saudi Arabia",
    bullets: [
      "Managed staffing and shift scheduling during peak demand periods at a large regional supermarket chain.",
      "Tracked costs and put together daily operational reports for my section.",
    ],
  },
];

export default function ExperienceSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.05 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} style={{ padding: "120px 8vw", minHeight: "100vh" }}>

      <div className="reveal" style={{
        fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase",
        color: "#d4f050", marginBottom: "64px",
        display: "flex", alignItems: "center", gap: "12px",
      }}>
        <span style={{ width: "32px", height: "1px", background: "#d4f050", display: "inline-block" }} />
        Experience
      </div>

      <div style={{ maxWidth: "900px", display: "flex", flexDirection: "column", gap: "0" }}>
        {EXP.map((job, i) => (
          <div
            key={i}
            className="reveal"
            style={{
              display: "grid",
              gridTemplateColumns: "200px 1fr",
              gap: "48px",
              padding: "36px 0",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              transitionDelay: `${i * 60}ms`,
            }}
          >
            <div>
              <div style={{
                fontSize: "12.5px",
                color: job.current ? "#d4f050" : "rgba(255,255,255,0.3)",
                marginBottom: "6px",
                fontWeight: job.current ? 600 : 400,
              }}>
                {job.dates}
              </div>
              <div style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.55)",
                marginBottom: "4px",
              }}>
                {job.company}
              </div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>
                {job.location}
              </div>
            </div>

            <div>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "14px",
              }}>
                <h3 style={{
                  fontSize: "clamp(15px, 1.8vw, 18px)",
                  fontWeight: 700,
                  color: "#fff",
                  letterSpacing: "-0.01em",
                }}>
                  {job.title}
                </h3>
                {job.current && (
                  <span style={{
                    fontSize: "10px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#d4f050",
                    border: "1px solid rgba(212,240,80,0.3)",
                    padding: "2px 8px",
                    borderRadius: "999px",
                  }}>
                    Upcoming
                  </span>
                )}
              </div>
              <ul style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {job.bullets.map((b) => (
                  <li key={b} style={{
                    fontSize: "13.5px",
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.48)",
                    paddingLeft: "14px",
                    position: "relative",
                  }}>
                    <span style={{
                      position: "absolute", left: 0, top: "8px",
                      width: "4px", height: "4px", borderRadius: "50%",
                      background: "rgba(212,240,80,0.4)",
                    }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />
      </div>

      <style>{`
        @media (max-width: 768px) {
          #experience .reveal[style] { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  );
}
