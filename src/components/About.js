import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
        Recent Btech CSE graduate looking for an opportunity in Software Development. <br />
        Strong in design and integration with intuitive problem-solving skills. <br />
        Passionate about implementing and launching new projects. <br />
        Ability to translate business requirements into technical solutions. <br /> 
        Looking to start my career as an entry-level software engineer or front-end developer with a reputed 
        firm driven by technology.
        </p>

      </div>
    </div>
  );
};

export default About;
