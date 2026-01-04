import { Link } from "react-router-dom"
import Container from "../Container"
import Flex from "../Flex"
import { MdKeyboardArrowRight } from "react-icons/md"
import Images from "../Images"
import bgForBlog from '../../assets/bgForBlog.png'
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import { TbArrowNarrowRight } from "react-icons/tb"
import blogPost from '../../assets/blogPost.png'


const Bloglist = () => {
  return (
    <>
        <div className="py-[110px] px-60 bg-[url('/src/assets/loginBg.png')] bg-cover bg-center bg-no-repeat">
          <Container>
              <Flex className={'justify-between'}>
                  <h3 className='text-[#1A1A1A] text-[60px] font-semibold'>Blog Lists</h3>
                  <div className="flex gap-x-3 items-center">
                      <p className='text-[#74787C] text-[18px] hover:text-[#1A1A1A] hover:font-semibold duration-300'>
                          <Link to={'/'}>
                              Home
                          </Link>
                      </p>
                      <MdKeyboardArrowRight  className='text-[#74787C]'/>
                      <p className='text-[#74787C] text-[18px] hover:text-[#1A1A1A] hover:font-semibold duration-300'>Blog Lists</p>
                  </div>
              </Flex>
          </Container>
        </div>
        <div className="py-25">
          <Container>
            <Flex className={'gap-x-10 items-start'}>
              <div className="left 70%">
                <div className="card py-2.5 px-[15px] border border-[#E8E8E8] rounded-md">
                  <Flex className={'gap-x-10 items-center'}>
                    <Images imgSrc={bgForBlog}/>
                    <div className="textPart">
                      <div className="flex gap-x-5">
                        <p className="text-[#74787C] text-[14px]">15 Sep, 2023</p>
                        <p className="text-[#74787C] text-[14px]">Modern Fashion</p>
                      </div>
                      <h4 className="pt-5 pb-[30px] text-[#141414] font-semibold">Exploring the World of Fashion</h4>
                      <p className="text-[#74787C] text-base w-[530px] pb-[30px]">Potenti feugiat aenean class risus aptent tempus nu, facilisi facilisis lacus non at nibh conubia, inceptos malesuada curae leo felis ante. Facilisis lobortis suscipit vel cras integer cursus tortor</p>
                      <button className="text-[#141414] font-semibold text-[14px] cursor-pointer"><TbArrowNarrowRight className="inline-block mr-3 text-[25px] rounded-[50%] border border-[#EEEEEE]" />Read More</button>
                    </div>
                  </Flex>
                </div>
                <div className="card py-2.5 mt-[30px] px-[15px] border border-[#E8E8E8] rounded-md">
                  <Flex className={'gap-x-10 items-center'}>
                    <Images imgSrc={bgForBlog}/>
                    <div className="textPart">
                      <div className="flex gap-x-5">
                        <p className="text-[#74787C] text-[14px]">15 Sep, 2023</p>
                        <p className="text-[#74787C] text-[14px]">Modern Fashion</p>
                      </div>
                      <h4 className="pt-5 pb-[30px] text-[#141414] font-semibold">Exploring the World of Fashion</h4>
                      <p className="text-[#74787C] text-base w-[530px] pb-[30px]">Potenti feugiat aenean class risus aptent tempus nu, facilisi facilisis lacus non at nibh conubia, inceptos malesuada curae leo felis ante. Facilisis lobortis suscipit vel cras integer cursus tortor</p>
                      <button className="text-[#141414] font-semibold text-[14px] cursor-pointer"><TbArrowNarrowRight className="inline-block mr-3 text-[25px] rounded-[50%] border border-[#EEEEEE]" />Read More</button>
                    </div>
                  </Flex>
                </div>
                <div className="card py-2.5 mt-[30px] px-[15px] border border-[#E8E8E8] rounded-md">
                  <Flex className={'gap-x-10 items-center'}>
                    <Images imgSrc={bgForBlog}/>
                    <div className="textPart">
                      <div className="flex gap-x-5">
                        <p className="text-[#74787C] text-[14px]">15 Sep, 2023</p>
                        <p className="text-[#74787C] text-[14px]">Modern Fashion</p>
                      </div>
                      <h4 className="pt-5 pb-[30px] text-[#141414] font-semibold">Exploring the World of Fashion</h4>
                      <p className="text-[#74787C] text-base w-[530px] pb-[30px]">Potenti feugiat aenean class risus aptent tempus nu, facilisi facilisis lacus non at nibh conubia, inceptos malesuada curae leo felis ante. Facilisis lobortis suscipit vel cras integer cursus tortor</p>
                      <button className="text-[#141414] font-semibold text-[14px] cursor-pointer"><TbArrowNarrowRight className="inline-block mr-3 text-[25px] rounded-[50%] border border-[#EEEEEE]" />Read More</button>
                    </div>
                  </Flex>
                </div>
                <div className="card py-2.5 mt-[30px] px-[15px] border border-[#E8E8E8] rounded-md">
                  <Flex className={'gap-x-10 items-center'}>
                    <Images imgSrc={bgForBlog}/>
                    <div className="textPart">
                      <div className="flex gap-x-5">
                        <p className="text-[#74787C] text-[14px]">15 Sep, 2023</p>
                        <p className="text-[#74787C] text-[14px]">Modern Fashion</p>
                      </div>
                      <h4 className="pt-5 pb-[30px] text-[#141414] font-semibold">Exploring the World of Fashion</h4>
                      <p className="text-[#74787C] text-base w-[530px] pb-[30px]">Potenti feugiat aenean class risus aptent tempus nu, facilisi facilisis lacus non at nibh conubia, inceptos malesuada curae leo felis ante. Facilisis lobortis suscipit vel cras integer cursus tortor</p>
                      <button className="text-[#141414] font-semibold text-[14px] cursor-pointer"><TbArrowNarrowRight className="inline-block mr-3 text-[25px] rounded-[50%] border border-[#EEEEEE]" />Read More</button>
                    </div>
                  </Flex>
                </div>
                <div className="card py-2.5 mt-[30px] px-[15px] border border-[#E8E8E8] rounded-md">
                  <Flex className={'gap-x-10 items-center'}>
                    <Images imgSrc={bgForBlog}/>
                    <div className="textPart">
                      <div className="flex gap-x-5">
                        <p className="text-[#74787C] text-[14px]">15 Sep, 2023</p>
                        <p className="text-[#74787C] text-[14px]">Modern Fashion</p>
                      </div>
                      <h4 className="pt-5 pb-[30px] text-[#141414] font-semibold">Exploring the World of Fashion</h4>
                      <p className="text-[#74787C] text-base w-[530px] pb-[30px]">Potenti feugiat aenean class risus aptent tempus nu, facilisi facilisis lacus non at nibh conubia, inceptos malesuada curae leo felis ante. Facilisis lobortis suscipit vel cras integer cursus tortor</p>
                      <button className="text-[#141414] font-semibold text-[14px] cursor-pointer"><TbArrowNarrowRight className="inline-block mr-3 text-[25px] rounded-[50%] border border-[#EEEEEE]" />Read More</button>
                    </div>
                  </Flex>
                </div>
              </div>
              <div className="right w-[30%]">
                <div className="p-[30px] border border-[#E8E8E8] rounded-md">
                  <input type="text" placeholder="Search Here" className="py-[15px] px-[30px] w-[380px] bg-[#F6F6F7] outline-none"/>
                </div>
                <div className="p-[30px] border border-[#E8E8E8] rounded-md mt-[30px]">
                  <h4 className="text-[#141414] font-semibold border-b pb-2.5 border-[#E8E8E8] mb-[30px]">Categories</h4>
                  <div className="flex gap-x-3 items-center mb-[18px]">
                    <input type="checkbox"/>
                    <p>Latest News</p>
                  </div>
                  <div className="flex gap-x-3 items-center mb-[18px]">
                    <input type="checkbox"/>
                    <p>Today Best Posts</p>
                  </div>
                  <div className="flex gap-x-3 items-center mb-[18px]">
                    <input type="checkbox"/>
                    <p>Design Trend</p>
                  </div>
                  <div className="flex gap-x-3 items-center mb-[18px]">
                    <input type="checkbox"/>
                    <p>UI/UX Tips</p>
                  </div>
                  <div className="flex gap-x-3 items-center mb-[18px]">
                    <input type="checkbox"/>
                    <p>Brand Design</p>
                  </div>
                </div>
                <div className="p-[30px] border border-[#E8E8E8] rounded-md mt-[30px]">
                  <h4 className="text-[#141414] font-semibold border-b pb-2.5 border-[#E8E8E8] mb-[30px]">Categories</h4>
                  <div className="flex gap-x-4 mb-[15px]">
                    <Images imgSrc={blogPost}/>
                    <div className="">
                      <p className="text-[#74787C]">Sep 25, 2022</p>
                      <h4 className="text-[#141414] font-medium">Bridging the Gap Between Runway and Reality</h4>
                    </div>
                  </div>
                  <div className="flex gap-x-4 mb-[15px]">
                    <Images imgSrc={blogPost}/>
                    <div className="">
                      <p className="text-[#74787C]">Sep 25, 2022</p>
                      <h4 className="text-[#141414] font-medium">Bridging the Gap Between Runway and Reality</h4>
                    </div>
                  </div>
                  <div className="flex gap-x-4 mb-[15px]">
                    <Images imgSrc={blogPost}/>
                    <div className="">
                      <p className="text-[#74787C]">Sep 25, 2022</p>
                      <h4 className="text-[#141414] font-medium">Bridging the Gap Between Runway and Reality</h4>
                    </div>
                  </div>
                </div>
                <div className="p-[30px] border border-[#E8E8E8] rounded-md mt-[30px]">
                  <h4 className="text-[#141414] font-semibold border-b pb-2.5 border-[#E8E8E8] mb-[30px]">Tags</h4>
                  <div className="">
                  <button className="mx-0.5 mt-2 text-[12px] bg-transparent border border-[#E8E8E8] rounded-[5px] px-[25px] py-2.5 hover:bg-[#E53E3E] duration-300 hover:text-white">DREAM</button>
                  <button className="mx-0.5 mt-2 text-[12px] bg-transparent border border-[#E8E8E8] rounded-[5px] px-[25px] py-2.5 hover:bg-[#E53E3E] duration-300 hover:text-white">RINGS</button>
                  <button className="mx-0.5 mt-2 text-[12px] bg-transparent border border-[#E8E8E8] rounded-[5px] px-[25px] py-2.5 hover:bg-[#E53E3E] duration-300 hover:text-white">BIRTHDAY</button>
                  <button className="mx-0.5 mt-2 text-[12px] bg-transparent border border-[#E8E8E8] rounded-[5px] px-[25px] py-2.5 hover:bg-[#E53E3E] duration-300 hover:text-white">GIFTS</button>
                  <button className="mx-0.5 mt-2 text-[12px] bg-transparent border border-[#E8E8E8] rounded-[5px] px-[25px] py-2.5 hover:bg-[#E53E3E] duration-300 hover:text-white">Neaklace</button>
                  <button className="mx-0.5 mt-2 text-[12px] bg-transparent border border-[#E8E8E8] rounded-[5px] px-[25px] py-2.5 hover:bg-[#E53E3E] duration-300 hover:text-white">Chain</button>
                  <button className="mx-0.5 mt-2 text-[12px] bg-transparent border border-[#E8E8E8] rounded-[5px] px-[25px] py-2.5 hover:bg-[#E53E3E] duration-300 hover:text-white">Braclet</button>
                  </div>
                </div>
                <div className="p-[30px] border border-[#E8E8E8] rounded-md mt-[30px]">
                  <h4 className="text-[#141414] font-semibold border-b pb-2.5 border-[#E8E8E8] mb-[30px]">Instagram Posts</h4>
                  <div className="flex justify-between gap-x-3.5">
                    <Images imgSrc={blogPost}/>
                    <Images imgSrc={blogPost}/>
                    <Images imgSrc={blogPost}/>
                    <Images imgSrc={blogPost}/>
                  </div>
                  <div className="flex justify-between gap-x-3.5 mt-3.5">
                    <Images imgSrc={blogPost}/>
                    <Images imgSrc={blogPost}/>
                    <Images imgSrc={blogPost}/>
                    <Images imgSrc={blogPost}/>
                  </div>
                </div>
              </div>
            </Flex>
          </Container>
        </div>
    </>
  )
}

export default Bloglist