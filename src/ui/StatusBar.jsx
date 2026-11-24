import { useEffect, useState } from "react";

function useActiveSection(ids) {
  const [active, setActive] = useState(null);
  const key = ids.join();
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [key]);
  return active;
}

export default function StatusBar({ name, nav }) {
  const active = useActiveSection(nav.map((n) => n.id));

  return (
    <header className="bar">
      <a className="brand" href="#top" aria-label={`${name}, back to top`}>
        {name}
      </a>
      <nav className="bar-nav" aria-label="Sections">
        {nav.map((item) => (
          <a
            key={item.id}
            href={item.href}
            aria-current={active === item.id ? "true" : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
