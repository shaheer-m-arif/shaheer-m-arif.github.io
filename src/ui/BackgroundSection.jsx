import SectionHeading from "./SectionHeading.jsx";

export default function BackgroundSection({ paragraphs, capabilities }) {
  return (
    <section className="section" id="background">
      <SectionHeading numeral="I">About</SectionHeading>
      <div className="about-grid">
        <div className="about-copy">
          {paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <dl className="caps">
          {capabilities.map((cap) => (
            <div className="cap" key={cap.label}>
              <dt className="label">{cap.label}</dt>
              <dd>{cap.items}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
