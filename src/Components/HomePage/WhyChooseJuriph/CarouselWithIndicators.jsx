import React from "react";

// Import your image if it's a local file
import NickImage from '../../../Images/Nick.png';  // Add the correct path to your image file

const Slider = () => {
    return (
        <div className="bg-gray-50 flex flex-col items-center justify-center p-8">
            <div className="bg-[#FFF9F1] rounded-lg shadow-md p-6 flex flex-col md:flex-row w-full max-w-4xl">
                {/* Left - Image */}
                <div className="w-full md:w-1/1 mb-4 md:mb-0 flex justify-center">
                    <img
                        src={NickImage}  // This will now work if the image is imported correctly
                        alt="Nick Johnson"
                        className="rounded-lg object-cover w-40 h-40"
                    />
                </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-4 mt-6">
                <button className="w-10 h-10 border rounded-full flex items-center justify-center text-gray-400 hover:text-[#286B5E] hover:border-[#286B5E] transition">
                    ←
                </button>
                <button className="w-10 h-10 border rounded-full flex items-center justify-center text-gray-400 hover:text-[#286B5E] hover:border-[#286B5E] transition">
                    →
                </button>
            </div>
        </div>
    );
};

export default Slider;
