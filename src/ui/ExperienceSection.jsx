import SectionHeading from "./SectionHeading.jsx";

// Same row format as Selected work.
export default function ExperienceSection({ roles }) {
  return (
    <section className="section" id="experience">
      <SectionHeading numeral="III">Experience</SectionHeading>
      <div className="rows">
        {roles.map((role, i) => (
          <article className="row" key={role.title + role.dates}>
            <dl className="row-meta">
              <div>
                <dt className="label">No.</dt>
                <dd className="num">{String(i + 1).padStart(2, "0")}</dd>
              </div>
              <div>
                <dt className="label">Period</dt>
                <dd>
                  <time>{role.dates}</time>
                  {role.current && <span className="current">Present</span>}
                </dd>
              </div>
              <div>
                <dt className="label">Organisation</dt>
                <dd>{role.org}</dd>
              </div>
            </dl>
            <div className="row-body">
              <h3>{role.title}</h3>
              <p>{role.note}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
