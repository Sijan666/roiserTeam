import { RiArrowRightSLine } from "react-icons/ri";
import Container from "../Container";
import Flex from "../Flex";

const Checkout = () => {
  return (
    <>
      <div className="bg-[url(/src/assets/shopGrid.png)] bg-cover bg-center py-12 md:py-25 mb-12 md:mb-25">
        <Container className={'px-4 lg:px-0'}>
          <Flex className={"flex-col md:flex-row justify-between items-center md:items-start gap-y-4 md:gap-y-0"}>
            <h3 className="text-[#1A1A1A] text-4xl md:text-[60px] font-semibold text-center md:text-left">
              Checkout
            </h3>
            <Flex className={"gap-x-2 md:gap-x-4 items-center"}>
              <p className="text-[#74787C] text-[14px] md:text-[18px]">Home</p>
              <RiArrowRightSLine className="text-[#74787C] text-lg md:text-xl" />
              <p className="text-[#1A1A1A] text-[14px] md:text-[18px] font-semibold">
                Checkout
              </p>
            </Flex>
          </Flex>
        </Container>
      </div>
      <div className="lowerPart">
        <Container className={"mb-12 md:mb-25 px-4 lg:px-0"}>
          <div className="border border-[#E9E9E9] bg-white rounded-md py-3 md:py-4.5 px-4 md:px-[30px] text-[#141414] text-sm md:text-[16px] font-medium cursor-pointer hover:text-white hover:bg-[#E53E3E] hover:border-[#E53E3E] duration-300 text-center sm:text-left">
            Returning customers? Click here to login
          </div>
          <div className="mt-4 md:mt-[30px] mb-10 md:mb-[70px] border border-[#E9E9E9] bg-white rounded-md py-3 md:py-4.5 px-4 md:px-[30px] text-[#141414] text-sm md:text-[16px] font-medium cursor-pointer hover:text-white hover:bg-[#E53E3E] hover:border-[#E53E3E] duration-300 text-center sm:text-left">
            Have a coupon? Click here to enter your code
          </div>
          <Flex className={"flex-col lg:flex-row gap-y-12 lg:gap-y-0 lg:gap-x-[50px] items-start"}>
            {/* Billing Details (Left Column) */}
            <div className="w-full lg:flex-1">
              <h3 className="text-[#141414] text-2xl md:text-3xl font-semibold mb-6 md:mb-[31px]">
                Billing Details
              </h3>
              <p className="pb-3 md:pb-4 text-[#141414] text-sm">Email Address*</p>
              <input
                type="text"
                className="outline-none border border-[#E8E8E8] rounded-[5px] px-4 md:px-8 py-3 md:py-5 w-full mb-6 md:mb-[30px] focus:border-[#141414] transition-colors"
              />
              <Flex className={"flex-col sm:flex-row gap-y-6 sm:gap-y-0 sm:gap-x-6 mb-6 md:mb-[30px] w-full"}>
                <div className="w-full">
                  <p className="pb-3 md:pb-4 text-[#141414] text-sm">First Name*</p>
                  <input
                    type="text"
                    className="outline-none border border-[#E8E8E8] rounded-[5px] px-4 md:px-8 py-3 md:py-5 w-full focus:border-[#141414] transition-colors"
                  />
                </div>
                <div className="w-full">
                  <p className="pb-3 md:pb-4 text-[#141414] text-sm">Last Name*</p>
                  <input
                    type="text"
                    className="outline-none border border-[#E8E8E8] rounded-[5px] px-4 md:px-8 py-3 md:py-5 w-full focus:border-[#141414] transition-colors"
                  />
                </div>
              </Flex>
              <p className="pb-3 md:pb-4 text-[#141414] text-sm">
                Company Name (Optional)*
              </p>
              <input
                type="text"
                className="outline-none border border-[#E8E8E8] rounded-[5px] px-4 md:px-8 py-3 md:py-5 w-full mb-6 md:mb-[30px] focus:border-[#141414] transition-colors"
              />
              <p className="pb-3 md:pb-4 text-[#141414] text-sm">Country / Region*</p>
              <input
                type="text"
                placeholder="United States (US)"
                className="outline-none border border-[#E8E8E8] rounded-[5px] px-4 md:px-8 py-3 md:py-5 w-full mb-6 md:mb-[30px] focus:border-[#141414] transition-colors"
              />
              <p className="pb-3 md:pb-4 text-[#141414] text-sm">Street Address*</p>
              <input
                type="text"
                placeholder="House number and street number"
                className="outline-none border border-[#E8E8E8] rounded-[5px] px-4 md:px-8 py-3 md:py-5 w-full mb-4 md:mb-5 focus:border-[#141414] transition-colors"
              />
              <input
                type="text"
                placeholder="Apartment, suite, unit, etc. (optional)"
                className="outline-none border border-[#E8E8E8] rounded-[5px] px-4 md:px-8 py-3 md:py-5 w-full mb-6 md:mb-[30px] focus:border-[#141414] transition-colors"
              />
              <p className="pb-3 md:pb-4 text-[#141414] text-sm">Town / City*</p>
              <input
                type="text"
                className="outline-none border border-[#E8E8E8] rounded-[5px] px-4 md:px-8 py-3 md:py-5 w-full mb-6 md:mb-[30px] focus:border-[#141414] transition-colors"
              />
              <p className="pb-3 md:pb-4 text-[#141414] text-sm">State*</p>
              <select className="outline-none border border-[#E8E8E8] rounded-[5px] px-4 md:px-8 py-3 md:py-5 w-full mb-6 md:mb-[30px] text-[#74787C] bg-white focus:border-[#141414] transition-colors cursor-pointer">
                <option>California</option>
              </select>
              <p className="pb-3 md:pb-4 text-[#141414] text-sm">Zip Code*</p>
              <input
                type="text"
                className="outline-none border border-[#E8E8E8] rounded-[5px] px-4 md:px-8 py-3 md:py-5 w-full mb-6 md:mb-[30px] focus:border-[#141414] transition-colors"
              />
              <p className="pb-3 md:pb-4 text-[#141414] text-sm">Phone*</p>
              <input
                type="text"
                className="outline-none border border-[#E8E8E8] rounded-[5px] px-4 md:px-8 py-3 md:py-5 w-full mb-6 md:mb-[30px] focus:border-[#141414] transition-colors"
              />
              <p className="pb-3 md:pb-4 text-[#141414] text-sm">Order Notes*</p>
              <textarea
                className="outline-none border border-[#E8E8E8] rounded-[5px] px-4 md:px-8 py-3 md:py-5 w-full mb-6 md:mb-[30px] h-[120px] md:h-[180px] resize-none focus:border-[#141414] transition-colors"
              />
            </div>
            {/* Your Order (Right Column) */}
            <div className="w-full lg:w-[45%] xl:w-[40%]">
              <h3 className="text-[#141414] text-2xl md:text-3xl font-semibold mb-6 md:mb-7">
                Your Order
              </h3>
              <div className="bg-[#F6F6F7] rounded-md p-5 md:p-10 w-full">
                <Flex className={"justify-between border-b border-[#E8E8E8] pb-4 md:pb-[25px] text-[#74787C] text-sm font-medium"}>
                  <p>PRODUCTS</p>
                  <p>PRICE</p>
                </Flex>
                <Flex className={"justify-between items-center border-b border-[#E8E8E8] py-5 md:py-7.5 gap-x-4"}>
                  <Flex className="gap-x-4 md:gap-x-6 items-center">
                    <div className="p-6 md:p-10 bg-white rounded-[3px] shrink-0"></div>
                    <p className="text-[#141414] text-[15px] md:text-[18px] font-medium leading-tight">
                      Bang Color Samndle
                    </p>
                  </Flex>
                  <p className="text-[#141414] text-[15px] md:text-[18px] font-medium shrink-0">
                    $500.00
                  </p>
                </Flex>
                <Flex className={"justify-between items-center border-b border-[#E8E8E8] py-5 md:py-7.5 gap-x-4"}>
                  <Flex className="gap-x-4 md:gap-x-6 items-center">
                    <div className="p-6 md:p-10 bg-white rounded-[3px] shrink-0"></div>
                    <p className="text-[#141414] text-[15px] md:text-[18px] font-medium leading-tight">
                      Chiness Loko Bag
                    </p>
                  </Flex>
                  <p className="text-[#141414] text-[15px] md:text-[18px] font-medium shrink-0">
                    $500.00
                  </p>
                </Flex>
                <Flex className={"justify-between items-center border-b border-[#E8E8E8] py-5 md:py-7.5 gap-x-4"}>
                  <Flex className="gap-x-4 md:gap-x-6 items-center">
                    <div className="p-6 md:p-10 bg-white rounded-[3px] shrink-0"></div>
                    <p className="text-[#141414] text-[15px] md:text-[18px] font-medium leading-tight">
                      Modern Elegant Bag
                    </p>
                  </Flex>
                  <p className="text-[#141414] text-[15px] md:text-[18px] font-medium shrink-0">
                    $500.00
                  </p>
                </Flex>
                <Flex className={"justify-between items-center border-b border-[#E8E8E8] py-5 md:py-7.5"}>
                  <p className="text-[#74787C] text-sm">Subtotal</p>
                  <p className="text-[#141414] text-[15px] md:text-[18px] font-medium">
                    $500.00
                  </p>
                </Flex>
                <Flex className={"justify-between items-center border-b border-[#E8E8E8] py-5 md:py-7.5"}>
                  <p className="text-[#74787C] text-sm">Shipping</p>
                  <Flex className="gap-x-2 md:gap-x-2.5 items-center">
                    <p className="text-[#74787C] text-sm">Flat rate:</p>
                    <p className="text-[#141414] text-[15px] md:text-[18px] font-medium">
                      $50.00
                    </p>
                  </Flex>
                </Flex>
                <Flex className={"justify-between items-center pt-5 pb-6 md:pb-[30px]"}>
                  <p className="text-[#141414] text-sm font-semibold">
                    Total Price:
                  </p>
                  <p className="text-[#E53E3E] text-base md:text-lg font-semibold">$550.00</p>
                </Flex>
                <Flex className={"gap-x-2.5 text-[#141414] text-sm items-center cursor-pointer"}>
                  <input type="radio" name="payment_method" className="cursor-pointer" />
                  <p>Direct Bank Transfer</p>
                </Flex>
                <p className="w-full text-xs md:text-sm text-[#74787C] pt-2 pb-5 leading-relaxed">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
                <Flex className={"gap-x-2.5 text-[#141414] text-sm items-center cursor-pointer"}>
                  <input type="radio" name="payment_method" className="cursor-pointer" />
                  <p>Check Payments</p>
                </Flex>
                <Flex className={"gap-x-2.5 text-[#141414] text-sm py-3 md:py-2.5 items-center cursor-pointer"}>
                  <input type="radio" name="payment_method" className="cursor-pointer" />
                  <p>Cash On Delivery</p>
                </Flex>
                <Flex className={"gap-x-2.5 text-[#141414] text-sm pb-5 items-center cursor-pointer"}>
                  <input type="radio" name="payment_method" className="cursor-pointer" />
                  <p>Paypal</p>
                </Flex>
                <p className="text-xs md:text-sm text-[#74787C] mb-6 md:mb-7 leading-relaxed">
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other purposes
                  described in our{" "}
                  <span className="text-[#E53E3E] cursor-pointer hover:underline">
                    privacy policy.
                  </span>
                </p>
                <Flex className={"gap-x-2 mb-6 md:mb-[30px] items-start md:items-center cursor-pointer"}>
                  <input type="checkbox" className="mt-1 md:mt-0 cursor-pointer shrink-0" />
                  <p className="text-[#74787C] text-xs md:text-sm leading-tight">
                    I have read and agree terms and conditions *
                  </p>
                </Flex>
                <div className="bg-[#E53E3E] hover:bg-[#c93232] transition-colors text-center text-white text-sm font-bold rounded-md w-full cursor-pointer py-3 md:py-4">
                  PLACE ORDER
                </div>
              </div>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Checkout;