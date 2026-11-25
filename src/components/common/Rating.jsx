import React from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const Rating = ({ value = 5, reviewCount, showCount = true, size = "sm", className = "" }) => {
  const numericValue = Math.min(5, Math.max(0, Number(value) || 0));
  const fullStars = Math.floor(numericValue);
  const hasHalfStar = numericValue - fullStars >= 0.5;
  const emptyStars = Math.max(0, 5 - fullStars - (hasHalfStar ? 1 : 0));

  const sizeClasses = {
    xs: "text-[11px]",
    sm: "text-[13px]",
    md: "text-[16px]",
    lg: "text-[20px]",
  };

  const starSize = sizeClasses[size] || sizeClasses.sm;

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className={`flex text-amber-400 ${starSize}`}>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} />
        ))}
        {hasHalfStar && <FaStarHalfAlt key="half" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} className="text-gray-300" />
        ))}
      </div>
      {showCount && reviewCount !== undefined && (
        <span className="text-xs text-[#74787C] font-normal ml-1">
          ({reviewCount})
        </span>
      )}
    </div>
  );
};

export default Rating;
