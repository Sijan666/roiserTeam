import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

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
        </>
    )
}

export default Login