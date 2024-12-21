import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from "../../Images/logo.png"

const ClientScreenOne = () => {
  // Define states for form inputs
  const [fullName, setFullName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [error, setError] = useState(''); // State for error message
  const navigate = useNavigate();

  // Handle form submission
  const handleNext = async () => {
    // Validate the fields
    if (!fullName || !city || !state || !country) {
      setError('All fields are required'); // Show error message
      return; // Prevent further execution
    }

    // Create the clientGeography object
    const clientGeography = {
      fullName,
      location: {
        city,
        state,
        country
      }
    };

    // Log the data to the console
    console.log('Client Geography Data:', clientGeography);

    // Send data to dummy API via axios
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', clientGeography);
      console.log('API Response:', response.data);

      // Navigate to the next screen if data is successfully submitted
      navigate('/clientscreentwo');
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-8">
        <div className="w-full md:w-3/4">
          <div className="mb-8 flex justify-center">
            <img
              src={logo}
              alt="Juriph Logo"
              className="h-12"
            />
          </div>

          <h2 className="text-2xl font-semibold mb-6">What is your full name?</h2>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full border border-gray-300 rounded-md p-3 mb-6"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <h2 className="text-2xl font-semibold mb-6">Where are you located?</h2>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="City"
              className="w-full md:w-1/3 border border-gray-300 rounded-md p-3"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              type="text"
              placeholder="State/Province"
              className="w-full md:w-1/3 border border-gray-300 rounded-md p-3"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <input
              type="text"
              placeholder="Country"
              className="w-full md:w-1/3 border border-gray-300 rounded-md p-3"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>

          {/* Display error message if any */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <button
            onClick={handleNext} // Handle the button click
            className="w-full bg-gold text-white py-3 rounded-md font-semibold hover:bg-yellow-600"
          >
            Next
          </button>

          <p className="text-gray-500 text-sm mt-4 text-right">Step 1/4</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-primary p-8 relative">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-yellow-700 mb-8">
            We need some basic details to get started.
          </h1>
          <div className="relative">
            <img
              src="/path-to-your-illustration.png"
              alt="Illustration"
              className="h-64 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientScreenOne;
