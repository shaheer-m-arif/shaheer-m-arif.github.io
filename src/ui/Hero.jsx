import { ScopeTrace } from "./icons.jsx";
import profilePhoto from "../assets/profile.jpg";

export default function Hero({ headline, intro, now }) {
  return (
    <div className="open">
      <div className="open-grid">
        <div className="open-text">
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
        <div className="open-photo">
          <img
            src={profilePhoto}
            alt="Portrait of Shaheer Arif"
            width="480"
            height="640"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
}
