import { RiArrowRightSLine } from "react-icons/ri";
import Container from "../Container";
import Flex from "../Flex";

const Checkout = () => {
  return (
    <>
      <div className="bg-[url(/src/assets/shopGrid.png)] py-25 mb-25">
        <Container>
          <Flex className={"justify-between"}>
            <h3 className="text-[#1A1A1A] text-[60px] font-semibold">
              Checkout
            </h3>
            <Flex className={"gap-x-4"}>
              <p className="text-[#74787C] text-[18px]">Home</p>
              <RiArrowRightSLine className="text-[#74787C] text-xl" />
              <p className="text-[#1A1A1A] text-[18px] font-semibold">
                Checkout
              </p>
            </Flex>
          </Flex>
        </Container>
      </div>
      <Container className={"mb-25"}>
        <div className="border border-[#E9E9E9] bg-white rounded-md py-4.5 px-[30px] text-[#141414] text-[16px] font-medium cursor-pointer hover:text-white hover:bg-[#E53E3E] hover:border-[#E53E3E] duration-300">
          Returning customers? Click here to login
        </div>
        <div className="mt-[30px] mb-[70px] border border-[#E9E9E9] bg-white rounded-md py-4.5 px-[30px] text-[#141414] text-[16px] font-medium cursor-pointer hover:text-white hover:bg-[#E53E3E] hover:border-[#E53E3E] duration-300">
          Have a coupon? Click here to enter your code
        </div>
        <Flex className={"gap-x-[50px] items-start"}>
          <div className="">
            <h3 className="text-[#141414] text-3xl font-semibold mb-[31px]">
              Billing Details
            </h3>
            <p className="pb-4 text-[#141414] text-sm">Email Address*</p>
            <input
              type="text"
              className="outline-none border border-[#E8E8E8] rounded-[5px] px-8 py-5 w-[800px] mb-[30px]"
            />
            <Flex className={"gap-x-6  mb-[30px]"}>
              <div className="">
                <p className="pb-4 text-[#141414] text-sm">First Name*</p>
                <input
                  type="text"
                  className="outline-none border border-[#E8E8E8] rounded-[5px] px-8 py-5 w-[390px]"
                />
              </div>
              <div className="">
                <p className="pb-4 text-[#141414] text-sm">Last Name*</p>
                <input
                  type="text"
                  className="outline-none border border-[#E8E8E8] rounded-[5px] px-8 py-5 w-[390px]"
                />
              </div>
            </Flex>
            <p className="pb-4 text-[#141414] text-sm">
              Company Name (Optional)*
            </p>
            <input
              type="text"
              className="outline-none border border-[#E8E8E8] rounded-[5px] px-8 py-5 w-[800px] mb-[30px]"
            />
            <p className="pb-4 text-[#141414] text-sm">Country / Region*</p>
            <input
              type="text"
              placeholder="United States (US)"
              className="outline-none border border-[#E8E8E8] rounded-[5px] px-8 py-5 w-[800px] mb-[30px]"
            />
            <p className="pb-4 text-[#141414] text-sm">Street Address*</p>
            <input
              type="text"
              placeholder="House number and street number"
              className="outline-none border border-[#E8E8E8] rounded-[5px] px-8 py-5 w-[800px] mb-5"
            />
            <input
              type="text"
              placeholder="Apartment, suite, unit, etc. (optional)"
              className="outline-none border border-[#E8E8E8] rounded-[5px] px-8 py-5 w-[800px] mb-[30px]"
            />
            <p className="pb-4 text-[#141414] text-sm">Town / City*</p>
            <input
              type="text"
              className="outline-none border border-[#E8E8E8] rounded-[5px] px-8 py-5 w-[800px] mb-[30px]"
            />
            <p className="pb-4 text-[#141414] text-sm">State*</p>
            <select className="outline-none border border-[#E8E8E8] rounded-[5px] px-8 py-5 w-[800px] mb-[30px] text-[#74787C]">
              <option>California</option>
            </select>
            <p className="pb-4 text-[#141414] text-sm">Zip Code*</p>
            <input
              type="text"
              className="outline-none border border-[#E8E8E8] rounded-[5px] px-8 py-5 w-[800px] mb-[30px]"
            />
            <p className="pb-4 text-[#141414] text-sm">Phone*</p>
            <input
              type="text"
              className="outline-none border border-[#E8E8E8] rounded-[5px] px-8 py-5 w-[800px] mb-[30px]"
            />
            <p className="pb-4 text-[#141414] text-sm">Order Notes*</p>
            <textarea
              type="text"
              className="outline-none border border-[#E8E8E8] rounded-[5px] px-8 py-5 w-[800px] mb-[30px] h-[180px]"
            />
          </div>
          <div className="">
            <h3 className="text-[#141414] text-3xl font-semibold mb-7">
              Your Order
            </h3>
            <div className="bg-[#F6F6F7] rounded-md p-10 w-[586px]">
              <Flex
                className={
                  "justify-between border-b border-[#E8E8E8] pb-[25px] text-[#74787C] text-sm font-medium"
                }
              >
                <p>PRODUCTS</p>
                <p>PRICE</p>
              </Flex>
              <Flex
                className={"justify-between border-b border-[#E8E8E8] py-7.5 "}
              >
                <Flex className="gap-x-6">
                  <div className="p-10 bg-white rounded-[3px] "></div>
                  <p className="text-[#141414] text-[18px] font-medium">
                    Bang Color Samndle
                  </p>
                </Flex>
                <p className="text-[#141414] text-[18px] font-medium">
                  $500.00
                </p>
              </Flex>
              <Flex
                className={"justify-between border-b border-[#E8E8E8] py-7.5 "}
              >
                <Flex className="gap-x-6">
                  <div className="p-10 bg-white rounded-[3px] "></div>
                  <p className="text-[#141414] text-[18px] font-medium">
                    Chiness Loko Bag
                  </p>
                </Flex>
                <p className="text-[#141414] text-[18px] font-medium">
                  $500.00
                </p>
              </Flex>
              <Flex
                className={"justify-between border-b border-[#E8E8E8] py-7.5 "}
              >
                <Flex className="gap-x-6">
                  <div className="p-10 bg-white rounded-[3px] "></div>
                  <p className="text-[#141414] text-[18px] font-medium">
                    Modern Elegant Bag
                  </p>
                </Flex>
                <p className="text-[#141414] text-[18px] font-medium">
                  $500.00
                </p>
              </Flex>
              <Flex
                className={"justify-between border-b border-[#E8E8E8] py-7.5 "}
              >
                <p className="text-[#74787C] text-sm">Subtotal</p>
                <p className="text-[#141414] text-[18px] font-medium">
                  $500.00
                </p>
              </Flex>
              <Flex
                className={"justify-between border-b border-[#E8E8E8] py-7.5 "}
              >
                <p className="text-[#74787C] text-sm">Shipping</p>
                <Flex className="gap-x-2.5">
                  <p className="text-[#74787C] text-sm">Flat rate:</p>
                  <p className="text-[#141414] text-[18px] font-medium">
                    $50.00
                  </p>
                </Flex>
              </Flex>
              <Flex className={"justify-between pt-5 pb-[30px]"}>
                <p className="text-[#141414] text-sm font-semibold">
                  Total Price:
                </p>
                <p className="text-[#E53E3E] text-sm font-semibold">$550.00</p>
              </Flex>
              <Flex className={"gap-x-2.5 text-[#141414] text-sm "}>
                <input type="radio" />
                <p>Direct Bank Transfer</p>
              </Flex>
              <p className="w-[506px] text-sm text-[#74787C] pt-1.5 pb-5">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
              <Flex className={"gap-x-2.5 text-[#141414] text-sm "}>
                <input type="radio" />
                <p>Check Payments</p>
              </Flex>
              <Flex className={"gap-x-2.5 text-[#141414] text-sm py-2.5"}>
                <input type="radio" />
                <p>Cash On Delivery</p>
              </Flex>
              <Flex className={"gap-x-2.5 text-[#141414] text-sm pb-5"}>
                <input type="radio" />
                <p>Paypal</p>
              </Flex>
              <p className="text-sm text-[#74787C] mb-7">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our <></>
                <span className="text-[#E53E3E] cursor-pointer">
                  privacy policy.
                </span>
              </p>
              <Flex className={"gap-x-2 mb-[30px]"}>
                <input type="checkbox" />
                <p className="text-[#74787C]">
                  I have read and agree terms and conditions *
                </p>
              </Flex>
              <div className="bg-[#E53E3E] text-center text-white text-sm font-bold rounded-md w-[506px] cursor-pointer py-4">
                PLACE ORDER
              </div>
            </div>
          </div>
        </Flex>
      </Container>
    </>
  );
};

export default Checkout;
