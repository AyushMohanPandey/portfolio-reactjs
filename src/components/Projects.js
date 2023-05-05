import React from "react";
import calculator from "../images/calculator.png";
import counter from "../images/counter.png";
import menu from "../images/menu.png";
import weather from "../images/weather.png";
import todolist from "../images/todolist.png";
import portfolio from "../images/portfolio.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: calculator,
      demo: "https://ayushmohanpandey.github.io/Calculator-reactjs/",
      link: "https://github.com/AyushMohanPandey/Calculator-reactjs"
    },
    {
      id: 2,
      src: counter,
      demo: "https://ayushmohanpandey.github.io/counter-hooks-reactjs/",
      link: "https://github.com/AyushMohanPandey/counter-hooks-reactjs"
    },
    {
      id: 3,
      src: menu,
      demo: "https://ayushmohanpandey.github.io/React-Projects/",
      link: "https://github.com/AyushMohanPandey/React-Projects"
    },
    {
      id: 4,
      src: todolist,
      demo: "https://ayushmohanpandey.github.io/to-do-list-reactjs/",
      link: "https://github.com/AyushMohanPandey/to-do-list-reactjs"
    },
    {
      id: 5,
      src: weather,
      demo: "https://ayushmohanpandey.github.io/weather-app-reactjs/",
      link: "https://github.com/AyushMohanPandey/weather-app-reactjs"
    },
    {
      id: 6,
      src: portfolio,
      demo: "https://ayushmohanpandey.github.io/portfolio-reactjs/",
      link: "https://github.com/AyushMohanPandey/portfolio-reactjs"
    },
  ];


  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, link }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button onClick={() => { window.location.href = demo}} className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button onClick={() => { window.location.href = link }} className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105">
                  Code
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