import React, { useState, useEffect } from "react";
import images from "../../../Assets/data/homeIMG"; // Ensure this path is correct based on your project structure

const WhyChooseJuriph = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true); // State to control fade effect

  // Function to go to the next slide with fade transition
  const nextSlide = () => {
    setFade(false); // Start fade-out
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(true); // Start fade-in
    }, 1000); // Duration should match the CSS transition duration
  };

  // Function to go to the previous slide with fade transition
  const prevSlide = () => {
    setFade(false); // Start fade-out
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
      setFade(true); // Start fade-in
    }, 1000); // Duration should match the CSS transition duration
  };

  // Automatically change the slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-white">
      {/* Left Section */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold text-[#102A3D] mb-6">
          Why Choose <span className="text-[#E8BF78]">Juriph?</span>
        </h2>

        <ul className="space-y-6">
          <li className="flex items-start">
            <i className="fa-solid fa-shield-quartered text-[#E8BF78] text-2xl mr-4"></i>
            <div>
              <h3 className="font-bold text-[#3D4C57]">Secure Payments:</h3>
              <p className="text-gray-600">
                Ensuring financial safety for all transactions.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <i className="fa-brands fa-rocketchat text-[#E8BF78] text-2xl mr-4"></i>
            <div>
              <h3 className="font-bold text-[#3D4C57]">Private Chat:</h3>
              <p className="text-gray-600">
                Seamless communication between clients and lawyers.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <i className="fa-solid fa-earth-americas text-[#E8BF78] text-2xl mr-4"></i>
            <div>
              <h3 className="font-bold text-[#3D4C57]">
                Global Accessibility:
              </h3>
              <p className="text-gray-600">
                Connect with lawyers and clients worldwide.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <i className="fa-solid fa-books text-[#E8BF78] text-2xl mr-4"></i>
            <div>
              <h3 className="font-bold text-[#3D4C57]">
                Effortless Case Management:
              </h3>
              <p className="text-gray-600">
                Streamlined workflows for both parties.
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="bg-white flex flex-col items-center justify-center md:w-1/3">
        <div className="bg-white rounded-lg flex flex-col md:flex-row w-full max-w-6xl">
          {/* Image */}
          <div className="w-full flex justify-center mb-4 md:mb-0">
            {images.length > 0 ? (
              <img
                src={images[currentIndex]} // Display current image
                alt={`Slide ${currentIndex + 1}`}
                className={`w-full h-96 md:h-[28rem] object-cover rounded-lg transition-opacity duration-500 ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
              />
            ) : (
              <div className="w-full h-96 md:h-auto flex items-center justify-center bg-gray-200 rounded-lg">
                <p>No images available</p>
              </div>
            )}
          </div>
        </div>

        {/* Dot Navigation */}
        <div className="flex gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setFade(false); // Start fade-out
                setTimeout(() => {
                  setCurrentIndex(index);
                  setFade(true); // Start fade-in
                }, 1000); // Duration should match the CSS transition duration
              }}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-gold" : "bg-gray-400"
              } transition`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseJuriph;
