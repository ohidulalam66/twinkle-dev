import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bar from "./Components/Shared/Bar/Bar";
import Home from "./Components/Pages/Home/Home";
import Blogs from "./Components/Pages/Blogs/Blogs";
import Portfolios from "./Components/Pages/Portfolios/Portfolios";
import Footer from "./Components/Shared/Footer/Footer";
import { useTheme } from "./Hooks/useTheme";

const App = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="snap-y h-screen overflow-scroll overflow-x-hidden">
      <BrowserRouter>
        <Bar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/portfolios" element={<Portfolios />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
