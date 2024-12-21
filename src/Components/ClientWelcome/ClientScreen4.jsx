import React, { useState } from 'react';
import axios from 'axios';
import logo from "../../Images/logo.png"

const ClientScreenFour = () => {
  // Define state for form inputs
  const [referralSource, setReferralSource] = useState('');
  const [saveCase, setSaveCase] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = async () => {
    // Validate the fields
    if (!referralSource || !saveCase) {
      setError('Both questions are required');
      return;
    }

    const clientPreferences = {
      referralSource,
      saveCase,
    };

    // Log the client information
    console.log('Client Preferences:', clientPreferences);

    // Send data to dummy API via axios
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', clientPreferences);
      console.log('API Response:', response.data);
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
            <img src={logo} alt="Juriph Logo" className="h-12" />
          </div>

          <h2 className="text-2xl font-semibold mb-6">How did you hear about Juriph? (Optional)</h2>
          <div className="mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Google', 'Social Media', 'Referral', 'Other'].map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="referral-source"
                    className="w-4 h-4"
                    value={option}
                    onChange={(e) => setReferralSource(e.target.value)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-6">Would you like to save this case for future edits before posting?</h2>
          <div className="mb-6">
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="save-case"
                  className="w-4 h-4"
                  value="Yes"
                  onChange={(e) => setSaveCase(e.target.value)}
                />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="save-case"
                  className="w-4 h-4"
                  value="No"
                  onChange={(e) => setSaveCase(e.target.value)}
                />
                No
              </label>
            </div>
          </div>

          {/* Display error message if any */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <button
            onClick={handleSubmit}
            className="w-full bg-gold text-white py-3 rounded-md font-semibold hover:bg-yellow-600"
          >
            Next
          </button>

          <p className="text-gray-500 text-sm mt-4 text-right">Step 4/4</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-primary p-8 relative">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-yellow-700 mb-8">
            Almost there! Let’s wrap this up.
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

export default ClientScreenFour;
