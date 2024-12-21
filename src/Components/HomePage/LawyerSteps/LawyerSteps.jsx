import React from "react";
import Logo from "../../Images/stepslogo.png"; // Juriph logo path

const LawyerSteps = () => {
  return (
    <div className="bg-gradient-to-b from-[#E8BF78] to-[#F3D8A8] min-h-screen flex flex-col items-center justify-center p-8">
      <div className="flex flex-col gap-8 max-w-4xl w-full">
        {/* Top Section - For Clients */}
        <div className="  rounded-lg p-8 flex flex-col items-center md:flex-row">
          {/* Logo */}
          <div className="flex justify-center md:justify-start w-full md:w-1/3 mb-6 md:mb-0">
            <img src={Logo} alt="Juriph Logo" className="w-32 h-auto" />
          </div>

          {/* Content */}
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold text-[#3D4C57] text-center md:text-left">
              Easy Steps to Connect with{" "}
              <span className="text-[#E8BF78]">Trusted Lawyers</span>
            </h2>
            <p className="text-gray-600 mt-2 text-center md:text-left">
              Finding the right lawyer is easy with Juriph. Follow these simple
              steps:
            </p>

            <ol className="mt-4 space-y-4">
              <li className="flex items-start">
                <span className="bg-[#E8BF78] text-white font-bold w-8 h-8 flex items-center justify-center rounded-full mr-4">
                  1
                </span>
                <div>
                  <h3 className="font-bold text-[#3D4C57]">Post Your Case</h3>
                  <p className="text-gray-600 text-sm">
                    Share the details of your legal needs.
                  </p>
                </div>
              </li>
              {["Receive Bids", "Select Your Lawyer", "Discuss Your Case", "Pay Securely"].map(
                (step, index) => (
                  <li
                    key={index}
                    className="flex items-start text-gray-400"
                  >
                    <span className="bg-gray-200 font-bold w-8 h-8 flex items-center justify-center rounded-full mr-4">
                      {index + 2}
                    </span>
                    <div>
                      <h3 className="font-semibold">{step}</h3>
                    </div>
                  </li>
                )
              )}
            </ol>
          </div>
        </div>

        {/* Bottom Section - For Lawyers */}
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center md:flex-row">
          {/* Content */}
          <div className="w-full md:w-2/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-[#3D4C57] text-center md:text-left">
              How It Works for <span className="text-[#E8BF78]">Lawyers</span>
            </h2>
            <p className="text-gray-600 mt-2 text-center md:text-left">
              Expand your practice by easily connecting with clients in need of
              your expertise. Follow these simple steps:
            </p>

            <ol className="mt-4 space-y-4">
              <li className="flex items-start">
                <span className="bg-[#E8BF78] text-white font-bold w-8 h-8 flex items-center justify-center rounded-full mr-4">
                  1
                </span>
                <div>
                  <h3 className="font-bold text-[#3D4C57]">Sign Up</h3>
                  <p className="text-gray-600 text-sm">
                    Create your profile and share your expertise.
                  </p>
                </div>
              </li>
              {["Qualify", "Browse Cases", "Place Bids", "Get Paid"].map(
                (step, index) => (
                  <li
                    key={index}
                    className="flex items-start text-gray-400"
                  >
                    <span className="bg-gray-200 font-bold w-8 h-8 flex items-center justify-center rounded-full mr-4">
                      {index + 2}
                    </span>
                    <div>
                      <h3 className="font-semibold">{step}</h3>
                    </div>
                  </li>
                )
              )}
            </ol>
          </div>

          {/* Logo */}
          <div className="flex justify-center md:justify-end w-full md:w-1/3">
            <img src={Logo} alt="Juriph Logo" className="w-32 h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerSteps;
