import React, { useRef } from "react";
import { useReveal } from "../lib/useReveal.js";

const LINKS = [
  { label: "Email", value: "salman.mohammad.arif@gmail.com", href: "mailto:salman.mohammad.arif@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/shaheer-m-arif", href: "https://linkedin.com/in/shaheer-m-arif" },
  { label: "GitHub", value: "github.com/shaheer-m-arif", href: "https://github.com/shaheer-m-arif" },
];

export default function ContactSection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section className="section contact-section" id="contact" ref={ref}>
      <div className="container">
        <div className="section-num reveal">04 / CONTACT</div>
        <h2 className="contact-title reveal">LET'S TALK.</h2>

        <div className="contact-links reveal">
          {LINKS.map((l) => (
            <a className="contact-link-row" key={l.label} href={l.href} target="_blank" rel="noreferrer" data-hover>
              <span className="ck-label">{l.label}</span>
              <span className="ck-value">{l.value}</span>
              <span className="ck-arrow">↗</span>
            </a>
          ))}
        </div>

        <div className="footer-bar reveal">
          <span>SHAHEER ARIF © 2026</span>
          <span>CALGARY, AB</span>
        </div>
      </div>
    </section>
  );
}
