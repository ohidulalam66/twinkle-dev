import React, { useEffect, useState } from "react";
import "./Bar.css";
import { MdWbSunny } from "react-icons/md";
import { BsMoonStarsFill } from "react-icons/bs";

const Bar = ({ theme, setTheme }) => {
  // const [scroll, setScroll] = useState(false);

  // useEffect(() => {
  //   window.onscroll = () => {
  //     if (window.scrollY > 50) {
  //       setScroll(true);
  //     } else {
  //       setScroll(false);
  //     }
  //   };
  // }, []);

  return (
    <>
      <nav className="flex w-full mx-auto py-2 px-4 bg-slate-200 dark:bg-slate-900 shadow-lg navbar navbar-expand-lg navbar-light sticky top-0 z-50">
        <div className="container-fluid w-full">
          <img
            src="https://i.postimg.cc/q781QnjG/twinkle-dev.png"
            alt=""
            className="w-48"
          />
        </div>
        <div className="flex items-center">
          {theme === "light" ? (
            <BsMoonStarsFill
              size="30"
              className="cursor-pointer text-slate-900 dark:text-slate-200"
              onClick={() => setTheme("dark")}
            />
          ) : (
            <MdWbSunny
              size="30"
              className="cursor-pointer text-slate-900 dark:text-slate-200"
              onClick={() => setTheme("light")}
            />
          )}
        </div>
      </nav>
    </>
  );
};

export default Bar;
