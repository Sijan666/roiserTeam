import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import Container from "../Container";
import Flex from "../Flex";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

// 1. Zod Schema: ভ্যালিডেশন রুলস ডিক্লেয়ার করা হয়েছে
const signupSchema = z
  .object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z.string(),
    subscribe: z.boolean().optional(),
    acceptTerms: z.literal(true, {
      errorMap: () => ({ message: "You must accept the Terms & Privacy Policy" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // Error টা confirmPassword ফিল্ডে দেখাবে
  });

const Signup = () => {
  const navigate = useNavigate();

  // 2. React Hook Form সেটাপ
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      subscribe: false,
    },
  });

  // 3. সাবমিট হ্যান্ডলার
  const onSubmit = async (data) => {
    // API কল সিমুলেট করার জন্য ১ সেকেন্ড ডিলে দেওয়া হয়েছে
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // API তে পাঠানোর আগে confirmPassword বাদ দিতে পারেন চাইলে
    const { confirmPassword, ...submitData } = data;
    console.log("Signup Submitted Successfully:", submitData);
    
    alert("Registration Successful!");
    navigate("/login"); // রেজিস্ট্রেশনের পর লগিন পেজে পাঠিয়ে দেওয়া
  };

  return (
    <>
      <div className="bg-[url('/src/assets/loginBg.png')] bg-cover bg-center bg-no-repeat lg:py-[150px] py-25">
        <Container className={"px-3 lg:px-0"}>
          <Flex className={"justify-between flex-col lg:flex-row gap-y-3"}>
            <h3 className="text-[#1A1A1A] lg:text-6xl text-4xl font-semibold">
              Account Register
            </h3>
            <div className="flex gap-x-3 items-center">
              <p className="text-[#74787C] text-[18px]">
                <Link to={"/"} className="hover:text-black transition-colors">Home</Link>
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
        <Container className={"px-3 lg:px-0"}>
          <div className="lg:px-[120px] lg:py-25 px-5 py-7 bg-[#F6F6F7] lg:w-[780px] mx-auto">
            <h4 className="lg:text-[24px] text-xl font-semibold text-[#141414] text-center">
              Create Your Account
            </h4>

            <div className="mt-[35px] mb-[30px] border border-[#EBEBEB] bg-white lg:py-4 py-3 rounded-[5px] items-center flex justify-center cursor-pointer hover:bg-gray-50 transition-colors">
              <FcGoogle className="mr-2 text-2xl" />
              <p className="text-base font-semibold text-[#141414]">
                Signup with Google
              </p>
            </div>

            <div className="mb-6">
              <Flex className={"justify-center items-center gap-x-4"}>
                <div className="h-[1px] w-full bg-[#E7E7E7]"></div>
                <p className="text-base font-semibold text-[#141414]">OR</p>
                <div className="h-[1px] w-full bg-[#E7E7E7]"></div>
              </Flex>
            </div>

            {/* ফর্ম সাবমিট ইভেন্ট হ্যান্ডল করা হচ্ছে */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <p className="text-[#141414] text-[14px] pb-[10px]">
                  Your name*
                </p>
                <input
                  type="text"
                  {...register("name")}
                  className={`w-full lg:p-5 p-3 bg-white border ${
                    errors.name ? "border-red-500" : "border-[#EBEBEB]"
                  } rounded-[5px] outline-none focus:border-gray-400`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div className="mb-4">
                <p className="text-[#141414] text-[14px] pt-2 pb-[10px]">
                  Email Address*
                </p>
                <input
                  type="email"
                  {...register("email")}
                  className={`w-full lg:p-5 p-3 bg-white border ${
                    errors.email ? "border-red-500" : "border-[#EBEBEB]"
                  } rounded-[5px] outline-none focus:border-gray-400`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              <div className="mb-4">
                <p className="text-[#141414] text-[14px] pt-2 pb-[10px]">
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
              <div className="mb-4">
                <p className="text-[#141414] text-[14px] pt-2 pb-2.5">
                  Confirm Password*
                </p>
                <input
                  type="password"
                  {...register("confirmPassword")}
                  className={`w-full lg:p-5 p-3 bg-white border ${
                    errors.confirmPassword ? "border-red-500" : "border-[#EBEBEB]"
                  } rounded-[5px] outline-none focus:border-gray-400`}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
                )}
              </div>
              <div className="flex pt-2.5 items-baseline lg:items-center">
                <input
                  type="checkbox"
                  id="subscribe"
                  {...register("subscribe")}
                  className="bg-white border border-[#EBEBEB] mr-2 cursor-pointer"
                />
                <label htmlFor="subscribe" className="text-base font-semibold text-[#7B7E86] cursor-pointer">
                  Subscribe to stay updated with new products and offers!
                </label>
              </div>
              <div className="flex pt-[18px] items-baseline lg:items-center mb-6">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  {...register("acceptTerms")}
                  className={`bg-white border mr-2 cursor-pointer ${
                    errors.acceptTerms ? "border-red-500" : "border-[#EBEBEB]"
                  }`}
                />
                <div>
                  <label htmlFor="acceptTerms" className="text-base font-semibold text-[#7B7E86] cursor-pointer">
                    I accept the{" "}
                    <u>
                      <span className="text-[#141414]">Terms / Privacy Policy</span>
                    </u>
                  </label>
                  {errors.acceptTerms && (
                    <p className="text-red-500 text-sm mt-1 block">{errors.acceptTerms.message}</p>
                  )}
                </div>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-[#E53E3E] text-white w-full lg:py-3.5 py-3 rounded-[5px] cursor-pointer hover:bg-red-700 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <p className="text-base font-semibold">
                  {isSubmitting ? "Registering..." : "Register Account"}
                </p>
              </button>
            </form>
            <div className="text-center pt-4">
              <span className="text-[#141414] font-medium">
                Already have an account?
              </span>
              <span className="text-[#E53E3E] ml-2 font-medium hover:underline">
                <Link to={"/login"}>Log in</Link>
              </span>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Signup;