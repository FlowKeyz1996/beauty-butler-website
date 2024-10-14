import React from 'react';
import TagHeader from '../atoms/TagHeader';

const GettingStarted: React.FC = () => {
  return (
    <section className="flex flex-col items-center py-10 px-4">
      <TagHeader text="How it works" />

      {/* Header */}
      <h1 className="text-3xl md:text-5xl text-[#101828] my-4 text-center md:leading-[3rem] md:tracking-wider font-apfelregular">
        Getting Started with Beauty Butler
      </h1>

      {/* Description */}
      <p className="text-center text-lg md:text-xl font-euclidlight max-w-xl mb-10 text-[#667085]">
        Follow these simple steps to set up your account and start booking beauty and wellness treatments.
      </p>

      {/* Cards */}
      <div className="w-[95%] md:w-[90%]">
        {/* Top Card */}
        <div className="w-full mb-8 bg-[#f8f9fb] rounded-lg flex flex-col p-4 md:p-6 md:flex-row md:justify-between">
          <div className="w-full flex flex-col items-center md:items-start mb-4 md:mb-0 md:w-1/2">
            {/* Left Div */}
            <h2 className="text-base md:text-3xl font-semibold font-apfelregular text-[#1d2939] mb-2 text-center md:text-left">
              Download Beauty Butler: find the best beauty and wellness experts for you.
            </h2>
            <img
              src="/01.svg"
              alt="Left Image"
              className="w-[90%] md:w-[70%] h-full object-contain rounded-lg relative top-5"
            />
          </div>
          <div className="w-full flex justify-center md:w-1/2">
            {/* Right Div */}
            <img
              src="/Device.svg"
              alt="Right Image"
              className="w-[80%] md:w-[50%] h-full object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Bottom Two Cards */}
        <div className="w-full flex flex-col md:flex-row space-y-4 md:space-y-0 gap-4">
          <div className="w-full md:w-1/2 bg-[#f8f9fb] rounded-lg p-4 md:p-6 flex flex-col items-center">
            {/* Text Above Images */}
            <h2 className="text-base md:text-2xl font-semibold mb-2 font-apfelregular text-[#1d2939] text-left">
              Explore our extensive marketplace listings and categories.
            </h2>
            <div className="flex w-full">
              <img
                src="/02.svg"
                alt="Left Image"
                className="w-[62%] h-full object-contain rounded-lg relative top-14"
              />
              <img
                src="/Device2.svg"
                alt="Right Image"
                className="w-[55%] h-full object-contain rounded-lg"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-[#f8f9fb] rounded-lg p-4 md:p-6 flex flex-col items-center">
            {/* Text Above Images */}
            <h2 className="text-base md:text-2xl font-semibold mb-2 font-apfelregular text-[#1d2939] text-left">
              Get Salon services from the butler in the comfort of your home.
            </h2>
            <div className="flex w-full justify-between">
              <img
                src="/03.svg"
                alt="Left Image"
                className="w-[65%] h-full object-contain rounded-lg relative top-14"
              />
              <img
                src="/device3.svg"
                alt="Right Image"
                className="w-[48%] h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="w-full flex justify-center mt-10">
          <button className="bg-[#8877D8] flex items-center px-10 py-3 rounded-xl shadow-md">
            <img
              src="/googleandapplepurple.svg"
              alt="Download Icon"
              className="w-16 h-8 mr-4 fill-current"
            />
            <span className="font-semibold text-white font-euclidmedium">
              Download App
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
