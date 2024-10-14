import { FC } from 'react';
import { motion } from 'framer-motion';

interface CardData {
  image: string;
  title: string;
  description: string;
}

const cardData: CardData[] = [
  {
    image: '/whyyouwilllovebeautybutler.svg',
    title: 'Effortless Booking',
    description: 'Skip the hassle and schedule your beauty sessions with just a few taps – it’s as easy as 1-2-3.',
  },
  {
    image: '/whyyouwilllovebeautybutlertwo.svg',
    title: 'Expert Beauty Pros',
    description: 'We’ve partnered with the best salons, spas, and beauty experts to bring you premium services.',
  },
  {
    image: '/whyyouwilllovebeautybutlerthree.svg',
    title: 'Pamper Yourself Anywhere',
    description: 'Experience top-notch beauty treatments from the comfort of your home, office, or anywhere you choose.',
  },
  {
    image: '/whyyouwilllovebeautybutlerfour.svg',
    title: 'Secure Payments',
    description: 'Hassle-free and secure payments for a smooth, stress-free experience.',
  },
  {
    image: '/whyyouwilllovebeautybutlerfive.svg',
    title: 'Exclusive Perks & Deals',
    description: 'Enjoy members-only discounts and perks, including access to our loyalty program.',
  },
  {
    image: '/whyyouwilllovebeautybutlersix.svg',
    title: 'Safety First',
    description: 'We’re committed to your safety and we’ll uphold the strictest health and hygiene standards.',
  },
];

const WhyYouWillLoveBeautyButler: FC = () => {
  return (
    <motion.div
      className="relative z-10 bg-white px-4 sm:px-6 rounded-t-[3rem] lg:rounded-t-[5rem] w-full mx-auto -mt-16 bottom-40 lg:mt-0"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-5 relative w-full bg-white top-8 sm:top-11">
        <h2 className="text-3xl sm:text-4xl md:text-5xl my-10 sm:my-20 text-center text-[#101828] font-apfelregular">
          Why You Will Love Beauty Butler
        </h2>

        {/* Responsive Cards Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 bg-white">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className={`bg-white p-4 sm:p-5 border border-gray-100 ${index === 0 || index === 3 ? 'border-l-0' : ''} ${index === 2 || index === 5 ? 'border-r-0' : ''} ${index < 3 ? 'border-t-0' : ''} ${index >= 3 ? 'border-b-0' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-40 sm:h-48 object-contain mb-4"
              />
              <h3 className="text-lg sm:text-xl text-center font-semibold mb-2 font-apfelregular">
                {card.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 font-euclidlight text-center">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="sm:hidden flex overflow-x-auto space-x-4 pb-5">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className="min-w-[90%] bg-gray-50 p-4 sm:p-5 border border-gray-200 rounded-md"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-40 sm:h-48 object-contain mb-4"
              />
              <h3 className="text-lg sm:text-xl text-center font-semibold mb-2 font-apfelregular">
                {card.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 font-euclidlight text-center">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WhyYouWillLoveBeautyButler;
