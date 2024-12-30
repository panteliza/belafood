import React from "react";
import { FaArrowRight } from "react-icons/fa";

const PrimaryButton = () => {
  return (
    <div className="flex items-center group">
      <button className="bg-primary h-[40px] text-white px-3 py-2 rounded-full flex items-center shadow-lg hover:bg-primaryDark transition">
        Choose Your Meal Plan
      </button>
      <FaArrowRight
        className="inline-block group-hover:translate-x-2 duration-200 p-2 text-base h-[40px] w-[40px] bg-primaryDark text-white rounded-full ml-2"
      />
    </div>
  );
};

export default PrimaryButton;
