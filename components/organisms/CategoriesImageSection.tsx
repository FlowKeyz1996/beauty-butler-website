import { motion } from 'framer-motion';
import React from 'react';

interface Image {
  src: string;
  alt: string;
}

const images: Image[] = [
  { src: '/manicureimg.svg', alt: 'Image 1' },
  { src: '/images/img2.jpg', alt: 'Image 2' },
  { src: '/images/img3.jpg', alt: 'Image 3' },
  { src: '/images/img4.jpg', alt: 'Image 4' },
  { src: '/images/img5.jpg', alt: 'Image 5' },
  { src: '/images/img6.jpg', alt: 'Image 6' },
];

const CategoriesImageSection: React.FC = () => {
  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex"
        animate={{ x: ['100%', '-100%'] }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: 'linear',
        }}
      >
        <div className="flex space-x-8">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="w-40 h-auto"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CategoriesImageSection;
