import React from 'react';
import TagHeader from '../atoms/TagHeader';

const GettingStarted: React.FC = () => {
  return (
    <section className="flex flex-col items-center py-10 px-4">
      <TagHeader text="How it works" maxWidth="max-w-[150px]" />

      {/* Header */}
      <h1 className="text-2xl md:text-5xl text-[#101828] mb-4 text-center md:leading-[4rem] font-s font-apfelmittel">
        Getting Started with Beauty Butler
      </h1>

      {/* Description */}
      <p className="text-center text-base md:text-xl font-euclidlight max-w-xl mb-10 text-[#667085]">
        Follow these simple steps to set up your account and start booking beauty and wellness treatments.
      </p>

      {/* Cards */}
      <div className="w-full md:w-[90%]">
        {/* Top Card */}
        <div className="w-full mb-16 bg-[#f8f9fb] rounded-3xl border border-[#f2f4f7] p-4 md:p-6 relative overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-1/2 flex flex-col mb-4 md:mb-0">
              <h2 className="text-base md:text-3xl font-apfelregular text-[#1d2939] mb-2 text-left sm:text-left md:text-left">
                Download Beauty Butler: find the best beauty and wellness experts for you.
              </h2>
            </div>
            <div className="w-full md:w-1/2 flex justify-center relative">
              {/* Right Image */}
              <img
                src="/Device.svg"
                alt="Right Image"
                className="w-[40%] md:w-[59%] h-auto object-contain ml-56 sm:ml-0 rounded-lg"
              />
            </div>
          </div>
          {/* Left Image (absolute within card container) */}
          <img
            src="/01.svg"
            alt="Left Image"
            className="absolute bottom-0 left-0 w-[50%] md:w-[40%] h-auto object-contain"
          />
        </div>

        {/* Bottom Two Cards with space */}
        <div className="w-full flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2 bg-[#f8f9fb] rounded-3xl p-4 md:p-6 relative border-[#f2f4f7] flex flex-col items-center justify-between">
            {/* Text Above Images */}
            <h2 className="text-3xl md:text-3xl mb-4 font-apfelregular text-[#1d2939] text-left md:text-left sm:text-left">
              Explore our extensive marketplace listings and categories.
            </h2>
            {/* Images inside card container */}
            <div className="relative w-full h-[200px] md:h-[250px]">
              <img
                src="/02.svg"
                alt="Left Image"
                className="absolute -bottom-5  left-0 w-[50%] md:w-[60%] h-auto object-contain"
              />
              <img
                src="/Device2.svg"
                alt="Right Image"
                className="absolute -bottom-5 right-0 w-[35%] md:w-[40%] h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-[#f8f9fb] rounded-3xl p-4 md:p-6 relative border-[#f2f4f7] flex flex-col items-center justify-between">
            {/* Text Above Images */}
            <h2 className="text-base md:text-3xl mb-4 font-apfelregular text-[#1d2939] text-center md:text-left">
              Get Salon services from the butler in the comfort of your home.
            </h2>
            {/* Images inside card container */}
            <div className="relative w-full h-[200px] md:h-[150px]">
              <img
                src="/03.svg"
                alt="Left Image"
                className="absolute -bottom-5 left-0 w-[55%] md:w-[60%] h-auto object-contain"
              />
              <img
                src="/device3.svg"
                alt="Right Image"
                className="absolute -bottom-5 right-0 w-[45%] md:w-[40%] h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="w-full flex justify-center mt-10">
          <button className="bg-[#8877D8] flex items-center px-10 md:px-16 py-4 rounded-2xl">
            <img
              src="/googleandapplepurple.svg"
              alt="Download Icon"
              className="w-12 md:w-20 h-auto mr-4 fill-current"
            />
            <span className="text-white font-euclidmedium text-xl md:text-2xl">
              Download App
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
