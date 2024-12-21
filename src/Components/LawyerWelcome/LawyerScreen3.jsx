import React, { useState } from "react";
import axios from "axios";
import logo from "../../Images/logo.png"; // Replace with your logo path
import { useNavigate } from "react-router-dom";

const LawyerScreenThree = () => {
  const [expertise, setExpertise] = useState([]);
  const [preferredCases, setPreferredCases] = useState("");
  const [feeType, setFeeType] = useState("");
  const [hourlyFee, setHourlyFee] = useState("");
  const [caseFee, setCaseFee] = useState("");
  const [error, setError] = useState("");

  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if required fields are filled
    if (expertise.length === 0 || !feeType || (feeType === "Hourly" && !hourlyFee) || (feeType === "Per Case" && !caseFee)) {
      setError("Please fill in all required fields.");
      return;
    }

    const data = {
      expertise,
      preferredCases,
      feeType,
      hourlyFee,
      caseFee,
    };

    try {
      // Send data to a dummy API (you can replace the URL later)
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data); // Using a dummy API for testing
      console.log('Response data:', response.data); // Log the response data from the API
      setError(""); // Clear error if submission is successful
      navigate('/lawyerscreenfour')
    } catch (error) {
      console.error("Error submitting data:", error);
      setError("Error submitting data. Please try again.");
    }
  };

  return (
    <div className="flex flex-col  md:flex-row min-h-screen">
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
            What are your areas of expertise? (Select one or more)
          </h2>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              "Family Law",
              "Business Law",
              "Intellectual Property",
              "Immigration",
              "Criminal Law",
              "Corporate Law",
              "Others",
            ].map((area) => (
              <label key={area} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-gold border-gray-300 rounded"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setExpertise([...expertise, area]);
                    } else {
                      setExpertise(expertise.filter(item => item !== area));
                    }
                  }}
                />
                <span className="text-gray-600">{area}</span>
              </label>
            ))}
          </div>

          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            What type of legal cases do you prefer? (Optional)
          </h2>
          <input
            type="text"
            value={preferredCases}
            onChange={(e) => setPreferredCases(e.target.value)}
            placeholder="Drafting contracts, Legal disputes, Client consultations"
            className="w-full p-3 border border-gray-300 rounded mb-6 focus:outline-none focus:ring-2 focus:ring-gold"
          />

          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            What’s your typical hourly or case-based fee range? (Required)
          </h2>
          <div className="flex items-center space-x-4 mb-6">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="feeType"
                value="Hourly"
                onChange={() => setFeeType("Hourly")}
                className="form-radio h-4 w-4 text-gold border-gray-300"
              />
              <span className="text-gray-600">Hourly</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="feeType"
                value="Per Case"
                onChange={() => setFeeType("Per Case")}
                className="form-radio h-4 w-4 text-gold border-gray-300"
              />
              <span className="text-gray-600">Per Case</span>
            </label>
          </div>

          {/* Show required fields based on fee type */}
          {feeType && (
            <div className="flex items-center space-x-4 mb-6">
              {feeType === "Hourly" ? (
                <input
                  type="number"
                  value={hourlyFee}
                  onChange={(e) => setHourlyFee(e.target.value)}
                  placeholder="Hourly fee"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
                />
              ) : (
                <input
                  type="number"
                  value={caseFee}
                  onChange={(e) => setCaseFee(e.target.value)}
                  placeholder="Case Fee"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
                />
              )}
            </div>
          )}

          <button
            onClick={handleSubmit}
            className="w-full mt-6 bg-gold text-white py-3 rounded hover:bg-yellow-600"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Right Side Illustration */}
      <div className="w-full md:w-1/2 bg-primary flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            Tell us about your expertise and services.
          </h2>
          {/* <div className="relative">
            <div className="w-32 h-32 bg-yellow-500 rounded-full absolute -top-16 left-16"></div>
            <div className="w-64 h-64 bg-cream rounded-lg flex items-center justify-center">
              <span className="text-gray-700 font-semibold">Illustration</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default LawyerScreenThree;
