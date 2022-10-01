import React from "react";
import "./HeroBar.css";
import { useTypewriter } from "react-simple-typewriter";
import HeroDP from "../../../../assets/HERO-2.png";
import { ImLinkedin } from "react-icons/im";
import { FaGithubSquare } from "react-icons/fa";
import { ImStackoverflow } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";

const HeroBar = () => {
  const { text: typeBio } = useTypewriter({
    words: ["Front-End", "React", "Mern Stack"],
    loop: 500,
  });

  const linkedInLink = "https://www.linkedin.com/in/mohammad-ohidul-alam/";
  const gitHubLink = "https://github.com/ohidulalam66";
  const stackOverFlowLink =
    "https://stackoverflow.com/users/16846197/mohammad-ohidul-alam";
  const twitterLink = "https://twitter.com/OaNoyon";

  return (
    <>
      <section id="home" className="snap-start text-center px-10 md:px-40">
        <span> -</span>
        <p className="text-xl mt-24">
          Hello I<span className="text-teal-600">'</span>m
        </p>
        <p className="text-teal-600 text-5xl font-secular">
          Mohammad Ohidul Alam
        </p>
        <p className="text-slate-400 text-2xl">
          <span className="text-slate-900 dark:text-slate-200">{typeBio}</span>{" "}
          Developer
        </p>
        <img
          src={HeroDP}
          alt="HeroDP"
          className="w-60 md:w-80 h-full mx-auto mt-6 overflow-hidden heroPic"
        />
        <div className="flex justify-center items-center gap-6 md:gap-16 text-3xl md:text-4xl bottom-3 my-6 socialLink">
          <a
            href={linkedInLink}
            className="hover:text-sky-700"
            target="_blank"
            rel="noreferrer"
          >
            <ImLinkedin />
          </a>
          <a
            href={gitHubLink}
            className="hover:text-green-500"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubSquare />
          </a>
          <a
            href={stackOverFlowLink}
            className="hover:text-yellow-600"
            target="_blank"
            rel="noreferrer"
          >
            <ImStackoverflow />
          </a>
          <a
            href={twitterLink}
            className="hover:text-sky-500"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitterSquare />
          </a>
        </div>
      </section>
    </>
  );
};

export default HeroBar;
