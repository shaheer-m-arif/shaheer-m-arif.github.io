import { useEffect, useState } from "react";
import { SunSymbol, MoonSymbol } from "./icons.jsx";

function getInitialTheme() {
  const current = document.documentElement.dataset.theme;
  if (current === "light" || current === "dark") return current;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function Header({ name, nav }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem("theme", theme);
    } catch {
      // localStorage unavailable (private mode, etc.) — theme just won't persist.
    }
  }, [theme]);

  return (
    <header>
      <span className="me">{name}</span>
      <nav>
        {nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
        <button
          type="button"
          className="theme-toggle"
          aria-label={
            theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
          }
          onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
        >
          {theme === "dark" ? <SunSymbol /> : <MoonSymbol />}
        </button>
      </nav>
    </header>
  );
}
