import Container from "../Container";
import ProductCS from "../ProductCS";
import whiteBg from '../../assets/whiteBg.png'
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";
import Slider from "react-slick";


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
                    <div className="w-1/6 rounded-md overflow-hidden ">
                        <ProductCS className={'hover:bg-[#E53E3E] bg-[#F6F6F7] text-black hover:text-white duration-300'} csImg={whiteBg} csText={'Women Wear'}/>
                    </div>
                    <div className="w-1/6 rounded-md overflow-hidden ">
                        <ProductCS className={'hover:bg-[#E53E3E] bg-[#F6F6F7] text-black hover:text-white duration-300'} csImg={whiteBg} csText={'Shoes Collection'}/>
                    </div>
                    <div className="w-1/6 rounded-md overflow-hidden ">
                        <ProductCS className={'hover:bg-[#E53E3E] bg-[#F6F6F7] text-black hover:text-white duration-300'} csImg={whiteBg} csText={'Bag Collection'}/>
                    </div>
                    <div className="w-1/6 rounded-md overflow-hidden ">
                        <ProductCS className={'hover:bg-[#E53E3E] bg-[#F6F6F7] text-black hover:text-white duration-300'} csImg={whiteBg} csText={'Watch Hare'}/>
                    </div>
                    <div className="w-1/6 rounded-md overflow-hidden ">
                        <ProductCS className={'hover:bg-[#E53E3E] bg-[#F6F6F7] text-black hover:text-white duration-300'} csImg={whiteBg} csText={'Accessories'}/>
                    </div>
                    <div className="w-1/6 rounded-md overflow-hidden ">
                        <ProductCS className={'hover:bg-[#E53E3E] bg-[#F6F6F7] text-black hover:text-white duration-300'} csImg={whiteBg} csText={'Sunglasses'}/>
                    </div>
                    <div className="w-1/6 rounded-md overflow-hidden ">
                        <ProductCS className={'hover:bg-[#E53E3E] bg-[#F6F6F7] text-black hover:text-white duration-300'} csImg={whiteBg} csText={'Women Wear'}/>
                    </div>
                    <div className="w-1/6 rounded-md overflow-hidden ">
                        <ProductCS className={'hover:bg-[#E53E3E] bg-[#F6F6F7] text-black hover:text-white duration-300'} csImg={whiteBg} csText={'Shoes Collection'}/>
                    </div>
                    <div className="w-1/6 rounded-md overflow-hidden ">
                        <ProductCS className={'hover:bg-[#E53E3E] bg-[#F6F6F7] text-black hover:text-white duration-300'} csImg={whiteBg} csText={'Bag Collection'}/>
                    </div>
                </Slider>
                {/* </div> */}
            </Container>
        </div>
    );
};

export default CategorySlider;
