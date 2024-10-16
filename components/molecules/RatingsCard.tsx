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
  { id: 1, rating: 5, title: "A Must-Have for Every Beauty Enthusiast!", description: "I’ve been using Beauty Butler for a few weeks now, and I must say, it’s an absolute game-changer! As someone who juggles a busy work schedule and a social life, finding time to book beauty treatments was always a hassle. But with Beauty Butler, everything is just a tap away.", text: "Amazing platform!", imageUrl: "/iconhead.svg" },
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
      <h1 className="text-5xl my-9 font-apfelmittel text-[#101828]">Beauty Buzz</h1>
      <img src="/beautybuzzicon.svg" alt="Icon" className="w-20 h-20 mr-2 mx-5" />
      </div>

      <div className="relative w-4/5 h-full flex items-center justify-center">
        {/* Previous Button (Left Image) */}
        <button
          onClick={handlePrev}
          className="px-5 py-4 bg-[#Edecff]  rounded-full mx-8 flex items-center justify-center"
        >
          <img
            src="/reviewarrowleft.svg" // Replace this with your "previous" button image source
            alt="Previous"
            className="w-8 h-8"
          />
        </button>

        {/* Animated Card */}
        <motion.div
          key={cardsData[currentCard].id}
          className="flex flex-col justify-center bg-white p-8 rounded-3xl mb-16  mt-8 w-full h-full transition-all"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <h2 className="text-3xl font-apfelmittel text-[#101828]">{cardsData[currentCard].title}</h2>

          {/* Description */}
          <p className="text-base my-4 font-euclidlight">{cardsData[currentCard].description}</p>

          {/* Review Text */}
          

          {/* Image and Star Ratings in Flexbox */}
          <div className="flex items-center space-x-4 my-7">
            {/* Rounded Image */}
            <img
              src={cardsData[currentCard].imageUrl}
              alt="User"
              className="w-16 h-16 rounded-full"
            />
            

            {/* Star Ratings */}
            <div>
            <p className="text-lg my-2 w-full text-center">{cardsData[currentCard].text}</p>
            <StarRating rating={cardsData[currentCard].rating} />
            </div>
            
          </div>
        </motion.div>

        {/* Next Button (Right Image) */}
        <button
          onClick={handleNext}
          className="px-5 py-4 bg-[#Edecff]  rounded-full  mx-8 flex items-center justify-center"
        >
          <img
            src="/reviewarrowright.svg" // Replace this with your "next" button image source
            alt="Next"
            className="w-8 h-8"
          />
        </button>
      </div>
    </div>
  );
};

export default RatingsCard;
