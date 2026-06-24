import React, { useRef } from "react";
import { useReveal } from "../lib/useReveal.js";

const EXP = [
  {
    date: "Sep 2026 – Sep 2027",
    upcoming: true,
    title: "SCADA and Leak Detection Intern",
    org: "Cenovus Energy · Lloydminster, AB",
    points: [
      "Joining the upstream operations team at Cenovus for a 12-month co-op starting September 2026, working in SCADA and pipeline leak detection.",
      "The work covers pipeline monitoring systems, control systems, and the real-time data infrastructure that keeps field operations running.",
      "Embedded directly within the field engineering team on active operations.",
    ],
  },
  {
    date: "Sep 2023 – Sep 2025",
    title: "Vice President of Events",
    org: "DeepRacer Calgary · Calgary, AB",
    points: [
      "Ran the events side of UCalgary's AWS DeepRacer club for two years. We put on 8 competitions and had over 100 people show up to each one.",
      "Handled sponsor conversations, vendor coordination, and the Amazon reps who came in for the bigger events.",
      "If something broke on race day, I was the one sorting it out.",
    ],
  },
  {
    date: "May 2025 – Aug 2025",
    title: "Front-End Lead",
    org: "Glorek International Co. · Jeddah, Saudi Arabia",
    points: [
      "Built the iOS and Android apps for Glorek's facility management platform in React Native.",
      "Owned the auth flow, service ordering, job status tracking, and payment integration end to end.",
      "Worked directly with the backend team on the API contracts so the mobile side had what it needed.",
    ],
  },
  {
    date: "May 2024 – Aug 2024",
    title: "Operations Coordinator",
    org: "Glorek International Co. · Saudi Arabia",
    points: [
      "Coordinated crews and equipment across multiple active client sites during a busy summer.",
      "Became the main contact for several clients, handling scheduling changes, resource calls, and anything that came up last minute.",
    ],
  },
  {
    date: "May 2023 – Aug 2023",
    title: "Operations Coordinator Intern",
    org: "Glorek International Co. · Jeddah, Saudi Arabia",
    points: [
      "First proper job. Helped run operations from the initial brief through to job completion across a high-volume summer.",
      "Supported recruitment and onboarding for new workers and kept day-to-day coordination moving.",
    ],
  },
  {
    date: "2020 – 2021",
    title: "Operations Coordinator (Seasonal)",
    org: "Al-Raya Supermarkets · Saudi Arabia",
    points: [
      "Managed staffing and shift scheduling during peak demand periods at a large regional supermarket chain.",
      "Tracked costs and put together daily operational reports for my section.",
    ],
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section className="section" id="experience" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="section-num">03 / TIMELINE</div>
            <h2 className="section-title">Experience</h2>
          </div>
        </div>

        <div className="exp-list">
          {EXP.map((e) => (
            <div className="exp-row reveal" key={e.title + e.date}>
              <div className="exp-date">
                {e.date}
                {e.upcoming && <div className="tag-upcoming">UPCOMING</div>}
              </div>
              <div className="exp-body">
                <h3>{e.title}</h3>
                <div className="org">{e.org}</div>
                <ul>
                  {e.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
