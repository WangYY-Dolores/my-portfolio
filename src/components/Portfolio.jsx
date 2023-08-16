import React from "react";
import umpscore from "../assets/portfolio/umpscore.png";
import warehouse from "../assets/portfolio/warehouse.png";
import weather from "../assets/portfolio/weather.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: umpscore,
      demo: "https://www.umpscores.com/",
      code: "https://github.com/umpscores/refrating-fe",
    },
    {
      id: 2,
      src: warehouse,
      demo: "https://github.com/WangYY-Dolores/warehouseWeb",
      code: "https://github.com/WangYY-Dolores/warehouseWeb",
    },
    {
      id: 3,
      src: weather,
      demo: "https://github.com/WangYY-Dolores/weather-app",
      code: "https://github.com/WangYY-Dolores/weather-app",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black via-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-300 hover:scale-110"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110 font-light">
                  <a rel="noreferrer" target="_blank" href={demo}>Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110 font-light">
                  <a rel="noreferrer" target="_blank" href={code}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
