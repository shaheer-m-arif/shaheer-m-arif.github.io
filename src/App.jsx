import {
  profile,
  work,
  roles,
  background,
  capabilities,
  links,
  nav,
} from "./data/content.js";
import StatusBar from "./ui/StatusBar.jsx";
import Hero from "./ui/Hero.jsx";
import BackgroundSection from "./ui/BackgroundSection.jsx";
import WorkSection from "./ui/WorkSection.jsx";
import ExperienceSection from "./ui/ExperienceSection.jsx";
import ContactSection from "./ui/ContactSection.jsx";
import Footer from "./ui/Footer.jsx";

export default function App() {
  return (
    <>
      <a className="skip" href="#background">
        Skip to content
      </a>
      <StatusBar name={profile.name} nav={nav} />
      <main className="page">
        <Hero
          headline={profile.headline}
          intro={profile.intro}
          readout={profile.readout}
          now={profile.now}
        />
        <BackgroundSection paragraphs={background} capabilities={capabilities} />
        <WorkSection items={work} />
        <ExperienceSection roles={roles} />
        <ContactSection links={links} />
      </main>
      <Footer name={profile.name} location={profile.location} />
    </>
  );
}
