/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./MenuBar.css";

const MenuBar = () => {
  const Menus = [
    { name: "Home", href: "#", icon: "home", dis: "translate-x-0" },
    {
      name: "Portfolio",
      href: "#portfolio",
      icon: "document",
      dis: "translate-x-16",
    },
    {
      name: "Blog",
      href: "#blog",
      icon: "book",
      dis: "translate-x-32",
    },
    {
      name: "Experience",
      href: "#experience",
      icon: "analytics",
      dis: "translate-x-48",
    },
    {
      name: "About",
      href: "#about",
      icon: "information-circle",
      dis: "translate-x-64",
    },
    {
      name: "Contact",
      href: "#contact",
      icon: "person",
      dis: "translate-x-80",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <div className="flex justify-center opacity-80 menu">
      <div className="flex justify-center bg-slate-900 dark:bg-slate-200 text-slate-200 dark:text-slate-900 max-h-[4.4rem] w-96 md:w-auto rounded-2xl">
        <ul className="flex relative">
          <span
            className={`bg-teal-600 duration-500 ${Menus[active].dis} border-4 border-slate-900 dark:border-slate-200 h-16 w-16 absolute
         -top-5 rounded-full`}
          ></span>
          {Menus.map((menu, i) => (
            <li key={i} className="w-16">
              <a
                href={menu.href}
                className="flex flex-col text-center pt-6"
                onClick={() => setActive(i)}
              >
                <span
                  className={`text-xl cursor-pointer duration-500 ${
                    i === active && "-mt-6"
                  }`}
                >
                  <ion-icon name={menu.icon}></ion-icon>
                </span>
                <span
                  className={` ${
                    active === i
                      ? "translate-y-4 duration-700 opacity-100"
                      : "opacity-0 translate-y-10"
                  } `}
                >
                  {menu.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuBar;
