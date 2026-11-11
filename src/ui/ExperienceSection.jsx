import SectionHeading from "./SectionHeading.jsx";

// Same row format as Selected work: a unit/period/org column on the left,
// title and write-up on the right.
export default function ExperienceSection({ roles }) {
  return (
    <section id="experience">
      <SectionHeading index="03">Experience</SectionHeading>
      <div className="work-list">
        {roles.map((role, i) => (
          <article className="job" key={role.title + role.dates}>
            <dl className="job-meta">
              <div>
                <dt>Unit</dt>
                <dd className="job-id">E-{String(i + 1).padStart(2, "0")}</dd>
              </div>
              <div>
                <dt>Period</dt>
                <dd>
                  <time>{role.dates}</time>
                  {role.current && (
                    <span className="live">
                      <i className="led" aria-hidden="true" />
                      Active
                    </span>
                  )}
                </dd>
              </div>
              <div>
                <dt>Org</dt>
                <dd>{role.org}</dd>
              </div>
            </dl>
            <div className="job-body">
              <h3>{role.title}</h3>
              <p>{role.note}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
