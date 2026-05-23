import { Link } from "react-router-dom"
import Container from "../Container"
import Flex from "../Flex"
import { MdKeyboardArrowRight } from "react-icons/md"
import Images from "../Images"
import bgForBlog from '../../assets/bgForBlog.png'
import { TbArrowNarrowRight } from "react-icons/tb"
import blogPost from '../../assets/blogPost.png'

const Bloglist = () => {
  return (
    <>
        <div className="py-[60px] md:py-[110px] bg-[url('/src/assets/loginBg.png')] bg-cover bg-center bg-no-repeat">
          <Container className={'px-4 lg:px-0'}>
              <Flex className={'flex-col md:flex-row justify-between items-center gap-y-4 md:gap-y-0'}>
                  <h3 className='text-[#1A1A1A] text-4xl md:text-[60px] font-semibold text-center md:text-left'>Blog Lists</h3>
                  <div className="flex gap-x-2 md:gap-x-3 items-center">
                      <p className='text-[#74787C] text-[14px] md:text-[18px] hover:text-[#1A1A1A] hover:font-semibold duration-300'>
                          <Link to={'/'}>
                              Home
                          </Link>
                      </p>
                      <MdKeyboardArrowRight  className='text-[#74787C] text-[18px]'/>
                      <p className='text-[#74787C] text-[14px] md:text-[18px] hover:text-[#1A1A1A] hover:font-semibold duration-300'>Blog Lists</p>
                  </div>
              </Flex>
          </Container>
        </div>
        <div className="py-12 md:py-25">
          <Container className={'px-4 lg:px-0'}>
            <Flex className={'flex-col lg:flex-row gap-y-10 lg:gap-y-0 lg:gap-x-10 items-start'}>
              {/* Left Side (Blog Posts) */}
              <div className="left w-full lg:w-[70%]">
                {/* Blog Card 1 */}
                <div className="card py-4 md:py-2.5 px-4 md:px-[15px] border border-[#E8E8E8] rounded-md">
                  <Flex className={'flex-col md:flex-row gap-y-6 md:gap-y-0 md:gap-x-6 lg:gap-x-10 items-start md:items-center'}>
                    <Images imgSrc={bgForBlog} className="w-full md:w-[250px] lg:w-[350px] object-cover rounded-md md:rounded-none shrink-0"/>
                    <div className="textPart w-full">
                      <div className="flex gap-x-3 md:gap-x-5">
                        <p className="text-[#74787C] text-[12px] md:text-[14px]">15 Sep, 2023</p>
                        <p className="text-[#74787C] text-[12px] md:text-[14px]">Modern Fashion</p>
                      </div>
                      <h4 className="pt-3 md:pt-5 pb-4 md:pb-[30px] text-[#141414] font-semibold text-[18px] md:text-[22px] leading-tight">Exploring the World of Fashion</h4>
                      <p className="text-[#74787C] text-sm md:text-base w-full lg:max-w-[530px] pb-5 md:pb-[30px] leading-relaxed">Potenti feugiat aenean class risus aptent tempus nu, facilisi facilisis lacus non at nibh conubia, inceptos malesuada curae leo felis ante. Facilisis lobortis suscipit vel cras integer cursus tortor</p>
                      <button className="text-[#141414] font-semibold text-[14px] cursor-pointer hover:text-[#E53E3E] duration-300 flex items-center">
                        <TbArrowNarrowRight className="inline-block mr-2 md:mr-3 text-[20px] md:text-[25px] rounded-[50%] border border-[#EEEEEE] p-1" />
                        Read More
                      </button>
                    </div>
                  </Flex>
                </div>
                {/* Blog Card 2 */}
                <div className="card py-4 md:py-2.5 mt-6 md:mt-[30px] px-4 md:px-[15px] border border-[#E8E8E8] rounded-md">
                  <Flex className={'flex-col md:flex-row gap-y-6 md:gap-y-0 md:gap-x-6 lg:gap-x-10 items-start md:items-center'}>
                    <Images imgSrc={bgForBlog} className="w-full md:w-[250px] lg:w-[350px] object-cover rounded-md md:rounded-none shrink-0"/>
                    <div className="textPart w-full">
                      <div className="flex gap-x-3 md:gap-x-5">
                        <p className="text-[#74787C] text-[12px] md:text-[14px]">15 Sep, 2023</p>
                        <p className="text-[#74787C] text-[12px] md:text-[14px]">Modern Fashion</p>
                      </div>
                      <h4 className="pt-3 md:pt-5 pb-4 md:pb-[30px] text-[#141414] font-semibold text-[18px] md:text-[22px] leading-tight">Exploring the World of Fashion</h4>
                      <p className="text-[#74787C] text-sm md:text-base w-full lg:max-w-[530px] pb-5 md:pb-[30px] leading-relaxed">Potenti feugiat aenean class risus aptent tempus nu, facilisi facilisis lacus non at nibh conubia, inceptos malesuada curae leo felis ante. Facilisis lobortis suscipit vel cras integer cursus tortor</p>
                      <button className="text-[#141414] font-semibold text-[14px] cursor-pointer hover:text-[#E53E3E] duration-300 flex items-center">
                        <TbArrowNarrowRight className="inline-block mr-2 md:mr-3 text-[20px] md:text-[25px] rounded-[50%] border border-[#EEEEEE] p-1" />
                        Read More
                      </button>
                    </div>
                  </Flex>
                </div>
                {/* Blog Card 3 */}
                <div className="card py-4 md:py-2.5 mt-6 md:mt-[30px] px-4 md:px-[15px] border border-[#E8E8E8] rounded-md">
                  <Flex className={'flex-col md:flex-row gap-y-6 md:gap-y-0 md:gap-x-6 lg:gap-x-10 items-start md:items-center'}>
                    <Images imgSrc={bgForBlog} className="w-full md:w-[250px] lg:w-[350px] object-cover rounded-md md:rounded-none shrink-0"/>
                    <div className="textPart w-full">
                      <div className="flex gap-x-3 md:gap-x-5">
                        <p className="text-[#74787C] text-[12px] md:text-[14px]">15 Sep, 2023</p>
                        <p className="text-[#74787C] text-[12px] md:text-[14px]">Modern Fashion</p>
                      </div>
                      <h4 className="pt-3 md:pt-5 pb-4 md:pb-[30px] text-[#141414] font-semibold text-[18px] md:text-[22px] leading-tight">Exploring the World of Fashion</h4>
                      <p className="text-[#74787C] text-sm md:text-base w-full lg:max-w-[530px] pb-5 md:pb-[30px] leading-relaxed">Potenti feugiat aenean class risus aptent tempus nu, facilisi facilisis lacus non at nibh conubia, inceptos malesuada curae leo felis ante. Facilisis lobortis suscipit vel cras integer cursus tortor</p>
                      <button className="text-[#141414] font-semibold text-[14px] cursor-pointer hover:text-[#E53E3E] duration-300 flex items-center">
                        <TbArrowNarrowRight className="inline-block mr-2 md:mr-3 text-[20px] md:text-[25px] rounded-[50%] border border-[#EEEEEE] p-1" />
                        Read More
                      </button>
                    </div>
                  </Flex>
                </div>
                {/* Blog Card 4 */}
                <div className="card py-4 md:py-2.5 mt-6 md:mt-[30px] px-4 md:px-[15px] border border-[#E8E8E8] rounded-md">
                  <Flex className={'flex-col md:flex-row gap-y-6 md:gap-y-0 md:gap-x-6 lg:gap-x-10 items-start md:items-center'}>
                    <Images imgSrc={bgForBlog} className="w-full md:w-[250px] lg:w-[350px] object-cover rounded-md md:rounded-none shrink-0"/>
                    <div className="textPart w-full">
                      <div className="flex gap-x-3 md:gap-x-5">
                        <p className="text-[#74787C] text-[12px] md:text-[14px]">15 Sep, 2023</p>
                        <p className="text-[#74787C] text-[12px] md:text-[14px]">Modern Fashion</p>
                      </div>
                      <h4 className="pt-3 md:pt-5 pb-4 md:pb-[30px] text-[#141414] font-semibold text-[18px] md:text-[22px] leading-tight">Exploring the World of Fashion</h4>
                      <p className="text-[#74787C] text-sm md:text-base w-full lg:max-w-[530px] pb-5 md:pb-[30px] leading-relaxed">Potenti feugiat aenean class risus aptent tempus nu, facilisi facilisis lacus non at nibh conubia, inceptos malesuada curae leo felis ante. Facilisis lobortis suscipit vel cras integer cursus tortor</p>
                      <button className="text-[#141414] font-semibold text-[14px] cursor-pointer hover:text-[#E53E3E] duration-300 flex items-center">
                        <TbArrowNarrowRight className="inline-block mr-2 md:mr-3 text-[20px] md:text-[25px] rounded-[50%] border border-[#EEEEEE] p-1" />
                        Read More
                      </button>
                    </div>
                  </Flex>
                </div>
                {/* Blog Card 5 */}
                <div className="card py-4 md:py-2.5 mt-6 md:mt-[30px] px-4 md:px-[15px] border border-[#E8E8E8] rounded-md">
                  <Flex className={'flex-col md:flex-row gap-y-6 md:gap-y-0 md:gap-x-6 lg:gap-x-10 items-start md:items-center'}>
                    <Images imgSrc={bgForBlog} className="w-full md:w-[250px] lg:w-[350px] object-cover rounded-md md:rounded-none shrink-0"/>
                    <div className="textPart w-full">
                      <div className="flex gap-x-3 md:gap-x-5">
                        <p className="text-[#74787C] text-[12px] md:text-[14px]">15 Sep, 2023</p>
                        <p className="text-[#74787C] text-[12px] md:text-[14px]">Modern Fashion</p>
                      </div>
                      <h4 className="pt-3 md:pt-5 pb-4 md:pb-[30px] text-[#141414] font-semibold text-[18px] md:text-[22px] leading-tight">Exploring the World of Fashion</h4>
                      <p className="text-[#74787C] text-sm md:text-base w-full lg:max-w-[530px] pb-5 md:pb-[30px] leading-relaxed">Potenti feugiat aenean class risus aptent tempus nu, facilisi facilisis lacus non at nibh conubia, inceptos malesuada curae leo felis ante. Facilisis lobortis suscipit vel cras integer cursus tortor</p>
                      <button className="text-[#141414] font-semibold text-[14px] cursor-pointer hover:text-[#E53E3E] duration-300 flex items-center">
                        <TbArrowNarrowRight className="inline-block mr-2 md:mr-3 text-[20px] md:text-[25px] rounded-[50%] border border-[#EEEEEE] p-1" />
                        Read More
                      </button>
                    </div>
                  </Flex>
                </div>
              </div>
              {/* Right Side (Sidebar) */}
              <div className="right w-full lg:w-[30%]">
                {/* Search Box */}
                <div className="p-6 md:p-[30px] border border-[#E8E8E8] rounded-md">
                  <input type="text" placeholder="Search Here" className="py-3 md:py-[15px] px-5 md:px-[30px] w-full bg-[#F6F6F7] outline-none rounded-md placeholder:text-sm md:placeholder:text-base text-sm md:text-base"/>
                </div>
                {/* Categories */}
                <div className="p-6 md:p-[30px] border border-[#E8E8E8] rounded-md mt-8 md:mt-[30px]">
                  <h4 className="text-[#141414] font-semibold text-lg md:text-xl border-b pb-2.5 border-[#E8E8E8] mb-6 md:mb-[30px]">Categories</h4>
                  <div className="flex gap-x-3 items-center mb-[18px] cursor-pointer hover:text-[#E53E3E] duration-300">
                    <input type="checkbox" className="w-4 h-4 cursor-pointer"/>
                    <p className="text-sm md:text-base">Latest News</p>
                  </div>
                  <div className="flex gap-x-3 items-center mb-[18px] cursor-pointer hover:text-[#E53E3E] duration-300">
                    <input type="checkbox" className="w-4 h-4 cursor-pointer"/>
                    <p className="text-sm md:text-base">Today Best Posts</p>
                  </div>
                  <div className="flex gap-x-3 items-center mb-[18px] cursor-pointer hover:text-[#E53E3E] duration-300">
                    <input type="checkbox" className="w-4 h-4 cursor-pointer"/>
                    <p className="text-sm md:text-base">Design Trend</p>
                  </div>
                  <div className="flex gap-x-3 items-center mb-[18px] cursor-pointer hover:text-[#E53E3E] duration-300">
                    <input type="checkbox" className="w-4 h-4 cursor-pointer"/>
                    <p className="text-sm md:text-base">UI/UX Tips</p>
                  </div>
                  <div className="flex gap-x-3 items-center mb-[18px] cursor-pointer hover:text-[#E53E3E] duration-300">
                    <input type="checkbox" className="w-4 h-4 cursor-pointer"/>
                    <p className="text-sm md:text-base">Brand Design</p>
                  </div>
                </div>
                {/* Recent Posts */}
                <div className="p-6 md:p-[30px] border border-[#E8E8E8] rounded-md mt-8 md:mt-[30px]">
                  <h4 className="text-[#141414] font-semibold text-lg md:text-xl border-b pb-2.5 border-[#E8E8E8] mb-6 md:mb-[30px]">Recent Posts</h4>
                  
                  <div className="flex gap-x-4 mb-5 md:mb-[15px] items-center cursor-pointer group">
                    <Images imgSrc={blogPost} className="w-[70px] h-[70px] md:w-20 md:h-20 object-cover rounded-md shrink-0"/>
                    <div className="w-full">
                      <p className="text-[#74787C] text-[12px] md:text-[14px]">Sep 25, 2022</p>
                      <h4 className="text-[#141414] font-medium text-sm md:text-base leading-tight mt-1 group-hover:text-[#E53E3E] duration-300">Bridging the Gap Between Runway and Reality</h4>
                    </div>
                  </div>
                  <div className="flex gap-x-4 mb-5 md:mb-[15px] items-center cursor-pointer group">
                    <Images imgSrc={blogPost} className="w-[70px] h-[70px] md:w-20 md:h-20 object-cover rounded-md shrink-0"/>
                    <div className="w-full">
                      <p className="text-[#74787C] text-[12px] md:text-[14px]">Sep 25, 2022</p>
                      <h4 className="text-[#141414] font-medium text-sm md:text-base leading-tight mt-1 group-hover:text-[#E53E3E] duration-300">Bridging the Gap Between Runway and Reality</h4>
                    </div>
                  </div>
                  <div className="flex gap-x-4 items-center cursor-pointer group">
                    <Images imgSrc={blogPost} className="w-[70px] h-[70px] md:w-20 md:h-20 object-cover rounded-md shrink-0"/>
                    <div className="w-full">
                      <p className="text-[#74787C] text-[12px] md:text-[14px]">Sep 25, 2022</p>
                      <h4 className="text-[#141414] font-medium text-sm md:text-base leading-tight mt-1 group-hover:text-[#E53E3E] duration-300">Bridging the Gap Between Runway and Reality</h4>
                    </div>
                  </div>
                </div>
                {/* Tags */}
                <div className="p-6 md:p-[30px] border border-[#E8E8E8] rounded-md mt-8 md:mt-[30px]">
                  <h4 className="text-[#141414] font-semibold text-lg md:text-xl border-b pb-2.5 border-[#E8E8E8] mb-6 md:mb-[30px]">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    <button className="text-[12px] bg-transparent border border-[#E8E8E8] rounded-[5px] px-[15px] md:px-5 py-2 hover:bg-[#E53E3E] duration-300 hover:text-white transition-all">DREAM</button>
                    <button className="text-[12px] bg-transparent border border-[#E8E8E8] rounded-[5px] px-[15px] md:px-5 py-2 hover:bg-[#E53E3E] duration-300 hover:text-white transition-all">RINGS</button>
                    <button className="text-[12px] bg-transparent border border-[#E8E8E8] rounded-[5px] px-[15px] md:px-5 py-2 hover:bg-[#E53E3E] duration-300 hover:text-white transition-all">BIRTHDAY</button>
                    <button className="text-[12px] bg-transparent border border-[#E8E8E8] rounded-[5px] px-[15px] md:px-5 py-2 hover:bg-[#E53E3E] duration-300 hover:text-white transition-all">GIFTS</button>
                    <button className="text-[12px] bg-transparent border border-[#E8E8E8] rounded-[5px] px-[15px] md:px-5 py-2 hover:bg-[#E53E3E] duration-300 hover:text-white transition-all">Neaklace</button>
                    <button className="text-[12px] bg-transparent border border-[#E8E8E8] rounded-[5px] px-[15px] md:px-5 py-2 hover:bg-[#E53E3E] duration-300 hover:text-white transition-all">Chain</button>
                    <button className="text-[12px] bg-transparent border border-[#E8E8E8] rounded-[5px] px-[15px] md:px-5 py-2 hover:bg-[#E53E3E] duration-300 hover:text-white transition-all">Braclet</button>
                  </div>
                </div>
                {/* Instagram Posts */}
                <div className="p-6 md:p-[30px] border border-[#E8E8E8] rounded-md mt-8 md:mt-[30px]">
                  <h4 className="text-[#141414] font-semibold text-lg md:text-xl border-b pb-2.5 border-[#E8E8E8] mb-6 md:mb-[30px]">Instagram Posts</h4>
                  <div className="flex justify-between gap-x-2 md:gap-x-3.5">
                    <Images imgSrc={blogPost} className="w-[22%] object-cover rounded-md"/>
                    <Images imgSrc={blogPost} className="w-[22%] object-cover rounded-md"/>
                    <Images imgSrc={blogPost} className="w-[22%] object-cover rounded-md"/>
                    <Images imgSrc={blogPost} className="w-[22%] object-cover rounded-md"/>
                  </div>
                  <div className="flex justify-between gap-x-2 md:gap-x-3.5 mt-2 md:mt-3.5">
                    <Images imgSrc={blogPost} className="w-[22%] object-cover rounded-md"/>
                    <Images imgSrc={blogPost} className="w-[22%] object-cover rounded-md"/>
                    <Images imgSrc={blogPost} className="w-[22%] object-cover rounded-md"/>
                    <Images imgSrc={blogPost} className="w-[22%] object-cover rounded-md"/>
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