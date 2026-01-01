import React from "react";
import Badge from "./Badges";
import Images from "./Images";
import Flex from "./Flex";
import { Link } from "react-router-dom";

const Product = ({
  prductImg,
  badgeText,
  productType,
  productTitle,
  reviewNo,
  reviewStars,
  productPrice,
  className,
}) => {
  return (
    <div className="relative group cursor-pointer mx-3">
      <Images imgSrc={prductImg} />
      <Badge
        badgeText={badgeText}
        className={
          "font-redHatDisplay text-[12px] w-[50px] absolute top-7.5 left-7.5"
        }
      />

      <div className="absolute top-7.5 right-7.5 opacity-0 group-hover:opacity-100 duration-400">
        <div className="mb-2.5 cursor-pointer">
          <Link to={"/"}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" rx="20" fill="white" />
              <path
                d="M17 16V15C17 13.3438 18.3125 12 20 12C21.6562 12 23 13.3438 23 15V16H25.5C26.3125 16 27 16.6875 27 17.5V25C27 26.6562 25.6562 28 24 28H16C14.3125 28 13 26.6562 13 25V17.5C13 16.6875 13.6562 16 14.5 16H17ZM18 16H22V15C22 13.9062 21.0938 13 20 13C18.875 13 18 13.9062 18 15V16ZM14.5 17C14.2188 17 14 17.25 14 17.5V25C14 26.125 14.875 27 16 27H24C25.0938 27 26 26.125 26 25V17.5C26 17.25 25.75 17 25.5 17H23V19.5C23 19.7812 22.75 20 22.5 20C22.2188 20 22 19.7812 22 19.5V17H18V19.5C18 19.7812 17.75 20 17.5 20C17.2188 20 17 19.7812 17 19.5V17H14.5Z"
                fill="#1A1A1A"
              />
            </svg>
          </Link>
        </div>
        <div className="mb-2.5 cursor-pointer">
          <Link to={"/"}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" rx="20" fill="white" />
              <path
                d="M19.9688 16L20.3438 15.6562C21.375 14.625 22.8438 14.1562 24.25 14.4062C26.4062 14.75 28 16.625 28 18.8125V18.9688C28 20.2812 27.4375 21.5312 26.5 22.4062L20.8438 27.6875C20.625 27.9062 20.3125 28 20 28C19.6562 28 19.3438 27.9062 19.125 27.6875L13.4688 22.4062C12.5312 21.5312 12 20.2812 12 18.9688V18.8125C12 16.625 13.5625 14.75 15.7188 14.4062C17.125 14.1562 18.5938 14.625 19.625 15.6562L19.9688 16ZM19.9688 17.4375L18.9062 16.3438C18.125 15.5625 17 15.1875 15.875 15.375C14.2188 15.6562 12.9688 17.0938 12.9688 18.8125V18.9688C12.9688 20 13.4062 20.9688 14.1562 21.6562L19.8125 26.9375C19.8438 27 19.9062 27 19.9688 27C20.0625 27 20.125 27 20.1562 26.9375L25.8125 21.6562C26.5625 20.9688 27 20 27 18.9688V18.8125C27 17.0938 25.75 15.6562 24.0938 15.375C22.9688 15.1875 21.8438 15.5625 21.0625 16.3438L19.9688 17.4375Z"
                fill="#1A1A1A"
              />
            </svg>
          </Link>
        </div>
        <div className="mb-2.5 cursor-pointer">
          <Link to={"/"}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" rx="20" fill="white" />
              <path
                d="M24 21C24 23.2188 22.1875 25 20 25C17.7812 25 16 23.2188 16 21C16 18.8125 17.7812 17 20 17C22.1875 17 24 18.8125 24 21ZM20 18C18.3125 18 17 19.3438 17 21C17 22.6562 18.3125 24 20 24C21.6562 24 23 22.6562 23 21C23 19.3438 21.6562 18 20 18ZM26 16.5312C27.4688 17.875 28.4375 19.5 28.9062 20.625C29 20.875 29 21.1562 28.9062 21.4062C28.4375 22.5 27.4688 24.125 26 25.5C24.5312 26.875 22.5 28 20 28C17.4688 28 15.4375 26.875 13.9688 25.5C12.5 24.125 11.5312 22.5 11.0625 21.4062C10.9688 21.1562 10.9688 20.875 11.0625 20.625C11.5312 19.5 12.5 17.875 13.9688 16.5312C15.4375 15.1562 17.4688 14 20 14C22.5 14 24.5312 15.1562 26 16.5312ZM12 21C12.4062 22 13.3125 23.5 14.6562 24.75C16 26 17.7812 27 20 27C22.1875 27 23.9688 26 25.3125 24.75C26.6562 23.5 27.5625 22 28 21C27.5625 20 26.6562 18.5 25.3125 17.25C23.9688 16 22.1875 15 20 15C17.7812 15 16 16 14.6562 17.25C13.3125 18.5 12.4062 20 12 21Z"
                fill="#1A1A1A"
              />
            </svg>
          </Link>
        </div>
      </div>

      <div className="px-6 py-6.5 bg-white rounded-md border-b border-b-[#E8E8E8] border-l border-l-[#E8E8E8] border-r border-r-[#E8E8E8]">
        <h5 className={`mb-1 font-Jost font-normal text-[12px] text-[#74787C]`}>
          {productType}
        </h5>
        <h4 className={`mb-2 font-Jost font-semibold text-xl text-[#1A1A1A]`}>
          {productTitle}
        </h4>
        <Flex className={"mb-6"}>
          <div className={`flex mr-2 ${className} text-[#E53E3E]`}>
            {reviewStars}
          </div>
          <h5 className={`mr-2 font-Jost font-normal text-sm text-[#74787C]`}>
            {reviewNo}
          </h5>
        </Flex>
        <h4 className={`font-Jost font-semibold text-[16px] text-[#1A1A1A]`}>
          {productPrice}
        </h4>
      </div>
    </div>
  );
};

export default Product;
