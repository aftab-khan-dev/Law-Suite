import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Make sure you have react-router-dom installed
import logo from "../../Images/logo.png";
import scndImage from "../../Images/judge-3008038_1280.jpg";

export default function SignIn() {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    if (selectedRole === "client") {
      navigate("/SignUpAsClient"); // Use the correct route for the client signup
    } else if (selectedRole === "lawyer") {
      navigate("/lawyerwelcome"); // Redirect to lawyer page
    } else {
      alert("Please select a role before proceeding.");
    }
  };

  return (
    <div>
      <div className="flex flex-wrap h-screen bg-gray-50">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-8">
          <div className="mb-6">
            <img
              src={logo} // Replace with actual logo path
              alt="Juriph Logo"
              className="h-20"
            />
          </div>
          <h1 className="text-2xl font-semibold mb-4">Choose your journey</h1>
          <h1 className="text-2xl font-semibold mb-4">with Juriph</h1>
          <div className="space-y-4 w-full max-w-md">
            <button
              className={`w-full py-4 px-6 border text-yellow-900 font-medium rounded-md flex items-center justify-between hover:bg-primary ${
                selectedRole === "client"
                  ? "bg-primary text-white border-yellow-300"
                  : "bg-transparent"
              }`}
              onClick={() => setSelectedRole("client")}
            >
              <span>I need a lawyer to help with my case.</span>

              <i class="fa-solid fa-books text-gray-600"></i>
            </button>
            <button
              className={`w-full py-4 px-6 border text-gray-500 font-medium rounded-md flex items-center justify-between hover:bg-primary ${
                selectedRole === "lawyer"
                  ? "bg-primary text-white border-gray-300"
                  : "bg-transparent"
              }`}
              onClick={() => setSelectedRole("lawyer")}
            >
              <span>I want to join Juriph as a lawyer.</span>
              <i class="fa-regular fa-scale-balanced text-gray-600"></i>
            </button>
          </div>
          <button
            onClick={handleCreateAccount}
            className="mt-6 py-3 px-6 w-[65%] bg-gold text-white font-medium rounded-md hover:bg-yellow-600"
          >
            Create Account
          </button>
          <p className="mt-4 text-gray-600">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/LogIn")}
              className="text-gold hover:underline"
            >
              Sign in
            </button>
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 bg-gradient-to-b from-primary to-cream flex flex-col justify-center items-center text-center p-8">
          <div className="max-w-lg">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Simplify Your Legal Journey
            </h2>
            <p className="text-gray-600 mb-8">
              Whether you need legal advice or want to offer your expertise,
              Juriph makes it simple and secure.
            </p>
          </div>
          <div>
            {/* <img
              src={scndImage} // Replace with actual illustration path
              alt="Law Illustration"
              className="w-64 h-auto"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
