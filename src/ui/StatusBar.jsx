import { useEffect, useState } from "react";

// Real Calgary wall-clock time. One 1 Hz timer, paused while the tab is hidden.
const clockFormat = new Intl.DateTimeFormat("en-CA", {
  timeZone: "America/Edmonton",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
  timeZoneName: "short",
});

function useClock() {
  const [now, setNow] = useState(() => clockFormat.format(new Date()));
  useEffect(() => {
    const id = setInterval(() => {
      if (!document.hidden) setNow(clockFormat.format(new Date()));
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}

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
  const clock = useClock();
  const active = useActiveSection(nav.map((n) => n.id));

  return (
    <header className="bar">
      <div className="bar-top">
        <a className="bar-id" href="#top" aria-label={`${name}, back to top`}>
          <span className="bar-mark" aria-hidden="true">
            SA
          </span>
          {name}
        </a>
        <span className="bar-clock" aria-hidden="true">
          CALGARY {clock}
        </span>
      </div>
      <nav className="bar-nav" aria-label="Sections">
        {nav.map((item, i) => (
          <a
            key={item.id}
            href={item.href}
            aria-current={active === item.id ? "true" : undefined}
          >
            <span className="n">{String(i + 1).padStart(2, "0")}</span>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
