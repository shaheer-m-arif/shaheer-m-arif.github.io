// Roman numeral in brass, a large light serif title, and a hairline.
export default function SectionHeading({ numeral, children }) {
  return (
    <div className="sec-head">
      <span className="numeral" aria-hidden="true">
        {numeral}
      </span>
      <h2>{children}</h2>
    </div>
  );
}
