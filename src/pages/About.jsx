import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
const About = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | ZeeCare Medical Institute"}
        imgUrl={"/about.png"}
      />
      <Biography imgUrl={"/whoweare.png"} />
    </>
  );
};

export default About;