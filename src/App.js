import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
//===========================================================Utils Screen
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import SignIn from "./Components/SignIn/SignIn";
import LogIn from "./Components/SignIn/LogIn/LogIn";
//===========================================================Public Screen
import HomePage from "./Components/HomePage/HomePage";
import Blogs from "./Components/Blogs/Blogs";
import BlogDetails from "./Components/Blogs/BlogDetails"; 
//===========================================================Client Screen
import SignUpAsClient from "./Components/SignIn/SignUpAsClient/SignUpAsClient";
import ClientWelcome from "./Components/ClientWelcome/ClientWelcome";
import ClientScreenOne from "./Components/ClientWelcome/ClientScreen1";
import ClientScreenTwo from "./Components/ClientWelcome/ClientScreen2";
import ClientScreenThree from "./Components/ClientWelcome/ClientScreen3";
import ClientScreenFour from "./Components/ClientWelcome/ClientScreen4";
//===========================================================Lawyer Screen
import LawyerWelcome from "./Components/LawyerWelcome/LawyerWelcome";
import LawyerScreenOne from "./Components/LawyerWelcome/LawyerScreen1";
import LawyerScreenTwo from "./Components/LawyerWelcome/LawyerScreenTwo";
import LawyerScreenThree from "./Components/LawyerWelcome/LawyerScreen3";
import LawyerScreenFour from "./Components/LawyerWelcome/LawyerScreen4";
import LawyerScreenFive from "./Components/LawyerWelcome/LawyerScreen5";

// Register the ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

// Wrapper component to handle scroll behavior
function ScrollToTopWrapper() {
  const { pathname } = useLocation();

  useEffect(() => {
    gsap.to(window, {
      duration: 0.8,
      scrollTo: {
        y: 0,
        autoKill: false
      },
      ease: "power2.inOut"
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTopWrapper />
      <Navbar />
      <Routes>
        {/* //===========================================================Public Screen */}
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} /> 
        {/* //===========================================================Utils Screen */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/LogIn" element={<LogIn/>}/>
        {/* //===========================================================Client Screen */}
        <Route path="/SignUpAsClient" element={<SignUpAsClient />} />
        <Route path="/clientwelcome" element={<ClientWelcome/>}/>
        <Route path="/clientscreen1" element={<ClientScreenOne/>}/>
        <Route path="/clientscreentwo" element={<ClientScreenTwo/>}/>
        <Route path="/clientscreenthree" element={<ClientScreenThree/>}/>
        <Route path="/clientscreenfour" element={<ClientScreenFour/>}/>
        {/* //===========================================================Lawyer Screen */}
        <Route path="/lawyerwelcome" element={<LawyerWelcome/>}/>
        <Route path="/lawyerscreenone" element={<LawyerScreenOne/>}/>
        <Route path="/lawyerscreentwo" element={<LawyerScreenTwo/>}/>
        <Route path="/lawyerscreenthree" element={<LawyerScreenThree/>}/>
        <Route path="/lawyerscreenfour" element={<LawyerScreenFour/>}/>
        <Route path="/lawyerscreenfive" element={<LawyerScreenFive/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;