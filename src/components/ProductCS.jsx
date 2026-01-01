import Images from "./Images"


const ProductCS = ({csImg , className , csText}) => {
    return (
        <>
        <div className={`p-2.5 text-center mx-3 overflow-hidden rounded-md ${className}`}>
            <Images imgSrc={csImg} className={'mx-auto w-full'}/>
            <p className="font-semibold text-base pt-5">{csText}</p>
        </div>
        </>
    )
}

export default ProductCS