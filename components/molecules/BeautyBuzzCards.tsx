import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';

interface Card {
  id: number;
  header: string;
  description: string;
  imageUrl: string;
  rating: number;
  userName: string;
}

const BeautyBuzzyCards = () => {
  const cards: Card[] = [
    {
      id: 1,
      header: 'A Must-Have for Every Beauty Enthusiast!',
      description: 'I’ve been using Beauty Butler for a few weeks now, and I must say, it’s an absolute game-changer! As someone who juggles a busy work schedule and a social life, finding time to book beauty treatments was always a hassle. But with Beauty Butler, everything is just a tap away.',
      imageUrl: '/iconhead.svg', // Replace with real image paths
      rating: 5,
      userName: 'Precious Adebayo',
    },
    {
      id: 2,
      header: 'Great Products',
      description: 'The product selection was superb and the delivery was fast.',
      imageUrl: '/path/to/image2.jpg',
      rating: 4,
      userName: 'John Smith',
    },
    {
      id: 3,
      header: 'Very Satisfied',
      description: 'Excellent customer service and great attention to detail.',
      imageUrl: '/path/to/image3.jpg',
      rating: 5,
      userName: 'Sarah Lee',
    },
    {
      id: 4,
      header: 'Exceptional!',
      description: 'Truly an exceptional service. I’m never going back to the old way.',
      imageUrl: '/path/to/image4.jpg',
      rating: 5,
      userName: 'Michael Johnson',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full h-[800px] flex flex-col justify-center items-center" style={{ backgroundColor: '#f7f7ff' }}>
      {/* Header with image */}
      <div className="flex items-center my-10">
        <h1 className="text-4xl font-bold text-black font-apfelregular">Beauty Buzz</h1>
        <img src="/beautybuzzicon.svg" alt="Icon" className="w-20 h-20 mr-2 mx-5" /> {/* Add the correct path to the image */}
      </div>

      {/* Cards */}
      <div className="relative w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl flex items-center justify-center">
        {cards.map((card, index) => {
          const isCurrent = index === currentIndex;
          const stackIndex = (index - currentIndex + cards.length) % cards.length;

          return (
            <motion.div
              key={card.id}
              className="absolute w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto bg-white rounded-lg shadow-lg p-6 flex flex-col items-start justify-between" // Ensuring responsiveness and auto height
              initial={{
                scale: isCurrent ? 1 : 0.8 + 0.05 * stackIndex,
                y: -10 * stackIndex,
                opacity: isCurrent ? 1 : 0.7,
              }}
              animate={{
                scale: isCurrent ? 1 : 0.8 + 0.05 * stackIndex,
                y: -10 * stackIndex,
                zIndex: cards.length - stackIndex,
                opacity: isCurrent ? 1 : 0.7,
              }}
              transition={{ duration: 0.5 }}
              style={{
                zIndex: cards.length - stackIndex,
              }}
            >
              {/* Small Image Above Header */}
              <div className="flex items-center mb-2">
                <h2 className="text-xl font-bold font-apfelregular">{card.header}</h2>
              </div>

              {/* Description */}
              <p className="text-left text-xl text-[#475467] mb-4 font-euclidlight">{card.description}</p>

              {/* User info and Rating */}
              <div className="flex items-center">
                {/* User Image */}
                <img
                  src={card.imageUrl}
                  alt={card.userName}
                  className="w-12 h-12 rounded-full mr-3"
                />

                {/* User Name and Rating */}
                <div className="text-left">
                  <p className="font-semibold">{card.userName}</p>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar
                        key={i}
                        className={`${i < card.rating ? 'text-[#8877D8]' : 'text-gray-300'} mr-1`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Left Arrow */}
      <button
        className="absolute left-4 sm:left-8 md:left-10 p-2 sm:p-3 w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 z-20"
        onClick={handlePrev}
      >
        <FaArrowLeft className="text-[#8877D8]" />
      </button>

      {/* Right Arrow */}
      <button
        className="absolute right-2 sm:right-8 md:right-2 p-2 sm:p-3 w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 z-20"
        onClick={handleNext}
      >
        <FaArrowRight className="text-[#8877D8]" />
      </button>
    </div>
  );
};

export default BeautyBuzzyCards;
