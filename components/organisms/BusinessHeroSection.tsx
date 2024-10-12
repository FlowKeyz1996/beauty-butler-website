import { motion } from "framer-motion";
import Image from "next/image";

const BusinessHeroSection = () => {
  return (
    <section className="relative flex flex-col justify-center items-center h-screen bg-[#8877D8]">
      <div className="absolute bottom-0 left-0 w-full h-20 bg-white z-0"></div>

      <div className="relative z-10 container mx-auto p-8 flex flex-col lg:flex-row items-center lg:justify-between lg:space-x-8 h-full">
        {/* Left div with header and description */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left text-white my-auto">
          <h1 className="text-4xl lg:text-6xl  font-apfelregular leading-[3rem] lg:leading-[4rem]">
            Unlock Your Beauty Concierge Experience
          </h1>
          <p className="text-xl lg:text-2xl font-normal font-euclidlight text-[#EAECF0]">
            Your Personal Beauty Butler Awaits - Delivered Right To Your Doorstep
          </p>

          {/* Call to action button for large screens */}
          <div className="hidden lg:flex items-center justify-center lg:justify-start">
            <button className="flex items-center justify-center bg-white text-[#8877D8] text-xl font-euclidmedium py-4 px-6 rounded-xl">
              <div className="flex items-center space-x-3">
                <Image
                  src="/appleandgoogle.svg"
                  alt="Icon"
                  width={80}
                  height={24}
                />
                <span className="ml-3 font-euclid">Download App</span>
              </div>
            </button>
          </div>
        </div>

        {/* Right div with an image */}
        <motion.div
          className="lg:w-1/2 lg:mt-0 mt-5" // Adjust margin for small screens
          initial={{ y: 100, opacity: 0 }} // Slide from bottom to top
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/smallheroone.svg"
            alt="Business Growth"
            width={700}
            height={600}
            className="mx-auto mb-3 lg:mb-0" // Reduce space between image and text
          />
        </motion.div>

        {/* Call to action button for small screens (under the image) */}
        <div className="lg:hidden mt-3 flex justify-center">
          <button className="flex items-center justify-center bg-white text-[#8877D8] text-xl font-euclidmedium py-3 px-6 rounded-xl">
            <div className="flex items-center space-x-3">
              <Image
                src="/appleandgoogle.svg"
                alt="Icon"
                width={80}
                height={24}
              />
              <span className="ml-3">Download App</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BusinessHeroSection;
