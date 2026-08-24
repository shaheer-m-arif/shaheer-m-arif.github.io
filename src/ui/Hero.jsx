import { ScopeTrace } from "./icons.jsx";

export default function Hero({ headline, intro, now }) {
  return (
    <div className="open">
      <h1>{headline}</h1>
      {intro.map((para, i) => (
        <p className="sub" key={i}>
          {para}
        </p>
      ))}
      <ScopeTrace />
      <p className="now">
        <b>{now.lead}</b> {now.body}
      </p>
    </div>
  );
}
