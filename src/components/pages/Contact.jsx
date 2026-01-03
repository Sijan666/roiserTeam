import { Link } from "react-router-dom"
import Container from "../Container"
import Flex from "../Flex"
import { MdKeyboardArrowRight } from "react-icons/md"
import Images from "../Images"
import ashBg from '../../assets/ashBg.png'
import contactMap from '../../assets/contactMap.png'


const Contact = () => {
    return (
        <>
        <div className="py-[110px] px-60 bg-[url('/src/assets/loginBg.png')] bg-cover bg-center bg-no-repeat">
        <Container>
            <Flex className={'justify-between'}>
                <h3 className='text-[#1A1A1A] text-[60px] font-semibold'>Contact</h3>
                <div className="flex gap-x-3 items-center">
                    <p className='text-[#74787C] text-[18px] hover:text-[#1A1A1A] hover:font-semibold duration-300'>
                        <Link to={'/'}>
                            Home
                        </Link>
                    </p>
                    <MdKeyboardArrowRight  className='text-[#74787C]'/>
                    <p className='text-[#74787C] text-[18px] hover:text-[#1A1A1A] hover:font-semibold duration-300'>Contact</p>
                </div>
            </Flex>
        </Container>
        </div>
        <div className="py-25">
            <Container className={'bg-[#F6F6F7] p-[60px] rounded-md'}>
                <Flex className={'items-start gap-x-10'}>
                    <div className="left w-[60%]">
                        <h3 className="text-[#141414] text-[36px] font-semibold">Get In Touch</h3>
                        <div className="my-6">
                            <div className="flex items-center justify-between gap-x-5">
                                <div className="">
                                    <p className='text-[#74787C] text-base pb-[15px] '>Your name</p>
                                    <input type="text" className='p-5 bg-white border border-[#EBEBEB] rounded-[5px] outline-none w-[380px]'/>
                                </div>
                                <div className="">
                                    <p className='text-[#74787C] text-base pb-[15px] '>Email Address</p>
                                    <input type="email" className='p-5 bg-white border border-[#EBEBEB] rounded-[5px] outline-none w-[380px]'/>
                                </div>
                            </div>
                            <p className='text-[#74787C] text-base pt-6 pb-[15px] '>Subject</p>
                            <input type="number" className='w-full p-5 bg-white border border-[#EBEBEB] rounded-[5px] outline-none'/>
                            <p className='text-[#74787C] text-base pt-6 pb-[15px] '>Write Your Message</p>
                            {/* <input type="number" className='w-full p-5 bg-white border border-[#EBEBEB] rounded-[5px] outline-none'/> */}
                            <textarea name="" rows={'5'} cols={'5'} className="w-full p-5 bg-white border border-[#EBEBEB] rounded-[5px] outline-none" id=""></textarea>
                            <button className='bg-[#E53E3E] text-white py-3.5 px-8 rounded-[5px] cursor-pointer mt-[30px]'>
                                <p className='text-base font-semibold'>Send Message</p>
                            </button>
                        </div>
                    </div>
                    <div className="right w-[40%] bg-white p-8 rounded-md">
                        <Images imgSrc={ashBg} className={'mx-auto mb-[35px] w-full'}/>
                        <h3 className="text-[#141414] font-semibold text-[24px] pb-[25px]">Clothing Store</h3>
                        <p className="text-[#74787C] pb-4">Germany — 785 15h Street, Office 478/B</p>
                        <p className="text-[#74787C] pb-4">Green Mall Berlin, De 81566</p>
                        <p className="text-[#74787C] pb-4">Phone: +1 1234 567 88</p>
                        <p className="text-[#74787C] pb-8 border-b border-[#E1E1E1]">Email: contact@example.com</p>
                        <h3 className="text-[#141414] font-semibold text-[24px] pt-[25px] pb-[25px]">Opening Hours</h3>
                        <p className="text-[#74787C] pb-4">Monday - Friday : 9am - 5pm</p>
                        <p className="text-[#74787C]">Weekend Closed</p>
                    </div>
                </Flex>
            </Container>
            <Container>
                <div className="mt-20">
                    <Images imgSrc={contactMap}/>
                </div>
            </Container>
        </div>
        </>
    )
}

export default Contact