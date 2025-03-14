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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
      setThemeIndex((prev) => (prev + 1) % themeColors.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length, themeColors.length]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-center w-full min-h-screen overflow-hidden transition-colors duration-700 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } transition-all duration-1000 ease-in-out`}
      style={{ backgroundColor: themeColors[themeIndex].light }}
    >
      {/* Right Content - Circular Slider */}
      <div className="relative w-full md:w-1/2 flex items-center justify-center p-4">
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
          {images.map((img, index) => {
            const angle = (360 / images.length) * index;
            const isActive = index === activeIndex;
            return (
              <div
                key={index}
                className={`absolute flex items-center justify-center rounded-full transition-transform duration-700 ease-in-out ${
                  isActive ? "scale-125 z-10" : "scale-100 z-0"
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
                  className="rounded-full border-4 border-white shadow-xl transition-all duration-700 ease-in-out hover:scale-110"
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
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-full border-4 border-white shadow-2xl z-20 animate-fade-in"
          />
        </div>
      </div>

      {/* Left Content - Text Section */}
      <div
        className={`w-full md:w-1/2 p-6 md:p-16 flex flex-col justify-center items-center md:items-start text-center md:text-left z-30 transition-all duration-1000 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight transition-all duration-700 ease-in-out"
          style={{ color: themeColors[themeIndex].dark }}
        >
          Bela Farmhouse & Eatery
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-700 font-semibold mb-4">
          A Culinary Journey of Freshness
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed max-w-xl transition-opacity duration-700 ease-in-out">
          Welcome to <span className="font-semibold text-gray-800">Bela Farmhouse & Eatery</span>, where <span className="italic">farm-to-table dining</span> meets exquisite flavors. Our menu is crafted with love, featuring ingredients sourced directly from <span className="text-gray-700 font-medium">local farms</span> to ensure every bite is fresh, wholesome, and bursting with flavor. Whether you're here for a hearty breakfast, a nourishing lunch, or a delightful dinner, we promise a culinary experience like no other.
        </p>
        <button
          className="px-8 py-3 text-lg font-semibold text-white rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
          style={{ backgroundColor: themeColors[themeIndex].dark }}
        >
          Discover More
        </button>
      </div>
    </div>
  );
};

export default CircularSlider;