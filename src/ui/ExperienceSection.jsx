import SectionHeading from "./SectionHeading.jsx";
import { ResistorSymbol } from "./icons.jsx";
import useInView from "./useInView.js";

function RoleRow({ role }) {
  const [ref, inView] = useInView();
  return (
    <div className={`role-row reveal${inView ? " in" : ""}`} ref={ref}>
      <div className="l">
        <div className="t">{role.title}</div>
        <div className="o">{role.org}</div>
        <p className="n">{role.note}</p>
      </div>
      <div className="d">{role.dates}</div>
    </div>
  );
}

export default function ExperienceSection({ roles }) {
  return (
    <section id="experience">
      <SectionHeading symbol={ResistorSymbol}>Experience</SectionHeading>
      {roles.map((role) => (
        <RoleRow role={role} key={role.title + role.dates} />
      ))}
    </section>
  );
}
