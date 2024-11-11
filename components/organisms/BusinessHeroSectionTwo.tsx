import { motion } from "framer-motion";
import Image from "next/image";

const BusinessHeroSectionTwo = () => {
  return (
    <section className="relative flex flex-col justify-center items-center min-h-screen bg-[#8877D8]">
      <div className="absolute bottom-0 left-0 w-full h-20 bg-white z-0"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-center lg:justify-between lg:space-x-8 h-full">
        {/* Left Section */}
        <div className="lg:w-1/2 space-y-4 text-center lg:text-left text-white flex flex-col justify-center lg:items-start items-center">
          <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-full border w-full max-w-[250px] sm:max-w-[100px] px-4 py-2 text-sm sm:text-base">
            <p className="text-white">Your new beauty bestie 💅🏾</p>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-apfelmittel leading-tight lg:leading-[4rem] mt-4 lg:mt-0">
            Unlock Your Beauty Concierge Experience
          </h1>
          <p className="text-lg lg:text-2xl text-[#EAECF0]">
            Your Personal Beauty Butler Awaits - Delivered Right To Your Doorstep
          </p>

          {/* Call to Action Button */}
          <div className="flex justify-center lg:justify-start mt-6">
            <button className="flex items-center bg-white text-[#8877D8] text-sm lg:text-lg font-euclidmedium py-3 lg:py-4 px-8 lg:px-10 rounded-xl">
              <Image
                src="/appleandgoogle.svg"
                alt="Download Icons"
                width={32}
                height={32}
                className="w-6 lg:w-10 h-auto"
              />
              <span className="ml-2 lg:ml-4">Download App</span>
            </button>
          </div>
        </div>

        {/* Right Section - Image */}
        <motion.div
          className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/smallheroone.svg"
            alt="Beauty Butler"
            width={900}
            height={900}
            className="w-[75%] md:w-[60%] lg:w-[80%] object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessHeroSectionTwo;
