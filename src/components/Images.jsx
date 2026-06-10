

const Images = ({imgSrc , className , imgAlt}) => {
    return (
        <img className={`${className}`} src={imgSrc} alt={imgAlt} loading="lazy"/>
    )
}

export default Images