import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from "../../Images/logo.png"

const ClientScreenThree = () => {
  // Define state for form inputs
  const [preferredWay, setPreferredWay] = useState('');
  const [budgetFrom, setBudgetFrom] = useState('');
  const [budgetTo, setBudgetTo] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  
  const navigate=useNavigate()

  // Handle form submission
  const handleSubmit = async () => {
    // Validate the fields
    if (!preferredWay) {
      setError('Preferred way to work with a lawyer is required');
      return;
    }

    const clientPreferences = {
      preferredWay,
      budget: {
        from: budgetFrom,
        to: budgetTo,
      },
      file: file ? file.name : null, // Optional file
    };

    // Log the client information
    console.log('Client Preferences:', clientPreferences);
    navigate('/clientscreenfour')

    // Send data to dummy API via axios
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', clientPreferences);
      console.log('API Response:', response.data);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row mt-20 min-h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-8">
        <div className="w-full md:w-3/4">
          <div className="mb-8 flex justify-center">
            <img src={logo} alt="Juriph Logo" className="h-12" />
          </div>

          <h2 className="text-2xl font-semibold mb-6">What’s your preferred way to work with a lawyer? (Select one)</h2>
          <div className="mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Text Chat', 'Video/Audio Call', 'In-person (if possible)', 'No Preference'].map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="preferred-way"
                    className="w-4 h-4"
                    value={option}
                    onChange={(e) => setPreferredWay(e.target.value)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-6">Do you have a specific budget range in mind? (Optional)</h2>
          <div className="flex gap-4 mb-6">
            <input
              type="text"
              placeholder="From"
              className="w-full sm:w-1/2 border border-gray-300 rounded-md p-3"
              value={budgetFrom}
              onChange={(e) => setBudgetFrom(e.target.value)}
            />
            <input
              type="text"
              placeholder="To"
              className="w-full sm:w-1/2 border border-gray-300 rounded-md p-3"
              value={budgetTo}
              onChange={(e) => setBudgetTo(e.target.value)}
            />
          </div>

          <h2 className="text-2xl font-semibold mb-6">Do you have any supporting documents to share? (Optional)</h2>
          <div className="mb-6">
            <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-6 cursor-pointer">
              <span className="text-gray-500">Upload</span>
              <span className="text-sm text-gray-400">Supported formats: PDF, DOC, PNG</span>
              <input
                type="file"
                className="hidden"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
          </div>

          {/* Display error message if any */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <button
            onClick={handleSubmit}
            className="w-full bg-gold text-white py-3 rounded-md font-semibold hover:bg-yellow-600"
          >
            Next
          </button>

          <p className="text-gray-500 text-sm mt-4 text-right">Step 3/4</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-primary p-8 relative">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-yellow-700 mb-8">
            Your preferences help us personalize your experience.
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

export default ClientScreenThree;
