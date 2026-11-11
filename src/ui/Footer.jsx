export default function Footer({ name, location }) {
  return (
    <footer className="foot">
      <span>{name}</span>
      <span>{location}</span>
      <a href="#top">Back to top &uarr;</a>
    </footer>
  );
}
