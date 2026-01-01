

const Images = ({imgSrc , className , imgAlt}) => {
    return (
        <img className={`${className}`} src={imgSrc} alt={imgAlt} />
    )
}

export default Images