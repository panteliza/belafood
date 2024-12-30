import React from "react";
import { motion } from "framer-motion"; // Importing Framer Motion
import BgPolygon from "../assets/images/polygon.png";
import Vector from "../assets/images/vector-wave.png";

const About = () => {
  const bgStyle = {
    backgroundImage: `url(${BgPolygon})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    position: "relative",
  };

  // Animation variants
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div style={bgStyle}>
      <div className="container mx-auto px-6 py-16">
        {/* Heading Animation */}
        <motion.h1
          className="pt-20 tracking-wider text-4xl font-semibold text-white text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariant}
        >
          About Us
        </motion.h1>

        {/* Paragraphs with staggered animation */}
        <motion.div
          className="bg-white mt-6 px-3 py-4 text-justify"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariant}
        >
          <motion.p
            className="text-lg text-gray-700 leading-relaxed mb-6"
            variants={textVariant}
          >
            Welcome to <strong>Bela Farmhouse & Eatery</strong>, where farm-to-table dining meets
            exquisite flavors. Nestled in the heart of Dhulikhel, our farmhouse combines natural beauty
            with delicious cuisine. Sourced directly from our farms, every dish is crafted with love,
            bringing you the freshest and healthiest meals.
          </motion.p>
          <motion.p
            className="text-lg text-gray-700 leading-relaxed mb-6"
            variants={textVariant}
          >
            Beyond dining, Bela Farmhouse offers serene lodging options for those seeking a tranquil
            escape. Immerse yourself in the beauty of nature, enjoy wholesome food, and create
            unforgettable memories with us.
          </motion.p>
          <motion.p
            className="text-lg text-gray-700 leading-relaxed mb-6"
            variants={textVariant}
          >
            Whether you're planning a family retreat, a romantic getaway, or a day trip to experience
            authentic farm life, Bela Farmhouse has something special for everyone. Our spacious rooms,
            equipped with modern amenities, are designed to provide maximum comfort while keeping you
            connected to nature.
          </motion.p>
          <motion.p
            className="text-lg text-gray-700 leading-relaxed mb-6"
            variants={textVariant}
          >
            For food enthusiasts, we host regular farm-to-table workshops and cooking classes to share
            the secrets of preparing healthy and flavorful meals. Learn how to pick the freshest
            ingredients and transform them into dishes that not only satisfy your palate but also
            nourish your body.
          </motion.p>
          <motion.p
            className="text-lg text-gray-700 leading-relaxed"
            variants={textVariant}
          >
            At Bela Farmhouse & Eatery, we take pride in being a sustainable and eco-friendly destination.
            By supporting local farmers and practicing green initiatives, we strive to make a positive
            impact on our community and the environment. Join us in our mission to celebrate the joys
            of slow living and mindful eating.
          </motion.p>
        </motion.div>

        {/* Wave Vector Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src={Vector}
            alt="Wave Vector"
            className="absolute top-0 right-0 w-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
