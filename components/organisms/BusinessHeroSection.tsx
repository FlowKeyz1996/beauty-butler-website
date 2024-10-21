import { motion } from "framer-motion";
import Image from "next/image";

const BusinessHeroSection = () => {
  return (
    <section className="relative flex flex-col justify-center items-center h-[110vh] sm:h-screen  lg:h-[110vh] min-h-screen bg-[#8877D8]">
      <div className="absolute bottom-0 left-0 w-full h-20 bg-white z-0"></div>

      <div className="relative z-10 container mx-auto p-4 sm:p-8 flex flex-col lg:flex-row items-center lg:justify-between lg:space-x-8 h-full">
        {/* Left div with header and description */}
        <div className="lg:w-1/2 space-y-3 sm:space-y-5 text-center lg:text-left text-white flex flex-col justify-center items-center lg:items-start lg:justify-center">
          <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-full border w-[80%] sm:w-[40%] font-euclidmedium py-1 px-3 sm:py-2 sm:px-4 text-sm sm:text-base items-center text-center lg:text-left mt-20 lg:mt-0">
            <p className="text-white">Your new beauty bestie    💅🏾</p>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-6xl font-apfelmittel leading-[1.75rem] sm:leading-[2.5rem] lg:leading-[4rem] mt-4 sm:mt-6 lg:mt-0">
            Unlock Your Beauty Concierge Experience
          </h1>
          <p className="text-sm sm:text-lg lg:text-2xl font-normal font-euclidlight text-[#EAECF0] pb-7">
            Your Personal Beauty Butler Awaits - Delivered Right To Your Doorstep
          </p>

          {/* Call to action button for all screens */}
          <div className="flex items-center justify-center lg:justify-start">
            <button className="flex items-center justify-center bg-white text-[#8877D8] text-sm sm:text-lg font-euclidmedium py-3 sm:py-4 px-4 sm:px-16 rounded-xl sm:rounded-2xl">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Image
                  src="/appleandgoogle.svg"
                  alt="Icon"
                  width={80} // Reduced for mobile
                  height={20} // Reduced for mobile
                />
                <span className="ml-2 sm:ml-3  text-2xl font-euclidmedium">Download App</span>
              </div>
            </button>
          </div>
        </div>

        {/* Right div with an image */}
        <motion.div
          className="lg:w-1/2 lg:mt-0 mt-5 mb-10 lg:mb-0 flex justify-center"
          initial={{ y: 100, opacity: 0 }} // Slide from bottom to top
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/smallheroone.svg"
            alt="Business Growth"
            width={150} // Further reduced width for smaller mobile
            height={300} // Further reduced height for smaller mobile
            className="mx-auto w-full object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessHeroSection;
