import React from "react";
import MenuBar from "../../Shared/MenuBar/MenuBar";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Experience from "./Experience/Experience";
import HeroBar from "./HeroBar/HeroBar";
import TopBlog from "./TopBlog/TopBlog";
import TopPortfolio from "./TopPortfolio/TopPortfolio";

const Home = () => {
  return (
    <>
      <HeroBar />
      <TopPortfolio />
      <TopBlog />
      <Experience />
      <About />
      <Contact />
      <MenuBar />
    </>
  );
};

export default Home;
