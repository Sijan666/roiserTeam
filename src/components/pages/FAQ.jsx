import Container from "../Container";
import { Link } from "react-router-dom";
import Flex from "../Flex";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import Button from "../Button";
import { useState } from "react";

const Faq = () => {
  const [dropOne, setDropOne] = useState(false);
  const [dropTwo, setDropTwo] = useState(false);
  const [dropThree, setDropThree] = useState(false);
  const [dropFour, setDropFour] = useState(false);
  const [dropFive, setDropFive] = useState(false);
  const [dropSix, setDropSix] = useState(false);
  const [dropSeven, setDropSeven] = useState(false);
  return (
    <>
      {/* Banner Part  */}
      <div className="bg-[url('/src/assets/faqBanner.jpg')] bg-center bg-cover bg-no-repeat py-[150px]">
        <Container>
          <Flex className={"justify-between"}>
            <h3 className="font-semibold font-Jost text-6xl text-[#1A1A1A]">
              Frequently asked questions
            </h3>
            <ul className="flex items-center gap-3">
              <li className="text-base font-Jost text-[#74787C] flex items-center gap-x-3 hover:text-[#1A1A1A] duration-300 hover:font-bold">
                <Link to={"/"}>Home</Link>
                <MdKeyboardArrowRight />
              </li>
              <li className="text-base font-Jost text-[#74787C] flex items-center gap-x-3 hover:text-[#1A1A1A] duration-300 hover:font-bold">
                <Link to={"/faq"}>FAQ’s</Link>
              </li>
            </ul>
          </Flex>
        </Container>
      </div>
      {/* Banner Part  */}
      <div className="py-[95px]">
        <Container>
          <h4 className="text-3xl font-Jost font-semibold text-[#141414] pb-6">
            Frequently asked questions
          </h4>
          <Flex className={"items-start gap-x-6"}>
            <div className="">
              <ul>
                {/* Drop down one  */}
                <div
                  className="font-Jost py-5 px-6 border border-[#E8E8E8] w-[830px] flex flex-col"
                  onClick={() => setDropOne(!dropOne)}
                >
                  <div className="flex items-center justify-between">
                    <li className="text-base text-[#141414] font-medium">
                      How can add vendor role to the customer?
                    </li>
                    <MdKeyboardArrowDown className="hover:rotate-180 duration-300" />
                  </div>
                  {dropOne && (
                    <p className="text-base text-[#7B7E86] font-Jost w-[776px] leading-[26px] pt-2">
                      Convallis a pellentesque nec, egestas non nisi. Nulla
                      porttitor accumsan tincidunt. Vestibulum diam sit amet
                      quam vehicula elementum sed sit amet dui. Curabitur
                      aliquet quam id dui posuere blandit. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit. Proin eget tortor
                      risus.
                    </p>
                  )}
                </div>
                {/* Drop down one  */}
                {/* Drop down two  */}
                <div
                  className="font-Jost py-5 px-6 border border-[#E8E8E8] w-[830px] flex flex-col mt-3"
                  onClick={() => setDropTwo(!dropTwo)}
                  // aria-expanded={dropTwo} 
                >
                  <div className="flex items-center justify-between">
                    <li className="text-base text-[#141414] font-medium">
                      What benefits a customer can take?
                    </li>
                    <MdKeyboardArrowDown className="hover:rotate-180 duration-300" />
                    {/* <MdKeyboardArrowDown className="duration-300 group-aria-expanded:rotate-180" /> */}
                  </div>
                  {dropTwo && (
                    <p className="text-base text-[#7B7E86] font-Jost w-[776px] leading-[26px] pt-2">
                      Convallis a pellentesque nec, egestas non nisi. Nulla
                      porttitor accumsan tincidunt. Vestibulum diam sit amet
                      quam vehicula elementum sed sit amet dui. Curabitur
                      aliquet quam id dui posuere blandit. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit. Proin eget tortor
                      risus.
                    </p>
                  )}
                </div>
                {/* Drop down two  */}
                {/* Drop down three  */}
                <div
                  className="font-Jost py-5 px-6 border border-[#E8E8E8] w-[830px] flex flex-col mt-3"
                  onClick={() => setDropThree(!dropThree)}
                >
                  <div className="flex items-center justify-between">
                    <li className="text-base text-[#141414] font-medium">
                      What is your return & exchange policy?
                    </li>
                    <MdKeyboardArrowDown className="hover:rotate-180 duration-300" />
                  </div>
                  {dropThree && (
                    <p className="text-base text-[#7B7E86] font-Jost w-[776px] leading-[26px] pt-2">
                      Convallis a pellentesque nec, egestas non nisi. Nulla
                      porttitor accumsan tincidunt. Vestibulum diam sit amet
                      quam vehicula elementum sed sit amet dui. Curabitur
                      aliquet quam id dui posuere blandit. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit. Proin eget tortor
                      risus.
                    </p>
                  )}
                </div>
                {/* Drop down three  */}
                {/* Drop down four  */}
                <div
                  className="font-Jost py-5 px-6 border border-[#E8E8E8] w-[830px] flex flex-col mt-3"
                  onClick={() => setDropFour(!dropFour)}
                >
                  <div className="flex items-center justify-between">
                    <li className="text-base text-[#141414] font-medium">
                      How long will it take for me to get my order?
                    </li>
                    <MdKeyboardArrowDown className="hover:rotate-180 duration-300" />
                  </div>
                  {dropFour && (
                    <p className="text-base text-[#7B7E86] font-Jost w-[776px] leading-[26px] pt-2">
                      Convallis a pellentesque nec, egestas non nisi. Nulla
                      porttitor accumsan tincidunt. Vestibulum diam sit amet
                      quam vehicula elementum sed sit amet dui. Curabitur
                      aliquet quam id dui posuere blandit. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit. Proin eget tortor
                      risus.
                    </p>
                  )}
                </div>
                {/* Drop down four  */}
                {/* Drop down five  */}
                <div
                  className="font-Jost py-5 px-6 border border-[#E8E8E8] w-[830px] flex flex-col mt-3"
                  onClick={() => setDropFive(!dropFive)}
                >
                  <div className="flex items-center justify-between">
                    <li className="text-base text-[#141414] font-medium">
                      Can I personally pick up my order?
                    </li>
                    <MdKeyboardArrowDown className="hover:rotate-180 duration-300" />
                  </div>
                  {dropFive && (
                    <p className="text-base text-[#7B7E86] font-Jost w-[776px] leading-[26px] pt-2">
                      Convallis a pellentesque nec, egestas non nisi. Nulla
                      porttitor accumsan tincidunt. Vestibulum diam sit amet
                      quam vehicula elementum sed sit amet dui. Curabitur
                      aliquet quam id dui posuere blandit. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit. Proin eget tortor
                      risus.
                    </p>
                  )}
                </div>
                {/* Drop down five  */}
                {/* Drop down six  */}
                <div
                  className="font-Jost py-5 px-6 border border-[#E8E8E8] w-[830px] flex flex-col mt-3"
                  onClick={() => setDropSix(!dropSix)}
                >
                  <div className="flex items-center justify-between">
                    <li className="text-base text-[#141414] font-medium">
                      I need to update my shipping address!
                    </li>
                    <MdKeyboardArrowDown className="hover:rotate-180 duration-300" />
                  </div>
                  {dropSix && (
                    <p className="text-base text-[#7B7E86] font-Jost w-[776px] leading-[26px] pt-2">
                      Convallis a pellentesque nec, egestas non nisi. Nulla
                      porttitor accumsan tincidunt. Vestibulum diam sit amet
                      quam vehicula elementum sed sit amet dui. Curabitur
                      aliquet quam id dui posuere blandit. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit. Proin eget tortor
                      risus.
                    </p>
                  )}
                </div>
                {/* Drop down six  */}
                {/* Drop down seven  */}
                <div
                  className="font-Jost py-5 px-6 border border-[#E8E8E8] w-[830px] flex flex-col mt-3"
                  onClick={() => setDropSeven(!dropSeven)}
                >
                  <div className="flex items-center justify-between">
                    <li className="text-base text-[#141414] font-medium">
                      Will I pay for any customs duties and taxes?
                    </li>
                    <MdKeyboardArrowDown className="hover:rotate-180 duration-300" />
                  </div>
                  {dropSeven && (
                    <p className="text-base text-[#7B7E86] font-Jost w-[776px] leading-[26px] pt-2">
                      Convallis a pellentesque nec, egestas non nisi. Nulla
                      porttitor accumsan tincidunt. Vestibulum diam sit amet
                      quam vehicula elementum sed sit amet dui. Curabitur
                      aliquet quam id dui posuere blandit. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit. Proin eget tortor
                      risus.
                    </p>
                  )}
                </div>
                {/* Drop down seven  */}
              </ul>
            </div>
            {/* Input part  */}
            <div className="bg-[#F6F6F6] p-10">
              <input
                className="bg-white w-[477px] p-6 font-Jost text-base border border-[#E8E8E8]"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="bg-white w-[477px] p-6 my-4 font-Jost text-base border border-[#E8E8E8]"
                type="email"
                placeholder="Email Address"
              />
              <input
                className="bg-white w-[477px] px-6 h-[145px] pb-18 font-Jost text-base border border-[#E8E8E8]"
                type="text"
                placeholder="Type Message"
              />
              <Button
                className={
                  "bg-[#E53E3E] mt-3 w-[477px] text-sm font-semibold text-white hover:text-[#E53E3E] hover:bg-transparent hover:border"
                }
                btnText={"Submit Now"}
              />
            </div>
            {/* Input part  */}
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Faq;
