import { useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

interface CardProps {
  id: number;
  rating: number;
  title: string;
  description: string;
  text: string;
  imageUrl: string;
}

const cardsData: CardProps[] = [
  { id: 1, rating: 5, title: "A Must-Have for Every Beauty Enthusiast!", description: "I’ve been using Beauty Butler for a few weeks now, and I must say, it’s an absolute game-changer! As someone who juggles a busy work schedule and a social life, finding time to book beauty treatments was always a hassle. But with Beauty Butler, everything is just a tap away.", text: "Precious Adebayo", imageUrl: "/iconhead.svg" },
  { id: 2, rating: 4, title: "Very Useful", description: "Made investments much easier.", text: "Very useful for investments.", imageUrl: "https://via.placeholder.com/50" },
  { id: 3, rating: 3, title: "Good, Needs Work", description: "There is some room for improvement.", text: "Good experience, but room for improvement.", imageUrl: "https://via.placeholder.com/50" },
  { id: 4, rating: 5, title: "Highly Recommend", description: "This platform exceeded my expectations.", text: "Highly recommend!", imageUrl: "https://via.placeholder.com/50" },
  { id: 5, rating: 4, title: "Reliable and Easy", description: "The platform is easy to use and reliable.", text: "Reliable and easy to use.", imageUrl: "https://via.placeholder.com/50" },
  { id: 6, rating: 3, title: "Decent, but OK", description: "It’s decent but could be better.", text: "Decent, but could be better.", imageUrl: "https://via.placeholder.com/50" },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex space-x-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar
          key={i}
          className={`mr-1 ${i < rating ? 'text-[#8877D8]' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );
};

const RatingsCard = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const handleNext = () => {
    setCurrentCard((prev) => (prev + 1) % cardsData.length);
  };

  const handlePrev = () => {
    setCurrentCard((prev) => (prev - 1 + cardsData.length) % cardsData.length);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[70%] my-24 bg-[#F7F7ff]">
      <div className="flex items-center justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl my-9 font-apfelmittel text-[#101828] text-center">Beauty Buzz</h1>
        <img src="/beautybuzzicon.svg" alt="Icon" className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mr-2 mx-5" />
      </div>

      <div className="relative w-full sm:w-4/5 md:w-4/5 lg:w-3/5 xl:w-2/3 flex items-center justify-center">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="px-3 py-3 sm:px-5 sm:py-4 bg-[#Edecff] rounded-full mx-4 sm:mx-8 flex items-center justify-center"
        >
          <img
            src="/reviewarrowleft.svg"
            alt="Previous"
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
        </button>

        {/* Animated Card */}
        <motion.div
          key={cardsData[currentCard].id}
          className="flex flex-col justify-center bg-white p-4 sm:p-6 md:p-8 rounded-3xl mb-8 sm:mb-12 lg:mb-16 mt-4 w-[100%] sm:w-4/5 md:w-4/5 lg:w-full xl:w-full h-auto lg:h-auto transition-all"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-apfelmittel text-[#101828]">{cardsData[currentCard].title}</h2>
          <p className="text-sm sm:text-base my-4 font-euclidlight">{cardsData[currentCard].description}</p>

          <div className="flex items-center space-x-4 my-4 sm:my-6">
            <img
              src={cardsData[currentCard].imageUrl}
              alt="User"
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full"
            />
            <div>
              <p className="text-base sm:text-lg font-medium text-center font-apfelmittel text-[#101828]">
                {cardsData[currentCard].text}
              </p>
              <StarRating rating={cardsData[currentCard].rating} />
            </div>
          </div>
        </motion.div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="px-3 py-3 sm:px-5 sm:py-4 bg-[#Edecff] rounded-full mx-4 sm:mx-8 flex items-center justify-center"
        >
          <img
            src="/reviewarrowright.svg"
            alt="Next"
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
        </button>
      </div>
    </div>
  );
};

export default RatingsCard;
