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
      {/* <h3>Nabil</h3> */}
      <div className="relative z-5">
        <Container className={"pt-7 pb-[70px] "}>
          <Flex>
            <div className="w-[10%]">
              <Link to={"/"}>
                <Images imgSrc={Logo} />
              </Link>
            </div>
            <div className="w-[58%]">
              <Flex className="border-2 rounded-[3px] border-[#E8E8E8] p-2.5 w-[80%] ml-[70px]">
                {/* <Flex className="text-sm text-[#1A1A1A] font-bold px-2 border-[#CFCFCF] border-r-2">
                  All Categories <FaChevronDown className="ml-1"/>
                </Flex> */}
                <Popover className="relative">
                  <PopoverButton className="text-sm text-[#1A1A1A] font-bold px-2 border-[#CFCFCF] border-r-2 flex items-center outline-none">
                  All Categories <FaChevronDown className="ml-2"/></PopoverButton>
                  <PopoverPanel anchor="bottom" className="flex flex-col bg-[#c4bdbdce] px-7 py-4 rounded-b-md text-white font-bold z-6">
                    <a href="/analytics" className="mb-2">Mens</a>
                    <a href="/engagement" className="mb-2">Womens</a>
                    <a href="/engagement">Kids</a>
                  </PopoverPanel>
                </Popover>
                <input
                  type="text"
                  placeholder="Search Keywords..."
                  className="mx-5 outline-none w-[340px]"
                />
                <div className="bg-[#E53E3E] text-white px-[18px] py-1 rounded-[3px] cursor-pointer">
                  Search Here
                </div>
              </Flex>
            </div>
            <div className="w-[32%] justify-end">
              <Flex className="justify-end">
                <div className="pr-[15px]">
                  <p className="text-sm text-[#74787C] text-end">
                    Call Us Now:
                  </p>
                  <h6 className="text-[#1A1A1A] text-[16px] font-semibold">
                    +(258) 2159-2159
                  </h6>
                </div>
                <div className="pr-5 border-r-2 border-[#EBEBEB]">
                  <div className="bg-[#F5F6F2] h-[45px] w-[45px] rounded-full relative">
                    <FiPhone className="text-[16px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" />
                  </div>
                </div>
                <div className="px-5 border-r-2 border-[#EBEBEB]">
                  <div className="bg-[#F5F6F2] h-[45px] w-[45px] rounded-full relative">
                    <FaRegHeart className="text-[16px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" />
                  </div>
                </div>
                <div className="pl-5 pr-[15px]">
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
        <Container
          className={
            "absolute bottom-0 left-1/2 -translate-x-1/2 w-full translate-y-1/2 "
          }
        >
          {/* <Flex>
            <div className="bg-[#1A1A1A] w-[78%] relative py-[23px] px-[30px] rounded-md">
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
                <Link to={"/about"}>
                  <li>CONTACT</li>
                </Link>
              </ul>
            </div>
            <Flex className="bg-[#E53E3E] absolute top-0 right-0 py-5 pr-[30px] pl-[60px] rounded-tr-md rounded-br-md  ">
              <div class="absolute -left-[13px] top-[13%] h-10 w-11 rotate-30 bg-[#1A1A1A] z-0"></div>
              <div class="absolute -left-[42px] h-[43px] w-20 top-[35%] bg-[#1A1A1A] z-0"></div>
              <p className="text-white text-[16px] font-medium pr-[15px]">
                Get 30% Discount Now
              </p>
              <div className="font-bold text-[12px] text-[#E53E3E] bg-white py-1 px-2.5 rounded-full">
                SALE
              </div>
            </Flex>
          </Flex> */}

          <div className="rounded-[10px] overflow-hidden relative ">
            <Flex>
              <div className="w-[75%] bg-black py-6 px-7">
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
        </Container>
      </div>
    </>
  );
};

export default Header;
