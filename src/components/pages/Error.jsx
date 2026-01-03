import Images from "../Images"
// import error2 from '../../assets/error2.gif'
import error from '../../assets/error.png'
import Button from "../Button"
import { Link } from "react-router-dom"


const Error = () => {
    return (
        <>
        <div className="relative">
            {/* <Images imgSrc={error2} className={'mx-auto mt-[100px]'}/> */}
            <Images imgSrc={error} className={'mx-auto mt-[100px]'}/>
            <div className="errorBtn text-center absolute left-[50%] -translate-x-[50%] -bottom-[110px] ">
                <Link to={"/"}>
                <Button btnText={"Back To Homepage"} className={"cursor-pointer text-[#E53E3E]! font-semibold! bg-transparent hover:bg-[#E53E3E]! border border-[#E53E3E]! hover:border-transparent hover:text-white! duration-300 px-[50px] py-[15px]"}/>
                </Link>
                {/* <Link to={"/"}>
                <Button btnText={"Back To Homepage"} className={"cursor-pointer text-[#39AD31]! font-semibold! bg-transparent hover:bg-[#39AD31]! border boder-1 border-[#39AD31]! hover:border-transparent hover:text-white! duration-300"}/>
                </Link> */}
            </div>
        </div>
        </>
    )
}

export default Error