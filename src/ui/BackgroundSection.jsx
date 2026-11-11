import SectionHeading from "./SectionHeading.jsx";

export default function BackgroundSection({ paragraphs, capabilities }) {
  return (
    <section id="background">
      <SectionHeading index="01">Background</SectionHeading>
      <div className="bg-grid">
        <div className="bg-copy">
          {paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <dl className="caps">
          {capabilities.map((cap) => (
            <div className="cap" key={cap.label}>
              <dt>{cap.label}</dt>
              <dd>{cap.items}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
