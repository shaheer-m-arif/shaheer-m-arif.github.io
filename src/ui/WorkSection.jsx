import SectionHeading from "./SectionHeading.jsx";

export default function WorkSection({ items }) {
  return (
    <section id="work">
      <SectionHeading index="02">Selected work</SectionHeading>
      <div className="work-list">
        {items.map((item, i) => (
          <article className="job" key={item.title}>
            <dl className="job-meta">
              <div>
                <dt>Unit</dt>
                <dd className="job-id">W-{String(i + 1).padStart(2, "0")}</dd>
              </div>
              <div>
                <dt>Year</dt>
                <dd>{item.year}</dd>
              </div>
              <div>
                <dt>Role</dt>
                <dd>{item.role}</dd>
              </div>
            </dl>
            <div className="job-body">
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
