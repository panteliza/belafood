import React from "react";
import leaf from "../assets/images/leaf.png"; // Replace with actual path
import tomato from "../assets/images/tomato.png"; // Replace with actual path
import lemon from "../assets/images/lemon.png"; // Replace with actual path
import apple from "../assets/images/apple.png"; // Replace with actual path
import kiwi from "../assets/images/kiwi.png"; // Replace with actual path
import PrimaryButton from "./PrimaryButton ";

const Banner = () => {
  return (
    <div className="container py-14 relative">
      {/* Text Section */}
      <div>
        <h1 className="py-8 tracking-wider text-2xl font-semibold text-dark text-center">
          Experience Freshness at Bela Farmhouse
        </h1>
      </div>

      <div className="space-y-10"> 
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
          <div>
            <p>
              At <strong>Bela Farmhouse</strong>, we believe in bringing you the freshest and healthiest options straight from the farm. Our meals are prepared with ingredients sourced locally, ensuring every bite is packed with flavor and nutrition. Whether you're stopping by for a meal or staying with us, you'll taste the difference freshness makes.
            </p>
          </div>
          <div className=""></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
          <div className=""></div>
          <div>
            <p>
              Our farmhouse offers not only delicious, farm-fresh dishes but also a serene getaway from the hustle of daily life. Relax in our cozy accommodations and enjoy a wholesome experience surrounded by nature's beauty. Bela Farmhouse is your perfect destination for rejuvenation and great food.
            </p>
          </div>
          <div className=""></div>
        </div>
      </div>

      {/* Button Section */}
      
      {/* Background Decorative Elements */}
      <div>
        <div className="absolute top-5 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
          <img src={leaf} alt="" className="max-w-[160px]" />
        </div>
        <div className="absolute -bottom-16 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
          <img src={tomato} alt="" className="max-w-[280px]" />
        </div>
        <div className="absolute top-10 -right-16 sm:right-20 opacity-50 sm:opacity-100">
          <img src={lemon} alt="" className="max-w-[200px]" />
        </div>
        <div className="hidden sm:block absolute bottom-0 right-0">
          <img src={apple} alt="" className="max-w-[200px]" />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/2 opacity-50">
          <img src={kiwi} alt="" className="max-w-[180px]" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
