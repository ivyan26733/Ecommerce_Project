import React, { useContext } from "react";
import HeroSection from "./components/HeroSection";
import { useProductProvider } from "./context/ProductContext";

const About = () => {

  const data = {
    name: "Ivyan Ecommerce",
  };

  return <>
  <HeroSection myData={data} />
  </>;
};

export default About;