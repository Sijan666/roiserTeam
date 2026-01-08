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
      <div className="bg-[url(/src/assets/shopGrid.png)] py-25">
        <Container>
          <Flex className={"justify-between"}>
            <h3 className="text-[#1A1A1A] text-[60px] font-semibold">
              Blog Details
            </h3>
            <Flex className={"gap-x-4"}>
              <p className="text-[#74787C] text-[18px]">Home</p>
              <RiArrowRightSLine className="text-[#74787C] text-xl" />
              <p className="text-[#1A1A1A] text-[18px] font-semibold">
                Blog Details
              </p>
            </Flex>
          </Flex>
        </Container>
      </div>
      <div className="py-25">
        <Container>
          <Flex className={"gap-x-[50px] items-start"}>
            <div className="w-[952px]">
              {" "}
              <div className="bg-[#D9D9D9] rounded-tl-md rounded-tr-md py-62.5 px-119"></div>
              <div className="bg-[#F6F6F7] p-10 rounded-bl-md rounded-br-md">
                <Flex className={"gap-x-4 text-[16px] text-[#74787C] mb-5.5"}>
                  <Flex className={"gap-x-3"}>
                    <MdWatchLater className="text-xl" />
                    <p>15 Sep, 2023</p>
                  </Flex>
                  <Flex className={"gap-x-3"}>
                    <FaFolder />
                    <p>Modern Fashion</p>
                  </Flex>
                </Flex>
                <h3 className="text-[#141414] text-4xl font-semibold mb-10">
                  Fueling Your Passion for All Things Stylish
                </h3>
                <p className="w-[872px] text-[16px] text-[#74787C]">
                  Donec rutrum congue leo eget malesuada. Curabitur aliquet quam
                  posuere blandit. Vivamus suscipit tortor eget felis porttitor
                  volutpa estibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae Donec velit neque, auctor sit
                  amet aliquam vel, ullamcorper sit amet ligula.
                </p>
                <p className="w-[872px] text-[16px] text-[#74787C] pt-10 mb-[50px]">
                  Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                  Vivamus suscipit tortor eget felis porttitor volutpat. Quisque
                  velit nisi, pretium ut lacinia in, elementum id enim. Donec
                  rutrum congue leo eget malesuada. Curabitur non nulla sit amet
                  nisl tempus convallis quis ac lectus. Pellentesque in ipsum id
                  orci porta dapibus Vestibulum ante ipsum primis in faucibus
                  orci luctus ultrices posuere cubilia Curae; Donec velit neque,
                  auctor sit amet aliquam ullamcorper sit amet ligula.
                </p>
                <h4 className="text-[#141414] text-2xl font-medium w-[872px]">
                  “Cras ultricies ligula sed magna dictum porta aesent sapien
                  massa pellentesque nec egestas vamus magna justo”
                </h4>
                <p className="w-[872px] text-[16px] text-[#74787C] mt-[50px] mb-10">
                  Aptent vestibulum sodales porttitor hac torquent commodo
                  magnis cum molestie donec, egestas ultrices ultricies eget
                  sapien tortor odio condimentum dictum eu, lacus phasellus
                  velit elementum maecenas fringilla placerat suscipit libero.
                  Suscipit fermentum rutrum nisl lacinia varius duis euismod a
                  praesent feugiat inceptos leo, senectus ac facilisis placerat
                  mi posuere lobortis aliquam litora eget dictumst semper,
                  vestibulum morbi aenean volutpat accumsan.
                </p>
                <Flex className={"gap-x-5"}>
                  <div className="bg-[#D9D9D9] rounded-md py-43 px-53"></div>
                  <div className="bg-[#D9D9D9] rounded-md py-43 px-53"></div>
                </Flex>
                <p className="w-[872px] text-[16px] text-[#74787C] mt-10 mb-[50px]">
                  Vestibulum ante ipsum primis in faucibus orci luctus ultrices
                  posuere cubilia Curae; Donec velit neque, auctor sit amet
                  aliquam ullamcorper sit amet ligula. Quisque velit , pretium
                  ut lacinia in, elementum id enim. Vivamus suscipit tortor eget
                  felis porttitor volutpat. Quisque velit nisi, pretium ut
                  lacinia in, elementum id enim.
                </p>
                <Flex
                  className={
                    "justify-between pb-[50px] border-b-2 border-[#E1E1E1]"
                  }
                >
                  <Flex className={"gap-x-4"}>
                    <p className="text-[#141414] text-sm font-bold">TAGS</p>
                    <button className="text--[#141414] hover:text-white text-[12px] font-semibold px-5 py-2 border border-[#E6E6E6] hover:bg-[#141414] hover:border-[#141414] rounded-sm">
                      DREAM
                    </button>
                    <button className="text--[#141414] hover:text-white text-[12px] font-semibold px-5 py-2 border border-[#E6E6E6] hover:bg-[#141414] hover:border-[#141414] rounded-sm">
                      RINGS
                    </button>
                    <button className="text--[#141414] hover:text-white text-[12px] font-semibold px-5 py-2 border border-[#E6E6E6] hover:bg-[#141414] hover:border-[#141414] rounded-sm">
                      BIRTHDAY
                    </button>
                  </Flex>
                  <Flex>
                    <p className="text-[#141414] text-sm font-semibold pr-5">
                      SOCIAL ICON
                    </p>
                    <Flex className={"gap-x-6 text-[#141414] text-[17px]"}>
                      <FaFacebookF className=" cursor-pointer" />
                      <FaTwitter className=" cursor-pointer" />
                      <FaInstagram className=" cursor-pointer" />
                      <FaDribbble className=" cursor-pointer" />
                    </Flex>
                  </Flex>
                </Flex>
                <Flex className=" py-[50px] border-b-2 border-[#E1E1E1]">
                  <div className="bg-[#D9D9D9] p-23 rounded-md"></div>
                  <div className="pl-[30px]">
                    <h4 className="text-2xl text-[#141414] font-semibold">
                      David Walton
                    </h4>
                    <p className="pt-[25px] pb-[30px] w-[660px] text-[16px] text-[#74787C]">
                      Donec sollicitudin molestie malesuada. Pellentesque in
                      ipsum orci porta dapibus ac diam sit amet quam vehicula
                      elementum sed sit amet dui. Vivamus magna justo orem ipsum
                      dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <Flex className={"gap-x-2"}>
                      <div className="bg-white rounded-[5px] border-[#EAEAEA] border p-[13px] text-[#141414] text-[16px] cursor-pointer">
                        <FaFacebookF />
                      </div>
                      <div className="bg-white rounded-[5px] border-[#EAEAEA] border p-[13px] text-[#141414] text-[16px] cursor-pointer">
                        <FaTwitter />
                      </div>
                      <div className="bg-white rounded-[5px] border-[#EAEAEA] border p-[13px] text-[#141414] text-[16px] cursor-pointer">
                        <FaInstagram />
                      </div>
                    </Flex>
                  </div>
                </Flex>
                <div className="pt-[50px]">
                  <h3 className="text-[#141414] text-3xl font-semibold  pb-10">
                    03 Comments
                  </h3>
                  <Flex className={"items-start"}>
                    <div className="p-[50px] bg-[#D9D9D9] rounded-md"></div>
                    <div className="ml-[25px] border-b border-[#E1E1E1] pb-9">
                      <Flex className={"pb-20px justify-between w-[730px]"}>
                        <div className="">
                          <p className="text-sm text-[#74787C] pb-4">
                            Sep 25, 2022
                          </p>
                          <h5 className="text-[#141414] text-xl font-medium">
                            Amalia Genner
                          </h5>
                        </div>
                        <div className="text-[#141414] text-sm font-semibold">
                          REPLY
                        </div>
                      </Flex>
                      <p className="w-[735px] text-[#74787C] text-[16px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus magna justo, lacinia eget consectetur sed
                        convallis at tellus ivamus suscipit tortor eget felis
                        porttitor volutpat.
                      </p>
                    </div>
                  </Flex>
                  <Flex
                    className={
                      " border-b border-[#E1E1E1] pb-9 mt-[30px] pl-25 items-start"
                    }
                  >
                    <div className="p-[50px] bg-[#D9D9D9] rounded-md"></div>
                    <div className="ml-[25px]">
                      <Flex className={"pb-20px justify-between w-[615px]"}>
                        <div className="">
                          <p className="text-sm text-[#74787C] pb-4">
                            Sep 25, 2022
                          </p>
                          <h5 className="text-[#141414] text-xl font-medium">
                            Amalia Genner
                          </h5>
                        </div>
                        <div className="text-[#141414] text-sm font-semibold">
                          REPLY
                        </div>
                      </Flex>
                      <p className="w-[647px] text-[#74787C] text-[16px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus magna justo, lacinia eget consectetur sed
                        convallis at tellus ivamus suscipit tortor eget felis
                        porttitor volutpat.
                      </p>
                    </div>
                  </Flex>
                </div>
                <div className="pt-[50px]">
                  <h3 className="text-3xl text-[#141414] font-semibold">
                    Add a Review
                  </h3>
                  <p className="pb-10 pt-[18px] text-[#74787C] text-[16px]">
                    Your email address will not be published. Required fields
                    are marked*
                  </p>
                  <input
                    type="text"
                    placeholder="Your Name*"
                    className="outline-none py-4 px-[25px] w-[426px] border border-[#E8E8E8] rounded-md bg-white"
                  />
                  <input
                    type="email"
                    placeholder="Email Address*"
                    className="outline-none py-4 px-[25px] w-[426px] border border-[#E8E8E8] rounded-md bg-white ml-5"
                  />
                  <textarea
                    type="text"
                    placeholder="Your Reviews*"
                    className="outline-none py-4 px-[25px] w-[872px] h-[170px] border border-[#E8E8E8] rounded-md bg-white my-[23px]"
                  />
                  <button className="block text-sm text-white font-bold rounded-[5px] bg-[#E53E3E] px-8 py-[15px]">
                    SUBMIT NOW
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[438px]">
              <div className="border border-[#E8E8E8] bg-white  rounded-md p-[30px]">
                <p className="text-[#141414] text-[16px] bg-[#F6F6F7] py-[17px] px-[31px] w-[378px] rounded-sm">
                  Search Here
                </p>
              </div>
              <div className="my-[30px] border border-[#E8E8E8] bg-white  rounded-md p-[30px]">
                <h6 className="border-b border-[#E8E8E8] pb-3 text-xl font-semibold text-[#141414] mb-[30px]">
                  Categories
                </h6>
                <Flex className={"gap-x-3.5 pb-4.5"}>
                  <input
                    type="checkbox"
                    className="border border-[#E3E3E3] h-4.5 w-4.5"
                  />
                  <p className="text-[16px] text-[#141414]">Latest News</p>
                </Flex>
                <Flex className={"gap-x-3.5 pb-4.5"}>
                  <input
                    type="checkbox"
                    className="border border-[#E3E3E3] h-4.5 w-4.5"
                  />
                  <p className="text-[16px] text-[#141414]">Today Best Posts</p>
                </Flex>
                <Flex className={"gap-x-3.5 pb-4.5"}>
                  <input
                    type="checkbox"
                    className="border border-[#E3E3E3] h-4.5 w-4.5"
                  />
                  <p className="text-[16px] text-[#141414]">Design Trend</p>
                </Flex>
                <Flex className={"gap-x-3.5 pb-4.5"}>
                  <input
                    type="checkbox"
                    className="border border-[#E3E3E3] h-4.5 w-4.5"
                  />
                  <p className="text-[16px] text-[#141414]">UI/UX Tips</p>
                </Flex>
                <Flex className={"gap-x-3.5"}>
                  <input
                    type="checkbox"
                    className="border border-[#E3E3E3] h-4.5 w-4.5"
                  />
                  <p className="text-[16px] text-[#141414]">Brand Design</p>
                </Flex>
              </div>
              <div className="border border-[#E8E8E8] bg-white  rounded-md p-[30px]">
                <h6 className="border-b border-[#E8E8E8] pb-3 text-xl font-semibold text-[#141414] mb-[30px]">
                  Latest Posts
                </h6>
                <Flex>
                  <div className="bg-[#D9D9D9] p-10 rounded-[3px]"></div>
                  <div className="pl-5 ">
                    <Flex className={"gap-x-2 text-sm text-[#74787C] "}>
                      <MdOutlineWatchLater />
                      <p>Sep 25, 2022</p>
                    </Flex>
                    <p className="text-[#141414] font-medium text-[16px] w-[246px] pt-3">
                      Bridging the Gap Between Runway and Reality
                    </p>
                  </div>
                </Flex>
                <Flex className={"py-4"}>
                  <div className="bg-[#D9D9D9] p-10 rounded-[3px]"></div>
                  <div className="pl-5 ">
                    <Flex className={"gap-x-2 text-sm text-[#74787C] "}>
                      <MdOutlineWatchLater />
                      <p>Sep 25, 2022</p>
                    </Flex>
                    <p className="text-[#141414] font-medium text-[16px] w-[246px] pt-3">
                      Bridging the Gap Between Runway and Reality
                    </p>
                  </div>
                </Flex>
                <Flex>
                  <div className="bg-[#D9D9D9] p-10 rounded-[3px]"></div>
                  <div className="pl-5 ">
                    <Flex className={"gap-x-2 text-sm text-[#74787C] "}>
                      <MdOutlineWatchLater />
                      <p>Sep 25, 2022</p>
                    </Flex>
                    <p className="text-[#141414] font-medium text-[16px] w-[246px] pt-3">
                      Bridging the Gap Between Runway and Reality
                    </p>
                  </div>
                </Flex>
              </div>
              <div className="mt-[30px] mb-10 border border-[#E8E8E8] bg-white  rounded-md p-[30px]">
                <h6 className="border-b border-[#E8E8E8] pb-3 text-xl font-semibold text-[#141414] mb-[30px]">
                  Tags
                </h6>
                <Flex className={"gap-x-2.5"}>
                  <p className="text-[#141414] text-sm font-medium border border-[#E8E8E8] bg-white hover:bg-[#E53E3E] hover:border-[#E53E3E] hover:text-white px-5.5 py-2 rounded-[5px] cursor-pointer">
                    DREAM
                  </p>
                  <p className="text-[#141414] text-sm font-medium border border-[#E8E8E8] bg-white hover:bg-[#E53E3E] hover:border-[#E53E3E] hover:text-white px-4 py-2 rounded-[5px] cursor-pointer">
                    RINGS
                  </p>
                  <p className="text-[#141414] text-sm font-medium border border-[#E8E8E8] bg-white hover:bg-[#E53E3E] hover:border-[#E53E3E] hover:text-white px-4 py-2 rounded-[5px] cursor-pointer">
                    BIRTHDAY
                  </p>
                  <p className="text-[#141414] text-sm font-medium border border-[#E8E8E8] bg-white hover:bg-[#E53E3E] hover:border-[#E53E3E] hover:text-white px-4 py-2 rounded-[5px] cursor-pointer">
                    GIFTS
                  </p>
                </Flex>
                <Flex className={"gap-x-2.5 pt-2.5"}>
                  <p className="text-[#141414] text-sm font-medium border border-[#E8E8E8] bg-white hover:bg-[#E53E3E] hover:border-[#E53E3E] hover:text-white px-4.5 py-2 rounded-[5px] cursor-pointer">
                    NEAKLACE
                  </p>
                  <p className="text-[#141414] text-sm font-medium border border-[#E8E8E8] bg-white hover:bg-[#E53E3E] hover:border-[#E53E3E] hover:text-white px-4 py-2 rounded-[5px] cursor-pointer">
                    CHAIN
                  </p>
                  <p className="text-[#141414] text-sm font-medium border border-[#E8E8E8] bg-white hover:bg-[#E53E3E] hover:border-[#E53E3E] hover:text-white px-5 py-2 rounded-[5px] cursor-pointer">
                    BRACLET
                  </p>
                </Flex>
              </div>
              <div className="border border-[#E8E8E8] bg-white  rounded-md p-[30px]">
                <h6 className="border-b border-[#E8E8E8] pb-3 text-xl font-semibold text-[#141414] mb-[30px]">
                  Instagram Posts
                </h6>
                <Flex className={"flex-wrap gap-x-3.5 gap-y-3.5"}>
                  <div className="bg-[#D9D9D9] p-10 rounded-[3px] "></div>
                  <div className="bg-[#D9D9D9] p-10 rounded-[3px] "></div>
                  <div className="bg-[#D9D9D9] p-10 rounded-[3px] "></div>
                  <div className="bg-[#D9D9D9] p-10 rounded-[3px] "></div>
                  <div className="bg-[#D9D9D9] p-10 rounded-[3px] "></div>
                  <div className="bg-[#D9D9D9] p-10 rounded-[3px] "></div>
                  <div className="bg-[#D9D9D9] p-10 rounded-[3px] "></div>
                  <div className="bg-[#D9D9D9] p-10 rounded-[3px] "></div>
                </Flex>
              </div>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default BlogDetailes;
