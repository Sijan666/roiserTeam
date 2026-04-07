import { useEffect, useState, useRef } from "react";
import Container from "../Container";
import Flex from "../Flex";
import { FaAngleRight, FaCodeCompare, FaStar, FaAngleLeft } from "react-icons/fa6";
import { FaSearchPlus, FaEye } from "react-icons/fa";
import Images from "../Images";
import pro from "/src/assets/productsdelailsslider.png";
import { LuArrowRightLeft } from "react-icons/lu";
import { MdLocalShipping } from "react-icons/md";
import { IoIosArrowDropdown } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiShare2, CiStar } from "react-icons/ci";
import { GoInfo } from "react-icons/go";
import video from "/src/assets/productsdelailsvideo.png";
import mixitup from "mixitup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ProductsDetails = () => {
  const containerRef = useRef(null);

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

  useEffect(() => {
    let mixer = null;
    if (containerRef.current) {
      mixer = mixitup(containerRef.current, {
        selectors: {
          target: ".mix",
        },
        animation: {
          duration: 300,
        },
        load: {
          filter: ".description",
        },
      });
    }
    return () => {
      if (mixer) mixer.destroy();
    };
  }, []);

  return (
    <>
      <div className="bg-[url('/src/assets/productsdetailsbg.png')] bg-cover bg-center bg-no-repeat lg:py-[150px] py-25">
        <Container>
          <Flex className={"justify-between flex-col lg:flex-row gap-y-3"}>
            <h3 className="text-[#141414] lg:text-6xl text-4xl font-semibold font-Jost">
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
      <Container className={"my-20 lg:my-25"}>
        <Flex className={"items-start lg:gap-x-6 flex flex-col lg:flex-row"}>
          <div className="flex lg:flex-col flex-row gap-5 lg:gap-0 mx-auto lg:mx-0 mb-5 lg:mb-0">
            <div className="lg:h-28 h-15 w-15 lg:w-28 bg-[#D9D9D9]"></div>
            <div className="lg:h-28 h-15 w-15 lg:w-28 bg-[#D9D9D9] lg:my-5"></div>
            <div className="lg:h-28 h-15 w-15 lg:w-28 bg-[#D9D9D9]"></div>
          </div>
          <div className="w-full relative overflow-hidden">
            <Swiper
              modules={[Navigation]}
              spaceBetween={0}
              slidesPerView={1}
              navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
              }}
              loop={true}
              speed={500}
              className="relative group"
            >
              <div className="custom-prev absolute top-1/2 -translate-y-1/2 left-12 z-20 cursor-pointer">
                <FaAngleLeft className="text-black bg-white p-2 rounded-full text-4xl transition-all hover:bg-gray-200 shadow-md" />
              </div>
              
              <div className="custom-next absolute top-1/2 -translate-y-1/2 right-12 z-20 cursor-pointer">
                <FaAngleRight className="text-black bg-white p-2 rounded-full text-4xl transition-all hover:bg-gray-200 shadow-md" />
              </div>
              {/* Items */}
              <SwiperSlide>
                <div className="relative outline-0">
                  <Images imgSrc={pro} className={"lg:h-[775px] h-auto w-full object-cover"} />
                  <div className="bg-black text-white py-3 px-2.5 rounded-full absolute top-12 left-12 z-10">
                    Sale
                  </div>
                  <FaSearchPlus className="bg-white text-black p-3.5 rounded-full absolute top-12 right-12 text-5xl cursor-pointer z-10" />
                </div>
              </SwiperSlide>
              
              <SwiperSlide>
                <div className="relative outline-0">
                  <Images imgSrc={pro} className={"lg:h-[775px] h-auto w-full object-cover"} />
                  <div className="bg-black text-white py-3 px-2.5 rounded-full absolute top-12 left-12 z-10">
                    Sale
                  </div>
                  <FaSearchPlus className="bg-white text-black p-3.5 rounded-full absolute top-12 right-12 text-5xl cursor-pointer z-10" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="">
            <div className="flex justify-between">
              <div className="">
                <h4 className="text-[#E53E3E] text-[12px] font-Jost font-semibold uppercase">
                  Modern Dress
                </h4>
                <h3 className="text-[#141414] text-3xl font-Jost font-semibold py-4">
                  Tony Gold Neaklaces
                </h3>
              </div>
              <div className="w-10 h-10 rounded-full border-2 text-[#141414] border-[#E6E6E6] relative text-xl hidden lg:block">
                <CiStar className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>
            <div className="flex gap-x-3">
              <Flex>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </Flex>
              <p className="text-[#141414] text-sm font-Jost">
                (1 customer review)
              </p>
            </div>
            <h4 className="text-[#141414] text-[18px] font-Jost py-5 border-b border-[#EBEBEB]">
              $260.00 <span className="text-[#74787C]"> $360.00</span>
            </h4>
            <p className="mt-8 text-[#74787C] font-Jost text-base lg:w-[535px] w-[300px] leading-7">
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
              <div className="lg:w-60 w-20 h-1 bg-[#E53E3E]"></div>
              <div className="lg:w-96 w-50 h-1 bg-[#EBEBEB]"></div>
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
            <div className="mt-8 flex lg:flex-row items-center gap-x-5">
              <div className="inline-flex items-center rounded-md lg:gap-x-7 gap-x-4 lg:text-2xl text-base border border-[#E8E8E8] px-4 py-2">
                <h3 className="cursor-pointer" onClick={handleminus}>
                  --
                </h3>
                <h3>{user}</h3>
                <h3 className="cursor-pointer" onClick={handleplus}>
                  +
                </h3>
              </div>
              <div className="py-2 lg:py-3 lg:px-40 px-10 border border-[#141414] rounded-md cursor-pointer">
                <h3 className="flex items-center gap-x-2 ">
                  Add To Cart
                  <HiOutlineShoppingBag />
                </h3>
              </div>
            </div>
            <div className="mt-5 py-5 lg:px-60 px-20 bg-[#E53E3E] rounded-md text-white text-sm font-semibold font-Jos uppercase text-center cursor-pointer">
              Buy The Item Now
            </div>
            <div className="flex items-center lg:gap-x-7 gap-x-3 mt-9">
              <h4 className="flex items-center gap-x-2 cursor-pointer">
                <FaCodeCompare />
                Compare
              </h4>
              <h4 className="flex items-center gap-x-2 cursor-pointer">
                <GoInfo />
                Ask a question
              </h4>
              <h4 className="flex items-center gap-x-2 cursor-pointer">
                <CiShare2 />
                Share
              </h4>
            </div>
          </div>
        </Flex>

        {/* Filter Buttons */}
        <div className="flex lg:gap-x-7 gap-x-2 mt-20 border-b border-[#E8E8E8] pb-5">
          <h3
            data-filter=".description"
            className="text-[#74787C] lg:text-[18px] text-sm font-medium font-Jost hover:text-[#141414] cursor-pointer"
          >
            Description
          </h3>
          <h3
            data-filter=".additional"
            className="text-[#74787C] lg:text-[18px] text-sm font-medium font-Jost hover:text-[#141414] cursor-pointer"
          >
            Additional information
          </h3>
          <h3
            data-filter=".reviews"
            className="text-[#74787C] lg:text-[18px] text-sm font-medium font-Jost hover:text-[#141414] cursor-pointer"
          >
            Reviews (2)
          </h3>
        </div>

        {/* Container Ref for MixItUp */}
        <div className="" ref={containerRef}>
          <Flex
            className={"gap-x-5 items-start mt-10 flex-col lg:flex-row gap-y-8"}
          >
            <div className="mix description lg:w-[730px] w-[300px] text-[#74787C] text-base font-Jost leading-6">
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
            </div>

            <div className="mix additional lg:w-[730px] w-[300px] text-[#74787C] text-base font-Jost leading-6">
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
            </div>

            <div className="mix reviews lg:w-[730px] w-[300px] text-[#74787C] text-base font-Jost leading-6">
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
            </div>

            <Images imgSrc={video} />
          </Flex>
        </div>
      </Container>
    </>
  );
};

export default ProductsDetails;