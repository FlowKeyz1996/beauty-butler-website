import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface Card {
  id: number;
  content: string;
}

const BeautyBuzzyCards = () => {
  const cards: Card[] = [
    { id: 1, content: 'Card 1' },
    { id: 2, content: 'Card 2' },
    { id: 3, content: 'Card 3' },
    { id: 4, content: 'Card 4' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full h-64 flex justify-center items-center">
      {/* Left Arrow */}
      <button
        className="absolute left-0 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 z-20"
        onClick={handlePrev}
      >
        <FaArrowLeft />
      </button>

      {/* Cards */}
      <div className="relative w-1/2 h-full flex items-center justify-center">
        {cards.map((card, index) => {
          const isCurrent = index === currentIndex;
          const stackIndex = (index - currentIndex + cards.length) % cards.length;

          return (
            <motion.div
              key={card.id}
              className="absolute w-full h-3/4 bg-blue-300 rounded-lg shadow-lg flex items-center justify-center"
              initial={{
                scale: isCurrent ? 1 : 0.8 + 0.05 * stackIndex, // Larger scale for current card
                y: -10 * stackIndex, // Slight upwards shift for stacking
                opacity: isCurrent ? 1 : 0.7,
              }}
              animate={{
                scale: isCurrent ? 1 : 0.8 + 0.05 * stackIndex,
                y: -10 * stackIndex, // Upwards stacking instead of downwards
                zIndex: cards.length - stackIndex, // Control card stacking order
                opacity: isCurrent ? 1 : 0.7,
              }}
              transition={{ duration: 0.5 }}
              style={{
                zIndex: cards.length - stackIndex, // Ensure correct card stacking
              }}
            >
              <p>{card.content}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Right Arrow */}
      <button
        className="absolute right-0 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 z-20"
        onClick={handleNext}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default BeautyBuzzyCards;
