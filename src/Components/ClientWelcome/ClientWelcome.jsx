import React from "react";
import logo from "../../Images/logo.png";
import { useNavigate } from "react-router-dom";

const ClientWelcome = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Section */}
      <div className="bg-white flex-1 flex flex-col justify-center items-center p-8">
        <div className="text-center">
          <img src={logo} alt="Juriph Logo" className="w-20 mx-auto mb-4" />{" "}
          {/* Replace with actual logo path */}
          <h1 className="text-2xl font-semibold mb-4">Welcome to Juriph!</h1>
          <p className="text-gray-600 text-2xl mb-8">
            We're here to help you connect with the right lawyer for your needs.
            Before you get started, we just need a bit more information about
            your legal requirements to personalize your experience.
          </p>
          <button
            onClick={() => navigate("/clientscreen1")}
            className="bg-primary text-white py-2 w-[65%] rounded hover:bg-cream transition"
          >
            Next
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-primary flex-1 flex flex-col justify-center items-center p-8">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-6">
            Juriph - Where clients and lawyers connect effortlessly.
          </h2>
          <div className="flex justify-center items-center space-x-6">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center shadow">
                <img
                  src="/law-book-icon.svg"
                  alt="Law Book"
                  className="w-6 h-6"
                />{" "}
                {/* Replace with actual icon path */}
              </div>
              <p className="text-gray-600">Law</p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center shadow">
                <img src="/scale-icon.svg" alt="Scale" className="w-6 h-6" />{" "}
                {/* Replace with actual icon path */}
              </div>
              <p className="text-gray-600">Scale</p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center shadow">
                <img
                  src="/hourglass-icon.svg"
                  alt="Hourglass"
                  className="w-6 h-6"
                />{" "}
                {/* Replace with actual icon path */}
              </div>
              <p className="text-gray-600">Time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientWelcome;
