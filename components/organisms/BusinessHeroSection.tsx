import { motion } from "framer-motion";
import Image from "next/image";

const BusinessHeroSection = () => {
  return (
    <section className="relative flex flex-col justify-center items-center h-[120vh] md:[110vh] sm:h-[120vh] lg:h-[110vh] min-h-screen bg-[#8877D8]">
      <div className="absolute bottom-0 left-0 w-full h-20 bg-white z-0"></div>

      <div className="relative z-10 container mx-auto p-4 sm:p-8 flex flex-col lg:flex-row items-center lg:justify-between lg:space-x-8 h-full">
        {/* Left div with header and description */}
        <div className="lg:w-1/2 space-y-3 sm:space-y-5 text-center lg:text-left text-white flex flex-col justify-center items-center lg:items-start lg:justify-center">
          <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-full border w-[80%] max-w-[200px] sm:max-w-[400px] sm:w-[40%] font-euclidmedium py-1 px-1 sm:py-2 sm:px-4 text-sm sm:text-base items-center text-center lg:text-left mt-16 lg:mt-0">
            <p className="text-white">Your new beauty bestie 💅🏾</p>
          </div>
          <h1 className="text-4xl sm:text-3xl lg:text-6xl font-apfelmittel leading-[2.5rem] sm:leading-[2.5rem] lg:leading-[4rem] mt-4 sm:mt-6 lg:mt-0">
            Unlock Your Beauty Concierge Experience
          </h1>
          <p className="text-lg sm:text-lg lg:text-2xl sm:mt-0 font-normal font-euclidlight text-[#EAECF0] pb-5 sm:py-0 sm:pb-7">
            Your Personal Beauty Butler Awaits - Delivered Right To Your Doorstep
          </p>

          {/* Call to action button for all screens */}
          <div className="flex items-center justify-center lg:justify-start">
            <button className="flex items-center justify-center bg-white text-[#8877D8] text-sm sm:text-lg font-euclidmedium py-3 sm:py-4 px-16 sm:px-10 rounded-xl sm:rounded-2xl">
              <div className="flex items-center">
                <Image
                  src="/appleandgoogle.svg"
                  alt="Icon"
                  width={40} // Width for mobile
                  height={20} // Height for mobile
                  className="w-14 h-auto sm:w-24 sm:h-auto" // Responsive width for mobile and desktop
                />
                <span className="ml-1 sm:ml-3 text-md sm:text-2xl font-euclidmedium">
                  Download App
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Right div with an image */}
        <motion.div
          className="lg:w-1/2 lg:mt-0 -mb-80 lg:mb-0 flex justify-center w-full"
          initial={{ y: 100, opacity: 0 }} // Slide from bottom to top
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/smallheroone.svg"
            alt="Business Growth"
            width={900} // Increased width for better view on mobile
            height={900} // Adjusted height to fit better on mobile
            className="mx-auto w-[100%] h-[100%] sm:h-[80%] md:h-[80%] sm:w-[80%] md:w-[90%] lg: object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessHeroSection;
