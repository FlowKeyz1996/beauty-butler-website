// components/MarketplaceCard.tsx
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import TagHeader from '../atoms/TagjHeader';

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
    visible: { opacity: 1, x: 0, transition: { duration: 1.0} },
  };

  return (
    <motion.div
      className="flex justify-between items-center p-5 max-w-7xl mx-5 bg-white h-screen  rounded-lg my-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Left Side - Image */}
      <motion.div className="w-1/2" variants={fadeInVariants}>
        <Image
          src={imageUrl}
          alt={title}
          width={600}
          height={500}
          className="rounded-lg ml-5"
        />
      </motion.div>

      {/* Right Side - Text */}
      <motion.div className=" px-6 max-w-lg" variants={fadeInRightVariants}>
        <TagHeader text="Our MarketPlace" position="left"/>
        <h2 className="text-4xl font-bold mb-3 font-apfelregular">{title}</h2>
        <p className="text-gray-600 mb-4 text-lg font-euclidlight">{description}</p>
        <button className="bg-[#8878d7] text-white py-4 text-xl font-euclidmedium px-14 my-2 rounded-xl">
          {buttonText}
        </button>
      </motion.div>
    </motion.div>
  );
};

export default MarketplaceCard;
