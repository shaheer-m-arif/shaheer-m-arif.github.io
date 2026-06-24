import React, { useEffect } from "react";
import TypewriterTitle from "../components/TypewriterTitle";

const skillGroups = [
  {
    title: "Languages",
    items: ["C", "Python", "JavaScript", "Java", "SystemVerilog", "MATLAB", "SQL", "Swift"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["React", "React Native", "Node.js", "Express", "SwiftUI", "Axios", "Vite"],
  },
  {
    title: "Tools & DevOps",
    items: ["Git", "Docker", "Heroku", "Postman", "Termux", "Claude API", "Telegram Bot API", "Plaid API"],
  },
  {
    title: "Hardware & Embedded",
    items: ["STM32", "AVR128DB28", "Arduino", "Raspberry Pi", "I2C", "SPI", "UART", "PWM", "RF Telemetry", "Ultrasonic Sensors", "PCB Design"],
  },
  {
    title: "EDA & Simulation",
    items: ["Vivado", "LTspice", "Multisim", "Basys3 FPGA"],
  },
];

export default function Skills() {
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
      document.querySelectorAll("#skills .card").forEach((el) => {
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
      <section id="skills" className="skillsSection">
        <h2 className="skillsPageTitle" style={{ fontSize: "calc(1em + 15pt)" }}>
          <TypewriterTitle text="Skills" speed={55} />
        </h2>

        <div className="skillsPageGrid">
          {skillGroups.map((group, idx) => (
            <article className="skillsGroupCard card" key={group.title} style={{ transitionDelay: `${idx * 80}ms` }}>
              <h3 className="skillsGroupTitle">{group.title}</h3>
              <div className="skillsChips">
                {group.items.map((item) => (
                  <span className="skillsChip" key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <style>{`
          .skillsSection {
            margin-top: 24px;
            max-width: 980px;
          }

          .skillsPageGrid {
            margin-top: 22px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 18px;
          }

          @media (max-width: 680px) {
            .skillsPageGrid { grid-template-columns: 1fr; }
          }

          .skillsGroupCard {
            border-radius: 16px;
            padding: 24px 26px;
            background: rgba(20, 18, 40, 0.62);
            box-shadow: 0 12px 42px rgba(0, 0, 0, 0.35);
            backdrop-filter: blur(10px);
            opacity: 0;
            transform: translateY(14px);
            transition: opacity 500ms ease, transform 500ms ease;
          }

          .skillsGroupCard.in {
            opacity: 1;
            transform: translateY(0);
          }

          .skillsGroupTitle {
            margin: 0 0 14px;
            font-size: 17px;
            font-weight: 700;
            color: rgba(255, 255, 255, 0.9);
          }

          .skillsChips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }

          .skillsChip {
            display: inline-flex;
            align-items: center;
            padding: 6px 12px;
            border-radius: 999px;
            font-size: 13px;
            color: rgba(120, 190, 255, 0.95);
            background: rgba(30, 70, 140, 0.25);
            border: 1px solid rgba(70, 130, 220, 0.25);
          }
        `}</style>
      </section>
    </main>
  );
}
