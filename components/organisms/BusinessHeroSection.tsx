import { motion } from "framer-motion";
import Image from "next/image";

const BusinessHeroSection = () => {
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

          {/* Call to action button for all screens */}
          <div className="flex items-center justify-center lg:justify-start">
            <button className="flex items-center justify-center bg-white text-[#8877D8] text-xs sm:text-lg font-euclidmedium py-3 sm:py-5 px-12 sm:px-10 rounded-xl sm:rounded-2xl">
              <div className="flex items-center">
                <Image
                  src="/appleandgoogle.svg"
                  alt="Icon"
                  width={35} // Width for mobile
                  height={18} // Height for mobile
                  className="w-12 h-auto sm:w-20 sm:h-auto" // Responsive width for mobile and desktop
                />
                <span className="ml-1 sm:ml-2 text-sm sm:text-xl font-euclidmedium">
                  Download App
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Right div with an image */}
        <motion.div
          className="lg:w-1/2 lg:mt-0 -mb-72 sm:-mb-64 lg:mb-0 flex justify-center w-full"
          initial={{ y: 100, opacity: 0 }} // Slide from bottom to top
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/smallheroone.svg"
            alt="Business Growth"
            width={800} // Adjusted width for mobile view
            height={800} // Adjusted height for mobile view
            className=" w-full h-full sm:h-[80%] sm:w-[95%] md:w-[90%] object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessHeroSection;
