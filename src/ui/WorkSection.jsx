import SectionHeading from "./SectionHeading.jsx";
import { WaveformSymbol } from "./icons.jsx";
import useInView from "./useInView.js";

function WorkItem({ item }) {
  const [ref, inView] = useInView();
  return (
    <article className={`item reveal${inView ? " in" : ""}`} ref={ref}>
      <h3>
        {item.title} <span>{item.year}</span>
        {item.active && <span className="badge">Building now</span>}
      </h3>
      <div className="role">{item.role}</div>
      <p>{item.body}</p>
      <p className="tech">{item.tech}</p>
    </article>
  );
}

export default function WorkSection({ items }) {
  return (
    <section id="work">
      <SectionHeading symbol={WaveformSymbol}>Selected work</SectionHeading>
      {items.map((item) => (
        <WorkItem item={item} key={item.title} />
      ))}
    </section>
  );
}
