import React, { useEffect, useState } from "react";

const SECTIONS = [
  { id: "hero",       label: "Home" },
  { id: "about",      label: "About" },
  { id: "projects",   label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact",    label: "Contact" },
];

export default function DotNav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observers = [];
    SECTIONS.forEach(({ id }) => {
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
    <nav style={{
      position: "fixed",
      right: "28px",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 100,
      display: "flex",
      flexDirection: "column",
      gap: "14px",
      alignItems: "center",
    }}>
      {SECTIONS.map(({ id, label }) => (
        <button
          key={id}
          title={label}
          onClick={() => scrollTo(id)}
          style={{
            width: active === id ? "8px" : "6px",
            height: active === id ? "8px" : "6px",
            borderRadius: "50%",
            border: `1.5px solid ${active === id ? "#d4f050" : "rgba(255,255,255,0.3)"}`,
            background: active === id ? "#d4f050" : "transparent",
            cursor: "pointer",
            padding: 0,
            transition: "all 0.3s ease",
            boxShadow: active === id ? "0 0 8px rgba(212,240,80,0.7)" : "none",
          }}
          aria-label={label}
        />
      ))}
    </nav>
  );
}
