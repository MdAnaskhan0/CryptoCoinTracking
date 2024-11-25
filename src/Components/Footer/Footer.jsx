import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="max-w-[80%] mx-auto bg-[#f1f1f1] ">
        <footer className="footer text-neutral-content p-10 text-[#000000] lg:flex lg:justify-between">
          <nav className="grid grid-flow-col gap-4 md:text-sm font-semibold">
            <Link to="/about" className="hover:text-indigo-700">About us</Link>
            <Link to="/contact" className="hover:text-indigo-700">Contact</Link>
            <Link to="/privacy" className="hover:text-indigo-700">Privacy policy</Link>
          </nav>
          <nav>
            <div className="grid grid-flow-col gap-4 md:text-2xl">
              <Link to="https://www.instagram.com/" target="_blank">
                <FaInstagram className="hover:text-pink-500 transition-colors duration-200" />
              </Link>
              <Link to="https://twitter.com/" target="_blank">
                <FaTwitter className="hover:text-blue-400 transition-colors duration-200" />
              </Link>
              <Link to="https://www.facebook.com/" target="_blank">
                <FaFacebook className="hover:text-blue-600 transition-colors duration-200" />
              </Link>
            </div>
          </nav>
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              Crypto Price Tracking Ltd
            </p>
          </aside>
        </footer>
      </div>
    </>
  );
};

export default Footer;
