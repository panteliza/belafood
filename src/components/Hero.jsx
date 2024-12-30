import React from "react";
import mainDish from "../assets/images/hero.png"; // Main dish image
import bgGradient from "../assets/images/heroBg.png"; // Your gradient background image

const BgStyle = {
  backgroundImage: `url(${bgGradient})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
};

const Hero = () => {
  return (
    <div>
      <div style={BgStyle} className="relative z-[-1]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
            {/* Text Content Section */}
            <div className="space-y-7 text-dark order-2 sm:order-1">
              <h1 className="text-5xl font-bold">
              
                <span className="block text-secondary font-cursive text-7xl">
                  A Stay to Remember
                </span>
              </h1>
              <p className="lg:pr-64">
                Welcome to Bela Farmhouse & Eatery, located in the heart of Kathmandu. Known for its farm-to-table dining, we now also offer premium lodging services. Indulge in our fresh, locally sourced dishes while enjoying a serene and comfortable stay.
              </p>
              <p className="lg:pr-64">
                Whether you are traveling for leisure or business, our hotel provides the perfect blend of modern amenities and rustic charm. Experience unparalleled hospitality and relax amidst the beauty of nature.
              </p>
              {/* Button Section */}
            
            </div>

            {/* Image Section */}
            <div className="relative z-30 order-1 sm:order-2">
              <img
                src={mainDish}
                alt="Hero Dish"
                className="w-full sm:scale-125 sm:translate-y-16"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
