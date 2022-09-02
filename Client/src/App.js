import React from "react";
import HeroBar from "./Components/Pages/Home/HeroBar/HeroBar";
import MenuBar from "./Components/Shared/MenuBar/MenuBar";
import About from "./Components/Pages/Home/About/About";
import TopPortfolio from "./Components/Pages/Home/TopPortfolio/TopPortfolio";
import TopBlog from "./Components/Pages/Home/TopBlog/TopBlog";
import Experience from "./Components/Pages/Home/Experience/Experience";
import Contact from "./Components/Pages/Home/Contact/Contact";
import Footer from "./Components/Shared/Footer/Footer";
import { MdWbSunny } from "react-icons/md";
import { BsMoonStarsFill } from "react-icons/bs";
import { useTheme } from "./Hooks/useTheme";

const App = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="px-10 md:px-40 snap-y h-screen overflow-scroll overflow-x-hidden">
      {theme === "light" ? (
        <BsMoonStarsFill
          size="30"
          className="cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      ) : (
        <MdWbSunny
          size="30"
          className="cursor-pointer text-slate-200"
          onClick={() => setTheme("light")}
        />
      )}
      <HeroBar />
      <MenuBar />
      <TopPortfolio />
      <TopBlog />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
