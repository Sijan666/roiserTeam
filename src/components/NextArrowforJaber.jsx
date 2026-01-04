import React from 'react';
import { FaAngleRight } from "react-icons/fa6";

const NextArrowforJaber = ({ onClick }) => {
    return (
        <div
        className="absolute top-1/2 -translate-y-1/2 right-12 z-10 text-black bg-white w-12 h-12 flex justify-center items-center rounded-full text-2xl cursor-pointer shadow-lg hover:bg-gray-200 transition-colors duration-300"
        onClick={onClick}
        >
        <FaAngleRight />
        </div>
    );
};

export default NextArrowforJaber;