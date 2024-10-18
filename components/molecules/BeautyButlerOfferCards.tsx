import React from 'react';

const BeautyButlerOfferCards = () => {
  // Array of 10 items for each card
  const cardItems = Array.from({ length: 10 }, (_, index) => `Item ${index + 1}`);

  return (
    <div className="flex flex-col items-center justify-center p-6">
      {/* Centered text */}
      <h2 className="text-2xl font-bold mb-6">Our Special Beauty Butler Offers</h2>

      <div className="flex flex-row justify-between w-full">
        {/* Offer 1 Header */}
        <div className="flex flex-col items-center mx-2">
          <h3 className="text-xl font-semibold mb-4">Offer 1</h3>
          <div className="flex-1 p-4 bg-black text-white shadow-md">
            <ul>
              {cardItems.map((item, index) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Offer 2 Header */}
        <div className="flex flex-col items-center mx-2">
          <h3 className="text-xl font-semibold mb-4">Offer 2</h3>
          <div className="flex-1 p-4 bg-black text-white shadow-md">
            <ul>
              {cardItems.map((item, index) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautyButlerOfferCards;
