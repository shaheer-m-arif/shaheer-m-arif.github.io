import React from "react";

function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M2 6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003zM3.556 20.452H7.11V9H3.556v11.452zM5.333 7.433a2.062 2.062 0 1 0 0-4.124 2.062 2.062 0 0 0 0 4.124zM20.452 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.356V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z" fill="currentColor" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.34-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.58 9.58 0 012.5.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.202 2.397.1 2.65.64.7 1.028 1.593 1.028 2.686 0 3.848-2.337 4.695-4.566 4.943.359.31.678.923.678 1.86 0 1.343-.012 2.425-.012 2.754 0 .268.18.58.688.481A10.02 10.02 0 0022 12.017C22 6.484 17.523 2 12 2z" fill="currentColor" />
    </svg>
  );
}

const LINKS = [
  {
    label: "Email",
    value: "shaheermarif@outlook.com",
    href: "mailto:shaheermarif@outlook.com",
    Icon: EmailIcon,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/shaheermarif",
    href: "https://www.linkedin.com/in/shaheermarif/",
    Icon: LinkedInIcon,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/shaheer-m-arif",
    href: "https://github.com/shaheer-m-arif",
    Icon: GitHubIcon,
    external: true,
  },
];

export default function Contact() {
  return (
    <main className="container" id="contact">
      <h1 className="page-heading">Contact</h1>
      <p className="contact-intro">
        Always open to interesting conversations, collaborations, or just a good chat.
      </p>

      <div className="contact-list">
        {LINKS.map(({ label, value, href, Icon, external }) => (
          <a
            key={label}
            className="contact-row card"
            href={href}
            {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
          >
            <div className="contact-icon">
              <Icon />
            </div>
            <div className="contact-text">
              <span className="contact-label">{label}</span>
              <span className="contact-value">{value}</span>
            </div>
            <span className="contact-arrow">→</span>
          </a>
        ))}
      </div>

      <style>{`
        #contact.container { max-width: 680px; }

        .contact-intro {
          margin: -16px 0 36px;
          font-size: 15px;
          color: rgba(108,125,168,0.75);
          line-height: 1.6;
        }

        .contact-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .contact-row {
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 22px 26px;
          text-decoration: none;
          cursor: pointer;
          transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s,
                      background 0.2s, opacity 0.45s, transform 0.45s;
        }

        .contact-row:hover {
          transform: translateY(-2px);
          border-color: rgba(56,189,248,0.25);
          box-shadow: 0 16px 40px rgba(0,0,0,0.3);
        }

        .contact-icon {
          width: 44px; height: 44px;
          display: grid; place-items: center;
          border-radius: 11px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          color: #38bdf8;
          flex-shrink: 0;
        }

        .contact-text {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .contact-label {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(108,125,168,0.75);
        }

        .contact-value {
          font-size: 15px;
          font-weight: 600;
          color: rgba(238,242,255,0.9);
          word-break: break-all;
        }

        .contact-arrow {
          font-size: 16px;
          color: rgba(56,189,248,0.4);
          transition: color 0.2s, transform 0.2s;
          flex-shrink: 0;
        }

        .contact-row:hover .contact-arrow {
          color: #38bdf8;
          transform: translateX(3px);
        }
      `}</style>
    </main>
  );
}
