import SectionHeading from "./SectionHeading.jsx";

// Layout kept as signed off: lede, large email link with a drawn underline,
// then the >>> links.
export default function ContactSection({ links }) {
  const [primary, ...rest] = links;
  const isExternal = (href) => !href.startsWith("mailto:");
  return (
    <section className="section" id="contact">
      <SectionHeading numeral="IV">Contact</SectionHeading>
      <p className="contact-lede">
        For hardware, firmware, fintech infrastructure, or anything above,
        write to me.
      </p>
      <a className="contact-main" href={primary.href}>
        {primary.label}
        <span aria-hidden="true"> &rarr;</span>
      </a>
      <ul className="contact-links">
        {rest.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target={isExternal(link.href) ? "_blank" : undefined}
              rel={isExternal(link.href) ? "noreferrer" : undefined}
            >
              <span aria-hidden="true">&gt;&gt;&gt;</span>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
