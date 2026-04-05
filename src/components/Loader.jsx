import React from 'react';

const Loader = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#FAFAFA]">
            <style>{`
                .draw-cart {
                    stroke-dasharray: 100;
                    stroke-dashoffset: 100;
                    animation: drawPath 2.5s ease-in-out infinite alternate;
                }
                @keyframes drawPath {
                    0% {
                        stroke-dashoffset: 100;
                        fill: transparent;
                    }
                    60% {
                        stroke-dashoffset: 0;
                        fill: transparent;
                    }
                    100% {
                        stroke-dashoffset: 0;
                        fill: #DC2626; /* আপনার ব্র্যান্ডের লাল রঙ */
                    }
                }
            `}</style>
            
            <div className="w-20 h-20">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#DC2626" 
                    strokeWidth="0.8" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="draw-cart w-full h-full"
                >
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
            </div>
            
            <h2 className="mt-6 text-[#111111] tracking-[0.4em] font-light text-xs uppercase ml-[0.4em]">
                Please Wait
            </h2>
        </div>
    );
};

export default Loader;