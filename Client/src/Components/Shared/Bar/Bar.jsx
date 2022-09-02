import React from "react";
import { MdWbSunny } from "react-icons/md";
import { BsMoonStarsFill } from "react-icons/bs";

const Bar = ({ theme, setTheme }) => {
  return (
    <>
      <nav className="relative w-full flex flex-wrap items-center justify-between py-4 bg-teal-600 shadow-lg">
        <div className="w-full flex flex-wrap items-center justify-between px-6">
          <div>
            <img
              src="https://i.postimg.cc/8CRHM2dR/Rat.png"
              className="w-16"
              alt="..."
            />
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
        </div>
      </nav>
    </>
  );
};

export default Bar;
