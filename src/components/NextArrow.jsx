import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className={
        "top-[-25%] z-50 right-8 absolute flex justify-center bg-[#F1F1F1] w-[45px] h-[45px] text-[#74787C] rounded-full items-center hover:bg-[#E53E3E] hover:text-white duration-300 cursor-pointer"
      }
      onClick={onClick}
    >
      <FaArrowRightLong />
    </div>
  );
};

export default NextArrow;
