import React from 'react'

interface CardProps {
  title: string;
  imageSrc: string;
  textItems: string[];
}

const Card: React.FC<CardProps> = ({ title, imageSrc, textItems }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 m-4 w-full sm:w-1/2">
      <h2 className="text-xl font-bold text-center mb-4">{title}</h2>
      <div className="flex flex-col items-center">
        <img src={imageSrc} alt="Card Image" className="w-32 h-32 object-cover rounded-full mb-4" />
        <div className="flex flex-col items-center">
          {textItems.map((text, index) => (
            <p key={index} className="text-sm text-gray-600 mb-1">{text}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

const BeautyButlerOffer: React.FC = () => {
  const cardData = [
    {
      title: "Exclusive Offer 1",
      imageSrc: "/path-to-your-image.jpg",
      textItems: Array(10).fill("Sample text item 1"), // Repeat text items
    },
    {
      title: "Exclusive Offer 2",
      imageSrc: "/path-to-your-image.jpg",
      textItems: Array(10).fill("Sample text item 2"), // Repeat text items
    },
  ];

  return (
    <section className="flex flex-col items-center py-12 bg-gray-100">
      <div className="flex flex-wrap justify-center max-w-4xl w-full">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            imageSrc={card.imageSrc}
            textItems={card.textItems}
          />
        ))}
      </div>
    </section>
  );
};

export default BeautyButlerOffer;
