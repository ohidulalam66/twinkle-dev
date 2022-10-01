/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./Bar.css";
import { MdWbSunny } from "react-icons/md";
import { BsMoonStarsFill } from "react-icons/bs";
import { useTheme } from "../../../Hooks/useTheme";

const Bar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <nav className="flex w-9/12 navbar-expand-lg mx-auto py-2 px-4 bg-slate-900 dark:bg-slate-200 fixed top-0 rounded-3xl">
        <div className="container-fluid w-full">
          <img
            src="https://i.postimg.cc/66gQyDCs/ohid-DEV.png"
            alt="DEV"
            className="w-24"
          />
        </div>
        <div className="flex items-center">
          {theme === "light" ? (
            <BsMoonStarsFill
              size="30"
              className="cursor-pointer text-slate-200 dark:text-slate-900"
              onClick={() => setTheme("dark")}
            />
          ) : (
            <MdWbSunny
              size="30"
              className="cursor-pointer text-slate-200 dark:text-slate-900"
              onClick={() => setTheme("light")}
            />
          )}
        </div>
      </nav>
    </>
  );
};

export default Bar;
