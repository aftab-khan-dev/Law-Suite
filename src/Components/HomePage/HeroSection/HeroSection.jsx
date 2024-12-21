import React from "react";
import Heroimage from "../../../Images/heroimage.png";

const HeroSection = () => {
  return (
    <div className="w-full bg-white px-8 md:px-12 py-20">
      {/* Container */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="md:w-4/12 -mt-9">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Find the <span className="text-gold">Right Lawyer</span> for Your
            Case, <span className="text-gold">Anywhere</span> in the World
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Connect with trusted lawyers worldwide. Whether you need legal
            advice or want to offer your expertise, Juriph makes it simple and
            secure.
          </p>
          <div className="mt-6 flex flex-col w-72 sm:flex-col gap-4">
            <button className="bg-primary text-white  px-6 py-2 rounded-md hover:bg-transparent transition-all duration-300 border-primary border  hover:text-black ">
              Post a Case
            </button>
            <button className="border border-gold text-gray-800 px-6 py-2 rounded-md transition-all duration-300 hover:text-white hover:bg-primary">
              Sign Up as Lawyer
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <div className="relative">
            <img
              src={Heroimage}
              alt="Juriph Logo"
              className="h-auto w-80 md:w-[100%]"
            />
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-1/2 flex flex-col items-center rounded-lg  ">
          {/* Search Input */}
          <div className="flex items-center w-full rounded-md p-2 bg-white">
            <input
              type="text"
              placeholder="Find Lawyers by Specialty, Location, or Keywords"
              className="w-full outline-none border border-gray-500 rounded-tl-md rounded-bl-md  text-gray-600"
            />
            <select className=" bg-white text-gray-600  border border-gray-500 rounded-tr-md rounded-br-md outline-none ">
              <option>Skill</option>
              <option>Location</option>
              <option>Keyword</option>
            </select>
          </div>

          {/* Search Button */}
          <button className="mt-4 ml-2 bg-gold text-white px-6 py-2 rounded-md hover:bg-yellow-500 self-start">
            Search
          </button>
        </div>

        {/* Bottom Section */}
        <div className="w-full md:w-4/12 text-center md:text-left mr-10 ">
          <h2 className="text-2xl md:text-3xl pt-3  font-bold text-gray-900">
            Start your search by specifying{" "}
            <span className="text-gold">your needs</span>.
          </h2>
          <p className="mt-2 text-gray-600 ">
            Find the right lawyer based on specialty, budget, or location.
            Quickly connect with qualified legal professionals tailored to your
            case.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
