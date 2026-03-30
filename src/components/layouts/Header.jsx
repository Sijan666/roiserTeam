import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import Logo from "/src/assets/logo.png";
import { FaChevronDown } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

const Header = () => {
  const [user, setUser] = useState(0);
  const barbe = () => {
    if (user < 9) {
      setUser((user) => user + 1);
    }
  };

  return (
    <>
      <div className="relative z-5">
        <Container className={"pt-7 pb-[70px] "}>
          <Flex className={"flex flex-col lg:flex-row gap-y-5"}>
            <div className="lg:w-[10%]">
              <Link to={"/"}>
                <Images imgSrc={Logo} />
              </Link>
            </div>
            <div className="lg:w-[58%] w-full">
              <Flex className="border-2 rounded-[3px] border-[#E8E8E8] p-2.5 lg:w-[80%] lg:ml-[70px] flex flex-col md:flex-row gap-y-5 justify-between">
                <Popover className="relative">
                  <PopoverButton className="text-sm text-[#1A1A1A] font-bold px-2 border-[#CFCFCF] lg:border-r-2 flex items-center outline-none">
                    All Categories <FaChevronDown className="ml-2" />
                  </PopoverButton>
                  <PopoverPanel
                    anchor="bottom"
                    className="flex flex-col bg-[#c4bdbdce] px-7 py-4 rounded-b-md text-white font-bold z-6"
                  >
                    <a href="/analytics" className="mb-2">
                      Mens
                    </a>
                    <a href="/engagement" className="mb-2">
                      Womens
                    </a>
                    <a href="/engagement">Kids</a>
                  </PopoverPanel>
                </Popover>
                <input
                  type="text"
                  placeholder="Search Keywords..."
                  className="outline-none md:w-[340px]"
                />
                <button className="bg-[#E53E3E] text-white px-[18px] py-1 rounded-[3px] cursor-pointer">
                  Search Here
                </button>
              </Flex>
            </div>
            <div className="lg:w-[32%] justify-end">
              <Flex className="lg:justify-end flex flex-col md:flex-row justify-center md:gap-x-10 lg:gap-x-0 gap-y-5">
                <div className="lg:pr-[15px]">
                  <p className="text-sm text-[#74787C] text-end">
                    Call Us Now:
                  </p>
                  <h6 className="text-[#1A1A1A] text-[16px] font-semibold">
                    +(258) 2159-2159
                  </h6>
                </div>
                <div className="flex">
                  <div className="lg:pr-5 lg:border-r-2 border-[#EBEBEB]">
                    <div className="bg-[#F5F6F2] h-[45px] w-[45px] rounded-full relative">
                      <FiPhone className="text-[16px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" />
                    </div>
                  </div>
                  <div className="px-5 lg:border-r-2 border-[#EBEBEB]">
                    <div className="bg-[#F5F6F2] h-[45px] w-[45px] rounded-full relative">
                      <FaRegHeart className="text-[16px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" />
                    </div>
                  </div>
                  <div className="lg:pl-5 lg:pr-[15px]">
                    <div
                      className="cursor-pointer bg-[#F5F6F2] h-[45px] w-[45px] rounded-full relative"
                      onClick={barbe}
                    >
                      <BiShoppingBag className=" text-[16px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" />
                      <div className="absolute right-0 top-0 h-[18px] w-[18px] rounded-full bg-[#E53E3E]">
                        <p className=" text-white text-[10px] font-bold absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ">
                          {user}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <p className="text-sm text-[#74787C] text-end">Your cart,</p>
                  <h6 className="text-[#1A1A1A] text-[16px] font-semibold">
                    $1280.00
                  </h6>
                </div>
              </Flex>
            </div>
          </Flex>
        </Container>
        {/* <Container
          className={
            "absolute bottom-0 left-1/2 -translate-x-1/2 w-full translate-y-1/2 "
          }
        >
          <div className="rounded-[10px] overflow-hidden relative ">
            <Flex >
              <div className="lg:w-[75%] bg-black py-6 px-7">
                <ul className="flex items-center gap-x-10 text-white text-sm font-medium">
                  <Link to={"/"}>
                    <li>HOME</li>
                  </Link>
                  <Link to={"/about"}>
                    <li>SHOP</li>
                  </Link>
                  <Link to={"/about"}>
                    <li>WOMEN</li>
                  </Link>
                  <Link to={"/about"}>
                    <li>MEN</li>
                  </Link>
                  <Link to={"/about"}>
                    <li>PAGES</li>
                  </Link>
                  <Link to={"/about"}>
                    <li>BLOG</li>
                  </Link>
                  <Link to={"/contact"}>
                    <li>CONTACT</li>
                  </Link>
                </ul>
              </div>
              <div className="w-[25%] flex justify-end items-center bg-[#E53E3E] py-[21px] px-7">
                <p className="text-white text-[16px] font-medium pr-[15px]">
                  Get 30% Discount Now
                </p>
                <div className="font-bold text-[12px] text-[#E53E3E] bg-white py-1 px-2.5 rounded-full">
                  SALE
                </div>
              </div>
              <div className="">
                <div className="absolute top-0 left-[75%] w-[100px] h-full bg-black [clip-path:polygon(25%_0,55%_25%,55%_100%,0_100%,0_0)]"></div>
              </div>
            </Flex>
          </div>
        </Container> */}
        <Container className={"relative lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 w-full lg:translate-y-1/2 mt-5 lg:mt-0 z-40" }>
          <div className="rounded-[10px] overflow-hidden relative shadow-lg lg:shadow-none">
            <Flex className="flex-col lg:flex-row">
              <div className="w-full lg:w-[75%] bg-black py-5 lg:py-6 px-4 lg:px-7">
                <ul className="flex flex-wrap justify-center lg:justify-start items-center gap-4 lg:gap-x-10 text-white text-sm font-medium">
                  <Link to={"/"} className="hover:text-[#E53E3E] transition">
                    <li>HOME</li>
                  </Link>
                  <Link to={"/about"} className="hover:text-[#E53E3E] transition">
                    <li>SHOP</li>
                  </Link>
                  <Link to={"/about"} className="hover:text-[#E53E3E] transition">
                    <li>WOMEN</li>
                  </Link>
                  <Link to={"/about"} className="hover:text-[#E53E3E] transition">
                    <li>MEN</li>
                  </Link>
                  <Link to={"/about"} className="hover:text-[#E53E3E] transition">
                    <li>PAGES</li>
                  </Link>
                  <Link to={"/about"} className="hover:text-[#E53E3E] transition">
                    <li>BLOG</li>
                  </Link>
                  <Link to={"/contact"} className="hover:text-[#E53E3E] transition">
                    <li>CONTACT</li>
                  </Link>
                </ul>
              </div>
              <div className="w-full lg:w-[25%] flex justify-center lg:justify-end items-center bg-[#E53E3E] py-4 lg:py-[21px] px-5 lg:px-7 relative z-10">
                <p className="text-white text-[14px] lg:text-[16px] font-medium pr-3 lg:pr-[15px] text-center">
                  Get 30% Discount Now
                </p>
                <div className="font-bold text-[10px] lg:text-[12px] text-[#E53E3E] bg-white py-1 px-2.5 rounded-full whitespace-nowrap">
                  SALE
                </div>
              </div>
              <div className="hidden lg:block absolute top-0 left-[75%] w-[100px] h-full bg-black [clip-path:polygon(25%_0,55%_25%,55%_100%,0_100%,0_0)] z-0"></div>
            </Flex>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
