import React from "react";

const Badge = ({ children, badgeText, variant = "primary", className = "" }) => {
  const content = children || badgeText;
  if (!content) return null;

  const variants = {
    primary: "bg-[#E53E3E] text-white",
    new: "bg-emerald-600 text-white",
    hot: "bg-amber-500 text-white",
    sale: "bg-[#E53E3E] text-white",
    discount: "bg-[#E53E3E] text-white",
    outline: "border border-[#E53E3E] text-[#E53E3E] bg-white",
    neutral: "bg-gray-100 text-gray-800",
  };

  const selectedVariant = variants[variant] || variants.primary;

  return (
    <span
      className={`inline-flex items-center justify-center font-bold text-xs uppercase px-2.5 py-1 rounded-sm tracking-wide shadow-xs ${selectedVariant} ${className}`}
    >
      {content}
    </span>
  );
};

export default Badge;
