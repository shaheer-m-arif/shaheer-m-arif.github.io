import SectionHeading from "./SectionHeading.jsx";
import { ResistorSymbol } from "./icons.jsx";

export default function ExperienceSection({ roles }) {
  return (
    <section id="experience">
      <SectionHeading symbol={ResistorSymbol}>Experience</SectionHeading>
      {roles.map((role) => (
        <div className="role-row" key={role.title + role.dates}>
          <div className="l">
            <div className="t">{role.title}</div>
            <div className="o">{role.org}</div>
            <p className="n">{role.note}</p>
          </div>
          <div className="d">{role.dates}</div>
        </div>
      ))}
    </section>
  );
}
