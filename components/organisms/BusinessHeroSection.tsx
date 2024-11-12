import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import LaunchListWidget from "../atoms/LaunchListWidget";
import Script from 'next/script';


const BusinessHeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle modal opening with a loader
  const openModal = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsModalOpen(true);
    }, 1000); // 1-second delay to simulate loading
  };

  // Function to handle modal closing
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="relative flex flex-col justify-center items-center h-[117vh] md:[110vh] lg:h-[110vh] min-h-screen bg-[#8877D8]">
      
      <div className="relative z-10 container mx-auto p-4 sm:p-4 flex flex-col lg:flex-row items-center lg:justify-between lg:space-x-8 h-full">
        {/* Left div with header and description */}
        <div className="lg:w-1/2 space-y-3 sm:space-y-4 text-center lg:text-left text-white flex flex-col justify-center items-center lg:items-start lg:justify-center">
          <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-full border w-[85%] max-w-[220px] sm:max-w-[250px] sm:w-[35%] font-euclidmedium py-1 px-2 sm:py-2 sm:px-3 text-xs sm:text-sm items-center text-center lg:text-left mt-16 sm:mt-14 lg:mt-0">
            <p className="text-white">Your new beauty bestie 💅🏾</p>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-apfelmittel leading-[2rem] sm:leading-[2.5rem] lg:leading-[4rem] mt-3 sm:mt-5 lg:mt-0">
            Unlock Your Beauty Concierge Experience
          </h1>
          <p className="text-base sm:text-lg lg:text-2xl font-normal font-euclidlight text-[#EAECF0] pb-4 sm:pb-6">
            Your Personal Beauty Butler Awaits - Delivered Right To Your Doorstep
          </p>

          {/* Call to action button with loader */}
          <div className="flex items-center justify-center lg:justify-start">
            <button
              onClick={openModal}
              className="flex items-center justify-center bg-white text-[#8877D8] text-xs sm:text-lg font-euclidmedium py-3 sm:py-5 px-12 sm:px-10 rounded-xl sm:rounded-2xl relative"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="rounded-full w-5 h-5 border-4 border-t-transparent border-[#8877D8] animate-spin"></div>
              ) : (
                <div className="flex items-center">
                  <span className="ml-1 sm:ml-2 text-sm sm:text-xl font-euclidmedium">
                    Join our waitlist
                  </span>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Right div with an image */}
        <motion.div
          className="lg:w-1/2 lg:mt-0 -mb-72 sm:-mb-64 lg:mb-0 flex justify-center w-full"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/smallheroone.svg"
            alt="Business Growth"
            width={800}
            height={800}
            className="w-full h-full sm:h-[80%] sm:w-[95%] md:w-[90%] object-contain"
          />
        </motion.div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg p-8 w-[90%] max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <LaunchListWidget />
            {/* <button
              onClick={closeModal}
              className="w-full py-2 px-4 bg-[#8877D8] text-white rounded-lg"
            >
              Close
            </button> */}
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default BusinessHeroSection;
