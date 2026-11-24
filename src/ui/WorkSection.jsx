import SectionHeading from "./SectionHeading.jsx";

export default function WorkSection({ items }) {
  return (
    <section className="section" id="work">
      <SectionHeading numeral="II">Selected work</SectionHeading>
      <div className="rows">
        {items.map((item, i) => (
          <article className="row" key={item.title}>
            <dl className="row-meta">
              <div>
                <dt className="label">No.</dt>
                <dd className="num">{String(i + 1).padStart(2, "0")}</dd>
              </div>
              <div>
                <dt className="label">Year</dt>
                <dd>{item.year}</dd>
              </div>
              <div>
                <dt className="label">Role</dt>
                <dd>{item.role}</dd>
              </div>
            </dl>
            <div className="row-body">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <ul className="stack" aria-label="Technology">
                {item.tech.split(", ").map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
