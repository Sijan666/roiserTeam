import Container from "../Container";
import ProductCS from "../ProductCS";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import axios from "axios";

const CategorySlider = () => {
    let [allData, setAllData] = useState([]);

    useEffect(() => {
        async function alldatas() {
            try {
                let data = await axios.get("https://dummyjson.com/products");
                setAllData(data.data.products);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }
        alldatas();
    }, []);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

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
                
                <div className="slider-container">
                    <Slider {...settings}>
                        {allData.slice(0, 10).map((item) => (
                            <div key={item.id} className="px-2">
                                <ProductCS csImg={item.thumbnail} csText={item.title} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </Container>
        </div>
    );
};

export default CategorySlider;