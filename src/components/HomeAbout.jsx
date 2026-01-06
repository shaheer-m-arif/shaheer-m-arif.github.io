import React from "react";

export default function HomeAbout() {
  return (
    <section id="about" className="split">
      <div className="about-copy">
        <h2 className="welcome">Welcome!</h2>
        <p className="lead">Here’s a little about me:</p>

        <p className="glow">
        <strong>Where:</strong> Born and raised in Jeddah, Saudi Arabia, currently
        pursuing a BSc in Electrical Engineering at the University of Calgary.
        </p>

        <p className="glow">
        <strong>When:</strong> My passion for electronics started early whether it was tinkering
        with circuits, modifying gadgets, and exploring how systems fit together,
        especially in cars and consumer tech.
        </p>

        <p className="glow">
        <strong>How:</strong> I combine strong fundamentals in electronics and coding
        with hands-on builds which includes embedded systems, mobile apps, and automation tools.  
          I love creating practical solutions that make life easier and more fun.
        </p>

        <p className="muted">
          Well that’s the quick version, use the navigation bar above to explore my
          projects, experience, skills, and contact.
        </p>
      </div>

      <aside className="skillsWrap">
        <h3 className="skillsHeading">Skills</h3>

        <div className="skillsCards">
          <div className="skillCard">
            <div className="skillCardTitle">Languages</div>
            <div className="skillCardDesc">C, Python, JavaScript, Java, SystemVerilog</div>
          </div>

          <div className="skillCard">
            <div className="skillCardTitle">Frameworks</div>
            <div className="skillCardDesc">React, React Native, Node.js</div>
          </div>

          <div className="skillCard">
            <div className="skillCardTitle">Tools + Hardware</div>
            <div className="skillCardDesc">
              Git, Vite, Vivado, LTspice, Multisim, AVR, I2C, Arduino, RaspberryPi, RF
            </div>
          </div>
        </div>
      </aside>
      <style>{`
        .skillsWrap {
          display: flex;
          flex-direction: column;
          gap: 18px;
          padding: 0;
          max-width: 600px;
          width: 100%;
        }

        .skillsHeading {
          margin: 0;
          font-size: 35px;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.92);
          letter-spacing: 0.01em;
          margin-bottom: 10px;
        }

        .skillsCards {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        /* Individual cards (no outer enclosing box) */
        .skillCard {
          border-radius: 16px;
          padding: 20px 22px;
          background: rgba(20, 18, 40, 0.55);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.22);
          backdrop-filter: blur(10px);
        }

        .skillCardTitle {
          font-size: 16px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.88);
          margin-bottom: 8px;
        }

        .skillCardDesc {
          font-size: 15px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.75);
        }
      `}</style>
    </section>
  );
}