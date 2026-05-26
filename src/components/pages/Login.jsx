import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Container from "../Container";
import Flex from "../Flex";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const loginSchema = z.object({
  identifier: z
    .string()
    .min(1, { message: "Username or email is required" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 8 characters" }),
  remember: z.boolean().optional(),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form Submitted Successfully:", data);
    alert("Login Successful!");
  };

  return (
    <>
      <div className="bg-[url('/src/assets/loginBg.png')] bg-cover bg-center bg-no-repeat lg:py-[150px] py-25">
        <Container className={"px-3 lg:px-0"}>
          <Flex className={"justify-between flex-col lg:flex-row gap-y-3"}>
            <h3 className="text-[#1A1A1A] lg:text-6xl text-4xl font-semibold">
              Account Login
            </h3>
            <div className="flex gap-x-3 items-center">
              <p className="text-[#74787C] text-[18px]">
                <Link to={"/"}>Home</Link>
              </p>
              <MdKeyboardArrowRight className="text-[#74787C]" />
              <p className="text-[18px] text-[#1A1A1A] font-semibold">Login</p>
            </div>
          </Flex>
        </Container>
      </div>
      <div className="lg:py-25 py-10">
        <Container className={"px-3 lg:px-0"}>
          <div className="lg:px-[120px] lg:py-25 px-5 py-7 bg-[#F6F6F7] lg:w-[780px] mx-auto">
            <h4 className="lg:text-[24px] text-xl font-semibold text-[#141414] text-center">
              Login Into Your Account
            </h4>
            <div className="lg:mt-[35px] lg:mb-[30px] my-5 border border-[#EBEBEB] bg-white lg:py-4 py-3 rounded-[5px] items-center flex justify-center cursor-pointer hover:bg-gray-50 transition-colors">
              <FcGoogle className="mr-2 text-2xl" />
              <p className="text-base font-semibold text-[#141414]">
                Login with Google
              </p>
            </div>
            <div className="mb-6">
              <Flex className={"justify-center items-center gap-x-4"}>
                <div className="h-px w-full bg-[#E7E7E7]"></div>
                <p className="text-base font-semibold text-[#141414]">OR</p>
                <div className="h-px w-full bg-[#E7E7E7]"></div>
              </Flex>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <p className="text-[#141414] text-[14px] pb-2.5">
                  Username or email address*
                </p>
                <input
                  type="text"
                  {...register("identifier")}
                  className={`w-full lg:p-5 p-3 bg-white border ${
                    errors.identifier ? "border-red-500" : "border-[#EBEBEB]"
                  } rounded-[5px] outline-none focus:border-gray-400`}
                />
                {errors.identifier && (
                  <p className="text-red-500 text-sm mt-1">{errors.identifier.message}</p>
                )}
              </div>
              <div className="mb-4">
                <p className="text-[#141414] text-[14px] pt-2 pb-2.5">
                  Password*
                </p>
                <input
                  type="password"
                  {...register("password")}
                  className={`w-full lg:p-5 p-3 bg-white border ${
                    errors.password ? "border-red-500" : "border-[#EBEBEB]"
                  } rounded-[5px] outline-none focus:border-gray-400`}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                )}
              </div>
              <div className="flex pt-2.5 mb-6">
                <input
                  type="checkbox"
                  id="remember"
                  {...register("remember")}
                  className="bg-white border border-[#EBEBEB] mr-2 cursor-pointer"
                />
                <label htmlFor="remember" className="text-base font-semibold text-[#7B7E86] cursor-pointer">
                  Remember
                </label>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-[#E53E3E] text-white w-full lg:py-3.5 py-3 rounded-[5px] cursor-pointer hover:bg-red-700 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <p className="text-base font-semibold">
                  {isSubmitting ? "Logging in..." : "Login Account"}
                </p>
              </button>
            </form>
            <Link to={'/signup'}>
              <button className="text-[#141414] pt-4 cursor-pointer hover:underline">
                Lost your password?
              </button>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Login;