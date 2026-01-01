import Images from "./Images"


const ProductCS = ({csImg , className , csText}) => {
    return (
        <>
        <div className="bg-[#F6F6F7] mx-3 hover:bg-[#E53E3E] text-black hover:text-white duration-300 overflow-hidden rounded-md p-2.5">
            <div className={` ${className} bg-white rounded-md`}>
                <Images imgSrc={csImg} className={'mx-auto w-full'}/>
            </div>
            <p className="font-semibold text-base mt-5 p-2.5 text-center h-15  overflow-hidden rounded-md">{csText}</p>
        </div>
        </>
    )
}

export default ProductCS