// src/Components/EasySteps.jsx

import React, { useState, useEffect } from "react";
import images from "../../../Assets/data/StepsImg"; // Adjust the path based on your project structure

const steps = [
  {
    id: 1,
    title: "Post Your Case",
    description: "Share the details of your legal needs.",
    image: images[0],
  },
  {
    id: 2,
    title: "Receive Bids",
    description: "Lawyers bid on your case based on their expertise.",
    image: images[1],
  },
  {
    id: 3,
    title: "Select Your Lawyer",
    description: "Choose the best lawyer for your case.",
    image: images[2],
  },
  {
    id: 4,
    title: "Discuss Your Case",
    description: "Communicate directly with your selected lawyer.",
    image: images[3],
  },
  {
    id: 5,
    title: "Pay Securely",
    description: "Complete transactions safely and securely.",
    image: images[4],
  },
];

const EasySteps = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true); // State to control fade effect

  // Function to go to the next slide with fade transition
  const nextSlide = () => {
    setFade(false); // Start fade-out
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % steps.length);
      setFade(true); // Start fade-in
    }, 500); // Duration should match the CSS transition duration
  };

  // Automatically change the slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  // Function to go to a specific slide
  const goToSlide = (index) => {
    if (index === currentIndex) return; // Do nothing if the same slide is clicked
    setFade(false); // Start fade-out
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(true); // Start fade-in
    }, 500); // Duration should match the CSS transition duration
  };

  return (
    <div className="bg-gradient-to-b from-[#F3D8A8] to-[#E8BF78] py-10 flex items-center justify-center ">
      <div className="flex  flex-col md:flex-row-reverse rounded-lg  md:p-0 max-w-[89rem] w-full ">
        {/* Left Section - Image Slider */}
        <div className="w-full md:w-4/5  md:ml-20 flex justify-center items-center rounded-lg relative">
          {steps.length > 0 && (
            <img
              src={steps[currentIndex].image}
              alt={`Step ${steps[currentIndex].id} - ${steps[currentIndex].title}`}
              className={`w-full h-96 md:h-auto object-cover rounded-lg transition-opacity duration-500 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            />
          )}
        </div>

        {/* Right Section - Steps List */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <h2 className="text-3xl md:text-5xl font-bold text-[#3D4C57]">
            How It works For Lawyers
            <span className="text-white">Trusted Clients</span>
          </h2>
          <p className="text-gray-600 mt-4">
            Finding the right lawyer is easy with Juriph. Follow these simple
            steps:
          </p>

          {/* Steps List */}
          <ol className="mt-6 space-y-6">
            {steps.map((step, index) => (
              <li
                key={step.id}
                className={`flex items-start ${
                  index === currentIndex ? "text-[#3D4C57]" : "text-gray-400"
                } transition-colors duration-300`}
              >
                <span
                  className={`w-8 h-8 flex items-center justify-center rounded-full mr-4 ${
                    index === currentIndex
                      ? "bg-[#E8BF78] text-white"
                      : "bg-gray-200 text-gray-600"
                  } font-bold`}
                >
                  {step.id}
                </span>
                <div>
                  <h3
                    className={`${
                      index === currentIndex
                        ? "font-bold text-[#3D4C57]"
                        : "font-semibold text-gray-600"
                    }`}
                  >
                    {step.title}
                  </h3>
                  {/* Explanatory Line */}
                  {index === currentIndex && (
                    <p className="text-gray-600 text-sm mt-1">
                      {step.description}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default EasySteps;
