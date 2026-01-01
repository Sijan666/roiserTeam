import Button from "../Button";
import Container from "../Container";
import Flex from "../Flex";
import { RiDiscountPercentLine } from "react-icons/ri";
import Products from "../Products";
import productImg from "/src/assets/product.png";
import { Link } from "react-router-dom";
// import Badge from "../Badge";


const Deal = () => {
  return (
    <div className="py-[100px]">
      <Container>
        <div className="bg-[url('/src/assets/dealbg.png')] bg-center bg-cover bg-no-repeat py-[60px] pl-[100px]">
          <Flex className={"items-start gap-x-[134px]"}>
            <div className="pt-[45px]">
              <h2 className="font-semibold text-[40px] text-[#1A1A1A] uppercase">
                Deal Of the days
              </h2>
              <p className="font-normal text-base text-[#74787C] w-[438px] pt-2.5 pb-[30px]">
                Elegant pink origami design three type of dimensional view and
                decoration co Great for adding a decorative...
              </p>
              <Flex className={"gap-x-[17px]"}>
                <div className="w-[55px] h-[55px] rounded-[50%] bg-[#E53E3E] relative ">
                  <RiDiscountPercentLine
                    className={
                      "text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                    }
                  />
                </div>
                <p className="w-[280px]">
                  Limited Time offer. THe Deal will expire one august 18, 2024{" "}
                </p>
              </Flex>
              <Button
                className={
                  "bg-[#E53E3E] font-semibold text-base text-white mt-[60px] border border-[#E53E3E] tracking-[1px] hover:bg-white hover:text-[#E53E3E] hover:border-[#E8E8E8] duration-500"
                }
                btnText={"View All Collections"}
              />
            </div>
            <div className="">
              <Flex className={"gap-x-6"}>
                <Link to={"/"}>
                  <Products
                    badgeText={"New"}
                    productImg={productImg}
                    productsType={"Levi’s Cotton"}
                    productsName={"D’valo Office Cotton Suite"}
                    reviews={"(15 Reviews)"}
                    price={"$893.00"}
                  />
                </Link>
                <Link to={"/"}>
                  <Products
                    badgeText={"New"}
                    productImg={productImg}
                    productsType={"Denim’s Cotton"}
                    productsName={"D’valo Office Cotton Suite"}
                    reviews={"(20 Reviews)"}
                    price={"$900.00"}
                  />
                </Link>
              </Flex>
            </div>
          </Flex>
        </div>
      </Container>
    </div>
  );
};

export default Deal;
