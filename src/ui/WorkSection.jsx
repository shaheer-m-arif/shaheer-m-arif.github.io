import SectionHeading from "./SectionHeading.jsx";
import { WaveformSymbol } from "./icons.jsx";

export default function WorkSection({ items }) {
  return (
    <section id="work">
      <SectionHeading symbol={WaveformSymbol}>Selected work</SectionHeading>
      {items.map((item) => (
        <article className="item" key={item.title}>
          <h3>
            {item.title} <span>{item.year}</span>
          </h3>
          <div className="role">{item.role}</div>
          <p>{item.body}</p>
          <p className="tech">{item.tech}</p>
        </article>
      ))}
    </section>
  );
}
