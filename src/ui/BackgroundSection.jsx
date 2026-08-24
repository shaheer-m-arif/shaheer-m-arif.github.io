import SectionHeading from "./SectionHeading.jsx";
import { CapacitorSymbol } from "./icons.jsx";

export default function BackgroundSection({ paragraphs }) {
  return (
    <section id="background">
      <SectionHeading symbol={CapacitorSymbol}>Background</SectionHeading>
      <div className="background-copy">
        {paragraphs.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </section>
  );
}
