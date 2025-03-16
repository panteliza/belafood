import React from "react";
import { motion } from "framer-motion";

// Image Imports
import bed1 from "../assets/images/2.JPG";
import bed2 from "../assets/images/one.JPG";
import woodenBg from "../assets/images/woodenbg.webp"; // Change to .webp if available

// Motion Variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const StaycationSection = () => {
  return (
    <div
      className="w-full bg-cover bg-center py-16 px-4 sm:px-6 md:px-16"
      style={{
        backgroundImage: `url(${woodenBg})`,
        backgroundColor: "#3b2f2f", // Fallback color while background loads
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-10 items-center"
      >
        {/* Left Text Section */}
        <motion.div variants={itemVariants} className="space-y-6 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-white">
            A Staycation to Remember
          </h2>
          <p className="text-xl text-white">
            Nestled in the serene hills of Namobuddha, Bela Farmhouse & Eatery offers you an
            unforgettable escape from the hustle and bustle. Enjoy cozy stays, local delicacies,
            and breathtaking views.
          </p>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.img
            variants={imageVariants}
            src={bed1}
            alt="Cozy Bed"
            className="rounded-2xl w-[85%] sm:w-[300px] h-auto shadow-xl hover:scale-105 transition-transform duration-500"
            loading="lazy"
            decoding="async"
          />
          <motion.img
            variants={imageVariants}
            src={bed2}
            alt="Comfortable Room"
            className="rounded-2xl w-[85%] sm:w-[300px] h-auto shadow-xl hover:scale-105 transition-transform duration-500"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default StaycationSection;
