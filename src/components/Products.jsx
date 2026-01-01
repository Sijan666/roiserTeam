
import Badge from "./Badge";
import Flex from "./Flex";
import Images from "./Images";
import { FaStar } from "react-icons/fa";

const Products = ({
  badgeText,
  productImg,
  productsType,
  productsName,
  reviews,
  price,
}) => {
  return (
    <div className="relative">
      <Badge
        className={"w-[50px] text-xs absolute top-7 left-7"}
        badgeText={badgeText}
      />
      <Images imgSrc={productImg} />
      <div className="w-[342px] bg-white rounded-b-md py-[30px] pl-[30px] pr-[75px] ">
        <p className="font-normal text-xs text-[#74787C] uppercase pb-1">
          {productsType}
        </p>
        <h3 className="font-semibold text-xl text-[#1A1A1A]">{productsName}</h3>
        <Flex className={"pt-1.5 pb-3"}>
          <div className="flex text-[#E53E3E] pr-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="font-normal text-sm text-[#74787C]">{reviews}</p>
        </Flex>
        <h4 className="font-semibold text-base text-[#1A1A1A]">{price}</h4>
      </div>
    </div>
  );
};

export default Products;
