import React from "react";

const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-12 h-12 border-4 border-[#E53E3E]/20 border-t-[#E53E3E] rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
