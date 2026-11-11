export default function SectionHeading({ index, children }) {
  return (
    <h2 className="sec-head">
      <span className="idx">{index}</span>
      <span className="ttl">{children}</span>
      <span className="run" aria-hidden="true" />
    </h2>
  );
}
