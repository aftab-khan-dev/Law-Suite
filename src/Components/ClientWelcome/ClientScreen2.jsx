import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../../Images/logo.png'

const ClientScreenTwo = () => {
  // Define state for form inputs
  const [legalAssistance, setLegalAssistance] = useState('');
  const [caseDescription, setCaseDescription] = useState('');
  const [urgency, setUrgency] = useState('');
  const [error, setError] = useState('');

  const navigate=useNavigate()

  // Handle form submission
  const handleSubmit = async () => {
    // Validate the fields
    if (!legalAssistance || !caseDescription || !urgency) {
      setError('All fields are required');
      return;
    }

    // Create the client requirements object
    const clientRequirements = {
      legalAssistance,
      caseDescription,
      urgency,
    };

    // Log the data to the console
    console.log('Client Requirements:', clientRequirements);
    navigate("/clientscreenthree")

    // Send data to dummy API via axios
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', clientRequirements);
      console.log('API Response:', response.data);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row pt-20 min-h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center  items-center bg-white p-8">
        <div className="w-full md:w-3/4">
          <div className="mb-8 flex justify-center">
            <img src={logo} alt="Juriph Logo" className="h-12" />
          </div>

          <h2 className="text-2xl font-semibold mb-6">What type of legal assistance are you looking for?</h2>
          <div className="mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {['Family Law', 'Business Law', 'Immigration', 'Criminal Defense', 'Property Disputes', 'Others'].map((type) => (
                <label key={type} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="legal-assistance"
                    className="w-4 h-4"
                    value={type}
                    onChange={(e) => setLegalAssistance(e.target.value)}
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-6">Briefly describe your case or legal issue.</h2>
          <textarea
            placeholder="I need help drafting a commercial lease agreement for my new retail business."
            className="w-full border border-gray-300 rounded-md p-3 mb-6"
            rows="4"
            value={caseDescription}
            onChange={(e) => setCaseDescription(e.target.value)}
          />

          <h2 className="text-2xl font-semibold mb-6">How soon do you need assistance? (Select one)</h2>
          <div className="mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Urgent (within 24 hours)', 'Within a week', 'No rush'].map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="urgency"
                    className="w-4 h-4"
                    value={option}
                    onChange={(e) => setUrgency(e.target.value)}
                  />
                  {option}
                </label>
              ))}
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

          <p className="text-gray-500 text-sm mt-4 text-right">Step 2/4</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-primary p-8 relative">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-yellow-700 mb-8">
            Tell us more about your legal requirements.
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

export default ClientScreenTwo;
// NPR 