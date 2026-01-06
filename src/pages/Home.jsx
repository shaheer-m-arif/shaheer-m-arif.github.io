import React from "react";
import Hero from "../components/Hero.jsx";
import HomeAbout from "../components/HomeAbout.jsx";

export default function Home() {
  return (
    <main className="container">
      <Hero />
      <HomeAbout />
    </main>
  );
}