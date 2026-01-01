

const Button = ({ btnText, className }) => {
    return (
        <button className={`py-5 px-[35px] rounded-[3px] cursor-pointer ${className}`}>{btnText}</button>
    )
}

export default Button