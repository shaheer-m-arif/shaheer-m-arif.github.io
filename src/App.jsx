import { profile, work, roles, background, links, nav } from "./data/content.js";
import Header from "./ui/Header.jsx";
import Hero from "./ui/Hero.jsx";
import WorkSection from "./ui/WorkSection.jsx";
import ExperienceSection from "./ui/ExperienceSection.jsx";
import BackgroundSection from "./ui/BackgroundSection.jsx";
import ContactSection from "./ui/ContactSection.jsx";
import Footer from "./ui/Footer.jsx";

export default function App() {
  return (
    <div className="page">
      <Header name={profile.name} nav={nav} />
      <Hero headline={profile.headline} intro={profile.intro} now={profile.now} />
      <WorkSection items={work} />
      <ExperienceSection roles={roles} />
      <BackgroundSection paragraphs={background} />
      <ContactSection links={links} />
      <Footer name={profile.name} location={profile.location} />
    </div>
  );
}
