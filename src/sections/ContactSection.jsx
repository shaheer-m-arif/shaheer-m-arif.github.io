import React, { useEffect, useRef } from "react";

const LINKS = [
  {
    label: "Email",
    value: "shaheermarif@outlook.com",
    href: "mailto:shaheermarif@outlook.com",
    hint: "Open mail client",
  },
  {
    label: "LinkedIn",
    value: "/in/shaheermarif",
    href: "https://www.linkedin.com/in/shaheermarif/",
    hint: "View profile",
  },
  {
    label: "GitHub",
    value: "shaheer-m-arif",
    href: "https://github.com/shaheer-m-arif",
    hint: "Browse repos",
  },
];

export default function ContactSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.15 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "120px 8vw",
    }}>

      <div className="reveal" style={{
        fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase",
        color: "#d4f050", marginBottom: "64px",
        display: "flex", alignItems: "center", gap: "12px",
      }}>
        <span style={{ width: "32px", height: "1px", background: "#d4f050", display: "inline-block" }} />
        Contact
      </div>

      {/* Two-column layout */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "80px",
        alignItems: "center",
        maxWidth: "1000px",
      }}>

        {/* Left: heading + copy */}
        <div className="reveal">
          <h2 style={{
            fontSize: "clamp(52px, 9vw, 120px)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 0.88,
            color: "#fff",
            marginBottom: "28px",
          }}>
            LET'S<br />
            <span style={{ color: "#d4f050" }}>TALK.</span>
          </h2>
          <p style={{
            fontSize: "15px",
            color: "rgba(255,255,255,0.38)",
            lineHeight: 1.65,
            maxWidth: "320px",
          }}>
            Open to conversations about EE, embedded systems, AI, fintech, or anything in between.
            Internships, collabs, or just a good chat.
          </p>
        </div>

        {/* Right: contact cards */}
        <div className="reveal" style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          transitionDelay: "100ms",
        }}>
          {LINKS.map(({ label, value, href, hint }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="contact-card"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "22px 24px",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "10px",
                textDecoration: "none",
                transition: "all 0.22s ease",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <div>
                <div style={{
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.28)",
                  marginBottom: "5px",
                }}>
                  {label}
                </div>
                <div style={{
                  fontSize: "14.5px",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.78)",
                }}>
                  {value}
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{
                  fontSize: "18px",
                  color: "rgba(212,240,80,0.35)",
                  transition: "all 0.22s ease",
                  marginBottom: "4px",
                }}
                  className="card-arrow"
                >
                  ↗
                </div>
                <div style={{
                  fontSize: "10px",
                  letterSpacing: "0.08em",
                  color: "rgba(255,255,255,0.18)",
                  textTransform: "uppercase",
                }}>
                  {hint}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="reveal" style={{
        marginTop: "96px",
        fontSize: "12px",
        color: "rgba(255,255,255,0.18)",
        letterSpacing: "0.06em",
        transitionDelay: "200ms",
      }}>
        © {new Date().getFullYear()} · Shaheer Arif
      </div>

      <style>{`
        .contact-card:hover {
          border-color: rgba(212,240,80,0.25) !important;
          background: rgba(212,240,80,0.04) !important;
          transform: translateX(4px);
        }
        .contact-card:hover .card-arrow {
          color: #d4f050 !important;
          transform: translate(3px, -3px);
        }
        @media (max-width: 700px) {
          #contact > div:nth-child(2) {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
