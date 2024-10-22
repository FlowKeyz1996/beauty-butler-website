import React, { useEffect, useState } from 'react';

interface FeatureCard {
  title: string;
  description: string;
  imageSrc: string;
}

const features: FeatureCard[] = [
  { title: 'Beauty Butler Marketplace', description: 'Attract a flood of new clients! Your business will be effortlessly discoverable by your ideal clientele, with our marketplace app and clever algorithm.', imageSrc: '/featureimgone.svg' },
  { title: 'Flexible appointment scheduling', description: 'Make your schedule available anytime, anywhere. Never miss a booking, we automate appointment scheduling so you can focus on what’s important!', imageSrc: '/featureimgbold.svg' },
  { title: 'Payment Processing', description: ' Deliver a smooth, ultra-fast checkout experience your clients will love. We’re here to help with questions on transactions, and payment summaries too.', imageSrc: '/featureimg3bold.svg' },
  { title: 'Marketing', description: 'Keep your clients coming back using our built-in marketing campaigns and email marketing tools. Create discounts and promotions you can sell online.', imageSrc: '/featureimgouttwo.svg' },
  { title: 'Online Booking', description: ' Give your clients easy access to your services, price list and calendar with a web page to take bookings. Clients can book using your booking link.', imageSrc: '/featureimgfive.svg' },
  { title: 'Reporting and Analytics', description: "Unlock the power of data with our analytics tools. Gain insights into your business performance, and how to enhance every aspect of your operations.", imageSrc: '/featureimgsix.svg' },
  { title: 'Client Management', description: 'Customize appointments and improve retention with client profiles. Take communication to the next level with chats built into the Beauty Butler app.', imageSrc: '/featureimgboldclient.svg' },
  { title: 'Staff Management', description: 'Stay in control of your business and keep your team focused and organized with staff dashboards, rosters and automated appointment updates.', imageSrc: '/featureimgseven.svg' },
  { title: 'Customer Support', description: 'Have a question, or just want to touch base with some of our experts? Our knowledgeable support team cares about you and is here to help you ASAP.', imageSrc: '/featureimgeight.svg' },
];

const MainFeaturesCards: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const cardWidth = e.currentTarget.clientWidth / 2; // Adjust according to the number of visible cards
    const newIndex = Math.round(scrollLeft / cardWidth);
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const updateIndex = () => {
      const scrollContainer = document.querySelector('.flex');
      if (scrollContainer) {
        const scrollLeft = scrollContainer.scrollLeft;
        const cardWidth = scrollContainer.clientWidth / 2; // Adjust according to the number of visible cards
        const newIndex = Math.round(scrollLeft / cardWidth);
        setCurrentIndex(newIndex);
      }
    };

    window.addEventListener('resize', updateIndex);
    return () => window.removeEventListener('resize', updateIndex);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 my-4 sm:my-20 rounded-3xl relative z-10 bottom-43">
      <div 
        className="flex overflow-x-scroll sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 hide-scroll-bar" 
        onScroll={handleScroll}
      >
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="min-w-[350px] sm:min-w-0 bg-[#F8F9Fb] rounded-3xl sm:rounded-2xl  border p-4 sm:p-6 flex flex-col items-center justify-between"
          >
            {/* Header and Description */}
            <div>
              <h3 className="text-lg sm:text-2xl lg:text-3xl font-semibold mb-2 text-center text-[#1D2939] font-apfelregular">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-[#475467] text-center font-euclidlight">
                {feature.description}
              </p>
            </div>

            {/* Image at the bottom */}
            <div className="w-full flex justify-center mt-4">
              <img
                src={feature.imageSrc}
                alt={feature.title}
                className="relative  top-4 sm:top-6 object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Indicator - only on mobile screens */}
      <div className="flex justify-center mt-6 sm:hidden">
        {features.map((_, index) => (
          <div
            key={index}
            className={`h-3 rounded-full mx-1 ${currentIndex === index ? 'bg-[#8878D8] w-12' : 'bg-gray-300 w-3'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MainFeaturesCards;
