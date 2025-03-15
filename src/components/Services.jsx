import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaSpa, FaHiking, FaHotel } from "react-icons/fa";
import { GiMountainCave, GiGreekTemple } from "react-icons/gi";

import spaImg from "../assets/images/spa.jpg";
import saunaImg from "../assets/images/sauna.jpg";
import hikingImg from "../assets/images/hiking.jpg";
import trekkingImg from "../assets/images/trekking.jpg";
import oldTownImg from "../assets/images/oldtown.jpg";
import deluxeRoomImg from "../assets/images/deluxe.jpeg";

const services = [
  {
    title: "Spa Experience",
    icon: <FaSpa className="text-5xl text-pink-500 mb-2 animate-pulse" />,
    image: spaImg,
    description: "Relax and rejuvenate with our luxury spa treatments in a serene environment."
  },
  {
    title: "Sauna Therapy",
    icon: <FaSpa className="text-5xl text-orange-400 mb-2 animate-bounce" />,
    image: saunaImg,
    description: "Unwind in our traditional sauna rooms for complete mind and body detox."
  },
  {
    title: "Hiking Trails",
    icon: <FaHiking className="text-5xl text-green-600 mb-2 animate-pulse" />,
    image: hikingImg,
    description: "Explore scenic hiking routes surrounded by nature's beauty."
  },
  {
    title: "Mountain Trekking",
    icon: <GiMountainCave className="text-5xl text-gray-700 mb-2 animate-bounce" />,
    image: trekkingImg,
    description: "Challenge yourself with thrilling mountain trekking adventures."
  },
  {
    title: "Old Town Visit",
    icon: <GiGreekTemple className="text-5xl text-yellow-500 mb-2 animate-pulse" />,
    image: oldTownImg,
    description: "Travel back in time through cultural visits to the historic old town."
  },
  {
    title: "Deluxe Rooms",
    icon: <FaHotel className="text-5xl text-blue-500 mb-2 animate-bounce" />,
    image: deluxeRoomImg,
    description: "Experience ultimate comfort in our spacious and elegantly designed deluxe rooms."
  }
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateY: 45 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      delay: i * 0.2,
      type: "spring",
      stiffness: 120,
      damping: 12
    }
  })
};

const ServicesSection = () => {
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  useEffect(() => {
    const imageUrls = services.map(service => service.image);
    let loadedCount = 0;

    imageUrls.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === imageUrls.length) {
          setAllImagesLoaded(true);
        }
      };
    });
  }, []);

  return (
    <section className="w-full bg-white py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-600 text-lg md:text-xl"
        >
          Explore the delightful experiences Bela Farmhouse & Eatery has to offer
        </motion.p>
      </div>

      {!allImagesLoaded ? (
        <div className="text-center text-lg text-gray-500 animate-pulse py-20">
          Loading experiences...
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className="rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white overflow-hidden transform hover:scale-[1.02]">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 text-center">
                  <div className="flex justify-center items-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
