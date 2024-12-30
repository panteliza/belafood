import React from "react";
import { motion } from "framer-motion";

// Dynamically import all images using Webpack's `import.meta.glob` or Vite's equivalent
const imageImports = import.meta.glob("../assets/images/*.JPG", { eager: true });
const images = Object.values(imageImports).map((img) => img.default);

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="container mx-auto py-6">
      {/* Title */}
      <h1 className="text-secondary text-4xl font-bold text-center mb-8">
        Some Glimpses
      </h1>

      {/* Gallery Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg shadow-md bg-gray-100"
            variants={imageVariants}
            whileHover="hover"
          >
            <img
              src={img}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy" // Enable lazy loading
              decoding="async" // Async decoding for faster rendering
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Gallery;
