import React from "react";
import { motion } from "framer-motion";

import newariImg from "../assets/images/newarifood.jpg";
import thakaliImg from "../assets/images/thakalifood.jpg";
import indianImg from "../assets/images/indianfood.jpeg";
import chineseImg from "../assets/images/chinesefood.jpg";


const foodItems = [
  {
    title: "Newari Food",
    image: newariImg,
    description: "Authentic traditional flavors from the Newar community with rich spices and unique cooking styles."
  },
  {
    title: "Thakali Food",
    image: thakaliImg,
    description: "A balanced blend of lentils, vegetables, pickles, and meat from the Himalayan region of Nepal."
  },
  {
    title: "Indian Food",
    image: indianImg,
    description: "Delightful curries, tandoori dishes, biryanis, and rich flavors from the heart of India."
  },
  {
    title: "Chinese Food",
    image: chineseImg,
    description: "Savory stir-fried dishes, noodles, dumplings, and bold sauces with Chinese culinary artistry."
  },
  
];

const animationVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const FoodSection = () => {
  return (
    <section className="w-full py-16 px-4 md:px-10 lg:px-20 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-secondary  mb-4"
        >
          Our Food Specialties
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 text-lg"
        >
          Explore the rich variety of cuisines that Bela Farmhouse & Eatery proudly serves
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {foodItems.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={animationVariants}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:shadow-2xl transition-all duration-500"
          >
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 150 }}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
            </motion.div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-base">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FoodSection;
