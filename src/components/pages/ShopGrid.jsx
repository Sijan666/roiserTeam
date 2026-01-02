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
      <div className="bg-[url(/src/assets/shopGrid.png)] py-25">
        <Container>
          <Flex className={"justify-between"}>
            <h3 className="text-[#1A1A1A] text-[60px] font-semibold">
              Shop Grid
            </h3>
            <Flex className={"gap-x-4"}>
              <p className="text-[#74787C] text-[18px]">Home</p>
              <RiArrowRightSLine className="text-[#74787C] text-xl" />
              <p className="text-[#1A1A1A] text-[18px] font-semibold">
                About Us
              </p>
            </Flex>
          </Flex>
        </Container>
      </div>
      <Container className={"my-[100px]"}>
        <Flex className={"mb-[50px] gap-x-5 items-start"}>
          <div className="w-[75%]">
            <Flex className={"mb-[30px] justify-between"}>
              <Flex>
                <div>
                  <Flex className={"gap-x-[30px]"}>
                    <Flex className="border-2 border-[#E8E8E8] py-4 px-5 gap-x-4 rounded-[5px] text-xl">
                      <CgMenuGridR />
                      <TfiMenuAlt />
                    </Flex>
                    <p className="text-[#74787C] text-[16px]">
                      Showing 1–12 of 88 results
                    </p>
                  </Flex>
                </div>
              </Flex>
              <div className="px-[30px] py-3.5 border-2 border-[#E8E8E8] rounded-[5px]">
                <select className="outline-none cursor-pointer text-[#1A1A1A] text-[16px]">
                  <option>
                    Default Sorting <VscChevronDown />
                  </option>
                </select>
              </div>
            </Flex>
            <div>
              <Flex className={"mb-6 justify-between"}>
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
              <Flex className={"mb-6 justify-between"}>
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
              <Flex className={"mb-6  justify-between"}>
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
              <Flex className={"mb-6  justify-between"}>
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
              <Flex className={"mb-6  justify-between"}>
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
              <Flex className={" justify-between"}>
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
          <div className=" w-[30%]">
            <div className="border-2 border-[#1A1A1A]/7 p-[30px] rounded-md">
              <h4 className="text-[#1A1A1A] text-[18px] font-semibold pb-5 border-b-2 border-[#E8E8E8] mb-[30px]">
                Categories
              </h4>
              <div className="">
                <Flex className={"gap-x-3.5 mb-[18px]"}>
                  <MdOutlineCheckBoxOutlineBlank className="text-[#E3E3E3] text-xl" />
                  <p className="text-[#1A1A1A] text-[16px] ">Accessories (4)</p>
                </Flex>
                <Flex className={"gap-x-3.5 mb-[18px]"}>
                  <MdOutlineCheckBoxOutlineBlank className="text-[#E3E3E3] text-xl" />
                  <p className="text-[#1A1A1A] text-[16px] ">
                    Badge Categories (4)
                  </p>
                </Flex>
                <Flex className={"gap-x-3.5 mb-[18px]"}>
                  <MdOutlineCheckBoxOutlineBlank className="text-[#E3E3E3] text-xl" />
                  <p className="text-[#1A1A1A] text-[16px] ">
                    Bag & Backpacks (1)
                  </p>
                </Flex>
                <Flex className={"gap-x-3.5 mb-[18px]"}>
                  <MdOutlineCheckBoxOutlineBlank className="text-[#E3E3E3] text-xl" />
                  <p className="text-[#1A1A1A] text-[16px] ">
                    Category Grid (12)
                  </p>
                </Flex>
                <Flex className={"gap-x-3.5 mb-[18px]"}>
                  <MdOutlineCheckBoxOutlineBlank className="text-[#E3E3E3] text-xl" />
                  <p className="text-[#1A1A1A] text-[16px] ">
                    Clothing & Apparel (2)
                  </p>
                </Flex>
                <Flex className={"gap-x-3.5 mb-[18px]"}>
                  <MdOutlineCheckBoxOutlineBlank className="text-[#E3E3E3] text-xl" />
                  <p className="text-[#1A1A1A] text-[16px] ">
                    Consumer Electric (3)
                  </p>
                </Flex>
                <Flex className={"gap-x-3.5 mb-[18px]"}>
                  <MdOutlineCheckBoxOutlineBlank className="text-[#E3E3E3] text-xl" />
                  <p className="text-[#1A1A1A] text-[16px] ">
                    Top Electronics (3)
                  </p>
                </Flex>
                <Flex className={"gap-x-3.5 mb-[18px]"}>
                  <MdOutlineCheckBoxOutlineBlank className="text-[#E3E3E3] text-xl" />
                  <p className="text-[#1A1A1A] text-[16px] ">
                    Women's Collection (5)
                  </p>
                </Flex>
              </div>
            </div>
            <div className="border-2 border-[#1A1A1A]/7 p-[30px] rounded-md my-[30px]">
              <h4 className="text-[#1A1A1A] text-[18px] font-semibold pb-5 border-b-2 border-[#E8E8E8] mb-[30px]">
                Filter by price
              </h4>
              <Flex className="pb-5 text-[#E53E3E] text-2xl justify-between ">
                <BiCheckboxSquare />
                <div className="bg-[#E53E3E] px-36.5 py-0.5 w-30"></div>
                <BiCheckboxSquare />
              </Flex>
              <Flex className={"justify-between text-[#1A1A1A] text-[16px]"}>
                <p>Price: $10 — $90</p>
                <Flex>
                  Filter <FaArrowRight />
                </Flex>
              </Flex>
            </div>
            <div className="border-2 border-[#1A1A1A]/7 p-[30px] rounded-md my-[30px]">
              <h4 className="text-[#1A1A1A] text-[18px] font-semibold pb-5 border-b-2 border-[#E8E8E8] mb-[30px]">
                Item Size
              </h4>
              <Flex className={"justify-between border-b-2 border-[#E8E8E8]"}>
                <Flex className={"gap-x-3 text-[16px] text-[#1A1A1A] py-5"}>
                  <FaRegCircle className="text-[#E2E2E2] text-2xl" />
                  <p>XS</p>
                </Flex>
                <p>(15)</p>
              </Flex>
              <Flex className={"justify-between border-b-2 border-[#E8E8E8]"}>
                <Flex className={"gap-x-3 text-[16px] text-[#1A1A1A] py-5"}>
                  <FaRegCircle className="text-[#E2E2E2] text-2xl" />
                  <p>S</p>
                </Flex>
                <p>(12)</p>
              </Flex>
              <Flex className={"justify-between border-b-2 border-[#E8E8E8]"}>
                <Flex className={"gap-x-3 text-[16px] text-[#1A1A1A] py-5"}>
                  <FaRegCircle className="text-[#E2E2E2] text-2xl" />
                  <p>Small</p>
                </Flex>
                <p>(185)</p>
              </Flex>
              <Flex className={"justify-between border-b-2 border-[#E8E8E8]"}>
                <Flex className={"gap-x-3 text-[16px] text-[#1A1A1A] py-5"}>
                  <FaRegCircle className="text-[#E2E2E2] text-2xl" />
                  <p>L</p>
                </Flex>
                <p>(72)</p>
              </Flex>
              <Flex className={"justify-between border-b-2 border-[#E8E8E8]"}>
                <Flex className={"gap-x-3 text-[16px] text-[#1A1A1A] py-5"}>
                  <FaRegCircle className="text-[#E2E2E2] text-2xl" />
                  <p>XL</p>
                </Flex>
                <p>(85)</p>
              </Flex>
              <Flex className={"justify-between border-b-2 border-[#E8E8E8]"}>
                <Flex className={"gap-x-3 text-[16px] text-[#1A1A1A] py-5"}>
                  <FaRegCircle className="text-[#E2E2E2] text-2xl" />
                  <p>Extra Large</p>
                </Flex>
                <p>(16)</p>
              </Flex>
            </div>
            <div className="border-2 border-[#1A1A1A]/7 p-[30px] rounded-md my-[30px]">
              <h4 className="text-[#1A1A1A] text-[18px] font-semibold pb-5 border-b-2 border-[#E8E8E8] mb-[30px]">
                Brands
              </h4>
              <div className="">
                <Flex className={"justify-between mb-[18px]"}>
                  <Flex className={"gap-x-3.5"}>
                    <MdOutlineCheckBoxOutlineBlank className="text-[#E3E3E3] text-xl" />
                    <p className="text-[#1A1A1A] text-[16px] ">Juliate</p>
                  </Flex>
                  <p>(09)</p>
                </Flex>
                <Flex className={"justify-between mb-[18px]"}>
                  <Flex className={"gap-x-3.5"}>
                    <MdOutlineCheckBoxOutlineBlank className="text-[#E3E3E3] text-xl" />
                    <p className="text-[#1A1A1A] text-[16px] ">H&M</p>
                  </Flex>
                  <p>(50)</p>
                </Flex>
                <Flex className={"justify-between mb-[18px]"}>
                  <Flex className={"gap-x-3.5"}>
                    <MdOutlineCheckBoxOutlineBlank className="text-[#E3E3E3] text-xl" />
                    <p className="text-[#1A1A1A] text-[16px] ">MAcro</p>
                  </Flex>
                  <p>(08)</p>
                </Flex>
                <Flex className={"justify-between mb-[18px]"}>
                  <Flex className={"gap-x-3.5"}>
                    <MdOutlineCheckBoxOutlineBlank className="text-[#E3E3E3] text-xl" />
                    <p className="text-[#1A1A1A] text-[16px] ">Harmoni</p>
                  </Flex>
                  <p>(13)</p>
                </Flex>
                <Flex className={"justify-between"}>
                  <Flex className={"gap-x-3.5"}>
                    <MdOutlineCheckBoxOutlineBlank className="text-[#E3E3E3] text-xl" />
                    <p className="text-[#1A1A1A] text-[16px] ">Sowat</p>
                  </Flex>
                  <p>(03)</p>
                </Flex>
              </div>
            </div>
            <div className="border-2 border-[#1A1A1A]/7 p-[30px] rounded-md my-[30px]">
              <h4 className="text-[#1A1A1A] text-[18px] font-semibold pb-5 border-b-2 border-[#E8E8E8] mb-[30px]">
                Latest products
              </h4>
              <Flex className={"gap-x-5 mb-[15px]"}>
                <div className="bg-[#D9D9D9] h-[85px] w-[85px] rounded-[3px]"></div>
                <div className="">
                  <Flex className={"text-[#E53E3E]"}>
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                  </Flex>
                  <p className="text-[#1A1A1A] text-[16px] font-semibold pt-3 pb-4">
                    Fancy Black Sunglass
                  </p>
                  <p className="text-[#1A1A1A] text-sm font-semibold">
                    $158.00
                  </p>
                </div>
              </Flex>
              <Flex className={"gap-x-5 mb-[15px]"}>
                <div className="bg-[#D9D9D9] h-[85px] w-[85px] rounded-[3px]"></div>
                <div className="">
                  <Flex className={"text-[#E53E3E]"}>
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                  </Flex>
                  <p className="text-[#1A1A1A] text-[16px] font-semibold pt-3 pb-4">
                    Fancy Black Sunglass
                  </p>
                  <p className="text-[#1A1A1A] text-sm font-semibold">
                    $158.00
                  </p>
                </div>
              </Flex>
              <Flex className={"gap-x-5"}>
                <div className="bg-[#D9D9D9] h-[85px] w-[85px] rounded-[3px]"></div>
                <div className="">
                  <Flex className={"text-[#E53E3E]"}>
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                  </Flex>
                  <p className="text-[#1A1A1A] text-[16px] font-semibold pt-3 pb-4">
                    Fancy Black Sunglass
                  </p>
                  <p className="text-[#1A1A1A] text-sm font-semibold">
                    $158.00
                  </p>
                </div>
              </Flex>
            </div>
          </div>
        </Flex>
        <Flex className="gap-x-[7px]">
          <div className="bg-[#E53E3E] text-white rounded-sm py-4.5 px-5 text-sm font-semibold">
            01
          </div>
          <div className="bg-[#F6F6F7] text-[#1A1A1A] rounded-sm py-4.5 px-5 text-sm font-semibold">
            02
          </div>
          <div className="bg-[#F6F6F7] text-[#1A1A1A] rounded-sm py-4.5 px-5 text-sm font-semibold">
            03
          </div>
          <div className="bg-[#F6F6F7] text-[#1A1A1A] rounded-sm py-4.5 px-5 text-sm font-semibold">
            04
          </div>
          <div className="bg-[#F6F6F7] text-[#1A1A1A] rounded-sm py-4.5 px-5 text-xl font-semibold">
            <MdKeyboardDoubleArrowRight />
          </div>
        </Flex>
      </Container>
    </>
  );
};

export default ShopGrid;
