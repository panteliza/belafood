import { useState, useEffect } from "react";
import img1 from "../assets/images/food1.png";
import img2 from "../assets/images/food2.png";
import img3 from "../assets/images/food3.png";
import img4 from "../assets/images/food4.png";

const CircularSlider = () => {
  const images = [img1, img2, img3, img4];

  const [themeColors, setThemeColors] = useState([
    { light: "#FFF7E3", dark: "#FFB84D" },
    { light: "#FFF0F0", dark: "#FF6B6B" },
    { light: "#E3F8FF", dark: "#4DB8FF" },
    { light: "#E8FFE3", dark: "#3ACF50" },
  ]);

  const [themeIndex, setThemeIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
      setThemeIndex((prev) => (prev + 1) % themeColors.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length, themeColors.length]);

  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center w-full min-h-screen transition-all duration-500"
      style={{ backgroundColor: themeColors[themeIndex].light }}
    >
      {/* Left Content */}
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <h1
          className="text-5xl md:text-6xl font-bold mb-4"
          style={{ color: themeColors[themeIndex].dark }}
        >
          Bela Farmhouse & Eatery
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-700 mb-4">
          A Culinary Journey of Freshness
        </h2>
        <p className="text-lg text-gray-500 mb-8">
          Welcome to Bela Farmhouse & Eatery, where farm-to-table dining meets exquisite flavors. Our menu is crafted with love, featuring ingredients sourced directly from local farms to ensure every bite is fresh, wholesome, and bursting with flavor. Whether you're here for a hearty breakfast, a nourishing lunch, or a delightful dinner, we promise a culinary experience like no other.
        </p>
        <button
          className="px-8 py-3 text-lg font-medium text-white rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition"
          style={{ backgroundColor: themeColors[themeIndex].dark }}
        >
          Discover More
        </button>
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 flex items-center justify-center relative">
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] flex items-center justify-center">
          {images.map((img, index) => {
            const angle = (360 / images.length) * index;
            const isActive = index === activeIndex;
            return (
              <div
                key={index}
                className={`absolute flex items-center justify-center rounded-full transition-transform duration-700 ease-in-out ${
                  isActive ? "scale-125 z-10" : "scale-100"
                }`}
                style={{
                  transform: `rotate(${angle}deg) translate(160px) rotate(-${angle}deg)`,
                  width: "120px",
                  height: "120px",
                }}
              >
                <img
                  src={img}
                  alt={`Dish ${index}`}
                  className="rounded-full border-4 border-white shadow-lg"
                  style={{
                    width: isActive ? "140px" : "120px",
                    height: isActive ? "140px" : "120px",
                  }}
                />
              </div>
            );
          })}
          <img
            src={images[activeIndex]}
            alt="Center Dish"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-full border-4 border-white shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default CircularSlider;
