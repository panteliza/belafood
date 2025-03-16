import React from "react";
import { motion } from "framer-motion"; // Framer Motion for animations

import bgGradient from "../assets/images/heroBg.png"; // Background gradient 
import HeroImg from "../assets/images/1.png";

const BgStyle = {
  backgroundImage: `url(${bgGradient})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
};

const Hero = () => {
  // Animation Variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", staggerChildren: 0.3 },
    },
  };

  const textChildVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -45 }, // Larger initial scale and rotation for dramatic effect
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 2, // Increased duration for louder animation
        ease: "easeOut",
        bounce: 0.4, // Adds a bounce effect
      },
    },
  };

  return (
    <div>
      <div style={BgStyle} className="relative z-[-1] py-7 px-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
            {/* Text Content Section */}
            <motion.div
              className="space-y-7 text-dark order-2 sm:order-1"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              <motion.h1
                className="text-5xl font-bold"
                variants={textChildVariants}
              >
                <span className="block text-secondary font-cursive text-7xl">
                Food And Stay that is unforgettable
                </span>
              </motion.h1>
              <motion.p className="" variants={textChildVariants}>
                Welcome to Bela Farmhouse & Eatery, located in the heart of
                Kathmandu. Known for its farm-to-table dining, we now also
                offer premium lodging services. Indulge in our fresh, locally
                sourced dishes while enjoying a serene and comfortable stay.
              </motion.p>
              <motion.p className="" variants={textChildVariants}>
                Whether you are traveling for leisure or business, our hotel
                provides the perfect blend of modern amenities and rustic charm.
                Experience unparalleled hospitality and relax amidst the beauty
                of nature.
              </motion.p>
            </motion.div>

           {/* image section */}
                  <div className="flex flex-col justify-center">
                    <img
                      src={HeroImg}
                      alt=""
                      className="animate-spin-slow img-shadow w-[400px] mx-auto "
                    />
                  </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
