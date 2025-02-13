import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import TagHeader from '../atoms/TagHeader';
import Link from 'next/link';

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
      className="flex flex-col-reverse lg:flex-row justify-between items-center lg:items-start p-5 max-w-7xl mx-auto bg-white rounded-lg sm:my-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Left Side - Image */}
      <motion.div className="w-full lg:w-1/2 mb-6 lg:mb-0 mt-10 lg:mt-0" variants={fadeInVariants}>{/*left side image*/}
        <Image
          src={imageUrl}
          alt={title}
          width={600}
          height={500}
          className="rounded-lg mx-auto lg:ml-5"
        />
      </motion.div>

      {/* Right Side - Text */}
      <motion.div className="w-full lg:w-1/2 px-4 lg:px-9 max-w-xl" variants={fadeInRightVariants}>
        <TagHeader text="Our marketplace" position='left'maxWidth='max-w-[200px] sm:max-w-[200px]' mobilePosition='center'/>
        <h2 className="text-2xl sm:text-4xl lg:text-4xl text-[#101828] mb-3 font-apfelmittel text-center lg:text-left">
          {title}
        </h2>
        <p className="text-[#475467] mb-4 text-md font-euclidlight text-center lg:text-left">
          {description}
        </p>
        {/* <p className="text-[#475467] mb-4 text-lg font-euclidlight text-center lg:text-left">
        Give your clients easy access to your services, price list and calendar by creating a mini web page to take bookings. 
        Clients can book via your social media or website. 
        </p> */}
        <Link href="https://airtable.com/appbyIQgO429LydxX/pagpJUqsZCrQzQcYg/form">
        <div className="flex justify-center lg:justify-start">
          <button className="bg-[#8878d7] text-white py-4  tex-xl sm:text-2xl font-euclidmedium px-14 my-2 rounded-xl">
            {buttonText}
          </button>
        </div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default MarketplaceCard;
