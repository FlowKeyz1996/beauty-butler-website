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
      header: 'Amazing Service!',
      description: 'Beauty Butler made my life so much easier. I loved the personalized experience.',
      imageUrl: '/path/to/image1.jpg', // Replace with real image paths
      rating: 5,
      userName: 'Jane Doe',
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
      <div className="relative w-2/3 h-3/4 flex items-center justify-center">
        {cards.map((card, index) => {
          const isCurrent = index === currentIndex;
          const stackIndex = (index - currentIndex + cards.length) % cards.length;

          return (
            <motion.div
              key={card.id}
              className="absolute w-full h-2/3 bg-white rounded-lg shadow-lg p-6 flex flex-col items-start justify-between" // Changed h-full to h-2/3
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
                <img src="/path/to/small/image.jpg" alt="Icon" className="w-6 h-6 mr-2" />
                <h2 className="text-xl font-bold">{card.header}</h2>
              </div>

              {/* Description */}
              <p className="text-left text-sm mb-4">{card.description}</p>

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
                        className={`mr-1 ${
                          i < card.rating ? 'text-[#8877D8]' : 'text-gray-300'
                        }`}
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
        className="absolute left-12 p-3 w-12 h-12 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 z-20"
        onClick={handlePrev}
      >
        <FaArrowLeft className="text-[#8877D8]" />
      </button>

      {/* Right Arrow */}
      <button
        className="absolute right-12 p-3 w-12 h-12 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 z-20"
        onClick={handleNext}
      >
        <FaArrowRight className="text-[#8877D8]" />
      </button>
    </div>
  );
};

export default BeautyBuzzyCards;
