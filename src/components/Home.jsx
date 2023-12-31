import React from "react";
import myPicture from "../assets/picture2.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-4xl font-bold text-white mt-32">
            My name is Yuanyuan Wang <br/>I'm a <span className="text-blue-300 text-6xl">Front End Developer</span>
          </h2>
          <p className="text-gray-400 py-4 max-w-md font-thin">
            I'm currently a Grad Student studying
            Computer Science in Boston University. I love to work on web
            application using technologies like React, Tailwind, JaveScript,
            TypeScript, Next JS.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 mt-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={20} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={myPicture}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
