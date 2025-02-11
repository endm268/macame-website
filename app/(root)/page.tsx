import Hero from "@/components/sections/heros/Hero";
import Services from "@/components/sections/Services";
import SocialMediaPostsDesigns from "@/components/sections/SocialMediaPostsDesigns";
import Statistics from "@/components/sections/Statistics";
import VideoPlayer from "@/components/sections/vedioplayer";
import Voiceover from "@/components/sections/Voiceover";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      <Hero />
      <Services />
      {/* <SocialMediaPostsDesigns /> */}
      <VideoPlayer />
      <Voiceover />
      <Statistics />
    </div>
  );
};

export default Home;
