import { motion } from "framer-motion";
import Image from "next/image";
import DownloadButton from "../atoms/DownloadButton";

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

          {/* Call to action button with DownloadButton */}
          <div className="flex items-center justify-center lg:justify-start">
          <DownloadButton
  backgroundColor="bg-white"
  textColor="text-[#8877D8]"
  text="Download App"
  images={[
    {
      src: "/apple.svg",
      alt: "Apple Store",
      width: 12,
      height: 12,
      link: "https://apps.apple.com/app/beauty-butler-pro/id6608976623",
    },
    {
      src: "/hero-line.svg", // Middle image without a link
      alt: "Google Play",
      width: 12,
      height: 2,
    },
    {
      src: "/google.svg",
      alt: "Google Play",
      width: 12,
      height: 12,
      link: "https://play.google.com/store/apps/details?id=com.beautybutler.provider",
    },
  ]}
/>

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
    </section>
  );
};

export default BusinessHeroSection;
