

const Container = ({children , className}) => {
    return (
        <div className={`lg:w-[1440px] px-3 lg:px-0 mx-auto ${className}`}>{children}</div>
    )
}

export default Container