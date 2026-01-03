import React, { useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import { FaAngleRight, FaCodeCompare } from "react-icons/fa6";
import Images from "../Images";
import pro from "/src/assets/productsdelailsslider.png";
import { FaAngleLeft } from "react-icons/fa6";
import { FaSearchPlus, FaEye } from "react-icons/fa";
import start from "/src/assets/productsdelailsstars.png";
import statlogo from "/src/assets/productsdelailsstarslogo.png";
import { LuArrowRightLeft } from "react-icons/lu";
import { MdLocalShipping } from "react-icons/md";
import { IoIosArrowDropdown } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiShare2 } from "react-icons/ci";
import { GoInfo } from "react-icons/go";
import video from "/src/assets/productsdelailsvideo.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";

const ProductsDetails = () => {
   var settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
     nextArrow: <NextArrow />,
     prevArrow: <PrevArrow />,
   };
  let [user, setUser] = useState(1);

  const handleplus = () => {
    if (user < 10) {
      setUser((user) => user + 1);
    }
  };
  const handleminus = () => {
    if (user > 1) {
      setUser((user) => user - 1);
    }
  };
  return (
    <>
      <div className="bg-[url('/src/assets/productsdetailsbg.png')] bg-cover bg-center bg-no-repeat py-[150px]">
        <Container>
          <Flex className={"justify-between"}>
            <h3 className="text-[#141414] text-6xl font-semibold font-Jost">
              Product Details
            </h3>
            <div className="flex gap-x-3">
              <h5 className="text-[#74787C] text-[18px] font-Jost flex items-center gap-x-1">
                Home <FaAngleRight />
              </h5>
              <h5 className="text-[#141414] text-[18px] font-Jost font-semibold">
                Product Details
              </h5>
            </div>
          </Flex>
        </Container>
      </div>
      <Container className={"my-25"}>
        <Flex className={"items-start gap-x-6"}>
          <div>
            <div className="h-28 w-28 bg-[#D9D9D9]"></div>
            <div className="h-28 w-28 bg-[#D9D9D9] my-5"></div>
            <div className="h-28 w-28 bg-[#D9D9D9]"></div>
          </div>

          <div className="w-full relative overflow-hidden">
            <Slider {...settings}>
              <div className="relative outline-0">
                <Images imgSrc={pro} className={"h-[775px]"} />
                <NextArrow className="absolute top-1/2  text-black bg-white p-2 rounded-[50%] text-4xl right-12 cursor-pointer" />
                <PrevArrow className="absolute top-1/2  text-black bg-white p-2 rounded-[50%] text-4xl left-12 cursor-pointer" />
                <div className="bg-black text-white py-3 px-2.5 rounded-[50%] absolute top-12 left-12">
                  Sale
                </div>
                <FaSearchPlus className="bg-white text-black p-3.5 rounded-[50%] absolute top-12 right-12 text-5xl cursor-pointer " />
              </div>
              <div className="relative outline-0">
                <Images imgSrc={pro} className={"h-[775px]"} />
                <NextArrow className="absolute top-1/2  text-black bg-white p-2 rounded-[50%] text-4xl right-12 cursor-pointer" />
                <PrevArrow className="absolute top-1/2  text-black bg-white p-2 rounded-[50%] text-4xl left-12 cursor-pointer" />
                <div className="bg-black text-white py-3 px-2.5 rounded-[50%] absolute top-12 left-12">
                  Sale
                </div>
                <FaSearchPlus className="bg-white text-black p-3.5 rounded-[50%] absolute top-12 right-12 text-5xl cursor-pointer " />
              </div>
            </Slider>
          </div>
          <div className="">
            <div className="flex justify-between">
              <h4 className="text-[#E53E3E] text-[12px] font-Jost font-semibold">
                Modern Dress
              </h4>
              <Images imgSrc={statlogo} />
            </div>
            <h3 className="text-[#141414] text-3xl font-Jost font-semibold py-5">
              Tony Gold Neaklaces
            </h3>
            <div className="flex gap-x-3">
              <Images imgSrc={start} />
              <p className="text-[#141414] text-sm font-Jost">
                (1 customer review)
              </p>
            </div>
            <h4 className="text-[#141414] text-[18px] font-Jost py-5 border-b border-[#EBEBEB]">
              $260.00 <span className="text-[#74787C]"> $360.00</span>
            </h4>
            <p className="mt-8 text-[#74787C] font-Jost text-base w-[535px] leading-7">
              Eget taciti odio cum habitant egestas conubia turpis phasellus,
              ante parturient donec duis primis nam faucibus augue malesuada
              venenatis
            </p>
            <div className="flex items-center gap-x-3 py-5 border-b border-[#EBEBEB]">
              <FaEye />
              <p className="text-[#141414] text-base font-Jost">
                28 people are viewing this right now
              </p>
            </div>
            <p className="text-[#74787C] text-base font-Jost mt-11">
              Only 15 items left in stock!
            </p>
            <div className="flex mt-3">
              <div className="w-60 h-1 bg-[#E53E3E]"></div>
              <div className="w-96 h-1 bg-[#EBEBEB]"></div>
            </div>
            <div className="mt-11 flex items-center gap-x-2">
              <LuArrowRightLeft />
              <h4>Free returns</h4>
            </div>
            <div className="mt-1 flex items-center gap-x-2">
              <MdLocalShipping />
              <h4>Free shipping via DHL, fully insured</h4>
            </div>
            <div className="mt-1 flex items-center gap-x-2">
              <IoIosArrowDropdown />
              <h4>All taxes and customs duties included</h4>
            </div>
            <div className="mt-8 flex items-center gap-x-5">
              <div className="inline-flex items-center  rounded-md gap-x-7 text-2xl border border-[#E8E8E8] p-2.5">
                <h3 className="cursor-pointer" onClick={handleminus}>
                  --
                </h3>
                <h3>{user}</h3>
                <h3 className="cursor-pointer" onClick={handleplus}>
                  +
                </h3>
              </div>
              <div className="py-3 px-40 border border-[#141414] rounded-md">
                <h3 className="flex items-center gap-x-2">
                  Add To Cart
                  <HiOutlineShoppingBag />
                </h3>
              </div>
            </div>
            <div className="mt-5 py-5 px-60 bg-[#E53E3E] rounded-md text-white text-sm font-semibold font-Jos uppercase">
              Buy The Item Now
            </div>
            <div className="flex items-center gap-x-7 mt-9">
              <h4 className="flex items-center gap-x-2">
                <FaCodeCompare />
                Compare
              </h4>
              <h4 className="flex items-center gap-x-2">
                <GoInfo />
                Ask a question
              </h4>
              <h4 className="flex items-center gap-x-2">
                <CiShare2 />
                Share
              </h4>
            </div>
          </div>
        </Flex>

        <div className="flex gap-x-7 mt-20 border-b border-[#E8E8E8] pb-5">
          <h3 className="text-[#74787C] text-[18px] font-medium font-Jost hover:text-[#141414]">
            Description
          </h3>
          <h3 className="text-[#74787C] text-[18px] font-medium font-Jost hover:text-[#141414]">
            Additional information
          </h3>
          <h3 className="text-[#74787C] text-[18px] font-medium font-Jost hover:text-[#141414]">
            Reviews (2)
          </h3>
        </div>
        <Flex className={"gap-x-5 items-start mt-10"}>
          <p className="w-[730px] text-[#74787C] text-base font-Jost leading-6">
            Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            magna justo, lacinia eget consectetur sed, convallis at tellus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            magna justo, lacinia eget consectetur sed, convallis at tellus.
            <p className="pt-5">
              Lobortis rhoncus litora pretium tempor mattis proin, auctor dis
              massa enim himenaeos. Torquent senectus dui vehicula libero cum
              vitae natoque magna commodo quam,
            </p>
          </p>
          <Images imgSrc={video} />
        </Flex>
      </Container>
    </>
  );
};

export default ProductsDetails;
