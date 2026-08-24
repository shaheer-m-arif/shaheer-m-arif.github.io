export default function SectionHeading({ children, symbol: Symbol }) {
  return (
    <h2>
      <span>{children}</span>
      <i className="wire" />
      <Symbol />
      <i className="tail" />
      <i className="node" />
    </h2>
  );
}
