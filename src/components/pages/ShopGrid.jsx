import Container from "../Container";
import Flex from "../Flex";
import { RiArrowRightSLine } from "react-icons/ri";
import { CgMenuGridR } from "react-icons/cg";
import { TfiMenuAlt } from "react-icons/tfi";
import { VscChevronDown } from "react-icons/vsc";
import Product from "../Product";
import Proimg from "/src/assets/Car.png";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { BiCheckboxSquare } from "react-icons/bi";
import { FaRegCircle } from "react-icons/fa6";
import { TiStarFullOutline } from "react-icons/ti";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const ShopGrid = () => {
  return (
    <>
      <div className="bg-[url(/src/assets/shopGrid.png)] bg-cover bg-center py-12 md:py-25">
        <Container className={'px-4 lg:px-0'}>
          <Flex className={"flex-col md:flex-row justify-between items-center md:items-start gap-y-4 md:gap-y-0"}>
            <h3 className="text-[#1A1A1A] text-4xl md:text-[60px] font-semibold text-center md:text-left">
              Shop Grid
            </h3>
            <Flex className={"gap-x-2 md:gap-x-4 items-center"}>
              <p className="text-[#74787C] text-[14px] md:text-[18px]">Home</p>
              <RiArrowRightSLine className="text-[#74787C] text-lg md:text-xl" />
              <p className="text-[#1A1A1A] text-[14px] md:text-[18px] font-semibold">
                About Us
              </p>
            </Flex>
          </Flex>
        </Container>
      </div>
      <Container className={"my-[50px] md:my-[100px] px-4 lg:px-0"}>
        <Flex className={"mb-[50px] flex-col lg:flex-row gap-y-10 lg:gap-y-0 lg:gap-x-8 items-start"}>
          {/* Products Area */}
          <div className="w-full lg:w-[75%]">
            <Flex className={"mb-[30px] flex-col md:flex-row justify-between items-center gap-y-4 md:gap-y-0"}>
              <Flex className="w-full md:w-auto justify-center md:justify-start">
                <Flex className={"gap-x-4 md:gap-x-[30px] items-center flex-col sm:flex-row gap-y-4 sm:gap-y-0"}>
                  <Flex className="border border-[#E8E8E8] py-2 md:py-4 px-4 md:px-5 gap-x-4 rounded-[5px] text-lg md:text-xl">
                    <CgMenuGridR className="cursor-pointer hover:text-[#E53E3E] transition-colors" />
                    <TfiMenuAlt className="cursor-pointer hover:text-[#E53E3E] transition-colors text-gray-400" />
                  </Flex>
                  <p className="text-[#74787C] text-[14px] md:text-[16px]">
                    Showing 1–12 of 88 results
                  </p>
                </Flex>
              </Flex>
              <div className="px-4 md:px-[30px] py-2 md:py-3.5 border border-[#E8E8E8] rounded-[5px] w-full sm:w-auto flex justify-center">
                <select className="outline-none cursor-pointer text-[#1A1A1A] text-[14px] md:text-[16px] bg-transparent appearance-none flex items-center gap-2">
                  <option>
                    Default Sorting
                  </option>
                </select>
                <VscChevronDown className="ml-2 self-center pointer-events-none" />
              </div>
            </Flex>
            <div className="products-grid">
              <Flex className={"mb-6 flex-col md:flex-row justify-between gap-6"}>
                <Product 
                  prductImg={Proimg}
                  productType={"Levi’s Cotton"}
                  productTitle={"Monica Diara Party Dress"}
                  productPrice={"$893.00"}
                />
                <Product
                  prductImg={Proimg}
                  productType={"Levi’s Cotton"}
                  productTitle={"Monica Diara Party Dress"}
                  productPrice={"$893.00"}
                />
                <Product
                  prductImg={Proimg}
                  productType={"Levi’s Cotton"}
                  productTitle={"Monica Diara Party Dress"}
                  productPrice={"$893.00"}
                />
              </Flex>
              <Flex className={"mb-6 flex-col md:flex-row justify-between gap-6"}>
                <Product
                  prductImg={Proimg}
                  productType={"Levi’s Cotton"}
                  productTitle={"Monica Diara Party Dress"}
                  productPrice={"$893.00"}
                />
                <Product
                  prductImg={Proimg}
                  productType={"Levi’s Cotton"}
                  productTitle={"Monica Diara Party Dress"}
                  productPrice={"$893.00"}
                />
                <Product
                  prductImg={Proimg}
                  productType={"Levi’s Cotton"}
                  productTitle={"Monica Diara Party Dress"}
                  productPrice={"$893.00"}
                />
              </Flex>
              <Flex className={"mb-6 flex-col md:flex-row justify-between gap-6"}>
                <Product
                  prductImg={Proimg}
                  productType={"Levi’s Cotton"}
                  productTitle={"Monica Diara Party Dress"}
                  productPrice={"$893.00"}
                />
                <Product
                  prductImg={Proimg}
                  productType={"Levi’s Cotton"}
                  productTitle={"Monica Diara Party Dress"}
                  productPrice={"$893.00"}
                />
                <Product
                  prductImg={Proimg}
                  productType={"Levi’s Cotton"}
                  productTitle={"Monica Diara Party Dress"}
                  productPrice={"$893.00"}
                />
              </Flex>
              <Flex className={"mb-6 flex-col md:flex-row justify-between gap-6"}>
                <Product
                  prductImg={Proimg}
                  productType={"Levi’s Cotton"}
                  productTitle={"Monica Diara Party Dress"}
                  productPrice={"$893.00"}
                />
                <Product
                  prductImg={Proimg}
                  productType={"Levi’s Cotton"}
                  productTitle={"Monica Diara Party Dress"}
                  productPrice={"$893.00"}
                />
                <Product
                  prductImg={Proimg}
                  productType={"Levi’s Cotton"}
                  productTitle={"Monica Diara Party Dress"}
                  productPrice={"$893.00"}
                />
              </Flex>
              <Flex className={"flex-col md:flex-row justify-between gap-6"}>
                <Product
                  prductImg={Proimg}
                  productType={"Levi’s Cotton"}
                  productTitle={"Monica Diara Party Dress"}
                  productPrice={"$893.00"}
                />
                <Product
                  prductImg={Proimg}
                  productType={"Levi’s Cotton"}
                  productTitle={"Monica Diara Party Dress"}
                  productPrice={"$893.00"}
                />
                <Product
                  prductImg={Proimg}
                  productType={"Levi’s Cotton"}
                  productTitle={"Monica Diara Party Dress"}
                  productPrice={"$893.00"}
                />
              </Flex>
            </div>
          </div>
          {/* Sidebar */}
          <div className="w-full lg:w-[25%]">
            <div className="border border-black/10 p-6 md:p-[30px] rounded-md">
              <h4 className="text-[#1A1A1A] text-base md:text-[18px] font-semibold pb-4 md:pb-5 border-b border-[#E8E8E8] mb-6 md:mb-[30px]">
                Categories
              </h4>
              <div className="">
                <Flex className={"gap-x-3.5 mb-4 md:mb-[18px] items-center cursor-pointer group"}>
                  <MdOutlineCheckBoxOutlineBlank className="text-[#E3E3E3] text-lg md:text-xl group-hover:text-[#E53E3E] transition-colors" />
                  <p className="text-[#1A1A1A] text-[14px] md:text-[16px] group-hover:text-[#E53E3E] transition-colors">Accessories (4)</p>
                </Flex>
                <Flex className={"gap-x-3.5 mb-4 md:mb-[18px] items-center cursor-pointer group"}>
                  <MdOutlineCheckBoxOutlineBlank className="text-[#E3E3E3] text-lg md:text-xl group-hover:text-[#E53E3E] transition-colors" />
                  <p className="text-[#1A1A1A] text-[14px] md:text-[16px] group-hover:text-[#E53E3E] transition-colors">
                    Badge Categories (4)
                  </p>
                </Flex>
                <Flex className={"gap-x-3.5 mb-4 md:mb-[18px] items-center cursor-pointer group"}>
                  <MdOutlineCheckBoxOutlineBlank className="text-[#E3E3E3] text-lg md:text-xl group-hover:text-[#E53E3E] transition-colors" />
                  <p className="text-[#1A1A1A] text-[14px] md:text-[16px] group-hover:text-[#E53E3E] transition-colors">
                    Bag & Backpacks (1)
                  </p>
                </Flex>
                <Flex className={"gap-x-3.5 mb-4 md:mb-[18px] items-center cursor-pointer group"}>
                  <MdOutlineCheckBoxOutlineBlank className="text-[#E3E3E3] text-lg md:text-xl group-hover:text-[#E53E3E] transition-colors" />
                  <p className="text-[#1A1A1A] text-[14px] md:text-[16px] group-hover:text-[#E53E3E] transition-colors">
                    Category Grid (12)
                  </p>
                </Flex>
                <Flex className={"gap-x-3.5 mb-4 md:mb-[18px] items-center cursor-pointer group"}>
                  <MdOutlineCheckBoxOutlineBlank className="text-[#E3E3E3] text-lg md:text-xl group-hover:text-[#E53E3E] transition-colors" />
                  <p className="text-[#1A1A1A] text-[14px] md:text-[16px] group-hover:text-[#E53E3E] transition-colors">
                    Clothing & Apparel (2)
                  </p>
                </Flex>
                <Flex className={"gap-x-3.5 mb-4 md:mb-[18px] items-center cursor-pointer group"}>
                  <MdOutlineCheckBoxOutlineBlank className="text-[#E3E3E3] text-lg md:text-xl group-hover:text-[#E53E3E] transition-colors" />
                  <p className="text-[#1A1A1A] text-[14px] md:text-[16px] group-hover:text-[#E53E3E] transition-colors">
                    Consumer Electric (3)
                  </p>
                </Flex>
                <Flex className={"gap-x-3.5 mb-4 md:mb-[18px] items-center cursor-pointer group"}>
                  <MdOutlineCheckBoxOutlineBlank className="text-[#E3E3E3] text-lg md:text-xl group-hover:text-[#E53E3E] transition-colors" />
                  <p className="text-[#1A1A1A] text-[14px] md:text-[16px] group-hover:text-[#E53E3E] transition-colors">
                    Top Electronics (3)
                  </p>
                </Flex>
                <Flex className={"gap-x-3.5 items-center cursor-pointer group"}>
                  <MdOutlineCheckBoxOutlineBlank className="text-[#E3E3E3] text-lg md:text-xl group-hover:text-[#E53E3E] transition-colors" />
                  <p className="text-[#1A1A1A] text-[14px] md:text-[16px] group-hover:text-[#E53E3E] transition-colors">
                    Women's Collection (5)
                  </p>
                </Flex>
              </div>
            </div>
            <div className="border border-black/10 p-6 md:p-[30px] rounded-md my-6 md:my-[30px]">
              <h4 className="text-[#1A1A1A] text-base md:text-[18px] font-semibold pb-4 md:pb-5 border-b border-[#E8E8E8] mb-6 md:mb-[30px]">
                Filter by price
              </h4>
              <Flex className="pb-5 text-[#E53E3E] text-2xl justify-between items-center">
                <BiCheckboxSquare className="cursor-pointer" />
                <div className="bg-[#E53E3E] h-1 w-full mx-2 rounded"></div>
                <BiCheckboxSquare className="cursor-pointer" />
              </Flex>
              <Flex className={"justify-between text-[#1A1A1A] text-[14px] md:text-[16px] items-center"}>
                <p>Price: $10 — $90</p>
                <Flex className="items-center cursor-pointer hover:text-[#E53E3E] transition-colors font-medium gap-1">
                  Filter <FaArrowRight className="text-sm" />
                </Flex>
              </Flex>
            </div>
            <div className="border border-black/10 p-6 md:p-[30px] rounded-md my-6 md:my-[30px]">
              <h4 className="text-[#1A1A1A] text-base md:text-[18px] font-semibold pb-4 md:pb-5 border-b border-[#E8E8E8] mb-4 md:mb-6">
                Item Size
              </h4>
              <Flex className={"justify-between border-b border-[#E8E8E8] items-center cursor-pointer group"}>
                <Flex className={"gap-x-3 text-[14px] md:text-[16px] text-[#1A1A1A] py-3 md:py-4 items-center group-hover:text-[#E53E3E] transition-colors"}>
                  <FaRegCircle className="text-[#E2E2E2] text-lg md:text-xl group-hover:text-[#E53E3E] transition-colors" />
                  <p>XS</p>
                </Flex>
                <p className="text-[14px] md:text-base text-gray-500">(15)</p>
              </Flex>
              <Flex className={"justify-between border-b border-[#E8E8E8] items-center cursor-pointer group"}>
                <Flex className={"gap-x-3 text-[14px] md:text-[16px] text-[#1A1A1A] py-3 md:py-4 items-center group-hover:text-[#E53E3E] transition-colors"}>
                  <FaRegCircle className="text-[#E2E2E2] text-lg md:text-xl group-hover:text-[#E53E3E] transition-colors" />
                  <p>S</p>
                </Flex>
                <p className="text-[14px] md:text-base text-gray-500">(12)</p>
              </Flex>
              <Flex className={"justify-between border-b border-[#E8E8E8] items-center cursor-pointer group"}>
                <Flex className={"gap-x-3 text-[14px] md:text-[16px] text-[#1A1A1A] py-3 md:py-4 items-center group-hover:text-[#E53E3E] transition-colors"}>
                  <FaRegCircle className="text-[#E2E2E2] text-lg md:text-xl group-hover:text-[#E53E3E] transition-colors" />
                  <p>Small</p>
                </Flex>
                <p className="text-[14px] md:text-base text-gray-500">(185)</p>
              </Flex>
              <Flex className={"justify-between border-b border-[#E8E8E8] items-center cursor-pointer group"}>
                <Flex className={"gap-x-3 text-[14px] md:text-[16px] text-[#1A1A1A] py-3 md:py-4 items-center group-hover:text-[#E53E3E] transition-colors"}>
                  <FaRegCircle className="text-[#E2E2E2] text-lg md:text-xl group-hover:text-[#E53E3E] transition-colors" />
                  <p>L</p>
                </Flex>
                <p className="text-[14px] md:text-base text-gray-500">(72)</p>
              </Flex>
              <Flex className={"justify-between border-b border-[#E8E8E8] items-center cursor-pointer group"}>
                <Flex className={"gap-x-3 text-[14px] md:text-[16px] text-[#1A1A1A] py-3 md:py-4 items-center group-hover:text-[#E53E3E] transition-colors"}>
                  <FaRegCircle className="text-[#E2E2E2] text-lg md:text-xl group-hover:text-[#E53E3E] transition-colors" />
                  <p>XL</p>
                </Flex>
                <p className="text-[14px] md:text-base text-gray-500">(85)</p>
              </Flex>
              <Flex className={"justify-between items-center cursor-pointer group pt-1"}>
                <Flex className={"gap-x-3 text-[14px] md:text-[16px] text-[#1A1A1A] py-3 md:py-4 items-center group-hover:text-[#E53E3E] transition-colors"}>
                  <FaRegCircle className="text-[#E2E2E2] text-lg md:text-xl group-hover:text-[#E53E3E] transition-colors" />
                  <p>Extra Large</p>
                </Flex>
                <p className="text-[14px] md:text-base text-gray-500">(16)</p>
              </Flex>
            </div>
            <div className="border border-black/10 p-6 md:p-[30px] rounded-md my-6 md:my-[30px]">
              <h4 className="text-[#1A1A1A] text-base md:text-[18px] font-semibold pb-4 md:pb-5 border-b border-[#E8E8E8] mb-6 md:mb-[30px]">
                Brands
              </h4>
              <div className="">
                <Flex className={"justify-between mb-4 md:mb-[18px] items-center cursor-pointer group"}>
                  <Flex className={"gap-x-3.5 items-center"}>
                    <MdOutlineCheckBoxOutlineBlank className="text-[#E3E3E3] text-lg md:text-xl group-hover:text-[#E53E3E] transition-colors" />
                    <p className="text-[#1A1A1A] text-[14px] md:text-[16px] group-hover:text-[#E53E3E] transition-colors">Juliate</p>
                  </Flex>
                  <p className="text-[14px] md:text-base text-gray-500">(09)</p>
                </Flex>
                <Flex className={"justify-between mb-4 md:mb-[18px] items-center cursor-pointer group"}>
                  <Flex className={"gap-x-3.5 items-center"}>
                    <MdOutlineCheckBoxOutlineBlank className="text-[#E3E3E3] text-lg md:text-xl group-hover:text-[#E53E3E] transition-colors" />
                    <p className="text-[#1A1A1A] text-[14px] md:text-[16px] group-hover:text-[#E53E3E] transition-colors">H&M</p>
                  </Flex>
                  <p className="text-[14px] md:text-base text-gray-500">(50)</p>
                </Flex>
                <Flex className={"justify-between mb-4 md:mb-[18px] items-center cursor-pointer group"}>
                  <Flex className={"gap-x-3.5 items-center"}>
                    <MdOutlineCheckBoxOutlineBlank className="text-[#E3E3E3] text-lg md:text-xl group-hover:text-[#E53E3E] transition-colors" />
                    <p className="text-[#1A1A1A] text-[14px] md:text-[16px] group-hover:text-[#E53E3E] transition-colors">MAcro</p>
                  </Flex>
                  <p className="text-[14px] md:text-base text-gray-500">(08)</p>
                </Flex>
                <Flex className={"justify-between mb-4 md:mb-[18px] items-center cursor-pointer group"}>
                  <Flex className={"gap-x-3.5 items-center"}>
                    <MdOutlineCheckBoxOutlineBlank className="text-[#E3E3E3] text-lg md:text-xl group-hover:text-[#E53E3E] transition-colors" />
                    <p className="text-[#1A1A1A] text-[14px] md:text-[16px] group-hover:text-[#E53E3E] transition-colors">Harmoni</p>
                  </Flex>
                  <p className="text-[14px] md:text-base text-gray-500">(13)</p>
                </Flex>
                <Flex className={"justify-between items-center cursor-pointer group"}>
                  <Flex className={"gap-x-3.5 items-center"}>
                    <MdOutlineCheckBoxOutlineBlank className="text-[#E3E3E3] text-lg md:text-xl group-hover:text-[#E53E3E] transition-colors" />
                    <p className="text-[#1A1A1A] text-[14px] md:text-[16px] group-hover:text-[#E53E3E] transition-colors">Sowat</p>
                  </Flex>
                  <p className="text-[14px] md:text-base text-gray-500">(03)</p>
                </Flex>
              </div>
            </div>
            <div className="border border-black/10 p-6 md:p-[30px] rounded-md my-6 md:my-[30px]">
              <h4 className="text-[#1A1A1A] text-base md:text-[18px] font-semibold pb-4 md:pb-5 border-b border-[#E8E8E8] mb-6 md:mb-[30px]">
                Latest products
              </h4>
              <Flex className={"gap-x-4 md:gap-x-5 mb-5 md:mb-[15px] cursor-pointer group"}>
                <div className="bg-[#D9D9D9] h-[75px] w-[75px] md:h-[85px] md:w-[85px] rounded-[3px] shrink-0"></div>
                <div className="flex flex-col justify-center">
                  <Flex className={"text-[#E53E3E] text-sm"}>
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                  </Flex>
                  <p className="text-[#1A1A1A] text-[14px] md:text-[16px] font-semibold pt-2 pb-2 group-hover:text-[#E53E3E] transition-colors line-clamp-1">
                    Fancy Black Sunglass
                  </p>
                  <p className="text-[#1A1A1A] text-xs md:text-sm font-semibold">
                    $158.00
                  </p>
                </div>
              </Flex>
              <Flex className={"gap-x-4 md:gap-x-5 mb-5 md:mb-[15px] cursor-pointer group"}>
                <div className="bg-[#D9D9D9] h-[75px] w-[75px] md:h-[85px] md:w-[85px] rounded-[3px] shrink-0"></div>
                <div className="flex flex-col justify-center">
                  <Flex className={"text-[#E53E3E] text-sm"}>
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                  </Flex>
                  <p className="text-[#1A1A1A] text-[14px] md:text-[16px] font-semibold pt-2 pb-2 group-hover:text-[#E53E3E] transition-colors line-clamp-1">
                    Fancy Black Sunglass
                  </p>
                  <p className="text-[#1A1A1A] text-xs md:text-sm font-semibold">
                    $158.00
                  </p>
                </div>
              </Flex>
              <Flex className={"gap-x-4 md:gap-x-5 cursor-pointer group"}>
                <div className="bg-[#D9D9D9] h-[75px] w-[75px] md:h-[85px] md:w-[85px] rounded-[3px] shrink-0"></div>
                <div className="flex flex-col justify-center">
                  <Flex className={"text-[#E53E3E] text-sm"}>
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                  </Flex>
                  <p className="text-[#1A1A1A] text-[14px] md:text-[16px] font-semibold pt-2 pb-2 group-hover:text-[#E53E3E] transition-colors line-clamp-1">
                    Fancy Black Sunglass
                  </p>
                  <p className="text-[#1A1A1A] text-xs md:text-sm font-semibold">
                    $158.00
                  </p>
                </div>
              </Flex>
            </div>
          </div>
        </Flex>
        {/* Pagination */}
        <Flex className="gap-2 flex-wrap justify-center lg:justify-start">
          <div className="bg-[#E53E3E] cursor-pointer hover:bg-black transition-colors text-white rounded-sm py-3 px-4 md:py-4.5 md:px-5 text-sm font-semibold">
            01
          </div>
          <div className="bg-[#F6F6F7] cursor-pointer hover:bg-[#E53E3E] hover:text-white transition-colors text-[#1A1A1A] rounded-sm py-3 px-4 md:py-4.5 md:px-5 text-sm font-semibold">
            02
          </div>
          <div className="bg-[#F6F6F7] cursor-pointer hover:bg-[#E53E3E] hover:text-white transition-colors text-[#1A1A1A] rounded-sm py-3 px-4 md:py-4.5 md:px-5 text-sm font-semibold">
            03
          </div>
          <div className="bg-[#F6F6F7] cursor-pointer hover:bg-[#E53E3E] hover:text-white transition-colors text-[#1A1A1A] rounded-sm py-3 px-4 md:py-4.5 md:px-5 text-sm font-semibold">
            04
          </div>
          <div className="bg-[#F6F6F7] cursor-pointer hover:bg-[#E53E3E] hover:text-white transition-colors text-[#1A1A1A] rounded-sm py-3 px-4 md:py-4.5 md:px-5 text-lg md:text-xl font-semibold flex items-center justify-center">
            <MdKeyboardDoubleArrowRight />
          </div>
        </Flex>
      </Container>
    </>
  );
};

export default ShopGrid;