import React from "react";
// If you're using a local image, uncomment the next line and adjust the path accordingly.
// import imagePostcase from "../../../Images/postcase.png";

const PostCaseSection = () => {
  return (
    <div className="flex flex-col mt-10 md:flex-row bg-[#F8F3E8] ">
      {/* Left Section (Text) */}
      <div className="w-full md:w-2/5 bg-[#E8BF78] p-8 md:p-16 flex items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#102A3D] mb-4">
            Post a case and <br /> connect with qualified lawyers <br />
            <span className="inline-block mt-1 text-[#102A3D]">instantly.</span>
          </h1>
          <p className="text-[#3D4C57] mb-6">
            Describe your legal needs, and our platform will connect you with
            experienced lawyers ready to assist. Review bids, compare expertise,
            and choose the best match—all in one secure platform.
          </p>
          <button className="bg-white text-black font-medium py-2 px-4 rounded-md shadow-sm hover:bg-primary hover transition">
            Post Your Case Now
          </button>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full md:w-3/5 flex justify-center items-center ">
        <div className="w-full h-full">
          <img
            src="https://plus.unsplash.com/premium_photo-1698084059560-9a53de7b816b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGF3eWVyfGVufDB8MHwwfHx8MA%3D%3D"
            alt="Juriph Illustration"
            className="w-full h-64 md:h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PostCaseSection;
