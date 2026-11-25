import React from "react";
import Button from "./common/Button";

const ButtonforCC = ({ btnTexts, children, className = "", onClick }) => {
  return (
    <Button
      variant="ghost"
      onClick={onClick}
      className={`text-left justify-start p-0 hover:text-[#E53E3E] transition-colors ${className}`}
    >
      {children || btnTexts}
    </Button>
  );
};

export default ButtonforCC;
