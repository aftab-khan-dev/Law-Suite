import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import logo from "../../../Images/logo.png";
import { useNavigate } from "react-router-dom";

const SignUpAsClient = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [country, setCountry] = useState("");
  const [language, setLanguage] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showRePassword, setShowRePassword] = useState(false); // State to toggle re-enter password visibility

  const navigate = useNavigate();
  // imp 
  // Might need to send data through prop to navigated component

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation to check if passwords match
    if (password !== rePassword) {
      alert("Passwords do not match!");
      return;
    }

    // Collecting the personal info data
    const personalInfo = {
      email,
      password,
      country,
      language,
      role: "client", // Marking the user as a client
    };

    // Log the collected data (for now)
    console.log("Personal Info:", personalInfo);

    // Sending the data to the server using axios
    try {
      const response = await axios.post("your-api-endpoint", personalInfo);
      console.log("Response from server:", response.data);

      // Redirect to ClientWelcome component after successful submission
      navigate("/clientwelcome");
    } catch (error) {
      console.error("Error submitting the form:", error);
      navigate("/clientwelcome");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-1/2 bg-gray-50 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md">
          {/* Logo Div - Centered */}
          <div className="mb-8 flex justify-center">
            <img
              src={logo} // Replace with your logo URL
              alt="Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Juriph Text */}
          <div className="text-2xl font-bold mb-8 text-center">Create Account</div>

          {/* Sign-up with Google */}
          <button className="w-full bg-gray-100 text-gray-700 border border-gold rounded-lg py-2 px-4 flex items-center justify-center mb-6 hover:shadow">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              alt="Google logo"
              className="h-5 w-5 mr-2"
            />
            Sign-up with Google
          </button>

          <div className="text-center text-gray-500 mb-4">or sign up with email</div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter Email Address*"
              className="w-full border bg-gray-100 border-gray-300 rounded-lg py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-gold"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password*"
                className="w-full border bg-gray-100 border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gold"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="relative mb-4">
              <input
                type={showRePassword ? "text" : "password"}
                placeholder="Re-enter Password*"
                className="w-full border bg-gray-100 border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gold"
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500"
                onClick={() => setShowRePassword(!showRePassword)}
              >
                {showRePassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <select
              className="w-full border bg-gray-100 border-gray-300 rounded-lg py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-gold"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            >
              <option value="">Country</option>
              <option value="us">United States</option>
              <option value="ca">Canada</option>
              {/* Add more countries */}
            </select>
            <select
              className="w-full border bg-gray-100 border-gray-300 rounded-lg py-2 px-4 mb-6 focus:outline-none focus:ring-2 focus:ring-gold"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              required
            >
              <option value="">Preferred Language</option>
              <option value="en">English</option>
              <option value="fr">French</option>
              {/* Add more languages */}
            </select>

            <button
              type="submit"
              className="w-full bg-primary text-white rounded-lg py-2 px-4 hover:bg-cream focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Create Account
            </button>
          </form>

          {/* Sign in link */}
          <div className="text-center text-gray-500 mt-4">
            Already Have an Account?{" "}
            <button onClick={() => navigate("/LogIn")} className="text-gold hover:underline">
              Sign in
            </button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-primary flex flex-col justify-center items-center">
        <div className="max-w-md text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Your Legal Solutions, Just a Signup Away
          </h1>
          <p className="text-gray-600 mb-8">
            Discover how we simplify finding and offering legal expertise globally.
          </p>
          <img
            src="https://via.placeholder.com/300x200"
            alt="Illustration"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpAsClient;
