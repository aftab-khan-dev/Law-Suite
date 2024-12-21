import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../../Images/logo.png";

const LawyerScreenOne = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    city: "",
    state: "",
    country: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: Check for empty fields
    if (!formData.fullName || !formData.city || !formData.state || !formData.country) {
      alert("All fields are required. Please fill out all fields.");
      return; // Stop submission if any field is empty
    }

    // Log the data
    console.log("Lawyer Basic Data:", formData);

    // Send data to a dummy API
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          type: "Lawyer Basic Data",
          data: formData,
        }
      );
      console.log("API Response:", response.data);
      navigate("/lawyerscreentwo"); // Navigate to the next page (example)
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  return (
    <div className="min-h-screen  flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-center px-6 md:px-10 py-8">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <img src={logo} alt="Juriph Logo" className="w-40 h-auto" />
        </div>
        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-xl font-medium text-gray-700"
            >
              What is your full name?
            </label>
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className="mt-1 px-5 py-4 text-xl block outline-none w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-lg font-medium text-gray-700"
            >
              Where are you located?
            </label>
            <div className="grid grid-cols-2 gap-4 mt-1">
              <input
                type="text"
                id="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="block w-full px-2 py-3 rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              <input
                type="text"
                id="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State/Province"
                className="block w-full px-2 py-3 rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                id="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Country"
                className="block w-full px-2 py-3 rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gold hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            Next
          </button>
        </form>
        <div className="mt-4 flex justify-end text-sm text-gray-500">
          Step 1/5
        </div>
      </div>
      {/* Right Section */}
      <div className="w-full md:w-1/2 min-h-screen bg-gradient-to-r from-primary via-cream to-cream flex flex-col justify-center items-center p-10">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 text-center">
          Let’s start with some basic details.
        </h2>
        <div className="relative w-3/4 max-w-sm">
          <img
            src="/illustration.png"
            alt="Illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default LawyerScreenOne;
