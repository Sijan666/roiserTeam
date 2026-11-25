import React from "react";

const Button = ({
  children,
  btnText,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const content = children || btnText;

  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-[3px] transition-all duration-300 cursor-pointer disabled:opacity-50 select-none outline-none";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
    xl: "px-9 py-4 text-lg",
  };

  const variantStyles = {
    primary:
      "bg-[#E53E3E] text-white hover:bg-[#c93232] active:bg-[#a82525] shadow-xs",
    secondary:
      "bg-black text-white hover:bg-gray-800 active:bg-gray-900",
    outline:
      "bg-transparent text-[#E53E3E] border border-[#E53E3E] hover:bg-[#E53E3E] hover:text-white",
    outlineDark:
      "bg-transparent text-[#1A1A1A] border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white",
    ghost:
      "bg-transparent text-[#1A1A1A] hover:bg-gray-100",
    light:
      "bg-white text-[#1A1A1A] hover:bg-gray-100 shadow-sm border border-gray-200",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
        variantStyles[variant] || variantStyles.primary
      } ${className}`}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
