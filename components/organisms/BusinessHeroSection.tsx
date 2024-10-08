import { motion } from "framer-motion";
import Image from "next/image";

const BusinessHeroSection = () => {
  return (
    <section className="relative flex flex-col justify-center items-center h-screen bg-[#8877D8]">
      <div className="absolute bottom-0 left-0 w-full h-20 bg-white z-0"></div>

      <div className="relative z-10 container mx-auto p-8 flex flex-col lg:flex-row items-center lg:justify-between lg:space-x-8 h-full">
        {/* Left div with header, description, and CTA */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left text-white my-auto">
          <h1 className="text-6xl font-bold font-apfelregular leading-[4rem]">Unlock Your Beauty Concierge Experience</h1>
          <p className='text-2xl  font-normal font-euclidlight text-[#EAECF0]'>Your Personal Beauty Butler Awaits - Delivered Right To Your Doorstep</p>

          {/* Call to action button */}
          <button className="flex items-center justify-center bg-white text-[#8877D8] text-xl  font-euclidmedium py-3 px-6 rounded-xl ">
            <div className="flex items-center space-x-3">
              {/* Three image icons */}
              <Image src="/appleandgoogle.svg" alt="Icon 1" width={80} height={24} />
              {/* <Image src="/Line 29.svg" alt="Icon 2" width={24} height={1} /> */}
              {/* <Image src="/google.svg" alt="Icon 3" width={24} height={24} /> */}
              <span className="ml-3">Download App</span>
            </div>
          </button>
        </div>

        {/* Right div with an image */}
        <motion.div
          className="lg:w-1/2"
          initial={{ y: 100, opacity: 0 }} // Slide from bottom to top
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/businessheroimg.svg"
            alt="Business Growth"
            width={700}
            height={600}
            className="mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessHeroSection;
