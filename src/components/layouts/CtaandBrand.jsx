import { Link } from "react-router-dom";
import Button from "../Button";
import Container from "../Container";

const CtaandBrand = () => {
    return (
        <div className="bg-[#E53E3E] items-center p-15 lg:p-[100px]">
            <Container className={"text-center"}>
                <p className="text-sm font-Jost font-medium text-white pb-9">
                Spring summer 22 women’s collection
                </p>
                <h1 className="lg:px-[450px] text-[30px] lg:text-[60px] font-semibold font-Jost lg:leading-[70px] text-white">
                -15% Off Discount All Here
                </h1>
                <Link to={"/women"}>
                <Button
                    btnText={"View Collections"}
                    className={
                    "text-[#E53E3E] text-[16px] font-semibold font-Jost bg-white px-[35px] py-5 mt-[60px] duration-500 hover:bg-transparent hover:text-white hover:border-white border-2"
                    }
                />
                </Link>
            </Container>
        </div>
    );
};

export default CtaandBrand;
