import Images from "../Images"
// import error2 from '../../assets/error2.gif'
import error from '../../assets/error.png'
import Button from "../Button"
import { Link } from "react-router-dom"


const Error = () => {
    return (
        <>
        <div className="relative">
            <Images imgSrc={error} className={'mx-auto mt-[100px]'}/>
            <div className="errorBtn text-center absolute left-[50%] -translate-x-[50%] -bottom-[110px] ">
                <Link to={"/"}>
                <Button btnText={"Back To Homepage"} className={"cursor-pointer text-[#E53E3E]! font-semibold! bg-transparent hover:bg-[#E53E3E]! border border-[#E53E3E]! hover:border-transparent hover:text-white! duration-300 px-[50px] py-[15px]"}/>
                </Link>
            </div>
        </div>
        </>
    )
}

export default Error