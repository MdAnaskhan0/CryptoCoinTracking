/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Coin from "./Pages/Coin/Coin";
import Footer from "./Components/Footer/Footer";
import Features from "./Pages/OtherPage/Features";
import Blog from "./Pages/OtherPage/Blog";
import About from "./Pages/OtherPage/About";
import Contact from "./Pages/OtherPage/Contact";
import Privacy from "./Pages/OtherPage/Privacy";
import SignUp from "./Pages/OtherPage/SignUp";

function App() {
  return (
    <>
      <div className="min-h-[100vh] text-black bg-[#f1f1f1]">
        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:coinId" element={<Coin />} />
          <Route path="features" element={<Features />}/>
          <Route path="blog" element={<Blog />}/>
          <Route path="about" element={<About />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="privacy" element={<Privacy />}/>
          <Route path="signup" element={<SignUp />}/>
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
