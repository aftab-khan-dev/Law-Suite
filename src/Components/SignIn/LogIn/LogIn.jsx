import React from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
    const navigate=useNavigate()
    
  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center">
        <div className="mb-6">
          <img src="/logo.png" alt="Juriph Logo" className="h-10" /> {/* Replace with your logo path */}
        </div>
        <h2 className="text-2xl font-semibold mb-8">Sign in</h2>
        <button className="w-3/4 bg-white text-gray-700 border border-gray-300 rounded-lg py-2 mb-4 flex items-center justify-center shadow-sm hover:bg-gray-100">
          <img src="/google-icon.png" alt="Google" className="h-5 mr-3" /> {/* Replace with Google icon path */}
          Sign-in with Google
        </button>
        <p className="text-gray-500 text-sm mb-2">- or sign in with email -</p>
        <form className="w-3/4">
          <input
            type="email"
            placeholder="Enter Email Address"
            className="w-full border border-gray-300 rounded-lg py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full border border-gray-300 rounded-lg py-2 px-4 mb-6 focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <button
            type="submit"
            className="w-full bg-gold text-white py-2 rounded-lg hover:bg-yellow-600"
          >
            Sign in
          </button>
        </form>
        <p className="text-gray-500 text-sm mt-4">
          Don’t Have an Account?{' '}
          <button onClick={()=>navigate("/signin")} className="text-gold hover:underline">
            Create Account
          </button>
        </p>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-gradient-to-b from-gold to-gold flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold text-white mb-6">Simplify Your Legal Journey</h2>
        <p className="text-white text-lg text-center max-w-md mb-10">
          Let’s continue where you left off and make your legal needs hassle-free.
        </p>
        <div className="w-64 h-64 relative">
          {/* Replace with an illustration */}
          {/* <img src="/illustration.png" alt="Legal Illustration" className="w-full h-full" /> */}
        </div>
      </div>
    </div>
  );
};

export default LogIn;
