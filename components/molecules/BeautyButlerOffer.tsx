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
    <section className="p-8 flex flex-col my-20 items-center bg-[#F7f7ff]">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-4 font-apfelregular">
        Free booking platform for businesses
      </h1>

      {/* Description */}
      <p className="text-lg text-center semi-bold text-[#475467] mb-8 font-euclidlight">
        Beauty Butler is free to use. We only charge a small processing fee when you get paid.
      </p>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full">
        {/* Premium Butler Service Header */}
        <h2 className="text-3xl font-semibold mt-5 mx-5 font-apfelregular text-center mb-2 md:mb-4">
          Beauty Butler Pro
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-start gap-8 w-full">
        {/* Premium Butler Service */}
        <div className="text-left w-full md:max-w-[48%] bg-white p-6 shadow-lg rounded-lg h-[90%] flex flex-col justify-between">
          <button className="bg-[#8877D8] text-white px-2 py-4 rounded-xl my-5 mx-auto w-[75%] font-euclidmedium">
            Book a Demo
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
                <span className="font-euclidmedium text-[#475467]">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Standard Butler Service */}
        <div
          className="text-left w-full md:max-w-[48%] bg-[#8877D8] p-6 shadow-lg rounded-lg h-[90%] flex flex-col justify-between relative"
          style={{ backgroundImage: 'url(/background-pattern.png)' }}
        >
          <button className="bg-white text-[#8877D8] px-2 py-4 rounded-xl my-5 mx-auto w-[75%] font-euclidmedium">
            Book a Demo
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
                <span className="font-euclidmedium">{feature}</span>
              </div>
            ))}
          </div>

          {/* Small image positioned at the bottom-right */}
          <div className="absolute bottom-[-20px] right-[-20px]">
            <Image
              src="/featurescardimg.svg"
              alt="Decorative image"
              width={350}
              height={50}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeautyButlerOffer;
