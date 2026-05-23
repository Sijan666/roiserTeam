import { RiArrowRightSLine } from "react-icons/ri";
import Container from "../Container";
import Flex from "../Flex";
import { MdWatchLater } from "react-icons/md";
import { FaFolder } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";

const BlogDetailes = () => {
  return (
    <>
      <div className="bg-[url(/src/assets/shopGrid.png)] bg-cover bg-center py-16 md:py-25">
        <Container className={'px-4 lg:px-0'}>
          <Flex className={"flex-col md:flex-row justify-between items-center md:items-start gap-y-4 md:gap-y-0"}>
            <h3 className="text-[#1A1A1A] text-4xl md:text-[60px] font-semibold text-center md:text-left">
              Blog Details
            </h3>
            <Flex className={"gap-x-2 md:gap-x-4 items-center"}>
              <p className="text-[#74787C] text-[14px] md:text-[18px]">Home</p>
              <RiArrowRightSLine className="text-[#74787C] text-lg md:text-xl" />
              <p className="text-[#1A1A1A] text-[14px] md:text-[18px] font-semibold">
                Blog Details
              </p>
            </Flex>
          </Flex>
        </Container>
      </div>
      <div className="py-12 md:py-25">
        <Container className={'px-4 lg:px-0'}>
          <Flex className={"flex-col lg:flex-row gap-y-10 lg:gap-y-0 lg:gap-x-[50px] items-start"}>
            {/* Left Side (Blog Content) */}
            <div className="w-full lg:w-[65%] xl:w-[952px]">
              {/* Blog Main Image Placeholder */}
              <div className="bg-[#D9D9D9] rounded-tl-md rounded-tr-md h-[250px] md:h-[400px] xl:h-[500px] w-full"></div>
              <div className="bg-[#F6F6F7] p-6 md:p-10 rounded-bl-md rounded-br-md">
                <Flex className={"flex-wrap gap-4 text-[14px] md:text-[16px] text-[#74787C] mb-4 md:mb-5.5"}>
                  <Flex className={"gap-x-2 md:gap-x-3 items-center"}>
                    <MdWatchLater className="text-lg md:text-xl" />
                    <p>15 Sep, 2023</p>
                  </Flex>
                  <Flex className={"gap-x-2 md:gap-x-3 items-center"}>
                    <FaFolder />
                    <p>Modern Fashion</p>
                  </Flex>
                </Flex>
                <h3 className="text-[#141414] text-2xl md:text-4xl font-semibold mb-6 md:mb-10 leading-tight">
                  Fueling Your Passion for All Things Stylish
                </h3>
                <p className="w-full text-[14px] md:text-[16px] text-[#74787C] leading-relaxed">
                  Donec rutrum congue leo eget malesuada. Curabitur aliquet quam
                  posuere blandit. Vivamus suscipit tortor eget felis porttitor
                  volutpa estibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae Donec velit neque, auctor sit
                  amet aliquam vel, ullamcorper sit amet ligula.
                </p>
                <p className="w-full text-[14px] md:text-[16px] text-[#74787C] pt-6 md:pt-10 mb-8 md:mb-[50px] leading-relaxed">
                  Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                  Vivamus suscipit tortor eget felis porttitor volutpat. Quisque
                  velit nisi, pretium ut lacinia in, elementum id enim. Donec
                  rutrum congue leo eget malesuada. Curabitur non nulla sit amet
                  nisl tempus convallis quis ac lectus. Pellentesque in ipsum id
                  orci porta dapibus Vestibulum ante ipsum primis in faucibus
                  orci luctus ultrices posuere cubilia Curae; Donec velit neque,
                  auctor sit amet aliquam ullamcorper sit amet ligula.
                </p>
                <h4 className="text-[#141414] text-xl md:text-2xl font-medium w-full italic border-l-4 border-[#E53E3E] pl-4 md:pl-6">
                  “Cras ultricies ligula sed magna dictum porta aesent sapien
                  massa pellentesque nec egestas vamus magna justo”
                </h4>
                <p className="w-full text-[14px] md:text-[16px] text-[#74787C] mt-8 md:mt-[50px] mb-8 md:mb-10 leading-relaxed">
                  Aptent vestibulum sodales porttitor hac torquent commodo
                  magnis cum molestie donec, egestas ultrices ultricies eget
                  sapien tortor odio condimentum dictum eu, lacus phasellus
                  velit elementum maecenas fringilla placerat suscipit libero.
                  Suscipit fermentum rutrum nisl lacinia varius duis euismod a
                  praesent feugiat inceptos leo, senectus ac facilisis placerat
                  mi posuere lobortis aliquam litora eget dictumst semper,
                  vestibulum morbi aenean volutpat accumsan.
                </p>
                <Flex className={"flex-col sm:flex-row gap-y-4 sm:gap-y-0 sm:gap-x-5"}>
                  <div className="bg-[#D9D9D9] rounded-md h-[180px] md:h-[250px] w-full"></div>
                  <div className="bg-[#D9D9D9] rounded-md h-[180px] md:h-[250px] w-full"></div>
                </Flex>
                <p className="w-full text-[14px] md:text-[16px] text-[#74787C] mt-8 md:mt-10 mb-8 md:mb-[50px] leading-relaxed">
                  Vestibulum ante ipsum primis in faucibus orci luctus ultrices
                  posuere cubilia Curae; Donec velit neque, auctor sit amet
                  aliquam ullamcorper sit amet ligula. Quisque velit , pretium
                  ut lacinia in, elementum id enim. Vivamus suscipit tortor eget
                  felis porttitor volutpat. Quisque velit nisi, pretium ut
                  lacinia in, elementum id enim.
                </p>
                <Flex className={"flex-col md:flex-row gap-y-6 md:gap-y-0 justify-between pb-8 md:pb-[50px] border-b-2 border-[#E1E1E1] items-start md:items-center"}>
                  <Flex className={"gap-x-2 md:gap-x-4 flex-wrap gap-y-2 items-center"}>
                    <p className="text-[#141414] text-sm font-bold mr-2">TAGS:</p>
                    <button className="text-[#141414] hover:text-white text-[12px] font-semibold px-4 md:px-5 py-2 border border-[#E6E6E6] hover:bg-[#141414] hover:border-[#141414] rounded-sm transition-all duration-300">
                      DREAM
                    </button>
                    <button className="text-[#141414] hover:text-white text-[12px] font-semibold px-4 md:px-5 py-2 border border-[#E6E6E6] hover:bg-[#141414] hover:border-[#141414] rounded-sm transition-all duration-300">
                      RINGS
                    </button>
                    <button className="text-[#141414] hover:text-white text-[12px] font-semibold px-4 md:px-5 py-2 border border-[#E6E6E6] hover:bg-[#141414] hover:border-[#141414] rounded-sm transition-all duration-300">
                      BIRTHDAY
                    </button>
                  </Flex>
                  <Flex className="items-center">
                    <p className="text-[#141414] text-sm font-semibold pr-4 md:pr-5">
                      SOCIAL:
                    </p>
                    <Flex className={"gap-x-4 md:gap-x-6 text-[#141414] text-[15px] md:text-[17px]"}>
                      <FaFacebookF className="cursor-pointer hover:text-[#E53E3E] transition-all" />
                      <FaTwitter className="cursor-pointer hover:text-[#E53E3E] transition-all" />
                      <FaInstagram className="cursor-pointer hover:text-[#E53E3E] transition-all" />
                      <FaDribbble className="cursor-pointer hover:text-[#E53E3E] transition-all" />
                    </Flex>
                  </Flex>
                </Flex>
                {/* Author Box */}
                <Flex className="flex-col md:flex-row py-8 md:py-[50px] border-b-2 border-[#E1E1E1] items-start md:items-center">
                  <div className="bg-[#D9D9D9] h-20 w-20 md:h-[120px] md:w-[120px] rounded-md shrink-0"></div>
                  <div className="pt-5 md:pt-0 pl-0 md:pl-[30px] w-full">
                    <h4 className="text-xl md:text-2xl text-[#141414] font-semibold">
                      David Walton
                    </h4>
                    <p className="pt-3 md:pt-[25px] pb-5 md:pb-[30px] w-full text-[14px] md:text-[16px] text-[#74787C] leading-relaxed">
                      Donec sollicitudin molestie malesuada. Pellentesque in
                      ipsum orci porta dapibus ac diam sit amet quam vehicula
                      elementum sed sit amet dui. Vivamus magna justo orem ipsum
                      dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <Flex className={"gap-x-2"}>
                      <div className="bg-white hover:bg-[#E53E3E] hover:text-white transition-all rounded-[5px] border-[#EAEAEA] border p-2.5 md:p-[13px] text-[#141414] text-[14px] md:text-[16px] cursor-pointer">
                        <FaFacebookF />
                      </div>
                      <div className="bg-white hover:bg-[#E53E3E] hover:text-white transition-all rounded-[5px] border-[#EAEAEA] border p-2.5 md:p-[13px] text-[#141414] text-[14px] md:text-[16px] cursor-pointer">
                        <FaTwitter />
                      </div>
                      <div className="bg-white hover:bg-[#E53E3E] hover:text-white transition-all rounded-[5px] border-[#EAEAEA] border p-2.5 md:p-[13px] text-[#141414] text-[14px] md:text-[16px] cursor-pointer">
                        <FaInstagram />
                      </div>
                    </Flex>
                  </div>
                </Flex>
                {/* Comments Section */}
                <div className="pt-10 md:pt-[50px]">
                  <h3 className="text-[#141414] text-2xl md:text-3xl font-semibold pb-8 md:pb-10">
                    02 Comments
                  </h3>
                  {/* First Comment */}
                  <Flex className={"flex-col sm:flex-row items-start"}>
                    <div className="h-[60px] w-[60px] md:h-[100px] md:w-[100px] shrink-0 bg-[#D9D9D9] rounded-md"></div>
                    <div className="mt-4 sm:mt-0 sm:ml-[25px] border-b border-[#E1E1E1] pb-6 md:pb-9 w-full">
                      <Flex className={"pb-3 md:pb-5 justify-between w-full"}>
                        <div>
                          <p className="text-xs md:text-sm text-[#74787C] pb-2 md:pb-4">
                            Sep 25, 2022
                          </p>
                          <h5 className="text-[#141414] text-lg md:text-xl font-medium">
                            Amalia Genner
                          </h5>
                        </div>
                        <div className="text-[#141414] text-xs md:text-sm font-semibold cursor-pointer hover:text-[#E53E3E] transition-all">
                          REPLY
                        </div>
                      </Flex>
                      <p className="w-full text-[#74787C] text-[14px] md:text-[16px] leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus magna justo, lacinia eget consectetur sed
                        convallis at tellus ivamus suscipit tortor eget felis
                        porttitor volutpat.
                      </p>
                    </div>
                  </Flex>
                  {/* Second Comment (Reply) */}
                  <Flex className={"border-b border-[#E1E1E1] pb-6 md:pb-9 mt-5 md:mt-[30px] pl-0 sm:pl-10 md:pl-25 flex-col sm:flex-row items-start"}>
                    <div className="h-[60px] w-[60px] md:h-[100px] md:w-[100px] shrink-0 bg-[#D9D9D9] rounded-md"></div>
                    <div className="mt-4 sm:mt-0 sm:ml-[25px] w-full">
                      <Flex className={"pb-3 md:pb-5 justify-between w-full"}>
                        <div>
                          <p className="text-xs md:text-sm text-[#74787C] pb-2 md:pb-4">
                            Sep 25, 2022
                          </p>
                          <h5 className="text-[#141414] text-lg md:text-xl font-medium">
                            Amalia Genner
                          </h5>
                        </div>
                        <div className="text-[#141414] text-xs md:text-sm font-semibold cursor-pointer hover:text-[#E53E3E] transition-all">
                          REPLY
                        </div>
                      </Flex>
                      <p className="w-full text-[#74787C] text-[14px] md:text-[16px] leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus magna justo, lacinia eget consectetur sed
                        convallis at tellus ivamus suscipit tortor eget felis
                        porttitor volutpat.
                      </p>
                    </div>
                  </Flex>
                </div>
                {/* Add a Review Form */}
                <div className="pt-10 md:pt-[50px]">
                  <h3 className="text-2xl md:text-3xl text-[#141414] font-semibold">
                    Add a Review
                  </h3>
                  <p className="pb-6 md:pb-10 pt-3 md:pt-[18px] text-[#74787C] text-[14px] md:text-[16px]">
                    Your email address will not be published. Required fields
                    are marked*
                  </p>
                  <Flex className={"flex-col md:flex-row gap-y-4 md:gap-y-0 gap-x-0 md:gap-x-5 w-full"}>
                    <input
                      type="text"
                      placeholder="Your Name*"
                      className="outline-none py-3 md:py-4 px-4 md:px-[25px] w-full md:w-1/2 border border-[#E8E8E8] rounded-md bg-white focus:border-[#141414] transition-all"
                    />
                    <input
                      type="email"
                      placeholder="Email Address*"
                      className="outline-none py-3 md:py-4 px-4 md:px-[25px] w-full md:w-1/2 border border-[#E8E8E8] rounded-md bg-white focus:border-[#141414] transition-all"
                    />
                  </Flex>
                  <textarea
                    placeholder="Your Reviews*"
                    className="outline-none py-3 md:py-4 px-4 md:px-[25px] w-full h-[120px] md:h-[170px] border border-[#E8E8E8] rounded-md bg-white my-4 md:my-[23px] resize-none focus:border-[#141414] transition-all"
                  />
                  <button className="block w-full sm:w-auto text-sm text-white font-bold rounded-[5px] bg-[#E53E3E] hover:bg-[#c93232] transition-all px-8 py-3 md:py-[15px]">
                    SUBMIT NOW
                  </button>
                </div>
              </div>
            </div>
            {/* Right Side (Sidebar) */}
            <div className="w-full lg:w-[35%] xl:w-[438px] mt-10 lg:mt-0">
              {/* Search */}
              <div className="border border-[#E8E8E8] bg-white rounded-md p-6 md:p-[30px]">
                <input 
                  type="text" 
                  placeholder="Search Here" 
                  className="outline-none text-[#141414] text-[14px] md:text-[16px] bg-[#F6F6F7] py-3 md:py-[17px] px-4 md:px-[31px] w-full rounded-sm placeholder:text-[#141414]" 
                />
              </div>
              {/* Categories */}
              <div className="my-8 md:my-[30px] border border-[#E8E8E8] bg-white rounded-md p-6 md:p-[30px]">
                <h6 className="border-b border-[#E8E8E8] pb-3 text-lg md:text-xl font-semibold text-[#141414] mb-6 md:mb-[30px]">
                  Categories
                </h6>
                <Flex className={"gap-x-3.5 pb-4 md:pb-4.5 items-center"}>
                  <input type="checkbox" className="border border-[#E3E3E3] h-4 md:h-4.5 w-4 md:w-4.5 cursor-pointer"/>
                  <p className="text-[14px] md:text-[16px] text-[#141414] cursor-pointer">Latest News</p>
                </Flex>
                <Flex className={"gap-x-3.5 pb-4 md:pb-4.5 items-center"}>
                  <input type="checkbox" className="border border-[#E3E3E3] h-4 md:h-4.5 w-4 md:w-4.5 cursor-pointer"/>
                  <p className="text-[14px] md:text-[16px] text-[#141414] cursor-pointer">Today Best Posts</p>
                </Flex>
                <Flex className={"gap-x-3.5 pb-4 md:pb-4.5 items-center"}>
                  <input type="checkbox" className="border border-[#E3E3E3] h-4 md:h-4.5 w-4 md:w-4.5 cursor-pointer"/>
                  <p className="text-[14px] md:text-[16px] text-[#141414] cursor-pointer">Design Trend</p>
                </Flex>
                <Flex className={"gap-x-3.5 pb-4 md:pb-4.5 items-center"}>
                  <input type="checkbox" className="border border-[#E3E3E3] h-4 md:h-4.5 w-4 md:w-4.5 cursor-pointer"/>
                  <p className="text-[14px] md:text-[16px] text-[#141414] cursor-pointer">UI/UX Tips</p>
                </Flex>
                <Flex className={"gap-x-3.5 items-center"}>
                  <input type="checkbox" className="border border-[#E3E3E3] h-4 md:h-4.5 w-4 md:w-4.5 cursor-pointer"/>
                  <p className="text-[14px] md:text-[16px] text-[#141414] cursor-pointer">Brand Design</p>
                </Flex>
              </div>
              {/* Latest Posts */}
              <div className="border border-[#E8E8E8] bg-white rounded-md p-6 md:p-[30px]">
                <h6 className="border-b border-[#E8E8E8] pb-3 text-lg md:text-xl font-semibold text-[#141414] mb-6 md:mb-[30px]">
                  Latest Posts
                </h6>
                <Flex className={"items-start"}>
                  <div className="bg-[#D9D9D9] h-[70px] w-[70px] md:h-20 md:w-20 rounded-[3px] shrink-0"></div>
                  <div className="pl-4 md:pl-5 w-full">
                    <Flex className={"gap-x-2 items-center text-xs md:text-sm text-[#74787C]"}>
                      <MdOutlineWatchLater />
                      <p>Sep 25, 2022</p>
                    </Flex>
                    <p className="text-[#141414] hover:text-[#E53E3E] transition-all cursor-pointer font-medium text-[14px] md:text-[16px] w-full pt-1.5 md:pt-3 leading-tight">
                      Bridging the Gap Between Runway and Reality
                    </p>
                  </div>
                </Flex>
                <Flex className={"py-4 items-start"}>
                  <div className="bg-[#D9D9D9] h-[70px] w-[70px] md:h-20 md:w-20 rounded-[3px] shrink-0"></div>
                  <div className="pl-4 md:pl-5 w-full">
                    <Flex className={"gap-x-2 items-center text-xs md:text-sm text-[#74787C]"}>
                      <MdOutlineWatchLater />
                      <p>Sep 25, 2022</p>
                    </Flex>
                    <p className="text-[#141414] hover:text-[#E53E3E] transition-all cursor-pointer font-medium text-[14px] md:text-[16px] w-full pt-1.5 md:pt-3 leading-tight">
                      Bridging the Gap Between Runway and Reality
                    </p>
                  </div>
                </Flex>
                <Flex className={"items-start"}>
                  <div className="bg-[#D9D9D9] h-[70px] w-[70px] md:h-20 md:w-20 rounded-[3px] shrink-0"></div>
                  <div className="pl-4 md:pl-5 w-full">
                    <Flex className={"gap-x-2 items-center text-xs md:text-sm text-[#74787C]"}>
                      <MdOutlineWatchLater />
                      <p>Sep 25, 2022</p>
                    </Flex>
                    <p className="text-[#141414] hover:text-[#E53E3E] transition-all cursor-pointer font-medium text-[14px] md:text-[16px] w-full pt-1.5 md:pt-3 leading-tight">
                      Bridging the Gap Between Runway and Reality
                    </p>
                  </div>
                </Flex>
              </div>
              {/* Tags */}
              <div className="mt-8 md:mt-[30px] mb-8 md:mb-10 border border-[#E8E8E8] bg-white rounded-md p-6 md:p-[30px]">
                <h6 className="border-b border-[#E8E8E8] pb-3 text-lg md:text-xl font-semibold text-[#141414] mb-6 md:mb-[30px]">
                  Tags
                </h6>
                <div className="flex flex-wrap gap-2 md:gap-2.5">
                  <p className="text-[#141414] text-[12px] md:text-sm font-medium border border-[#E8E8E8] bg-white hover:bg-[#E53E3E] hover:border-[#E53E3E] hover:text-white px-4 md:px-5.5 py-1.5 md:py-2 rounded-[5px] cursor-pointer transition-all">
                    DREAM
                  </p>
                  <p className="text-[#141414] text-[12px] md:text-sm font-medium border border-[#E8E8E8] bg-white hover:bg-[#E53E3E] hover:border-[#E53E3E] hover:text-white px-3 md:px-4 py-1.5 md:py-2 rounded-[5px] cursor-pointer transition-all">
                    RINGS
                  </p>
                  <p className="text-[#141414] text-[12px] md:text-sm font-medium border border-[#E8E8E8] bg-white hover:bg-[#E53E3E] hover:border-[#E53E3E] hover:text-white px-3 md:px-4 py-1.5 md:py-2 rounded-[5px] cursor-pointer transition-all">
                    BIRTHDAY
                  </p>
                  <p className="text-[#141414] text-[12px] md:text-sm font-medium border border-[#E8E8E8] bg-white hover:bg-[#E53E3E] hover:border-[#E53E3E] hover:text-white px-3 md:px-4 py-1.5 md:py-2 rounded-[5px] cursor-pointer transition-all">
                    GIFTS
                  </p>
                  <p className="text-[#141414] text-[12px] md:text-sm font-medium border border-[#E8E8E8] bg-white hover:bg-[#E53E3E] hover:border-[#E53E3E] hover:text-white px-3 md:px-4.5 py-1.5 md:py-2 rounded-[5px] cursor-pointer transition-all">
                    NEAKLACE
                  </p>
                  <p className="text-[#141414] text-[12px] md:text-sm font-medium border border-[#E8E8E8] bg-white hover:bg-[#E53E3E] hover:border-[#E53E3E] hover:text-white px-3 md:px-4 py-1.5 md:py-2 rounded-[5px] cursor-pointer transition-all">
                    CHAIN
                  </p>
                  <p className="text-[#141414] text-[12px] md:text-sm font-medium border border-[#E8E8E8] bg-white hover:bg-[#E53E3E] hover:border-[#E53E3E] hover:text-white px-4 md:px-5 py-1.5 md:py-2 rounded-[5px] cursor-pointer transition-all">
                    BRACLET
                  </p>
                </div>
              </div>
              {/* Instagram Posts */}
              <div className="border border-[#E8E8E8] bg-white rounded-md p-6 md:p-[30px]">
                <h6 className="border-b border-[#E8E8E8] pb-3 text-lg md:text-xl font-semibold text-[#141414] mb-6 md:mb-[30px]">
                  Instagram Posts
                </h6>
                <div className="grid grid-cols-3  gap-3.5">
                  <div className="bg-[#D9D9D9] h-20 w-20 sm:h-[90px] sm:w-[90px] md:h-[105px] md:w-[105px] rounded-[3px]"></div>
                  <div className="bg-[#D9D9D9] h-20 w-20 sm:h-[90px] sm:w-[90px] md:h-[105px] md:w-[105px] rounded-[3px]"></div>
                  <div className="bg-[#D9D9D9] h-20 w-20 sm:h-[90px] sm:w-[90px] md:h-[105px] md:w-[105px] rounded-[3px]"></div>
                  <div className="bg-[#D9D9D9] h-20 w-20 sm:h-[90px] sm:w-[90px] md:h-[105px] md:w-[105px] rounded-[3px]"></div>
                  <div className="bg-[#D9D9D9] h-20 w-20 sm:h-[90px] sm:w-[90px] md:h-[105px] md:w-[105px] rounded-[3px]"></div>
                  <div className="bg-[#D9D9D9] h-20 w-20 sm:h-[90px] sm:w-[90px] md:h-[105px] md:w-[105px] rounded-[3px]"></div>
                  <div className="bg-[#D9D9D9] h-20 w-20 sm:h-[90px] sm:w-[90px] md:h-[105px] md:w-[105px] rounded-[3px]"></div>
                  <div className="bg-[#D9D9D9] h-20 w-20 sm:h-[90px] sm:w-[90px] md:h-[105px] md:w-[105px] rounded-[3px]"></div>
                  <div className="bg-[#D9D9D9] h-20 w-20 sm:h-[90px] sm:w-[90px] md:h-[105px] md:w-[105px] rounded-[3px]"></div>
                </div>
              </div>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default BlogDetailes;