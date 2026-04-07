import { Link } from "react-router-dom";
import Container from "../Container";
import Flex from "../Flex";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  return (
    <>
      <div className="bg-[url('/src/assets/loginBg.png')] bg-cover bg-center bg-no-repeat lg:py-[150px] py-25">
        <Container>
          <Flex className={"justify-between flex-col lg:flex-row gap-y-3"}>
            <h3 className="text-[#1A1A1A] lg:text-6xl text-4xl font-semibold">
              Account Register
            </h3>
            <div className="flex gap-x-3 items-center">
              <p className="text-[#74787C] text-[18px]">
                <Link to={"/"}>Home</Link>
              </p>
              <MdKeyboardArrowRight className="text-[#74787C]" />
              <p className="text-[18px] text-[#1A1A1A] font-semibold">
                Register
              </p>
            </div>
          </Flex>
        </Container>
      </div>
      <div className="lg:py-25 py-10">
        <Container>
          <div className="lg:px-[120px] lg:py-25 px-5 py-7 bg-[#F6F6F7] lg:w-[780px] mx-auto">
            <h4 className="lg:text-[24px] text-xl font-semibold  text-[#141414] text-center">
              Create Your Account
            </h4>
            <div className="mt-[35px] mb-[30px] border border-[#EBEBEB] bg-white lg:py-4 py-3 rounded-[5px] items-center flex justify-center">
              <FcGoogle className="mr-2" />
              <p className="text-base font-semibold text-[#141414] ">
                Signup with Google
              </p>
            </div>
            <div className="">
              <Flex className={"justify-center gap-x-4"}>
                <div className="h-1 w-full bg-[#E7E7E7]"></div>
                <p className="text-base font-semibold text-[#141414] ">OR</p>
                <div className="h-1 w-full bg-[#E7E7E7]"></div>
              </Flex>
            </div>
            <div className="my-6">
              <p className="text-[#141414] text-[14px] pb-[15px] ">
                Your name*
              </p>
              <input
                type="text"
                className="w-full lg:p-5 p-3 bg-white border border-[#EBEBEB] rounded-[5px] outline-none"
              />
              <p className="text-[#141414] text-[14px] pt-6 pb-[15px] ">
                Email Address*
              </p>
              <input
                type="email"
                className="w-full lg:p-5 p-3 bg-white border border-[#EBEBEB] rounded-[5px] outline-none"
              />
              <p className="text-[#141414] text-[14px] pt-6 pb-[15px] ">
                Password*
              </p>
              <input
                type="number"
                className="w-full lg:p-5 p-3 bg-white border border-[#EBEBEB] rounded-[5px] outline-none"
              />
              <p className="text-[#141414] text-[14px] pt-6 pb-[15px] ">
                Confirm Password*
              </p>
              <input
                type="number"
                className="w-full lg:p-5 p-3 bg-white border border-[#EBEBEB] rounded-[5px] outline-none"
              />
              <div className="flex pt-[18px] items-baseline lg:items-center">
                <input
                  type="checkbox"
                  className="bg-white border border-[#EBEBEB] mr-2"
                />
                <p className="text-base font-semibold text-[#7B7E86]">
                  Subscribe to stay updated with new products and offers!
                </p>
              </div>
              <div className="flex pt-[18px] items-baseline lg:items-center">
                <input
                  type="checkbox"
                  className="bg-white border border-[#EBEBEB] mr-2"
                />
                <p className="text-base font-semibold text-[#7B7E86]">
                  I accept the{" "}
                  <u>
                    <span className="text-[#141414] ">
                      {" "}
                      Terms / Privacy Policy{" "}
                    </span>
                  </u>
                </p>
              </div>
            </div>
            <button className="bg-[#E53E3E] text-white w-full lg:py-3.5 py-3 rounded-[5px] cursor-pointer">
              <p className="text-base font-semibold">Register Account</p>
            </button>
            <button className="text-[#141414] pt-4 cursor-pointer font-medium">
              Already have an account?
              <span className="text-[#E53E3E] ml-2 font-medium">
                <Link to={"/login"}>Log in</Link>
              </span>
            </button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Signup;
