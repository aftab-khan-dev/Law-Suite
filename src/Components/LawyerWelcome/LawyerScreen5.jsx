import React, { useState } from "react";
import axios from "axios";
import logo from "../../Images/logo.png"; // Update with the correct path to your logo

const LawyerScreenFive = () => {
  const [bio, setBio] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [approval, setApproval] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if required fields are filled
    if (!approval) {
      setError("Please select your approval status.");
      return;
    }

    const formData = new FormData();
    formData.append("bio", bio);
    if (profilePic) {
      formData.append("profilePic", profilePic);
    }
    formData.append("approval", approval);

    // Log FormData for debugging
    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      // Send data to a dummy API (replace with your actual API URL)
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formData
      );
      console.log("Response data:", response.data); // Log the response data from the API
      setError(""); // Clear any previous errors
    } catch (error) {
      console.error("Error submitting data:", error);
      setError("Error submitting data. Please try again.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Side Form */}
      <div className="w-full md:w-1/2 py-20 bg-white p-8">
        <div className="max-w-lg mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img src={logo} alt="Logo" className="h-16" />
          </div>

          {/* Error Message */}
          {error && <div className="text-red-600 mb-4">{error}</div>}

          {/* Form */}
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Would you like to add a brief bio for your profile? (Optional)
          </h2>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="I’m a seasoned business lawyer with 5+ years of experience helping startups and SMEs navigate legal challenges."
            className="w-full p-3 border border-gray-300 rounded mb-6 focus:outline-none focus:ring-2 focus:ring-gold"
            rows="4"
          ></textarea>

          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Upload a profile picture (Optional).
          </h2>
          <div className="flex items-center space-x-4 mb-6">
            <input
              type="file"
              onChange={(e) => setProfilePic(e.target.files[0])}
              className="file:border file:border-gray-300 file:rounded file:px-4 file:py-2 file:text-white file:bg-gold hover:file:bg-gold"
            />
            <span className="text-gray-500 text-sm">Supported formats: JPG, PNG</span>
          </div>

          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Are you ready to submit your profile for approval?
          </h2>
          <div className="flex items-center space-x-4 mb-6">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="approval"
                value="Yes"
                onChange={(e) => setApproval(e.target.value)}
                className="form-radio h-4 w-4 text-gold border-gray-300 rounded"
              />
              <span className="text-gray-600">Yes</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="approval"
                value="No"
                onChange={(e) => setApproval(e.target.value)}
                className="form-radio h-4 w-4 text-gold border-gray-300 rounded"
              />
              <span className="text-gray-600">No</span>
            </label>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full mt-6 bg-gold text-white py-3 rounded hover:bg-yellow-600"
          >
            Next
          </button>
        </div>
      </div>

      {/* Right Side Illustration */}
      <div className="w-full md:w-1/2 bg-primary flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            Add the finishing touches to your profile.
          </h2>
          {/* <div className="relative">
            <div className="w-32 h-32 bg-yellow-500 rounded-full absolute -top-16 left-16"></div>
            <div className="w-64 h-64 bg-yellow-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-700 font-semibold">Illustration</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default LawyerScreenFive;
