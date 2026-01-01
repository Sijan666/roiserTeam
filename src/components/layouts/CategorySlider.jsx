import Container from "../Container";
import ProductCS from "../ProductCS";
// import whiteBg from '../../assets/whiteBg.png'
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import axios from "axios";


const CategorySlider = () => {
var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
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
                <div className="pb-7.5 border-b border-b-[#E9E9E9] mb-3">
                    <h3 className="font-Jost font-semibold text-4xl text-[#1A1A1A] mb-4.5">
                        Best for your categories
                    </h3>
                    <h6 className="font-Jost font-normal text-[16px] text-[#74787C]">
                        29 categories belonging to a total 15,892 products
                    </h6>
                </div>
                {/* <div className="flex gap-x-4 items-center"> */}
                <Slider {...settings}>
                    {allData.slice(0,10).map((item)=>(
                        <div className="w-1/4">
                            <ProductCS csImg={item.thumbnail} csText={item.title}/>
                        </div>
                        ))} 
                    
                </Slider>
                {/* </div> */}
            </Container>
        </div>
    );
};

export default CategorySlider;
