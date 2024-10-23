import { FC, useState, useEffect } from 'react';
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const cardWidth = e.currentTarget.clientWidth / 1; // Adjust according to the number of visible cards
    const newIndex = Math.round(scrollLeft / cardWidth);
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const updateIndex = () => {
      const scrollContainer = document.querySelector('.flex');
      if (scrollContainer) {
        const scrollLeft = scrollContainer.scrollLeft;
        const cardWidth = scrollContainer.clientWidth / 1; // Adjust according to the number of visible cards
        const newIndex = Math.round(scrollLeft / cardWidth);
        setCurrentIndex(newIndex);
      }
    };

    window.addEventListener('resize', updateIndex);
    return () => window.removeEventListener('resize', updateIndex);
  }, []);

  return (
    <motion.div
      className="relative z-10 bg-white px-4 sm:px-6 rounded-t-[2rem] sm:rounded-t-[5rem] w-full mx-auto -mt-14 bottom-20 sm:-mt-16 sm:bottom-40 lg:mt-0"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-5 relative w-full bg-white top-8 sm:top-11">
        <h2 className="text-3xl sm:text-4xl md:text-5xl my-10 sm:my-10 text-center text-[#101828] font-apfelmittel">
          Why You Will Love Beauty Butler
        </h2>

        {/* Responsive Cards Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-0 bg-white">
          {cardData.map((card, index) => {
            // Determine if the card is in the first row, last row, first column, or last column
            const isFirstColumn = index % 3 === 0;
            const isLastColumn = index % 3 === 2;
            const isTopRow = index < 3;
            const isBottomRow = index >= 3;

            return (
              <motion.div
                key={index}
                className={`bg-white p-4 sm:p-5 border border-gray-100
                ${isFirstColumn ? 'border-l-0' : ''} 
                ${isLastColumn ? 'border-r-0' : ''} 
                ${isTopRow ? 'border-t-0' : ''} 
                ${isBottomRow ? 'border-b-0' : ''}`}
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
            );
          })}
        </div>

        {/* Mobile Carousel */}
        <div className="sm:hidden flex overflow-x-auto space-x-4 pb-5" onScroll={handleScroll}>
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className="min-w-[90%] p-4 sm:p-5 border-gray-200 rounded-md"
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

        {/* Scroll Indicator - only on mobile screens */}
        <div className="flex justify-center mt-6 sm:hidden">
          {cardData.map((_, index) => (
            <div
              key={index}
              className={`h-3 rounded-full mx-1 ${currentIndex === index ? 'bg-[#8878D8] w-12' : 'bg-gray-300 w-3'}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WhyYouWillLoveBeautyButler;
