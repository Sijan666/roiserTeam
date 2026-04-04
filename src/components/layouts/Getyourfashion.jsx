import Container from "../Container";
import Product from "../Product";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";
import { useEffect, useState } from "react";
import axios from "axios";

const Getyourfashion = () => {
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
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
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
                <div className="pb-7.5 border-b border-b-[#E9E9E9] mb-10">
                    <h3 className="font-Jost font-semibold text-4xl text-[#1A1A1A] mb-4.5">
                        GET YOUR FASHION STYLE
                    </h3>
                    <h6 className="font-Jost font-normal text-[16px] text-[#74787C]">
                        29 categories belonging to a total 15,892 products
                    </h6>
                </div>
                
                <div className="slider-container">
                    <Slider {...settings}>
                        {allData.slice(5, 15).map((item) => (
                            <div key={item.id} className="px-2">
                                <Product
                                    prductImg={item.thumbnail}
                                    productTitle={item.title}
                                    productPrice={item.price}
                                    productType={item.brand}
                                    reviewStars={item.rating}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </Container>
        </div>
    );
};

export default Getyourfashion;