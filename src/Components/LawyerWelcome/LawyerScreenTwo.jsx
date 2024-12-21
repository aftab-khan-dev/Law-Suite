import React, { useState } from 'react';
import axios from 'axios';
import logo from '../../Images/logo.png'
import { useNavigate } from 'react-router-dom';

const LawyerScreenTwo = () => {
  const [file, setFile] = useState(null);
  const [barMember, setBarMember] = useState(null);
  const [barId, setBarId] = useState('');
  const [experience, setExperience] = useState('');
  const [error, setError] = useState('');

  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: Check if all required fields are filled
    if (!file || !barMember || !experience || (barMember === 'yes' && !barId)) {
      setError('All fields are required!');
      return;
    }

    // Prepare the data to be sent
    
    const data = {
      lawyerCredential: {
        file,
        barMember,
        barId,
        experience,
      },
    };

    // Log the data to the console to make sure it's correct
    console.log('Form data:', data);
    navigate('/lawyerscreenthree')

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data); // Using a dummy API for testing
      console.log('Response data:', response.data); // Log the response data
    } catch (error) {
      console.error('Error sending data', error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Form Section */}
      <div className="md:w-1/2 bg-white p-8 flex flex-col justify-center">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-6">
            <img
              src={logo} // Replace with your logo path
              alt="Juriph Logo"
              className="mx-auto h-16" // Adjust the height of the logo
            />
          </div>
          {error && <div className="text-red-500 text-sm text-center mb-4">{error}</div>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload your law degree or certification.
              </label>
              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-indigo-50 file:text-gold
                  hover:file:bg-indigo-100"
                required
              />
              <p className="mt-1 text-sm text-gray-500">Supported formats: PDF, DOC, PNG</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Are you a member of any bar association?
              </label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="barMember"
                    value="yes"
                    onChange={() => setBarMember('yes')}
                    className="h-4 w-4 text-gold"
                    required
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="barMember"
                    value="no"
                    onChange={() => setBarMember('no')}
                    className="h-4 w-4 text-gold"
                    required
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
              {barMember === 'yes' && (
                <input
                  type="text"
                  value={barId}
                  onChange={(e) => setBarId(e.target.value)}
                  placeholder="If yes, provide your Bar Membership Number or ID"
                  className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required={barMember === 'yes'}
                />
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                How many years of legal experience do you have? (Select one)
              </label>
              <div className="space-y-2">
                {['Less than 1 year', '1-3 years', '4-7 years', '8+ years'].map((label) => (
                  <label key={label} className="flex items-center">
                    <input
                      type="radio"
                      name="experience"
                      value={label}
                      onChange={() => setExperience(label)}
                      className="h-4 w-4 text-gold"
                      required
                    />
                    <span className="ml-2">{label}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gold text-white py-2 px-4 rounded-md hover:bg-yellow-600"
            >
              Next
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-500 text-center">Step 2/5</p>
        </div>
      </div>

      {/* Right Illustration Section */}
      <div className="md:w-1/2 bg-primary flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            We need your credentials to verify your expertise.
          </h2>
          <div className="relative">
            <img
              src="/path-to-illustration.png" // Replace with your illustration path
              alt="Illustration"
              className="mx-auto max-h-96"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerScreenTwo;
