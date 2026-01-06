import React from "react";
import TypewriterTitle from "../components/TypewriterTitle";

function EmailIcon(props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2 6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 6l-10 7L2 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedInIcon(props) {
    return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003zM3.556 20.452H7.11V9H3.556v11.452zM5.333 7.433a2.062 2.062 0 1 0 0-4.124 2.062 2.062 0 0 0 0 4.124zM20.452 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.356V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"
        fill="currentColor"
      />
    </svg>
  );
}

function GitHubIcon(props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.34-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.58 9.58 0 012.5.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.202 2.397.1 2.65.64.7 1.028 1.593 1.028 2.686 0 3.848-2.337 4.695-4.566 4.943.359.31.678.923.678 1.86 0 1.343-.012 2.425-.012 2.754 0 .268.18.58.688.481A10.02 10.02 0 0022 12.017C22 6.484 17.523 2 12 2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Contact() {
  const fullName = "Shaheer Mohammad Arif";
  const email = "shaheermarif@outlook.com";
  const linkedinUrl = "https://www.linkedin.com/in/shaheermarif/";
  const githubUrl = "https://github.com/shaheer-m-arif";

  return (
    <main className="container">
      <section id="contact" className="contactSection">
        <h2 className="contactTitle">
          <TypewriterTitle text="Contact" speed={55} />
        </h2>
        <div className="contactName">{fullName}</div>

        <div className="contactList">
          <a className="contactRow contactRowLink" href={`mailto:${email}`}>
            <span className="contactLogo" aria-hidden="true">
              <EmailIcon />
            </span>
            <span className="contactText">
              <span className="contactLabel">Email</span>
              <span className="contactValue">{email}</span>
            </span>
          </a>

          <a
            className="contactRow contactRowLink"
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contactLogo" aria-hidden="true">
              <LinkedInIcon />
            </span>
            <span className="contactText">
              <span className="contactLabel">LinkedIn</span>
              <span className="contactValue">{linkedinUrl}</span>
            </span>
          </a>

          <a
            className="contactRow contactRowLink"
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contactLogo" aria-hidden="true">
              <GitHubIcon />
            </span>
            <span className="contactText">
              <span className="contactLabel">GitHub</span>
              <span className="contactValue">{githubUrl}</span>
            </span>
          </a>
        </div>

        <style>{`
          .contactSection {
            width: 100%;
            max-width: 980px;
            margin: 0 auto;
          }

          .contactTitle {
            margin: 0 0 14px 0;
            font-size: 48px;
            font-weight: 900;
            color: rgba(255, 255, 255, 0.96);
            letter-spacing: 0.01em;
          }

          .contactName {
            margin: 0 0 24px 0;
            font-size: 22px;
            font-weight: 700;
            color: rgba(255, 255, 255, 0.85);
          }

          .contactList {
            display: flex;
            flex-direction: column;
            gap: 18px;
          }

          .contactRow {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 30px 32px;
            border-radius: 26px;
            background: rgba(20, 18, 40, 0.45);
            border: 1px solid rgba(255, 255, 255, 0.10);
            backdrop-filter: blur(16px);
            box-shadow: 0 20px 48px rgba(0, 0, 0, 0.35);
          }

          .contactLogo {
            width: 56px;
            height: 56px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            background: rgba(0, 0, 0, 0.22);
            border: 1px solid rgba(255, 255, 255, 0.12);
            color: rgba(210, 228, 255, 0.95);
            flex: 0 0 auto;
          }

          .contactLabel {
            font-size: 18px;
            font-weight: 800;
            color: rgba(255, 255, 255, 0.82);
            letter-spacing: 0.02em;
          }

          .contactLink {
            font-size: 14px;
            font-weight: 700;
            color: rgba(200, 225, 255, 0.92);
            text-decoration: none;
            border-bottom: 1px solid rgba(200, 225, 255, 0.25);
            padding-bottom: 1px;
            word-break: break-word;
          }

          .contactLink:hover {
            border-bottom-color: rgba(200, 225, 255, 0.55);
          }

          @media (max-width: 560px) {
            .contactRow {
              flex-wrap: wrap;
            }
          }

          .contactRowLink {
            text-decoration: none;
            cursor: pointer;
          }

          .contactRowLink:hover {
            transform: translateY(-2px);
            border-color: rgba(200, 225, 255, 0.45);
            box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
          }

          .contactText {
            display: flex;
            flex-direction: column;
            gap: 2px;
          }

          .contactValue {
            font-size: 17px;
            font-weight: 600;
            color: rgba(200, 225, 255, 0.95);
            word-break: break-all;
          }
        `}</style>
      </section>
    </main>
  );
}