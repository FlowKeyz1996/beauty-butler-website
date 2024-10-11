import React from 'react';

interface FeatureCard {
  title: string;
  description: string;
  imageSrc: string;
}

const features: FeatureCard[] = [
  { title: 'Beauty Butler Marketplace', description: 'Attract a flood of new customers with Beauty Butler. Your business will be effortlessly discoverable by your ideal clientele with our marketplace app and our clever algorithm.', imageSrc: '/featureimgone.svg' },
  { title: 'Flexible appointment scheduling', description: 'Make your schedule available anytime, anywhere. Never miss a booking, we automate appointment scheduling so you can focus on what’s important, your clients!', imageSrc: '/featureimgtwo.svg' },
  { title: 'Payment Processing', description: 'Deliver a silky-smooth, ultra-fast checkout and tipping experience your clients will love. We’re here to help with questions on refunds, transactions, and payment summaries too.', imageSrc: '/featureimgthree.svg' },
  { title: 'Marketing', description: 'Keep your clients coming back using out built-in marketing campaigns. Create discounts and promotions that can be sold online. Keep your clients coming back by making them feel special using our email marketing tools. ', imageSrc: '/featureimgouttwo.svg' },
  { title: 'Online Booking', description: 'Give your clients easy access to your services, price list and calendar by creating a mini web page to take bookings. Clients can book via your social media or website.', imageSrc: '/featureimgfive.svg' },
  { title: 'Reporting and Analytics', description: "Unlock the power of data with Beauty Butler's analytics tools. Gain valuable insights into your business performance, pinpointing what's working, what isn't, and how to enhance every aspect of your operation.", imageSrc: '/featureimgsix.svg' },
  { title: 'Client Management', description: 'Customize appointments and improve retention with client profiles that include information on past visits & special accommodations. Take client communication to the next level with two-way texting built into your platform.', imageSrc: '/featureimgseven.svg' },
  { title: 'Staff Management', description: 'Stay in control of your business and keep your team focused and organized with staff dashboards, rosters and automated appointment updates.', imageSrc: '/featureimgout.svg' },
  { title: 'Customer Support', description: 'Have a question, issue, or just want to touch base with some of our experts? Our knowledgeable support team cares about your experience and is here to help you within minutes, not days.', imageSrc: '/featureimgeight.svg' },
];

const MainFeaturesCards: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 rounded-xl relative z-10 bottom-43">
      <div className="flex overflow-x-scroll sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 hide-scroll-bar">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="min-w-[280px] sm:min-w-0 bg-[#F8F9Fb] shadow-lg rounded-2xl border p-4 sm:p-6 flex flex-col items-center justify-between"
          >
            {/* Header and Description */}
            <div>
              <h3 className="text-lg sm:text-2xl lg:text-3xl font-semibold mb-2 text-center text-[#1D2939] font-apfelregular">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 text-center font-euclidmedium">
                {feature.description}
              </p>
            </div>

            {/* Image at the bottom */}
            <div className="w-full flex justify-center mt-4">
              <img
                src={feature.imageSrc}
                alt={feature.title}
                className="w-40 h-40 sm:w-48 sm:h-48 lg:w-52 lg:h-52 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainFeaturesCards;
