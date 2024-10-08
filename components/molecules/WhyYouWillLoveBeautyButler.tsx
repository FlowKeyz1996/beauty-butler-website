import { FC } from 'react';
import { motion } from 'framer-motion';

interface CardData {
  image: string;
  title: string;
  description: string;
}

const cardData: CardData[] = [
  {
    image: '/path/to/image1.jpg',
    title: 'Exclusive Products',
    description: 'Access top-tier beauty products curated just for you.',
  },
  {
    image: '/path/to/image2.jpg',
    title: 'Expert Recommendations',
    description: 'Get beauty tips from industry experts.',
  },
  {
    image: '/path/to/image3.jpg',
    title: 'Doorstep Delivery',
    description: 'Convenient delivery right to your door.',
  },
  {
    image: '/path/to/image4.jpg',
    title: 'Personalized Experience',
    description: 'Tailored beauty routines just for you.',
  },
  {
    image: '/path/to/image5.jpg',
    title: 'Beauty Insights',
    description: 'Stay updated with the latest beauty trends.',
  },
  {
    image: '/path/to/image6.jpg',
    title: 'Quality Assurance',
    description: 'Only the best products, guaranteed.',
  },
];

const WhyYouWillLoveBeautyButler: FC = () => {
  return (
    <motion.div
      className="relative z-10 bg-white pb-10 px-6 rounded-t-[5rem] w-full mx-auto -mt-16 bottom-44 lg:mt-0"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-5 md:p-10 mt-5 w-full">
        <h2 className="text-4xl md:text-4xl font-bold my-5 text-center font-apfelregular">
          Why You Will Love Beauty Butler
        </h2>
        

        {/* Responsive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className={`bg-gray-50 p-5 border-t border-b ${
                (index % 3 !== 2 && 'border-r') || '' // Add right border to all except last column
              } ${index % 3 === 0 ? 'border-l-0' : ''} ${index % 3 === 2 ? 'border-r-0' : ''}`} // No left border on the first column and no right border on the last column
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WhyYouWillLoveBeautyButler;
