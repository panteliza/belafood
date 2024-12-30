import React from "react";
import BgPolygon from "../assets/images/polygon.png";
import Vector from "../assets/images/vector-wave.png";

const About = () => {
  const bgStyle = {
    backgroundImage: `url(${BgPolygon})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    position: "relative",
  };

  return (
    <div style={bgStyle}>
      <div className="container mx-auto px-6 py-16">
        <h1 className="pt-20 tracking-wider text-4xl font-semibold text-white text-center">
          About Us
        </h1>
        <div className="bg-white mt-6 px-3 py-4 text-justify">
  <p className="text-lg text-gray-700 leading-relaxed mb-6">
    Welcome to <strong>Bela Farmhouse & Eatery</strong>, where farm-to-table dining meets
    exquisite flavors. Nestled in the heart of Dhulikhel, our farmhouse combines natural beauty
    with delicious cuisine. Sourced directly from our farms, every dish is crafted with love,
    bringing you the freshest and healthiest meals.
  </p>
  <p className="text-lg text-gray-700 leading-relaxed mb-6">
    Beyond dining, Bela Farmhouse offers serene lodging options for those seeking a tranquil
    escape. Immerse yourself in the beauty of nature, enjoy wholesome food, and create
    unforgettable memories with us.
  </p>
  <p className="text-lg text-gray-700 leading-relaxed mb-6">
    Whether you're planning a family retreat, a romantic getaway, or a day trip to experience
    authentic farm life, Bela Farmhouse has something special for everyone. Our spacious rooms,
    equipped with modern amenities, are designed to provide maximum comfort while keeping you
    connected to nature.
  </p>
  <p className="text-lg text-gray-700 leading-relaxed mb-6">
    For food enthusiasts, we host regular farm-to-table workshops and cooking classes to share
    the secrets of preparing healthy and flavorful meals. Learn how to pick the freshest
    ingredients and transform them into dishes that not only satisfy your palate but also
    nourish your body.
  </p>
  <p className="text-lg text-gray-700 leading-relaxed">
    At Bela Farmhouse & Eatery, we take pride in being a sustainable and eco-friendly destination.
    By supporting local farmers and practicing green initiatives, we strive to make a positive
    impact on our community and the environment. Join us in our mission to celebrate the joys
    of slow living and mindful eating.
  </p>
</div>

        {/* Wave Vector */}
        <div>
          <img
            src={Vector}
            alt="Wave Vector"
            className="absolute top-0 right-0 w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
