import React, { useState } from 'react';
import TagHeader from '../atoms/TagHeader';
import Link from 'next/link';
import LaunchListWidget from '../atoms/LaunchListWidget';
import DownloadButton from '../atoms/DownloadButton';

const GettingStarted: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === 'modal-overlay') {
      closeModal();
    }
  };

  return (
    <section className="flex flex-col items-center py-20 sm:py-10 px-4">
      <TagHeader text="How it works" maxWidth="max-w-[150px]" />

      {/* Header */}
      <h1 className="text-4xl md:text-5xl text-[#101828] my-4 sm:my-0 sm:mb-4 text-center md:leading-[4rem] font-s font-apfelmittel">
        Getting Started with Beauty Butler
      </h1>

      {/* Description */}
      <p className="text-center text-base md:text-xl font-euclidlight max-w-xl mb-10 text-[#667085]">
        Follow these simple steps to set up your account and start booking beauty and wellness treatments.
      </p>

      {/* Cards */}
      <div className="w-full md:w-[90%]">
        {/* Top Card */}
        <div className="w-full mb-10 sm:mb-16 bg-[#f8f9fb] rounded-3xl border border-[#f2f4f7] p-4 md:p-6 relative overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-1/2 flex flex-col mb-10 sm:mb-4 md:mb-0">
              <h2 className="text-xl sm:text-3xl font-apfelregular text-[#1d2939] mb-2 text-left sm:text-left md:text-left">
                Download Beauty Butler: find the best beauty and wellness experts for you.
              </h2>
            </div>
            <div className="w-full md:w-1/2 flex justify-center relative">
              {/* Right Image */}
              <img
                src="/Device.svg"
                alt="Right Image"
                className="w-[45%] md:w-[59%] lg:w-[59%] h-auto object-contain ml-48 sm:ml-0 rounded-lg"
              />
            </div>
          </div>
          {/* Left Image (absolute within card container) */}
          <img
            src="/01.svg"
            alt="Left Image"
            className="absolute bottom-0 left-0 w-[50%] md:w-[30%] lg:w[40%] h-auto object-contain"
          />
        </div>

        {/* Bottom Two Cards with space */}
        <div className="w-full flex flex-col md:flex-row gap-10 ">
          <div className="w-full md:w-1/2 bg-[#f8f9fb] rounded-3xl p-4 md:p-6 relative border-[#f2f4f7] flex flex-col items-center justify-between">
            {/* Text Above Images */}
            <h2 className="text-xl md:text-3xl mb-4 font-apfelregular text-[#1d2939] text-left md:text-left sm:text-left">
              Explore our extensive marketplace listings and categories.
            </h2>
            {/* Images inside card container */}
            <div className="relative w-full h-[100px] md:h-[250px] sm:h-[250px]">
              <img
                src="/02.svg"
                alt="Left Image"
                className="absolute -bottom-4  left-0 w-[65%] md:w-[60%] lg:h-[70%]  object-contain"
              />
              <img
                src="/Device2.svg"
                alt="Right Image"
                className="absolute -bottom-4 right-0 w-[35%] md:w-[40%] sm:w-[20%] sm:h-[97%] object-contain rounded-lg"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-[#f8f9fb] rounded-3xl p-4 md:p-6 relative border-[#f2f4f7] flex flex-col items-center justify-between">
            {/* Text Above Images */}
            <h2 className="text-xl md:text-3xl mb-4 font-apfelregular text-[#1d2939] text-left md:text-left">
              Get Salon services from the butler in the comfort of your home.
            </h2>
            {/* Images inside card container */}
            <div className="relative w-full h-[100px] md:h-[250px] sm:h-[250px]">
              <img
                src="/03.svg"
                alt="Left Image"
                className="absolute -bottom-4 md:left-0 w-[65%] md:w-[60%]  lg:h-[70%]  object-contain"
              />
              <img
                src="/device3.svg"
                alt="Right Image"
                className="absolute -bottom-4 right-0 w-[35%] md:w-[40%] sm:w-[20%] sm:h-[97%] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="w-full flex justify-center mt-10">
        <DownloadButton
  backgroundColor="bg-[#8877D8]"
  textColor="text-white"
  text="Download App"
  images={[
    {
      src: "/apple-white.svg",
      alt: "Apple Store",
      width: 12,
      height: 12,
      link: "https://apps.apple.com/app/beauty-butler-app/id6608976314",
    },
    {
      src: "/white-line.svg", // Middle image without a link
      alt: "Google Play",
      width: 12,
      height: 2,
    },
    {
      src: "/google-white.svg",
      alt: "Google Play",
      width: 12,
      height: 12,
      link: "https://apps.apple.com/app/beauty-butler-app/id6608976314",
    },
  ]}
/>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          id="modal-overlay"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleOverlayClick}
        >
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-semibold mb-4">Join Our Waitlist</h2>
            <LaunchListWidget/>
          </div>
        </div>
      )}
    </section>
  );
};

export default GettingStarted;
