import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10 ">
          Hey there! I'm Yuanyuan Wang, currently studying Computer Science at
          Boston University and working as a Front end Developer Intern at SkyIt
          remotely. I've always found great joy in solving complex problems and
          converting them into simple, elegant web applications.
        </p>

        <br />

        <p className="text-xl">
          While I'm not engaged in coding or academic pursuits, you might find
          me expressing my creativity through music and instruments. A long last
          friend - My guitar is always my comfort, I've made some songs while
          playing it. These hobbies not only provide an enjoyable pastime, but
          also inspire my approach to web development, bringing a unique
          perspective to my work.
        </p>
      </div>
    </div>
  );
};

export default About;
