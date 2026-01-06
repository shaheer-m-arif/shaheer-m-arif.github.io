import TypewriterTitle from "./TypewriterTitle";

export default function PageTitle({ text, sizePt = 7 }) {
  return (
    <h2 style={{ fontSize: `calc(1em + ${sizePt}pt)` }}>
      <TypewriterTitle text={text} />
    </h2>
  );
}