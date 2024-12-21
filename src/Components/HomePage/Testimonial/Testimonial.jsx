import React, { useState } from "react";
import NickImage from "../../../Images/Nick.png"; 
import Yusraimage from "../../../Images/umar-ben-ZGQKW-nIW8o-unsplash.jpg"

const Testimonial = () => {
  // State to track the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of testimonials (You can add more testimonials here)
  const testimonials = [
    {
      name: "Nick Johnson",
      destination: "Destination goes here",
      text:
        "“Lorem ipsum dolor sit amet consectetur. Pellentesque sapien in eu id. Vel imperdiet nunc commodo cursus nunc augue eu. Non in sit pretium non turpis eu sit. Molestie a nec sed nulla. Aliquam vitae eget cras fermentum et aliquet magna augue auctor. Eget elit sed.”",
      image: NickImage,
    },
    // You can add more testimonials here with similar structure
    {
      name: "Yusra Bashir",
      destination: "destination",
      text: "“Lorem ipsum dolor sit amet consectetur. Pellentesque sapien in eu id. Vel imperdiet nunc commodo cursus nunc augue eu. Non in sit pretium non turpis eu sit. Molestie a nec sed nulla. Aliquam vitae eget cras fermentum et aliquet magna augue auctor. Eget elit sed.”",
      image: Yusraimage,
    }
  ];

  // Handle the next slide (right arrow)
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  // Handle the previous slide (left arrow)
  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="bg-white flex flex-col mt-10 mb-10 items-center justify-center p-8">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-[#2A3841]">
          What Our Users Are Saying
        </h2>
        <p className="text-gray-500 mt-2">
          Real experiences from clients and lawyers who have found success with
          Juriph.
        </p>
      </div>

      {/* Testimonial Card */}
      <div className="bg-[#FFF9F1] rounded-lg shadow-md p-6 flex flex-col md:flex-row w-full max-w-7xl relative">
        {/* Left - Image */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 flex justify-center">
          <img
            src={testimonials[currentSlide].image}
            alt={testimonials[currentSlide].name}
            className="rounded-lg object-cover w-80 h-80"
          />
        </div>

        {/* Right - Content */}
        <div className="w-full md:w-2/3 flex flex-col justify-center">
          <h3 className="text-[#286B5E] font-bold text-lg">
            {testimonials[currentSlide].name}
          </h3>
          <p className="text-gray-400 mb-2 text-sm">
            {testimonials[currentSlide].destination}
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            {testimonials[currentSlide].text}
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute bottom-6 right-6 flex gap-4">
          <button
            onClick={prevSlide}
            className="px-4 py-2 border rounded-md flex items-center justify-center text-gray-400 hover:text-[#286B5E] hover:border-[#286B5E] transition"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="px-4 py-2 border rounded-md flex items-center justify-center text-gray-400 hover:text-[#286B5E] hover:border-[#286B5E] transition"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
