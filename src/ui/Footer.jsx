export default function Footer({ name, location }) {
  return (
    <footer className="foot">
      <div className="foot-id">
        <span className="foot-name">{name}</span>
        <span className="label">Founder, Notitia</span>
      </div>
      <span className="label">{location}</span>
      <a className="label" href="#top">
        Back to top &uarr;
      </a>
    </footer>
  );
}
