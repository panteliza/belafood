import React from "react";
import { motion } from "framer-motion";
import leaf from "../assets/images/leaf.png";
import tomato from "../assets/images/tomato.png";
import lemon from "../assets/images/lemon.png";
import apple from "../assets/images/apple.png";
import kiwi from "../assets/images/kiwi.png";

const Banner = () => {
  // Animation Variants
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
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
  };

  return (
    <div className="container py-14 relative">
      {/* Text Section */}
      <motion.div
        className="text-center"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <h1 className="py-8 tracking-wider text-3xl font-bold text-secondary">
          Experience Freshness at Bela Farmhouse
        </h1>
      </motion.div>

      <div className="space-y-10">
  {/* First Grid Section */}
  <motion.div
    className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10"
    initial="hidden"
    animate="visible"
    variants={textVariants}
  >
    <div className="sm:col-start-1 sm:col-end-2">
      <p className="text-left">
        At <strong>Bela Farmhouse</strong>, we believe in bringing you the
        freshest and healthiest options straight from the farm. Our meals are
        prepared with ingredients sourced locally, ensuring every bite is
        packed with flavor and nutrition. Whether you're stopping by for a meal
        or staying with us, you'll taste the difference freshness makes.
      </p>
    </div>
    <div className="hidden sm:block"></div>
  </motion.div>

  {/* Second Grid Section */}
  <motion.div
    className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10"
    initial="hidden"
    animate="visible"
    variants={textVariants}
  >
    <div className="hidden sm:block"></div>
    <div className="sm:col-start-2 sm:col-end-3">
      <p className="text-right">
        Our farmhouse offers not only delicious, farm-fresh dishes but also a
        serene getaway from the hustle of daily life. Relax in our cozy
        accommodations and enjoy a wholesome experience surrounded by nature's
        beauty. Bela Farmhouse is your perfect destination for rejuvenation and
        great food.
      </p>
    </div>
  </motion.div>
</div>


      {/* Background Decorative Elements with Animations */}
      <div>
        <motion.div
          className="absolute top-5 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100"
          custom="left"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img src={leaf} alt="Leaf" className="max-w-[160px]" />
        </motion.div>

        <motion.div
          className="absolute -bottom-16 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100"
          custom="bottom"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img src={tomato} alt="Tomato" className="max-w-[280px]" />
        </motion.div>

        <motion.div
          className="absolute top-10 -right-16 sm:right-20 opacity-50 sm:opacity-100"
          custom="top"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img src={lemon} alt="Lemon" className="max-w-[200px]" />
        </motion.div>

        <motion.div
          className="hidden sm:block absolute bottom-0 right-0"
          custom="bottom"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img src={apple} alt="Apple" className="max-w-[200px]" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/2 opacity-50"
          custom="top"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img src={kiwi} alt="Kiwi" className="max-w-[180px]" />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
