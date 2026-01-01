

const Badge = ({ badgesText , className}) => {
  return (
      <div className={` px-5 py-1 uppercase font-bold mb-4 w-fit rounded-sm shadow-sm ${className}`}
      style={{
            clipPath: "polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)",
            // clip-[polygon(0_0,100%_0,100%_100%,20px_100%,20px_20px)]
          }}>
        {badgesText}
      </div>
  )
}

export default Badge

