import React from "react";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import Trusted from "./Components/Trusted";
import FeatureProduct from "./Components/FeatureProduct";

export default function Home() {
  const data = {
    name: "Ivyan Store",
  };

  return<> 
  <HeroSection myData={data} />
  <FeatureProduct />
  <Services />
  <Trusted />
  </>
};

// export default Home;
