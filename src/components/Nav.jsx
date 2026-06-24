import React, { useEffect, useState } from "react";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observers = [];
    ["hero", ...SECTIONS.map((s) => s.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const io = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.4 }
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="nav">
      <span className="nav-mark" data-hover onClick={() => scrollTo("hero")} style={{ cursor: "pointer" }}>
        SA / 01
      </span>
      <div className="nav-links">
        {SECTIONS.map(({ id, label }) => (
          <span
            key={id}
            className={`nav-link ${active === id ? "active" : ""}`}
            onClick={() => scrollTo(id)}
            data-hover
          >
            <span className="dot" />
            {label}
          </span>
        ))}
      </div>
    </nav>
  );
}
