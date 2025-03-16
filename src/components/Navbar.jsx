import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import logo from "../assets/images/logo.JPG"; // Replace with your actual logo path
import img1 from "../assets/images/facebook.png";
import img2 from "../assets/images/instagram.png";
import img3 from "../assets/images/whatsapp.png";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/gallery", label: "Gallery" },
  { path: "/contact", label: "Contact us" },
];

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <>
      <nav className="w-full fixed top-0 bg-white shadow-md px-6 py-4 flex justify-between items-center z-50">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Bela Farmhouse & Eatery" className="h-[70px] w-[70px]" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-lg">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`${
                location.pathname === path ? "text-[#2D4591]" : "text-gray-700"
              } font-medium hover:text-[#07A2BB] transition-all`}
            >
              {label}
            </Link>
          ))}
          <div className="flex gap-4">
          <a href="https://www.facebook.com/share/16KovBxBWu/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
              <img src={img1} alt="Facebook Icon" className="h-[30px] w-[30px] object-contain" />
            </a>
            <a href="https://www.instagram.com/belafarmhouseandeatery?igsh=MTJpdTJ1cWUzMnA4YQ==" target="_blank" rel="noopener noreferrer">
              <img src={img2} alt="Instagram Icon" className="h-[30px] w-[30px] object-contain" />
            </a>
            <a href="https://wa.me/9779851096133" target="_blank" rel="noopener noreferrer">
              <img src={img3} alt="WhatsApp Icon" className="h-[30px] w-[30px] object-contain" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <HiOutlineMenuAlt2
          className="text-3xl lg:hidden cursor-pointer"
          onClick={toggleSidebar}
        />

        {/* Mobile Sidebar */}
        {showSidebar && (
          <div className="fixed top-0 left-0 w-[300px] h-full bg-white shadow-lg z-50 flex flex-col">
            {/* Logo and Close Button */}
            <div className="flex justify-between items-center px-6 py-4">
              <img src={logo} alt="Bela Farmhouse & Eatery Logo" className="h-[50px] w-[50px]" />
              <MdOutlineClose className="text-2xl cursor-pointer" onClick={toggleSidebar} />
            </div>

            {/* Nav Links */}
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`${
                  location.pathname === path ? "text-[#099BA4]" : "text-gray-700"
                } font-medium py-3 px-6 border-b border-gray-200 hover:bg-gray-100`}
                onClick={toggleSidebar}
              >
                {label}
              </Link>
            ))}

            {/* Social Icons in Sidebar */}
            <div className="flex justify-center gap-4 mt-4 px-6">
              <a href="https://www.facebook.com/share/16KovBxBWu/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                <img src={img1} alt="Facebook Icon" className="h-[30px] w-[30px] object-contain" />
              </a>
              <a href="https://www.instagram.com/belafarmhouseandeatery?igsh=MTJpdTJ1cWUzMnA4YQ==" target="_blank" rel="noopener noreferrer">
                <img src={img2} alt="Instagram Icon" className="h-[30px] w-[30px] object-contain" />
              </a>
              <a href="https://wa.me/9779851096133" target="_blank" rel="noopener noreferrer">
                <img src={img3} alt="WhatsApp Icon" className="h-[30px] w-[30px] object-contain" />
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-[90px]"></div>
    </>
  );
};

export default Navbar;
