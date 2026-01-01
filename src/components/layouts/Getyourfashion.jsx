import Container from "../Container";
import Flex from "../Flex";
import Product from "../Product";
// import productImg from "/src/assets/productImg.png";
import { LiaStarSolid } from "react-icons/lia";
import { IoStarHalfOutline } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";
import { useEffect, useState } from "react";
import axios from "axios";
// import "slick-carousel/slick/slick-theme.css";

const Getyourfashion = () => {
var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};

    let [allData, setAllData] = useState([]);
    useEffect(() => {
        async function alldatas() {
        let data = await axios.get("https://dummyjson.com/products");
        setAllData(data.data.products);
        }
        alldatas();
    });
    
  return (
    <div className="py-25">
      <Container>
        <div className="pb-7.5 border-b border-b-[#E9E9E9] mb-10">
          <h3 className="font-Jost font-semibold text-4xl text-[#1A1A1A] mb-4.5">
            GET YOUR FASHION STYLE
          </h3>
          <h6 className="font-Jost font-normal text-[16px] text-[#74787C]">
            29 categories belonging to a total 15,892 products
          </h6>
        </div>
        <div className="">
          <div className="">
            <Slider {...settings}>
                {allData.slice(0,10).map((item)=>(
                    <Product
                    prductImg={item.thumbnail}
                    productTitle={item.title}
                    productPrice={item.price}
                    productType={item.brand}
                    reviewStars={item.rating}
                    />
                ))}
              {/* <div className="w-1/4 -mx-3">
                <Product
                  badgeText={"New"}
                  prductImg={productImg}
                  productType={"Ivory Weave"}
                  productTitle={"Onima Black Flower Sandal"}
                  reviewStars={
                    <>
                      <LiaStarSolid />
                      <LiaStarSolid />
                      <LiaStarSolid />
                      <IoStarHalfOutline />
                    </>
                  }
                  reviewNo={"(20 Reviews)"}
                  productPrice={"$443.00"}
                />
              </div>
              <div className="w-1/4 -mx-3">
                <Product
                  badgeText={"New"}
                  prductImg={productImg}
                  productType={"Urban Fiber"}
                  productTitle={"Poncho Sweater international"}
                  reviewStars={
                    <>
                      <LiaStarSolid />
                      <LiaStarSolid />
                      <LiaStarSolid />
                      <LiaStarSolid />
                    </>
                  }
                  reviewNo={"(23 Reviews)"}
                  productPrice={"$203.00"}
                />
              </div>
              <div className="w-1/4 -mx-3">
                <Product
                  badgeText={"New"}
                  prductImg={productImg}
                  productType={"Wearloom"}
                  productTitle={"D’valo Office Cotton Suite"}
                  reviewStars={
                    <>
                      <LiaStarSolid />
                      <LiaStarSolid />
                      <LiaStarSolid />
                      <LiaStarSolid />
                      <LiaStarSolid />
                    </>
                  }
                  reviewNo={"(15 Reviews)"}
                  productPrice={"$300.00"}
                />
              </div>
              <div className="w-1/4 -mx-3">
                <Product
                  badgeText={"New"}
                  prductImg={productImg}
                  productType={"Knitloom"}
                  productTitle={"Lightweight Knit Cape"}
                  reviewStars={
                    <>
                      <LiaStarSolid />
                      <LiaStarSolid />
                      <IoStarHalfOutline />
                    </>
                  }
                  reviewNo={"(10 Reviews)"}
                  productPrice={"$360.00"}
                />
              </div> */}
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Getyourfashion;
