import Images from "../Images"
import error from '../../assets/error.png'
import Button from "../Button"
import { Link } from "react-router-dom"

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-[60vh] px-4 py-12 md:py-24">
            {/* Image Container */}
            <Images 
                imgSrc={error} 
                className="w-[90%] sm:w-[75%] md:w-[60%] lg:w-[50%] max-w-3xl object-contain mb-10 md:mb-16"
            />
            {/* Button Container */}
            <Link to="/">
                <Button 
                    btnText="Back To Homepage" 
                    className="text-[#E53E3E]! font-semibold! bg-transparent hover:bg-[#E53E3E]! border border-[#E53E3E]! hover:border-transparent! hover:text-white! transition-all duration-300 px-8 md:px-12 py-3 md:py-4 text-sm md:text-base whitespace-nowrap"
                />
            </Link>
        </div>
    )
}

export default Error