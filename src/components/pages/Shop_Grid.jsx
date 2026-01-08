import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { RiArrowRightSLine } from "react-icons/ri";
import Product from "../Product";
import Proimg from "/src/assets/Car.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Shop_Grid = () => {
  return (
    <>
      <div className="bg-[url(/src/assets/shopGrid.png)] py-25">
        <Container>
          <Flex className={"justify-between"}>
            <h3 className="text-[#1A1A1A] text-[60px] font-semibold">
              Shop Grid
            </h3>
            <Flex className={"gap-x-4"}>
              <p className="text-[#74787C] text-[18px]">Home</p>
              <RiArrowRightSLine className="text-[#74787C] text-xl" />
              <p className="text-[#1A1A1A] text-[18px] font-semibold">
                Shop Grid
              </p>
            </Flex>
          </Flex>
        </Container>
      </div>
      <Container className={"my-25"}>
        <Flex className={"flex-wrap gap-y-6"}>
          <Product
            prductImg={Proimg}
            productType={"Levi’s Cotton"}
            productTitle={"Monica Diara Party Dress"}
            productPrice={"$893.00"}
            badgeText={"New"}
          />
          <Product
            prductImg={Proimg}
            productType={"Levi’s Cotton"}
            productTitle={"Monica Diara Party Dress"}
            productPrice={"$893.00"}
          />
          <Product
            prductImg={Proimg}
            productType={"Levi’s Cotton"}
            productTitle={"Monica Diara Party Dress"}
            productPrice={"$893.00"}
          />
          <Product
            prductImg={Proimg}
            productType={"Levi’s Cotton"}
            productTitle={"Monica Diara Party Dress"}
            productPrice={"$893.00"}
          />
          <Product
            prductImg={Proimg}
            productType={"Levi’s Cotton"}
            productTitle={"Monica Diara Party Dress"}
            productPrice={"$893.00"}
          />
          <Product
            prductImg={Proimg}
            productType={"Levi’s Cotton"}
            productTitle={"Monica Diara Party Dress"}
            productPrice={"$893.00"}
          />
          <Product
            prductImg={Proimg}
            productType={"Levi’s Cotton"}
            productTitle={"Monica Diara Party Dress"}
            productPrice={"$893.00"}
          />
          <Product
            prductImg={Proimg}
            productType={"Levi’s Cotton"}
            productTitle={"Monica Diara Party Dress"}
            productPrice={"$893.00"}
          />
        </Flex>
        <Flex className="gap-x-[7px] mt-[50px] justify-center">
          <div className="bg-[#E53E3E] text-white rounded-sm py-4.5 px-5 text-sm font-semibold">
            01
          </div>
          <div className="bg-[#F6F6F7] text-[#1A1A1A] rounded-sm py-4.5 px-5 text-sm font-semibold">
            02
          </div>
          <div className="bg-[#F6F6F7] text-[#1A1A1A] rounded-sm py-4.5 px-5 text-sm font-semibold">
            03
          </div>
          <div className="bg-[#F6F6F7] text-[#1A1A1A] rounded-sm py-4.5 px-5 text-sm font-semibold">
            04
          </div>
          <div className="bg-[#F6F6F7] text-[#1A1A1A] rounded-sm py-4.5 px-5 text-xl font-semibold">
            <MdKeyboardDoubleArrowRight />
          </div>
        </Flex>
      </Container>
    </>
  );
};

export default Shop_Grid;
