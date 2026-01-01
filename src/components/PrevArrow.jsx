import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className={
        "top-[-25%] right-23 absolute z-50 flex justify-center bg-[#F1F1F1] w-[45px] h-[45px] text-[#74787C] rounded-full items-center hover:bg-[#E53E3E] hover:text-white duration-300 cursor-pointer"
      }
      onClick={onClick}
    >
      <FaArrowLeftLong />
    </div>
  );
};

export default PrevArrow;
