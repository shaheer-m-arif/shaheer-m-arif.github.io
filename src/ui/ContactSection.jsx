export default function ContactSection({ links }) {
  return (
    <section className="talk" id="contact">
      <h2>Get in touch</h2>
      <p>
        I'm always happy to talk about hardware, firmware, fintech
        infrastructure, or anything above.
      </p>
      <div className="links">
        {links.map((link) => {
          const external = !link.href.startsWith("mailto:");
          return (
            <a
              key={link.href}
              href={link.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </section>
  );
}
