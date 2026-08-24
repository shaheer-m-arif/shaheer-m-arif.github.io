import { GroundSymbol } from "./icons.jsx";

export default function Footer({ name, location }) {
  return (
    <footer>
      <span>{name}</span>
      <span className="gnd">
        <GroundSymbol />
        {location}
      </span>
    </footer>
  );
}
