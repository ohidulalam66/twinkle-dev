import React from "react";
import { MdWbSunny } from "react-icons/md";
import { BsMoonStarsFill } from "react-icons/bs";
import { useTheme } from "./Hooks/useTheme";

const App = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      {theme === "light" ? (
        <BsMoonStarsFill size="30" onClick={() => setTheme("dark")} />
      ) : (
        <MdWbSunny
          size="30"
          className="cursor-pointer text-slate-200"
          onClick={() => setTheme("light")}
        />
      )}
    </div>
  );
};

export default App;
