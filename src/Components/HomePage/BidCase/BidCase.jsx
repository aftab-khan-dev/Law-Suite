import React from "react";

const BidCase = () => {
  return (
    <div className="flex flex-col md:flex-row  bg-[#FDFBF5]">
      {/* Left Section with Image */}
      <div className="w-full md:w-3/5 flex justify-center items-center">
        <div className="w-full h-full">
          {/* External Image */}
          <img
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGF3eWVyfGVufDB8MHwwfHx8MA%3D%3D"
            alt="Bid Case Illustration"
            className="w-full h-64 md:h-auto object-cover"
          />
        </div>
      </div>

      {/* Right Section with Text Content */}
      <div className="w-full md:w-2/5 bg-[#E8BF78] flex items-center p-8 md:p-16">
        <div>
          <p className="text-sm text-gray-800 mb-2">If you are a Lawyer</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#102A3D] mb-4">
            Bid on cases <br /> matching your skills and <br />
            grow your practice.
          </h1>
          <p className="text-[#3D4C57] mb-6 leading-relaxed">
            Sign up to discover cases that match your skills. Bid on
            opportunities, communicate securely with clients, and build your
            reputation—all while managing your practice efficiently.
          </p>
          <button className="bg-white text-black font-medium py-2 px-6 rounded-md shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-yellow-500 transition">
            Sign Up as a Lawyer
          </button>
        </div>
      </div>
    </div>
  );
};

export default BidCase;
