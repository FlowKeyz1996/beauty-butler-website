// components/MarketplaceCard.tsx
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import TagHeader from '../atoms/TagHeader';

interface MarketplaceCardProps {
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
}

const MarketplaceCard: React.FC<MarketplaceCardProps> = ({ imageUrl, title, description, buttonText }) => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 100 }, // Coming from the bottom
    visible: { opacity: 1, y: 0, transition: { duration: 1.0 } },
  };

  const fadeInRightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.0 } },
  };

  return (
    <motion.div
      className="flex flex-col lg:flex-row justify-between items-center lg:items-start p-5 max-w-7xl mx-auto  bg-white rounded-lg my-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Left Side - Image */}
      <motion.div className="w-full lg:w-1/2 mb-6 lg:mb-0" variants={fadeInVariants}>
        <Image
          src={imageUrl}
          alt={title}
          width={600}
          height={500}
          className="rounded-lg mx-auto lg:ml-5"
        />
      </motion.div>

      {/* Right Side - Text */}
      <motion.div className="w-full lg:w-1/2 px-4 lg:px-6 max-w-lg" variants={fadeInRightVariants}>
        <TagHeader text="Our marketplace" position='left' paddingX=''/>
        <h2 className="text-3xl lg:text-4xl text-[#101828] mb-3 font-apfelmittel text-center lg:text-left">
          {title}
        </h2>
        <p className="text-[#475467] mb-4 text-lg font-euclidlight text-center lg:text-left">
          {description}
        </p>
        <p className="text-[#475467] mb-4 text-lg font-euclidlight text-center lg:text-left">
        Give your clients easy access to your services, price list and calendar by creating a mini web page to take bookings. 
        Clients can book via your social media or website. 
        </p>
        <div className="flex justify-center lg:justify-start">
          <button className="bg-[#8878d7] text-white py-4 text-xl font-euclidmedium px-14 my-2 rounded-xl">
            {buttonText}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MarketplaceCard;
