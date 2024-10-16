import React from 'react';
import TagHeader from '../atoms/TagHeader';

const GettingStarted: React.FC = () => {
  return (
    <section className="flex flex-col items-center py-10 px-4">
      <TagHeader text="How it works" />

      {/* Header */}
      <h1 className="text-3xl md:text-5xl text-[#101828] my-4 text-center md:leading-[rem] font-s font-apfelmittel">
        Getting Started with Beauty Butler
      </h1>

      {/* Description */}
      <p className="text-center text-lg md:text-xl font-euclidlight max-w-xl mb-10 text-[#667085]">
        Follow these simple steps to set up your account and start booking beauty and wellness treatments.
      </p>

      {/* Cards */}
      <div className="w-[95%] md:w-[90%]">
        {/* Top Card */}
        <div className="w-full mb-8 bg-[#f8f9fb] rounded-3xl border border-[#f2f4f7] flex flex-col p-4 md:p-6 md:flex-row md:justify-between">
          <div className="w-full flex flex-col items-center md:items-start mb-4 md:mb-0 md:w-1/2">
            {/* Left Div */}
            <h2 className="text-base md:text-3xl  font-apfelregular text-[#1d2939] mb-2 text-center md:text-left">
              Download Beauty Butler: find the best beauty and wellness experts for you.
            </h2>
            <img
              src="/01.svg"
              alt="Left Image"
              className="w-[90%] md:w-[50%] h-auto object-contain relative top-20"
            />
          </div>
          <div className="w-full flex justify-center md:w-1/2 border border-[#f2f4f7]">
            {/* Right Div */}
            <img
              src="/Device.svg"
              alt="Right Image"
              className="w-[80%] md:w-[59%] h-auto object-contain rounded-lg relative top-7"
            />
          </div>
        </div>

        {/* Bottom Two Cards */}
        <div className="w-full flex flex-col md:flex-row space-y-4 md:space-y-0 gap-10 ">
          <div className="w-full md:w-1/2 bg-[#f8f9fb] rounded-3xl p-4 md:p-6 flex flex-col items-center border-[#f2f4f7]">
            {/* Text Above Images */}
            <h2 className="text-base md:text-3xl  mb-2 font-apfelregular text-[#1d2939] text-center md:text-left">
              Explore our extensive marketplace listings and categories.
            </h2>
            <div className="flex w-full justify-between items-start rounded-3xl">
              <img
                src="/02.svg"
                alt="Left Image"
                className="w-[55%] md:w-[62%] h-auto object-contain rounded-lg relative top-[7rem]"
              />
              <img
                src="/Device2.svg"
                alt="Right Image"
                className="w-[40%] md:w-[55%] h-auto object-contain rounded-lg relative top-5"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-[#f8f9fb] rounded-3xl p-4 md:p-6 flex flex-col items-center border-[#f2f4f7]">
            {/* Text Above Images */}
            <h2 className="text-base md:text-3xl mb-2 font-apfelregular text-[#1d2939] text-center md:text-left">
              Get Salon services from the butler in the comfort of your home.
            </h2>
            <div className="flex w-full justify-between items-start border-[#f2f4f7]">
              <img
                src="/03.svg"
                alt="Left Image"
                className="w-[60%] md:w-[65%] h-auto object-contain rounded-lg relative top-24"
              />
              <img
                src="/device3.svg"
                alt="Right Image"
                className="w-[35%] md:w-[48%] h-auto object-contain rounded-lg relative top-5"
              />
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="w-full flex justify-center mt-10">
          <button className="bg-[#8877D8] flex items-center px-6 py-3 rounded-xl">
            <img
              src="/googleandapplepurple.svg"
              alt="Download Icon"
              className="w-12 h-8 mr-4 fill-current"
            />
            <span className="font-semibold text-white font-euclidmedium text-base">
              Download App
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
