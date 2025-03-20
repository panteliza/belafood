import React from "react";
import { motion } from "framer-motion";

// Static Image Imports
import Img2 from "../assets/images/2.JPG";
import Img3 from "../assets/images/3.JPG";
import Img4 from "../assets/images/4.JPG";
import Img5 from "../assets/images/5.JPG";
import Img6 from "../assets/images/6.JPG";
import Img7 from "../assets/images/7.JPG";
import Img8 from "../assets/images/8.JPG";
import Img9 from "../assets/images/9.JPG";
import Img10 from "../assets/images/10.JPG";
import Img11 from "../assets/images/11.JPG";
import Img12 from "../assets/images/12.JPG";
import Img13 from "../assets/images/13.JPG";
import Img14 from "../assets/images/14.JPG";
import Img15 from "../assets/images/15.JPG";
import Img16 from "../assets/images/16.JPG";
import Img17 from "../assets/images/17.JPG";
import Img18 from "../assets/images/18.JPG";
import Img19 from "../assets/images/19.JPG";
import Img20 from "../assets/images/20.jpeg";
import Img21 from "../assets/images/21.jpeg";
import Img23 from "../assets/images/23.jpeg";
import Img24 from "../assets/images/24.jpeg";
import Img25 from "../assets/images/25.jpeg";
import Img26 from "../assets/images/26.jpeg";
import Img27 from "../assets/images/27.jpeg";
import Img28 from "../assets/images/bf1.jpeg";
import Img29 from "../assets/images/bf2.jpeg";
import Img30 from "../assets/images/bf3.jpeg";

// Image Array
const images = [
  Img2, Img3, Img4, Img5, Img6, Img7, Img8,
  Img9, Img10, Img11, Img12, Img13, Img14, Img15, Img16,
  Img17, Img18, Img19, Img20, Img21, Img23, Img24,
  Img25, Img26, Img27,Img28,Img29
];

const Gallery = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-secondary text-4xl font-bold text-center mb-10">
        Some Glimpses
      </h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-2xl shadow-lg bg-white group"
            variants={imageVariants}
            whileHover="hover"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={img}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Gallery;
