import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#E03463" }} className="w-full py-8">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-white text-3xl font-bold">Contact Us</h1>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center">
          {/* Address Section */}
          <div className="space-y-4">
            <div className="flex justify-center">
              <IoLocationSharp className="text-5xl" />
            </div>
            <p>
            Bela Namobuddha, Kavre, Nepal
              <br />
            46kms from kathmandu, on the way to Bhakundebesi
              <br />
              560049
            </p>
          </div>

          {/* Email Section */}
          <div className="space-y-4">
            <div className="flex justify-center">
              <MdEmail className="text-5xl" />
            </div>
            <p>belafarmhouse@gmail.com</p>
           
          </div>

          {/* Phone Section */}
          <div className="space-y-4">
            <div className="flex justify-center">
              <FaPhone className="text-5xl" />
            </div>
            <p>+977 9851096133</p>
            <p>+977 9765997452</p>
           
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-white my-8" />

        {/* Bottom Section */}
        <div className="text-center text-white">
          <p>© 2025 Bela FarmHouse And Eatery. Designed And Developed By Clouds Nepal Web</p>
        
        </div>
      </div>
    </div>
  );
};

export default Footer;
