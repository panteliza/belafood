import React from "react";
import { motion } from "framer-motion";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

const Footer = () => {
  // Animation Variants
  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const iconVariant = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
        bounce: 0.5,
        ease: "easeInOut",
      },
    },
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div style={{ backgroundColor: "#E03463" }} className="w-full py-8">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Title */}
        <motion.div
          className="text-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
        >
          <h1 className="text-white text-3xl font-bold">Contact Us</h1>
        </motion.div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center">
          {/* Address Section */}
          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <motion.div
              className="flex justify-center"
              variants={iconVariant}
              whileHover="hover"
            >
              <IoLocationSharp className="text-5xl" />
            </motion.div>
            <p>
              Bela Namobuddha, Kavre, Nepal
              <br />
              46kms from Kathmandu, on the way to Bhakundebesi
              <br />
              560049
            </p>
          </motion.div>

          {/* Email Section */}
          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <motion.div
              className="flex justify-center"
              variants={iconVariant}
              whileHover="hover"
            >
              <MdEmail className="text-5xl" />
            </motion.div>
            <p>belafarmhouse@gmail.com</p>
          </motion.div>

          {/* Phone Section */}
          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <motion.div
              className="flex justify-center"
              variants={iconVariant}
              whileHover="hover"
            >
              <FaPhone className="text-5xl" />
            </motion.div>
            <p>+977 9851096133</p>
            <p>+977 9765997452</p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.hr
          className="border-t border-white my-8"
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        {/* Bottom Section */}
        <motion.div
          className="text-center text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
        >
          <p>
            © 2025 Bela FarmHouse And Eatery. Designed And Developed By Clouds
            Nepal Web
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
