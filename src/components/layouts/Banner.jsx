import { Link } from "react-router-dom";
import Button from "../Button";
import Container from "../Container";
import Images from "../Images";
import banner1 from '../../assets/banner1.png'
import banner2 from '../../assets/banner2.png'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";


const Banner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows : false ,
    autoplay : true ,
    autoplaySpeed : 3000,
  };
  return (
    <>
    <div className="relative z-1">
        <Slider {...settings} >
          <div className="outline-none">
            <Images imgSrc={banner1} className={'w-full'}/>
          </div>
          <div className="outline-none">
            <Images imgSrc={banner2} className={'w-full'}/>
          </div>
        </Slider>
    </div>
    </>
  );
};

export default Banner;
