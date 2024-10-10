import React from "react";
import Image from "next/image";

const BeautyButlerOffer: React.FC = () => {
  // Expanded data arrays for each service's features
  const premiumFeatures = [
    "Top-tier beauty products",
    "Exclusive offers",
    "Priority customer support",
    "Customized beauty solutions",
    "Access to premium brands",
    "Personalized consultations",
    "Monthly beauty surprises",
    "Free shipping",
    "Special event access",
    "VIP discounts",
    "Exclusive spa treatments",
    "Luxury gift sets",
    "Bespoke skincare routines",
  ];

  const standardFeatures = [
    "Affordable beauty solutions",
    "Quality products",
    "Easy subscription options",
    "Expert advice",
    "Basic customer support",
    "Regular beauty tips",
    "Access to beauty tutorials",
    "Seasonal promotions",
    "Fast delivery",
    "Product samples",
    "Discounted beauty products",
    "Free beauty guides",
    "Referral bonuses",
    "Early access to sales",
    "Complimentary consultations",
  ];

  return (
    <section className="p-8 flex flex-col items-center">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-4">
        Exclusive Beauty Butler Offer
      </h1>

      {/* Description */}
      <p className="text-lg text-center mb-8 max-w-xl">
        Discover the ultimate beauty concierge experience with our exclusive
        offer tailored just for you.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full">
        {/* Premium Butler Service Header */}
        <h2 className="text-xl font-semibold text-center mb-2 md:mb-4">
          Premium Butler Service
        </h2>

        {/* Standard Butler Service Header */}
        <h2 className="text-xl font-semibold text-center mb-2 md:mb-4">
          Standard Butler Service
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-start gap-8 w-full">
        {/* Premium Butler Service */}
        <div className="text-left max-w-full w-full md:max-w-[48%] bg-white p-4 shadow-lg rounded-lg">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md mb-4 w-full hover:bg-blue-600">
            Get Premium Offer
          </button>

          {/* Mapping out premium features (13 items) */}
          <div className="flex flex-col items-start gap-2">
            {premiumFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 mb-2">
                <Image
                  src="/check.svg"
                  alt="Check mark"
                  width={20}
                  height={20}
                />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Standard Butler Service */}
        <div
          className="text-left max-w-full w-full md:max-w-[48%] bg-[#88778D] p-4 shadow-lg rounded-lg relative"
          style={{ backgroundImage: 'url(/background-pattern.png)' }}
        >
          <button className="bg-[#4A3F53] text-white px-6 py-3 rounded-md mb-4 w-full hover:bg-[#5A4F63]">
            Get Standard Offer
          </button>

          {/* Mapping out standard features (15 items) */}
          <div className="flex flex-col items-start gap-2 text-white">
            {standardFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 mb-2">
                <Image
                  src="/path.svg"
                  alt="Check mark"
                  width={20}
                  height={20}
                />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Small image positioned at the bottom-right */}
          <div className="absolute bottom-[-20px] right-[-20px]">
            <Image
              src="/small-image.png"
              alt="Decorative image"
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeautyButlerOffer;
