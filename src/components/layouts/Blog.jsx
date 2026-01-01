import { Link } from "react-router-dom";
import Container from "../Container";
import Flex from "../Flex";
import { FaCalendarAlt } from "react-icons/fa";
import { FaTag, FaArrowRightLong } from "react-icons/fa6";

const Blog = () => {
  return (
    <Container className={"my-22"}>
      <h3 className="text-4xl text-[#1A1A1A] font-semibold font-Jost text-center uppercase">
        Our Latest News Insight
      </h3>
      <Flex className={"mt-10 gap-x-5"}>
        <div className="">
          <div className="h-[250px] w-[465px] bg-[#D9D9D9] rounded-tr-md rounded-tl-md"></div>
          <div className="p-10 shadow-newMade h-[250px] w-[465px] rounded-bl-md rounded-br-md">
            <Flex className={"gap-x-8"}>
              <Link className="flex  gap-x-2">
                <FaCalendarAlt className="text-[#E53E3E]" />
                <p className="text-[#74787C] text-[12px] font-Jost uppercase">
                  March 15, 2022
                </p>
              </Link>
              <Link className="flex items-center gap-x-2">
                <FaTag className="text-[#E53E3E]" />
                <p className="text-[#74787C] text-[12px] font-Jost uppercase">
                  oil Change
                </p>
              </Link>
            </Flex>
            <h3 className="text-[#1A1A1A] text-[20px] font-semibold font-Jost uppercase leading-7 mt-5">
              Fashion Around the: Exploring Cultural Influences
            </h3>
            <div className="w-[385px] h-0.5 bg-[#EAEAEA] mt-8"></div>
            <Link className="inline-flex items-center gap-x-1 text-[#E53E3E] text-base mt-6">
              <h4>Read More </h4>
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
        <div className="">
          <div className="h-[250px] w-[465px] bg-[#D9D9D9] rounded-tr-md rounded-tl-md"></div>
          <div className="p-10 shadow-newMade h-[250px] w-[465px] rounded-bl-md rounded-br-md">
            <Flex className={"gap-x-8"}>
              <Link className="flex gap-x-2">
                <FaCalendarAlt className="text-[#E53E3E]" />
                <p className="text-[#74787C] text-[12px] font-Jost uppercase">
                  March 15, 2022
                </p>
              </Link>
              <Link className="flex items-center gap-x-2">
                <FaTag className="text-[#E53E3E]" />
                <p className="text-[#74787C] text-[12px] font-Jost uppercase">
                  oil Change
                </p>
              </Link>
            </Flex>
            <h3 className="text-[#1A1A1A] text-[20px] font-semibold font-Jost uppercase leading-7 mt-5">
              Embracing Ethical and Eco friendly Fashion
            </h3>
            <div className="w-[385px] h-0.5 bg-[#EAEAEA] mt-8"></div>
            <Link className="inline-flex items-center gap-x-1 text-[#E53E3E] text-base mt-6">
              <h4>Read More </h4>
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
        <div className="">
          <div className="h-[250px] w-[465px] bg-[#D9D9D9] rounded-tr-md rounded-tl-md"></div>
          <div className="p-10 shadow-newMade h-[250px] w-[465px] rounded-bl-md rounded-br-md">
            <Flex className={"gap-x-8"}>
              <Link className="flex gap-x-2">
                <FaCalendarAlt className="text-[#E53E3E]" />
                <p className="text-[#74787C] text-[12px] font-Jost uppercase">
                  March 15, 2022
                </p>
              </Link>
              <Link className="flex items-center gap-x-2">
                <FaTag className="text-[#E53E3E]" />
                <p className="text-[#74787C] text-[12px] font-Jost uppercase">
                  oil Change
                </p>
              </Link>
            </Flex>
            <h3 className="text-[#1A1A1A] text-[20px] font-semibold font-Jost uppercase leading-7 mt-5">
              How to Decorate Your Car for Halloween
            </h3>
            <div className="w-[385px] h-0.5 bg-[#EAEAEA] mt-8"></div>
            <Link className="flex items-center gap-x-1 text-[#E53E3E] text-base mt-6">
              <h4>Read More </h4>
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
      </Flex>
    </Container>
  );
};

export default Blog;
