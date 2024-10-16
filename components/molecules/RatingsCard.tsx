import { useState } from "react";

interface CardProps {
  id: number;
  rating: number;
  text: string;
}

const cardsData: CardProps[] = [
  { id: 1, rating: 5, text: "Amazing platform!" },
  { id: 2, rating: 4, text: "Very useful for investments." },
  { id: 3, rating: 3, text: "Good experience, but room for improvement." },
  { id: 4, rating: 5, text: "Highly recommend!" },
  { id: 5, rating: 4, text: "Reliable and easy to use." },
  { id: 6, rating: 3, text: "Decent, but could be better." },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          fill={i < rating ? "green" : "gray"} // Changed star color to green
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8" // Larger star size
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 3.4l1.586 4.528 4.884.041c.356 0 .498.46.214.673l-3.842 2.925 1.267 4.702c.13.478-.411.875-.79.57L12 14.51l-3.568 2.929c-.378.305-.92-.092-.79-.57l1.268-4.702-3.842-2.925c-.283-.214-.141-.673.215-.673l4.884-.041L11.25 3.4z"
          />
        </svg>
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
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-8">Customer Reviews</h1>

      <div className="relative w-4/5 h-96 flex items-center justify-center"> {/* 80% of screen width */}
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 mx-8" // Added margin for spacing
        >
          Previous
        </button>

        {/* Card */}
        <div
          key={cardsData[currentCard].id}
          className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-lg w-full h-full transition-all duration-500 ease-in-out"
        >
          <p className="text-lg mb-4 w-full text-center">{cardsData[currentCard].text}</p>
          <StarRating rating={cardsData[currentCard].rating} />
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 mx-8" // Added margin for spacing
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RatingsCard;
