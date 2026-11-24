import profilePhoto from "../assets/profile.jpg";

export default function Hero({ name, eyebrow, headline, intro, facts, now }) {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <p className="eyebrow rise" style={{ "--i": 0 }}>
        {eyebrow}
      </p>
      <h1 className="name rise" style={{ "--i": 1 }}>
        {name}
      </h1>

      <div className="hero-grid">
        <div className="hero-copy">
          <p className="tagline rise" style={{ "--i": 2 }}>
            {headline}
          </p>
          <div className="ledes rise" style={{ "--i": 3 }}>
            {intro.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
        <figure className="portrait rise" style={{ "--i": 2 }}>
          <div className="frame">
            <img
              src={profilePhoto}
              alt="Portrait of Shaheer Arif"
              width="480"
              height="640"
              loading="eager"
            />
          </div>
        </figure>
      </div>

      <dl className="facts rise" style={{ "--i": 4 }}>
        {facts.map((fact) => (
          <div key={fact.label}>
            <dt className="label">{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>

      <div className="now rise" style={{ "--i": 5 }}>
        <p className="label">{now.lead}</p>
        <p className="now-body">{now.body}</p>
      </div>
    </section>
  );
}
