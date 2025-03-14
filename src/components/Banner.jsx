import React from "react";
import { motion } from "framer-motion";
import leaf from "../assets/images/leaf.png";
import tomato from "../assets/images/tomato.png";
import lemon from "../assets/images/lemon.png";
import apple from "../assets/images/apple.png";
import kiwi from "../assets/images/kiwi.png";

const Banner = () => {
  const imageVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === "left" ? -200 : direction === "right" ? 200 : 0,
      y: direction === "top" ? -200 : direction === "bottom" ? 200 : 0,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.3 },
    },
  };

  return (
    <div className="relative w-full overflow-hidden bg-white py-16 px-6 sm:px-10 md:px-16 lg:px-24">
      {/* Text Section */}
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary tracking-wide leading-snug">
          Experience Freshness at Bela Farmhouse
        </h1>
      </motion.div>

      <div className="space-y-14">
        {/* First Grid Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <div className="text-left text-base md:text-lg text-gray-700 leading-relaxed">
            <p>
              At <strong>Bela Farmhouse</strong>, we believe in bringing you the freshest and
              healthiest options straight from the farm. Our meals are prepared with ingredients
              sourced locally, ensuring every bite is packed with flavor and nutrition. Whether you're
              stopping by for a meal or staying with us, you'll taste the difference freshness makes.
            </p>
          </div>
          <div className="hidden sm:block" />
        </motion.div>

        {/* Second Grid Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <div className="hidden sm:block" />
          <div className="text-right text-base md:text-lg text-gray-700 leading-relaxed">
            <p>
              Our farmhouse offers not only delicious, farm-fresh dishes but also a serene getaway
              from the hustle of daily life. Relax in our cozy accommodations and enjoy a wholesome
              experience surrounded by nature's beauty. Bela Farmhouse is your perfect destination
              for rejuvenation and great food.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Animated Background Elements */}
      <motion.div
        className="absolute top-5 -left-12 sm:bottom-0 sm:left-0 opacity-60 sm:opacity-100"
        custom="left"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        <img src={leaf} alt="Leaf" className="w-28 md:w-36 lg:w-44" />
      </motion.div>

      <motion.div
        className="absolute -bottom-16 -left-16 sm:bottom-0 sm:left-0 opacity-60 sm:opacity-100"
        custom="bottom"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        <img src={tomato} alt="Tomato" className="w-48 md:w-56" />
      </motion.div>

      <motion.div
        className="absolute top-10 -right-14 sm:right-20 opacity-60 sm:opacity-100"
        custom="top"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        <img src={lemon} alt="Lemon" className="w-40 md:w-48" />
      </motion.div>

      <motion.div
        className="hidden sm:block absolute bottom-0 right-0"
        custom="bottom"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        <img src={apple} alt="Apple" className="w-44 md:w-52" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 opacity-60 "
        custom="top"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        <img src={kiwi} alt="Kiwi" className="w-40 md:w-48" />
      </motion.div>
    </div>
  );
};

export default Banner;
