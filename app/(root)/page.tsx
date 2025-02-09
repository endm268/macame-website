import Hero from "@/components/sections/heros/Hero";
import Services from "@/components/sections/Services";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      <Hero />
      <Services />
    </div>
  );
};

export default Home;
