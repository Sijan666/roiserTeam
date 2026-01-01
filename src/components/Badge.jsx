import React from "react";

const Badge = ({ badgeText, className }) => {
    return (
        <p className={`py-1 px-3 rounded-[100px] bg-[#E53E3E] text-white font-bold ${className}`}>
        {badgeText}
        </p>
    );
};

export default Badge;