

const Button = ({ btnText, className }) => {
    return (
        <button className={`py-5 lg:px-[35px] px-5 rounded-[3px] cursor-pointer ${className}`}>{btnText}</button>
    )
}

export default Button