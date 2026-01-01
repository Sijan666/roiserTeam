
import Container from "../Container"
import Flex from "../Flex"
import Images from "../Images"
import Box from "/src/assets/box.png"
import Car from "/src/assets/Car.png"
import Card from "/src/assets/credit-card.png"
import Time from "/src/assets/24-hours.png"
import CadrLogo from "/src/assets/CardLogo.png"
import Call from "/src/assets/Call.png"
import { Link } from "react-router-dom"
import Button from "../Button"


const Footer = () => {
  return (
    <>
      <div className="bg-[#F6F6F7] pt-[60px] pb-[25px] selection:bg-[#b2bec3] selection:text-[#E53E3E]">
        <Container>
          {/* Footer Info Bar Start*/}
          <Flex className={'p-[25px] bg-white justify-between'}>
            {/* 1 */}
            <div className="flex items-center">
                <Images imgSrc={Box}/>
            <div className="pr-[65px] pl-[15px] border-[#E7E7E7] border-r">
              <h5 className="text-[#1A1A1A] font-semibold text-[18px]">Free shipping</h5>
              <p className="text-[#74787C]  text-sm">Free shipping on orders over $65.</p>
            </div>
            </div>
            {/* 2 */}
            <div className="flex items-center">
                <Images imgSrc={Car}/>
            <div className="pr-[65px] pl-[15px] border-[#E7E7E7] border-r">
              <h5 className="text-[#1A1A1A] font-semibold text-[18px]">Free Returns</h5>
              <p className="text-[#74787C]  text-sm">30-days free return policy</p>
            </div>
            </div>
            {/* 3 */}
            <div className="flex items-center">
                <Images imgSrc={Card}/>
            <div className="pr-[65px] pl-[15px] border-[#E7E7E7] border-r">
              <h5 className="text-[#1A1A1A] font-semibold text-[18px]">Secured Payments</h5>
              <p className="text-[#74787C]  text-sm">We accept all major credit cards</p>
            </div>
            </div>
            {/* 4 */}
            <div className="flex items-center">
                <Images imgSrc={Time}/>
            <div className="pr-[65px] pl-[15px] ">
              <h5 className="text-[#1A1A1A] font-semibold text-[18px]">Customer Service</h5>
              <p className="text-[#74787C]  text-sm">Top notch customer service</p>
            </div>
            </div>
            
          </Flex>
          {/* Footer Info Bar End*/}
          <Flex className={"py-[60px] justify-between items-start"}>
            {/* 1 */}
            <div className="">
              <h3 className="text-[#1A1A1A] text-[18px] font-medium pb-[25px]">About Store</h3>
              <div className="flex items-center pb-6">
                <div className=""><Images imgSrc={Call}/></div>
                <div className="pl-[15px]"> 
                <p className="text-[#74787C] text-sm ">Have Question? Call Us 24/7</p>
                <p className="text-[#E53E3E] font-semibold text-2xl">+258 3692 2569</p>
                </div>
              </div>
              
                <p className="text-[#74787C] text-[16px] pb-4">Monday - Friday: <span className="text-[#1A1A1A] text-[16px] font-medium">8:00am - 6:00pm</span> </p>
                <p className="text-[#74787C] text-[16px] pb-4">Saturday: <span className="text-[#1A1A1A] text-[16px] font-medium">8:00am - 6:00pm</span> </p>
                <p className="text-[#74787C] text-[16px] pb-4">Sunday: <span className="text-[#1A1A1A] text-[16px] font-medium">Service Close</span> </p>
              
            </div>
            {/* 2 */}
            <div className="">
              <h3 className="text-[#1A1A1A] text-[18px] font-medium pb-[25px]">Our Stores</h3>
              <ul>
                <Link to={'https://en.wikipedia.org/wiki/New_York_City'}><li className="text-[#74787C] text-[16px] pb-[18px] ">New York</li></Link>
                <Link to={'https://en.wikipedia.org/wiki/London'}><li className="text-[#74787C] text-[16px] pb-[18px] ">London SF</li></Link>
                <Link to={'https://en.wikipedia.org/wiki/Los_Angeles'}><li className="text-[#74787C] text-[16px] pb-[18px] ">Los Angeles</li></Link>
                <Link to={'https://en.wikipedia.org/wiki/Chicago'}><li className="text-[#74787C] text-[16px] pb-[18px] ">Chicago</li></Link>
                <Link to={'https://en.wikipedia.org/wiki/Las_Vegas'}><li className="text-[#74787C] text-[16px] pb-[18px] ">Las Vegas</li></Link>
              </ul>
            </div>
            {/* 3 */}
              <div className="">
                <h3 className="text-[#1A1A1A] text-[18px] font-medium pb-[25px]">Shop Categories</h3>
                <ul>
                  <Link to={''}><li className="text-[#74787C] text-[16px] pb-[18px] ">New Arrivals</li></Link>
                  <Link to={''}><li className="text-[#74787C] text-[16px] pb-[18px] ">Best Selling</li></Link>
                  <Link to={''}><li className="text-[#74787C] text-[16px] pb-[18px] ">Vegetables</li></Link>
                  <Link to={''}><li className="text-[#74787C] text-[16px] pb-[18px] ">Fresh Meat</li></Link>
                  <Link to={''}><li className="text-[#74787C] text-[16px] pb-[18px] ">Fresh Seafoods</li></Link>
                </ul>
              </div>
            {/* 4 */}
              <div className="">
                <h3 className="text-[#1A1A1A] text-[18px] font-medium pb-[25px]">Useful Links</h3>
                <ul>
                  <Link to={''}><li className="text-[#74787C] text-[16px] pb-[18px] ">Privacy Policy</li></Link>
                  <Link to={''}><li className="text-[#74787C] text-[16px] pb-[18px] ">Terms & Conditions</li></Link>
                  <Link to={''}><li className="text-[#74787C] text-[16px] pb-[18px] ">Contact Us</li></Link>
                  <Link to={''}><li className="text-[#74787C] text-[16px] pb-[18px] ">Latest News</li></Link>
                  <Link to={''}><li className="text-[#74787C] text-[16px] pb-[18px] ">Our Sitemaps</li></Link>
                </ul>
              </div>
            {/* 5 */}
            <div className="">
              <h3 className="text-[#1A1A1A] text-[18px] font-medium pb-[25px]">Our Newsletter</h3>
              <div className="w-[400px]">
                <p className="text-[#74787C] text-sm pb-6">Subscribe to the mailing list to receive updates one the new arrivals and other discounts</p>
              <div className="bg-white flex justify-between py-1.5 px-3 border border-[#E4E5EE] rounded-sm">
                  <input className="pr-15 pl-2 outline-0" type="email" name="" id="" placeholder="Your email address" />
                  <Button btnText={"Subscribe"} className={'text-white font-extrabold text-sm bg-[#E53E3E] uppercase '}/>
              </div>
                  <p className="text-[#74787C] text-sm pt-5">I would like to receive news and special offer</p>
              </div>
            </div>

          </Flex>
          {/* Footer Bottom */}
          <Flex className={'justify-between border-t border-[#DDDDDE] py-6'}>
            <div className="flex items-center">
              <h3 className="text-[#1A1A1A] text-[16px] font-medium pr-1">Payment System:</h3>
              <Images imgSrc={CadrLogo}/>
            </div>
            <div className="">
              <p className="text-[#1A1A1A] text-[16px]">Copyright 2024 ©<span className="text-[#1A1A1A] text-[16px] font-bold">Roiser</span>. All rights reserved.</p>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  )
}

export default Footer