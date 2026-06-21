import React, { useEffect, useState } from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/10 blur-[100px] rounded-full pointer-events-none" />
      
      <h1 className="text-8xl md:text-[150px] font-bold tracking-tighter text-white/10 absolute top-10 select-none z-0">
        404
      </h1>

      <div className="z-10 flex flex-col items-center">
        {/* The user's animated face container */}
        <div className="my-custom-face-container">
          <svg className="face" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
            <g className="face__eyes">
              {/* Left Eye */}
              <circle cx="75" cy="100" r="20" fill="none" stroke="#fff" strokeWidth="6" />
              {/* Right Eye */}
              <circle cx="175" cy="100" r="20" fill="none" stroke="#fff" strokeWidth="6" />
              
              <g className="face__pupil">
                <circle cx="75" cy="100" r="8" fill="#fff" />
                <circle cx="175" cy="100" r="8" fill="#fff" />
              </g>
              
              {/* Eyelids */}
              <path className="face__eye-lid" d="M 50,90 Q 75,70 100,90" fill="none" stroke="#0B0B0B" strokeWidth="15" />
              <path className="face__eye-lid" d="M 150,90 Q 175,70 200,90" fill="none" stroke="#0B0B0B" strokeWidth="15" />
            </g>

            {/* Nose */}
            <path className="face__nose" d="M 125,120 L 125,140" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" />

            {/* Mouth */}
            <path className="face__mouth-left" d="M 125,170 Q 100,180 75,160" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeDasharray="102" />
            <path className="face__mouth-right" d="M 125,170 Q 150,180 175,160" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeDasharray="102" />
          </svg>
        </div>

        <div className="text-center mt-[-100px] z-10 relative">
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-muted mb-8 max-w-[400px]">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <a href="/" className="btn btn-primary">
            Go Back Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
