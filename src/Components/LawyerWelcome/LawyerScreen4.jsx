import React, { useState } from "react";
import axios from "axios";
import logo from "../../Images/logo.png"; // Replace with your logo path
import { useNavigate } from "react-router-dom";

const LawyerScreenFour = () => {
  const [caseLimit, setCaseLimit] = useState("");
  const [workPreference, setWorkPreference] = useState("");
  const [scheduling, setScheduling] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if required fields are filled
    if (!caseLimit || !workPreference) {
      setError("Please fill in all required fields.");
      return;
    }

    const data = {
      caseLimit,
      workPreference,
      scheduling,
    };

    try {
      // Send data to a dummy API (you can replace the URL later)
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        data
      ); // Using a dummy API for testing
      console.log("Response data:", response.data); // Log the response data from the API
      setError(""); // Clear error if submission is successful
      navigate("/lawyerscreenfive");
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
            How many cases can you take at a time? (Select one)
          </h2>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {["1 - 2", "3 - 5", "6 - 10", "No limit"].map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="caseLimit"
                  value={option}
                  onChange={(e) => setCaseLimit(e.target.value)}
                  className="form-radio h-4 w-4 text-gold border-gray-300 rounded"
                />
                <span className="text-gray-600">{option}</span>
              </label>
            ))}
          </div>

          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            What’s your preferred way to work with a lawyer? (Select one)
          </h2>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              "Text Chat",
              "Video/Audio Call",
              "In-person (if possible)",
              "Flexible",
            ].map((preference) => (
              <label key={preference} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="workPreference"
                  value={preference}
                  onChange={(e) => setWorkPreference(e.target.value)}
                  className="form-radio h-4 w-4 text-gold border-gray-300 rounded"
                />
                <span className="text-gray-600">{preference}</span>
              </label>
            ))}
          </div>

          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Do you have any scheduling preferences? (Optional)
          </h2>
          <input
            type="text"
            value={scheduling}
            onChange={(e) => setScheduling(e.target.value)}
            placeholder="I’m available weekdays 9 AM - 5 PM EST."
            className="w-full p-3 border border-gray-300 rounded mb-6 focus:outline-none focus:ring-2 focus:ring-gold"
          />

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
            Let us know when you’re available.
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

export default LawyerScreenFour;
