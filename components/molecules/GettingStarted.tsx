import React from 'react';

const GettingStarted: React.FC = () => {
  return (
    <section className="flex flex-col items-center py-10 px-4">
      {/* Header */}
      <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center font-apfelregular">
        Getting Started with Beauty Butler
      </h1>

      {/* Description */}
      <p className="text-center text-xl font-euclidlight font-semibold max-w-xl mb-10 text-[#667085]">
        Follow these simple steps to set up your account and start booking beauty and wellness treatments.
      </p>

      {/* Cards */}
      <div className="w-full max-w-5xl">
        {/* Top Card */}
        <div className="w-full mb-8 bg-[#f8f9fb] shadow-lg rounded-lg justify-between flex flex-col md:flex-row p-6">
          <div className="w-full md:w-1/2 mb-4 md:mb-0 flex flex-col items-center justify-center">
            {/* Left Div */}
            <h2 className="text-lg md:text-3xl font-semibold font-apfelregular text-[#1d2939] mb-2">
              Download Beauty Butler: find the best beauty and wellness experts for you.
            </h2>
            <img src="/01.svg" alt="Left Image" className="w-[50%] h-full object-contain rounded-lg" />
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center">
            {/* Right Div */}
            <img src="/Device.svg" alt="Right Image" className="w-[50%] h-full object-contain rounded-lg" />
          </div>
        </div>

        {/* Bottom Two Cards */}
        <div className="w-full flex flex-col md:flex-row space-y-4 md:space-y-0 gap-4">
          <div className="w-full md:w-1/2 bg-[#f8f9fb] shadow-lg rounded-lg p-6 flex flex-col items-center">
            {/* Text Above Images */}
            <h2 className="text-lg md:text-3xl font-semibold mb-2 font-apfelregular text-[#1d2939] ">
              Explore our extensive marketplace listings and categories.
            </h2>
            <div className="flex w-full justify-between">
              <img src="/02.svg" alt="Left Image" className="w-[50%] h-full object-contain rounded-lg" />
              <img src="/Device.svg" alt="Right Image" className="w-[50%] h-full object-contain rounded-lg" />
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-[#f8f9fb] shadow-lg rounded-lg p-6 flex flex-col items-center">
            {/* Text Above Images */}
            <h2 className="text-lg md:text-3xl font-semibold mb-2 font-apfelregular text-[#1d2939] ">
              Get Salon services from the butler in the comfort of your home.
            </h2>
            <div className="flex w-full justify-between">
              <img src="/03.svg" alt="Left Image" className="w-[50%] h-full object-contain rounded-lg" />
              <img src="/Device.svg" alt="Right Image" className="w-[50%] h-full object-contain rounded-lg" />
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="w-full flex justify-center mt-10">
  <button className="bg-[#8877D8] flex items-center px-14 py-3 rounded-xl shadow-md ">
    <img src="/appleandgoogle.svg" alt="Download Icon" className="w-10 h-10 mr-4 fill-current text-white" />
    <span className="font-semibold text-white font-euclidmedium">Download App</span>
  </button>
</div>
      </div>
    </section>
  );
};

export default GettingStarted;
