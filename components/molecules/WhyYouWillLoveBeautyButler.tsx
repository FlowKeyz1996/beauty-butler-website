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
      className="relative z-10 bg-white pb-10 px-6 rounded-t-[5rem] w-full mx-auto -mt-16 bottom-44 lg:mt-0"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-5 md:p-10 mt-5 w-full">
        <h2 className="text-4xl md:text-4xl font-bold my-20 text-center font-apfelregular">
          Why You Will Love Beauty Butler
        </h2>

        {/* Responsive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className={`bg-gray-50 p-5 border border-gray-200 ${
                index % 3 === 0 ? 'border-l-0' : '' // No left border on the first column
              } ${
                index % 3 === 2 ? 'border-r-0' : '' // No right border on the last column
              } ${
                index < 3 ? 'border-t-0' : '' // No top border on the first row
              } ${
                index >= cardData.length - 3 ? 'border-b-0' : '' // No bottom border on the last row
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl text-center font-semibold mb-2 font-apfelregular">{card.title}</h3>
              <p className="text-gray-600 font-euclidlight text-center">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WhyYouWillLoveBeautyButler;
