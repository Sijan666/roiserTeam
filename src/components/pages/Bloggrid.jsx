import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'
import Images from '../Images'
import blogGrid from '../../assets/blogGrid.png'
import { TbArrowNarrowRight } from 'react-icons/tb'

const Bloggrid = () => {
    return (
        <>
        <div className="py-[110px] px-60 bg-[url('/src/assets/loginBg.png')] bg-cover bg-center bg-no-repeat">
            <Container>
                <Flex className={'justify-between'}>
                    <h3 className='text-[#1A1A1A] text-[60px] font-semibold'>Blog Grid</h3>
                    <div className="flex gap-x-3 items-center">
                        <p className='text-[#74787C] text-[18px] hover:text-[#1A1A1A] hover:font-semibold duration-300'>
                            <Link to={'/'}>
                                Home
                            </Link>
                        </p>
                        <MdKeyboardArrowRight  className='text-[#74787C]'/>
                        <p className='text-[#74787C] text-[18px] hover:text-[#1A1A1A] hover:font-semibold duration-300'>Blog Grid</p>
                    </div>
                </Flex>
            </Container>
        </div>
        <div className="py-25">
            <Container>
                <Flex className={'justify-between gap-x-5'}>
                    <div className="product w-1/3 rounded-md overflow-hidden shadow-newMade">
                        <Images imgSrc={blogGrid} className={'w-full'}/>
                        <div className="p-10  ">
                            <div className="flex gap-x-5">
                                <p className='text-[12px] text-[#74787C]'>MARCH 15, 2022</p>
                                <p className='text-[12px] text-[#74787C]'>OIL CHANGE</p>
                            </div>
                            <h4 className='py-[25px] font-semibold text-[20px] w-[345px] text-[#121212] border-b border-[#EAEAEA] mb-[18px]'>How to Decorate Your Car for Halloween</h4>
                            <div className="flex gap-x-1 items-center  group">
                                <button className='text-base text-[#E53E3E] cursor-pointer'>Read More </button>
                                <TbArrowNarrowRight className='text-[#E53E3E] cursor-pointer'/>
                            </div>
                        </div>
                    </div>
                    <div className="product w-1/3 rounded-md overflow-hidden shadow-newMade">
                        <Images imgSrc={blogGrid} className={'w-full'}/>
                        <div className="p-10  ">
                            <div className="flex gap-x-5">
                                <p className='text-[12px] text-[#74787C]'>MARCH 15, 2022</p>
                                <p className='text-[12px] text-[#74787C]'>OIL CHANGE</p>
                            </div>
                            <h4 className='py-[25px] font-semibold text-[20px] w-[345px] text-[#121212] border-b border-[#EAEAEA] mb-[18px]'>How to Decorate Your Car for Halloween</h4>
                            <div className="flex gap-x-1 items-center  group">
                                <button className='text-base text-[#E53E3E] cursor-pointer'>Read More </button>
                                <TbArrowNarrowRight className='text-[#E53E3E] cursor-pointer'/>
                            </div>
                        </div>
                    </div>
                    <div className="product w-1/3 rounded-md overflow-hidden shadow-newMade">
                        <Images imgSrc={blogGrid} className={'w-full'}/>
                        <div className="p-10  ">
                            <div className="flex gap-x-5">
                                <p className='text-[12px] text-[#74787C]'>MARCH 15, 2022</p>
                                <p className='text-[12px] text-[#74787C]'>OIL CHANGE</p>
                            </div>
                            <h4 className='py-[25px] font-semibold text-[20px] w-[345px] text-[#121212] border-b border-[#EAEAEA] mb-[18px]'>How to Decorate Your Car for Halloween</h4>
                            <div className="flex gap-x-1 items-center  group">
                                <button className='text-base text-[#E53E3E] cursor-pointer'>Read More </button>
                                <TbArrowNarrowRight className='text-[#E53E3E] cursor-pointer'/>
                            </div>
                        </div>
                    </div>
                </Flex>
                <Flex className={'justify-between gap-x-5 mt-5'}>
                    <div className="product w-1/3 rounded-md overflow-hidden shadow-newMade">
                        <Images imgSrc={blogGrid} className={'w-full'}/>
                        <div className="p-10  ">
                            <div className="flex gap-x-5">
                                <p className='text-[12px] text-[#74787C]'>MARCH 15, 2022</p>
                                <p className='text-[12px] text-[#74787C]'>OIL CHANGE</p>
                            </div>
                            <h4 className='py-[25px] font-semibold text-[20px] w-[345px] text-[#121212] border-b border-[#EAEAEA] mb-[18px]'>How to Decorate Your Car for Halloween</h4>
                            <div className="flex gap-x-1 items-center  group">
                                <button className='text-base text-[#E53E3E] cursor-pointer'>Read More </button>
                                <TbArrowNarrowRight className='text-[#E53E3E] cursor-pointer'/>
                            </div>
                        </div>
                    </div>
                    <div className="product w-1/3 rounded-md overflow-hidden shadow-newMade">
                        <Images imgSrc={blogGrid} className={'w-full'}/>
                        <div className="p-10  ">
                            <div className="flex gap-x-5">
                                <p className='text-[12px] text-[#74787C]'>MARCH 15, 2022</p>
                                <p className='text-[12px] text-[#74787C]'>OIL CHANGE</p>
                            </div>
                            <h4 className='py-[25px] font-semibold text-[20px] w-[345px] text-[#121212] border-b border-[#EAEAEA] mb-[18px]'>How to Decorate Your Car for Halloween</h4>
                            <div className="flex gap-x-1 items-center  group">
                                <button className='text-base text-[#E53E3E] cursor-pointer'>Read More </button>
                                <TbArrowNarrowRight className='text-[#E53E3E] cursor-pointer'/>
                            </div>
                        </div>
                    </div>
                    <div className="product w-1/3 rounded-md overflow-hidden shadow-newMade">
                        <Images imgSrc={blogGrid} className={'w-full'}/>
                        <div className="p-10  ">
                            <div className="flex gap-x-5">
                                <p className='text-[12px] text-[#74787C]'>MARCH 15, 2022</p>
                                <p className='text-[12px] text-[#74787C]'>OIL CHANGE</p>
                            </div>
                            <h4 className='py-[25px] font-semibold text-[20px] w-[345px] text-[#121212] border-b border-[#EAEAEA] mb-[18px]'>How to Decorate Your Car for Halloween</h4>
                            <div className="flex gap-x-1 items-center  group">
                                <button className='text-base text-[#E53E3E] cursor-pointer'>Read More </button>
                                <TbArrowNarrowRight className='text-[#E53E3E] cursor-pointer'/>
                            </div>
                        </div>
                    </div>
                </Flex>
                <Flex className={'justify-between gap-x-5 mt-5'}>
                    <div className="product w-1/3 rounded-md overflow-hidden shadow-newMade">
                        <Images imgSrc={blogGrid} className={'w-full'}/>
                        <div className="p-10  ">
                            <div className="flex gap-x-5">
                                <p className='text-[12px] text-[#74787C]'>MARCH 15, 2022</p>
                                <p className='text-[12px] text-[#74787C]'>OIL CHANGE</p>
                            </div>
                            <h4 className='py-[25px] font-semibold text-[20px] w-[345px] text-[#121212] border-b border-[#EAEAEA] mb-[18px]'>How to Decorate Your Car for Halloween</h4>
                            <div className="flex gap-x-1 items-center  group">
                                <button className='text-base text-[#E53E3E] cursor-pointer'>Read More </button>
                                <TbArrowNarrowRight className='text-[#E53E3E] cursor-pointer'/>
                            </div>
                        </div>
                    </div>
                    <div className="product w-1/3 rounded-md overflow-hidden shadow-newMade">
                        <Images imgSrc={blogGrid} className={'w-full'}/>
                        <div className="p-10  ">
                            <div className="flex gap-x-5">
                                <p className='text-[12px] text-[#74787C]'>MARCH 15, 2022</p>
                                <p className='text-[12px] text-[#74787C]'>OIL CHANGE</p>
                            </div>
                            <h4 className='py-[25px] font-semibold text-[20px] w-[345px] text-[#121212] border-b border-[#EAEAEA] mb-[18px]'>How to Decorate Your Car for Halloween</h4>
                            <div className="flex gap-x-1 items-center  group">
                                <button className='text-base text-[#E53E3E] cursor-pointer'>Read More </button>
                                <TbArrowNarrowRight className='text-[#E53E3E] cursor-pointer'/>
                            </div>
                        </div>
                    </div>
                    <div className="product w-1/3 rounded-md overflow-hidden shadow-newMade">
                        <Images imgSrc={blogGrid} className={'w-full'}/>
                        <div className="p-10  ">
                            <div className="flex gap-x-5">
                                <p className='text-[12px] text-[#74787C]'>MARCH 15, 2022</p>
                                <p className='text-[12px] text-[#74787C]'>OIL CHANGE</p>
                            </div>
                            <h4 className='py-[25px] font-semibold text-[20px] w-[345px] text-[#121212] border-b border-[#EAEAEA] mb-[18px]'>How to Decorate Your Car for Halloween</h4>
                            <div className="flex gap-x-1 items-center  group">
                                <button className='text-base text-[#E53E3E] cursor-pointer'>Read More </button>
                                <TbArrowNarrowRight className='text-[#E53E3E] cursor-pointer'/>
                            </div>
                        </div>
                    </div>
                </Flex>
            </Container>
        </div>
        </>
    )
}

export default Bloggrid