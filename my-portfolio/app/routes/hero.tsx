import React from 'react';
import myImage from '../../assets/my-image.jpg';

const HeroSection = () => {
  return (
    <div className="w-full">
      <div className="relative">
        <div className="max-w-4xl mx-auto p-4">
          <div
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-lg items-start justify-end px-4 pb-10 md:px-10 md:gap-8"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${myImage})`,
            }}
          >
            <div className="flex flex-col gap-2 text-left">
              <h1 className="text-white text-4xl font-black leading-tight tracking-tight md:text-5xl">
                Hi, I'm Sadiq Teslim Adetola — Frontend Developer
              </h1>
              <h2 className="text-white text-sm font-normal leading-normal md:text-base max-w-xl">
                I build sleek, high-performance web experiences that blend creativity with code — responsive, accessible, and user-first.
              </h2>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 md:h-12 md:px-5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold leading-normal tracking-wide md:text-base transition-colors duration-200">
              <span className="truncate">View Projects</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
