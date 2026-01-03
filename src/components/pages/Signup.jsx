import { Link } from "react-router-dom"
import Container from "../Container"
import Flex from "../Flex"
import { MdKeyboardArrowRight } from "react-icons/md"
import { FcGoogle } from "react-icons/fc"


const Signup = () => {
    return (
        <>
        <div className="py-[110px] px-60 bg-[url('/src/assets/loginBg.png')] bg-cover bg-center bg-no-repeat">
        <Container>
            <Flex className={'justify-between'}>
                <h3 className='text-[#1A1A1A] text-[60px] font-semibold'>Account Register</h3>
                <div className="flex gap-x-3 items-center">
                    <p className='text-[#74787C] text-[18px] hover:text-[#1A1A1A] hover:font-semibold duration-300'>
                        <Link to={'/'}>
                            Home
                        </Link>
                    </p>
                    <MdKeyboardArrowRight  className='text-[#74787C]'/>
                    <p className='text-[#74787C] text-[18px] hover:text-[#1A1A1A] hover:font-semibold duration-300'>Register</p>
                </div>
            </Flex>
        </Container>
        </div>
        <div className="py-25">
            <Container>
                <div className="py-[100px] px-[120px] bg-[#F6F6F7] w-[780px] mx-auto">
                    <h4 className='text-[24px] font-semibold  text-[#141414] text-center'>Create Your Account</h4>
                    <div className="mt-[35px] mb-[30px] border border-[#EBEBEB] bg-white py-[15px] rounded-[5px] items-center flex justify-center">
                        <FcGoogle className=' mr-2'/>
                        <p className='text-base font-semibold text-[#141414] '>Signup with Google</p>
                    </div>
                    <div className="">
                        <Flex className={'justify-center gap-x-4'}>
                            <div className="h-1 w-full bg-[#E7E7E7]"></div>
                            <p className='text-base font-semibold text-[#141414] '>OR</p>
                            <div className="h-1 w-full bg-[#E7E7E7]"></div>
                        </Flex>
                    </div>
                    <div className="my-6">
                        <p className='text-[#141414] text-[14px] pb-[15px] '>Your name*</p>
                        <input type="text" className='w-full p-5 bg-white border border-[#EBEBEB] rounded-[5px] outline-none'/>
                        <p className='text-[#141414] text-[14px] pt-6 pb-[15px] '>Email Address*</p>
                        <input type="email" className='w-full p-5 bg-white border border-[#EBEBEB] rounded-[5px] outline-none'/>
                        <p className='text-[#141414] text-[14px] pt-6 pb-[15px] '>Password*</p>
                        <input type="number" className='w-full p-5 bg-white border border-[#EBEBEB] rounded-[5px] outline-none'/>
                        <p className='text-[#141414] text-[14px] pt-6 pb-[15px] '>Confirm Password*</p>
                        <input type="number" className='w-full p-5 bg-white border border-[#EBEBEB] rounded-[5px] outline-none'/>
                        <div className="flex pt-[18px]">
                            <input type="checkbox" className='bg-white border border-[#EBEBEB] mr-2'/>
                            <p className='text-base font-semibold text-[#7B7E86]'>Subscribe to stay updated with new products and offers!</p>
                        </div>
                        <div className="flex pt-[18px]">
                            <input type="checkbox" className='bg-white border border-[#EBEBEB] mr-2'/>
                            <p className='text-base font-semibold text-[#7B7E86]'>I accept the <u><span className="text-[#141414] "> Terms / Privacy Policy </span></u></p>
                        </div>
                    </div>
                    <button className='bg-[#E53E3E] text-white w-full py-3.5 rounded-[5px] cursor-pointer'>
                        <p className='text-base font-semibold'>Register Account</p>
                    </button>
                    <button className='text-[#141414] pt-4 cursor-pointer font-medium'>Already have an account? 
                        <span className="text-[#E53E3E] ml-2 font-medium">
                            <Link to={'/login'}>
                                Log in
                            </Link>
                        </span>
                    </button>
                </div>
            </Container>
        </div>
        </>
    )
}

export default Signup