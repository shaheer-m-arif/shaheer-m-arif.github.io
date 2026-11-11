import profilePhoto from "../assets/profile.jpg";

export default function Hero({ headline, intro, readout, now }) {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="hero-main">
        <div className="hero-copy">
          <p className="tag rise" style={{ "--i": 0 }}>
            Electrical engineering and software
          </p>
          <h1 className="rise" style={{ "--i": 1 }}>
            {headline}
          </h1>
          {intro.map((para, i) => (
            <p className="lede rise" style={{ "--i": 2 + i }} key={i}>
              {para}
            </p>
          ))}
        </div>
        <figure className="hero-photo rise" style={{ "--i": 2 }}>
          <img
            src={profilePhoto}
            alt="Portrait of Shaheer Arif"
            width="480"
            height="640"
            loading="eager"
          />
        </figure>
      </div>

      <dl className="readout rise" style={{ "--i": 4 }}>
        {readout.map((cell) => (
          <div className="cell" key={cell.label}>
            <dt>{cell.label}</dt>
            <dd>
              {cell.live && <i className="led" aria-hidden="true" />}
              {cell.value}
            </dd>
          </div>
        ))}
      </dl>

      <p className="now rise" style={{ "--i": 5 }}>
        <b>{now.lead}</b>
        {now.body}
      </p>
    </section>
  );
}
