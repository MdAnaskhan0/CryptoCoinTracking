import React, { useState } from "react";
import { useContext } from "react";
import { FaArrowRight, FaBitcoin, FaBars } from "react-icons/fa";
import { CoinContext } from "../../Context/CoinContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCurrencyChange = (e) => {
    switch (e.target.value) {
      case "usd":
        setCurrency({ name: "usd", symbol: "$" });
        break;
      case "eur":
        setCurrency({ name: "eur", symbol: "€" });
        break;
      case "bdt":
        setCurrency({ name: "bdt", symbol: "৳" });
        break;
      case "inr":
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      default:
        setCurrency({ name: "usd", symbol: "$" });
        break;
    }
  };

  return (
    <div className="shadow-md">
      <div className="flex justify-between items-center py-4 md:max-w-[80%] mx-auto">
        {/* Navbar left */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/">
            <h2 className="text-base md:text-3xl font-bold flex items-center gap-2 tracking-wider uppercase">
              Crypto{" "}
              <span className="text-indigo-700">
                <FaBitcoin />
              </span>{" "}
              Tracking
            </h2>
          </Link>
          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-2xl text-indigo-700"
            >
              <FaBars />
            </button>
          </div>
        </div>

        {/* Navbar middle */}
        <div
          className={`${
            mobileMenuOpen ? "block" : "hidden"
          } md:flex justify-end gap-4 text-md font-semibold`}
        >
          <ul className="flex flex-col md:flex-row gap-4 text-center">
            <li className="hover:text-indigo-700">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-indigo-700">
              <Link to="/features">Features</Link>
            </li>
            <li className="hover:text-indigo-700">
              <Link to="/about">About us</Link>
            </li>
            <li className="hover:text-indigo-700">
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>

        {/* Navbar right */}
        <div className="flex gap-4 items-center">
          <select
            onChange={handleCurrencyChange}
            className="outline-none bg-transparent text-lg font-semibold"
          >
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="BDT">BDT</option>
            <option value="inr">INR</option>
          </select>
          <Link to="/signup" className="hidden md:flex gap-2 text-lg font-semibold items-center text-white bg-indigo-700 px-4 py-2 rounded-md">
          SignUp <FaArrowRight /></Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          mobileMenuOpen ? "block" : "hidden"
        } md:hidden fixed top-0 left-0 w-full bg-white shadow-lg px-4 py-6`}
      >
        <ul className="flex flex-col gap-4 text-lg font-semibold text-center">
          <li className="hover:text-indigo-700">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="hover:text-indigo-700">
            <Link to="/features" onClick={() => setMobileMenuOpen(false)}>
              Features
            </Link>
          </li>
          <li className="hover:text-indigo-700">
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
              About us
            </Link>
          </li>
          <li className="hover:text-indigo-700">
            <Link to="/blog" onClick={() => setMobileMenuOpen(false)}>
              Blog
            </Link>
          </li>
          <li className="mt-4">
            <select
              onChange={handleCurrencyChange}
              className="w-full bg-transparent text-lg font-semibold"
            >
              <option value="usd">USD</option>
              {/* <option value="bdt"></option> */}
              <option value="eur">EUR</option>
              <option value="inr">INR</option>
            </select>
          </li>
          <li className="mt-4">
            <Link to="/signup" className="text-white bg-indigo-700 px-4 py-2 rounded-md block text-center"> SignUp</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
