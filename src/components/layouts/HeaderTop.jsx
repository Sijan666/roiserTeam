import { Link } from "react-router-dom";
import Container from "../Container";
import Flex from "../Flex";
import { IoIosArrowDown } from "react-icons/io";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

const HeaderTop = () => {
  return (
    <div className="bg-[#E53E3E] py-2.5">
      <Container>
        <Flex className={'justify-between'}>
          <div>
            <ul className="flex items-center gap-6">
              <li className="font-medium text-sm text-white font-Jost">
                <Link to={"/about"}>
                    About
                </Link>
              </li>
              {/* <li className="font-medium text-sm text-white font-Jost"> */}
                {/* <Link to={"/myaccount"}>
                    My Account
                </Link> */}
              <Popover className="relative">
                <PopoverButton className={'font-medium text-sm text-white font-Jost flex items-center gap-x-2 outline-none'}>My Account<span><IoIosArrowDown /></span></PopoverButton>
                <PopoverPanel anchor="bottom" className="flex flex-col bg-[#e53e3ece] p-5 rounded-b-md text-white font-bold z-10">
                  
                    <Link to={'/login'} className="mb-2">
                      Login
                    </Link>
                  
                  
                    <Link to={'/signup'}>
                      Sign Up
                    </Link>
                  
                </PopoverPanel>
              </Popover>
              {/* </li> */}
              <li className="font-medium text-sm text-white font-Jost">
                <Link to={"/wishlist"}>
                    Wishlist
                </Link>
              </li>
              <li className="font-medium text-sm text-white font-Jost">
                <Link to={"/checkout"}>
                    Checkout
                </Link>
              </li>
            </ul>
          </div>
          <div >
            <p className="font-medium text-sm text-white font-Jost">
              Free shipping for all orders of 150$
            </p>
          </div>
          <div>
            <ul className="flex items-center gap-6">
              <li className="font-medium text-sm text-white font-Jost">
                <Link to={"/storelocation"}>
                    Store Location
                </Link>
              </li>
              <li className="text-white">|</li>
              <Popover className="relative">
                <PopoverButton className={'font-medium text-sm text-white font-Jost flex items-center gap-x-2 outline-none'}>Language<span><IoIosArrowDown /></span></PopoverButton>
                <PopoverPanel anchor="bottom" className="flex flex-col bg-[#e53e3ece] p-5 rounded-b-md text-white font-bold z-10">
                  <a href="/analytics" className="mb-2">Bengali</a>
                  <a href="/engagement" className="mb-2">English</a>
                  <a href="/engagement">Hindi</a>
                </PopoverPanel>
              </Popover>
              <li className="text-white">|</li>
              <Popover className="relative">
                <PopoverButton className={'font-medium text-sm text-white font-Jost flex items-center gap-x-2 outline-none'}>Currency<span><IoIosArrowDown /></span></PopoverButton>
                <PopoverPanel anchor="bottom" className="flex flex-col bg-[#e53e3ece] p-5 rounded-b-md text-white font-bold z-10">
                  <a href="/analytics" className="mb-2">BDT</a>
                  <a href="/engagement" className="mb-2">USD</a>
                  <a href="/engagement">Rupee</a>
                </PopoverPanel>
              </Popover>
            </ul>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default HeaderTop;
