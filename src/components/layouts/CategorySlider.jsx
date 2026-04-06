import Container from "../Container";
import ProductCS from "../ProductCS";
import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CategorySlider = () => {
    let [allData, setAllData] = useState([]);
    const [prevBtn, setPrevBtn] = useState(null);
    const [nextBtn, setNextBtn] = useState(null);

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

    return (
        <div className="py-10 md:py-16 lg:py-25">
            <Container>
                <div className="pb-4 md:pb-7.5 border-b border-b-[#E9E9E9] mb-6 md:mb-10">
                    <h3 className="font-Jost font-semibold text-2xl md:text-3xl lg:text-4xl text-[#1A1A1A] mb-2 md:mb-4.5 text-center md:text-left">
                        Best for your categories
                    </h3>
                    <h6 className="font-Jost font-normal text-sm md:text-[16px] text-[#74787C] text-center md:text-left">
                        29 categories belonging to a total 15,892 products
                    </h6>
                </div>
                
                <div className="slider-container relative px-8"> 
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true} 
                        navigation={{
                            prevEl: prevBtn,
                            nextEl: nextBtn,
                        }}
                        breakpoints={{
                            480: { slidesPerView: 2 },
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                            1280: { slidesPerView: 5 },
                            1440: { slidesPerView: 6 }
                        }}
                    >
                        {allData.slice(0, 10).map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="px-2">
                                    <ProductCS csImg={item.thumbnail} csText={item.title} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* prev arrow */}
                    <button 
                        ref={(node) => setPrevBtn(node)} 
                        className="absolute top-1/2 left-0 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 transition text-xl text-black cursor-pointer"
                    >
                        &#8592;
                    </button>

                    {/* next arrow */}
                    <button 
                        ref={(node) => setNextBtn(node)} 
                        className="absolute top-1/2 right-0 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 transition text-xl text-black cursor-pointer"
                    >
                        &#8594;
                    </button>
                </div>
            </Container>
        </div>
    );
};

export default CategorySlider;