import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'

const Login = () => {
    return (
        <>
        <div className="py-[110px] px-60 bg-[url('/src/assets/loginBg.png')] bg-cover bg-center bg-no-repeat">
        <Container>
            <Flex className={'justify-between'}>
                <h3 className='text-[#1A1A1A] text-[60px] font-semibold'>Account Login</h3>
                <div className="flex gap-x-3 items-center">
                    <p className='text-[#74787C] text-[18px] hover:text-[#1A1A1A] hover:font-semibold duration-300'>
                        <Link to={'/'}>
                            Home
                        </Link>
                    </p>
                    <MdKeyboardArrowRight  className='text-[#74787C]'/>
                    <p className='text-[#74787C] text-[18px] hover:text-[#1A1A1A] hover:font-semibold duration-300'>Login</p>
                </div>
            </Flex>
        </Container>
        </div>
        <div className="py-25">
            <Container>
                <div className="py-[100px] px-[120px] bg-[#F6F6F7] w-[780px] mx-auto">
                    <h4 className='text-[24px] font-semibold  text-[#141414] text-center'>Login Into Your Account</h4>
                    <div className="mt-[35px] mb-[30px] border border-[#EBEBEB] bg-white py-[15px] rounded-[5px] items-center flex justify-center">
                        <FcGoogle className=' mr-2'/>
                        <p className='text-base font-semibold text-[#141414] '>Login with Google</p>
                    </div>
                    <div className="">
                        <Flex className={'justify-center gap-x-4'}>
                            <div className="h-1 w-full bg-[#E7E7E7]"></div>
                            <p className='text-base font-semibold text-[#141414] '>OR</p>
                            <div className="h-1 w-full bg-[#E7E7E7]"></div>
                        </Flex>
                    </div>
                    <div className="my-6">
                        <p className='text-[#141414] text-[14px] pb-[15px] '>Username or email address</p>
                        <input type="text" className='w-full p-5 bg-white border border-[#EBEBEB] rounded-[5px] outline-none'/>
                        <p className='text-[#141414] text-[14px] pt-6 pb-[15px] '>Password*</p>
                        <input type="text" className='w-full p-5 bg-white border border-[#EBEBEB] rounded-[5px] outline-none'/>
                        <div className="flex pt-[18px]">
                            <input type="checkbox" className='bg-white border border-[#EBEBEB] mr-2'/>
                            <p className='text-base font-semibold text-[#7B7E86]'>Remember</p>
                        </div>
                    </div>
                    <button className='bg-[#E53E3E] text-white w-full py-3.5 rounded-[5px] cursor-pointer'>
                        <p className='text-base font-semibold'>Login Account</p>
                    </button>
                    <button className='text-[#141414] pt-4 cursor-pointer'>Lost your password ?</button>
                </div>
            </Container>
        </div>
        </>
    )
}

export default Login