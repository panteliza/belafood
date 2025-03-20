import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { AiFillStar } from "react-icons/ai";

// Importing images from assets
import image1 from "../assets/images/belgium.png";
import image2 from "../assets/images/colombia.png";
import image3 from "../assets/images/india.png";
import image4 from "../assets/images/usa.png";
import image5 from "../assets/images/nepal.png";
import image6 from "../assets/images/australia.png";

const reviews = [
  {
    image: image1,
    name: "Claire",
    country: "Belgium",
    review:
      "Absolutely loved the rustic charm and warmth at Bela Farmhouse. The food was fresh and full of flavor—an authentic farm-to-table experience.",
    rating: 5,
  },
  {
    image: image2,
    name: "Mateo",
    country: "Colombia",
    review:
      "The farmhouse ambiance is so peaceful. I enjoyed every bite of the homemade pies and organic coffee. Will definitely return with family!",
    rating: 5,
  },
  {
    image: image3,
    name: "Priya",
    country: "India",
    review:
      "The hospitality was heartwarming. The countryside feel combined with delicious meals made it a perfect weekend escape.",
    rating: 4,
  },
  {
    image: image4,
    name: "Jake",
    country: "USA",
    review:
      "Bela Farmhouse feels like a hidden retreat. Loved the garden seating area and the hearty farmhouse breakfast. Super cozy and relaxing.",
    rating: 5,
  },
  {
    image: image5,
    name: "Sujan",
    country: "Nepal",
    review:
      "Fresh ingredients, traditional recipes, and a peaceful setting—this place truly stands out. A must-visit if you appreciate wholesome food.",
    rating: 5,
  },
  {
    image: image6,
    name: "Emily",
    country: "Australia",
    review:
      "Such a calming environment with fantastic homemade food. The staff was incredibly friendly and the scenic views were breathtaking.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-4">
          What Our Guests Say
        </h2>
        <div className="w-16 h-1 bg-green-600 mx-auto mb-6"></div>

        {/* Swiper Slider */}
        <Swiper
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="rounded-lg shadow-lg"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-5 rounded-xl shadow-md flex flex-col items-center max-w-xs mx-auto">
                {/* Profile Image */}
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />

                {/* Guest Name and Country */}
                <h3 className="text-lg font-semibold text-gray-800 text-center">
                  {review.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{review.country}</p>

                {/* Star Rating */}
                <div className="flex justify-center items-center mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <AiFillStar
                      key={i}
                      className="text-yellow-500 text-lg mr-0.5"
                    />
                  ))}
                  {Array.from({ length: 5 - review.rating }).map((_, i) => (
                    <AiFillStar
                      key={`empty-${i}`}
                      className="text-gray-300 text-lg mr-0.5"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-600 text-sm text-center">
                  "{review.review}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
