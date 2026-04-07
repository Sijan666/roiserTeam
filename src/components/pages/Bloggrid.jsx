import Container from "../Container";
import Flex from "../Flex";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import Images from "../Images";
import blogGrid from "../../assets/blogGrid.png";
import { TbArrowNarrowRight } from "react-icons/tb";

const Bloggrid = () => {
  return (
    <>
      <div className="bg-[url('/src/assets/loginBg.png')] bg-cover bg-center bg-no-repeat lg:py-[150px] py-25">
        <Container>
          <Flex className={"justify-between flex-col lg:flex-row gap-y-3"}>
            <h3 className="text-[#1A1A1A] lg:text-6xl text-4xl font-semibold">
              Blog Grid
            </h3>
            <div className="flex gap-x-3 items-center">
              <p className="text-[#74787C] text-[18px] hover:text-[#1A1A1A] hover:font-semibold duration-300">
                <Link to={"/"}>Home</Link>
              </p>
              <MdKeyboardArrowRight className="text-[#74787C]" />
              <p className="text-[#74787C] text-[18px] hover:text-[#1A1A1A] hover:font-semibold duration-300">
                Blog Grid
              </p>
            </div>
          </Flex>
        </Container>
      </div>
      <div className="lg:py-25 py-10">
        <Container>
          <Flex className={"justify-between gap-5 lg:flex-row flex-col"}>
            <div className="product lg:w-1/3 w-[90%] rounded-md overflow-hidden shadow-newMade">
              <Images imgSrc={blogGrid} className={"w-full"} />
              <div className="lg:p-10 p-5">
                <div className="flex gap-x-5">
                  <p className="text-[12px] text-[#74787C]">MARCH 15, 2022</p>
                  <p className="text-[12px] text-[#74787C]">OIL CHANGE</p>
                </div>
                <h4 className="lg:py-6 py-3 font-semibold text-[20px] lg:w-[345px] text-[#121212] border-b border-[#EAEAEA] mb-[18px]">
                  How to Decorate Your Car for Halloween
                </h4>
                <div className="flex gap-x-1 items-center  group">
                  <button className="text-base text-[#E53E3E] cursor-pointer">
                    Read More{" "}
                  </button>
                  <TbArrowNarrowRight className="text-[#E53E3E] cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="product lg:w-1/3 w-[90%] rounded-md overflow-hidden shadow-newMade">
              <Images imgSrc={blogGrid} className={"w-full"} />
              <div className="lg:p-10 p-5">
                <div className="flex gap-x-5">
                  <p className="text-[12px] text-[#74787C]">MARCH 15, 2022</p>
                  <p className="text-[12px] text-[#74787C]">OIL CHANGE</p>
                </div>
                <h4 className="lg:py-6 py-3 font-semibold text-[20px] lg:w-[345px] text-[#121212] border-b border-[#EAEAEA] mb-[18px]">
                  How to Decorate Your Car for Halloween
                </h4>
                <div className="flex gap-x-1 items-center  group">
                  <button className="text-base text-[#E53E3E] cursor-pointer">
                    Read More{" "}
                  </button>
                  <TbArrowNarrowRight className="text-[#E53E3E] cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="product lg:w-1/3 w-[90%] rounded-md overflow-hidden shadow-newMade">
              <Images imgSrc={blogGrid} className={"w-full"} />
              <div className="lg:p-10 p-5">
                <div className="flex gap-x-5">
                  <p className="text-[12px] text-[#74787C]">MARCH 15, 2022</p>
                  <p className="text-[12px] text-[#74787C]">OIL CHANGE</p>
                </div>
                <h4 className="lg:py-6 py-3 font-semibold text-[20px] lg:w-[345px] text-[#121212] border-b border-[#EAEAEA] mb-[18px]">
                  How to Decorate Your Car for Halloween
                </h4>
                <div className="flex gap-x-1 items-center  group">
                  <button className="text-base text-[#E53E3E] cursor-pointer">
                    Read More{" "}
                  </button>
                  <TbArrowNarrowRight className="text-[#E53E3E] cursor-pointer" />
                </div>
              </div>
            </div>
          </Flex>
          <Flex className={"justify-between gap-5 lg:flex-row flex-col mt-5"}>
            <div className="product lg:w-1/3 w-[90%] rounded-md overflow-hidden shadow-newMade">
              <Images imgSrc={blogGrid} className={"w-full"} />
              <div className="lg:p-10 p-5">
                <div className="flex gap-x-5">
                  <p className="text-[12px] text-[#74787C]">MARCH 15, 2022</p>
                  <p className="text-[12px] text-[#74787C]">OIL CHANGE</p>
                </div>
                <h4 className="lg:py-6 py-3 font-semibold text-[20px] lg:w-[345px] text-[#121212] border-b border-[#EAEAEA] mb-[18px]">
                  How to Decorate Your Car for Halloween
                </h4>
                <div className="flex gap-x-1 items-center  group">
                  <button className="text-base text-[#E53E3E] cursor-pointer">
                    Read More{" "}
                  </button>
                  <TbArrowNarrowRight className="text-[#E53E3E] cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="product lg:w-1/3 w-[90%] rounded-md overflow-hidden shadow-newMade">
              <Images imgSrc={blogGrid} className={"w-full"} />
              <div className="lg:p-10 p-5">
                <div className="flex gap-x-5">
                  <p className="text-[12px] text-[#74787C]">MARCH 15, 2022</p>
                  <p className="text-[12px] text-[#74787C]">OIL CHANGE</p>
                </div>
                <h4 className="lg:py-6 py-3 font-semibold text-[20px] lg:w-[345px] text-[#121212] border-b border-[#EAEAEA] mb-[18px]">
                  How to Decorate Your Car for Halloween
                </h4>
                <div className="flex gap-x-1 items-center  group">
                  <button className="text-base text-[#E53E3E] cursor-pointer">
                    Read More{" "}
                  </button>
                  <TbArrowNarrowRight className="text-[#E53E3E] cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="product lg:w-1/3 w-[90%] rounded-md overflow-hidden shadow-newMade">
              <Images imgSrc={blogGrid} className={"w-full"} />
              <div className="lg:p-10 p-5">
                <div className="flex gap-x-5">
                  <p className="text-[12px] text-[#74787C]">MARCH 15, 2022</p>
                  <p className="text-[12px] text-[#74787C]">OIL CHANGE</p>
                </div>
                <h4 className="lg:py-6 py-3 font-semibold text-[20px] lg:w-[345px] text-[#121212] border-b border-[#EAEAEA] mb-[18px]">
                  How to Decorate Your Car for Halloween
                </h4>
                <div className="flex gap-x-1 items-center  group">
                  <button className="text-base text-[#E53E3E] cursor-pointer">
                    Read More{" "}
                  </button>
                  <TbArrowNarrowRight className="text-[#E53E3E] cursor-pointer" />
                </div>
              </div>
            </div>
          </Flex>
          <Flex className={"justify-between gap-5 lg:flex-row flex-col mt-5"}>
            <div className="product lg:w-1/3 w-[90%] rounded-md overflow-hidden shadow-newMade">
              <Images imgSrc={blogGrid} className={"w-full"} />
              <div className="lg:p-10 p-5">
                <div className="flex gap-x-5">
                  <p className="text-[12px] text-[#74787C]">MARCH 15, 2022</p>
                  <p className="text-[12px] text-[#74787C]">OIL CHANGE</p>
                </div>
                <h4 className="lg:py-6 py-3 font-semibold text-[20px] lg:w-[345px] text-[#121212] border-b border-[#EAEAEA] mb-[18px]">
                  How to Decorate Your Car for Halloween
                </h4>
                <div className="flex gap-x-1 items-center  group">
                  <button className="text-base text-[#E53E3E] cursor-pointer">
                    Read More{" "}
                  </button>
                  <TbArrowNarrowRight className="text-[#E53E3E] cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="product lg:w-1/3 w-[90%] rounded-md overflow-hidden shadow-newMade">
              <Images imgSrc={blogGrid} className={"w-full"} />
              <div className="lg:p-10 p-5">
                <div className="flex gap-x-5">
                  <p className="text-[12px] text-[#74787C]">MARCH 15, 2022</p>
                  <p className="text-[12px] text-[#74787C]">OIL CHANGE</p>
                </div>
                <h4 className="lg:py-6 py-3 font-semibold text-[20px] lg:w-[345px] text-[#121212] border-b border-[#EAEAEA] mb-[18px]">
                  How to Decorate Your Car for Halloween
                </h4>
                <div className="flex gap-x-1 items-center  group">
                  <button className="text-base text-[#E53E3E] cursor-pointer">
                    Read More{" "}
                  </button>
                  <TbArrowNarrowRight className="text-[#E53E3E] cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="product lg:w-1/3 w-[90%] rounded-md overflow-hidden shadow-newMade">
              <Images imgSrc={blogGrid} className={"w-full"} />
              <div className="lg:p-10 p-5">
                <div className="flex gap-x-5">
                  <p className="text-[12px] text-[#74787C]">MARCH 15, 2022</p>
                  <p className="text-[12px] text-[#74787C]">OIL CHANGE</p>
                </div>
                <h4 className="lg:py-6 py-3 font-semibold text-[20px] lg:w-[345px] text-[#121212] border-b border-[#EAEAEA] mb-[18px]">
                  How to Decorate Your Car for Halloween
                </h4>
                <div className="flex gap-x-1 items-center  group">
                  <button className="text-base text-[#E53E3E] cursor-pointer">
                    Read More{" "}
                  </button>
                  <TbArrowNarrowRight className="text-[#E53E3E] cursor-pointer" />
                </div>
              </div>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Bloggrid;
