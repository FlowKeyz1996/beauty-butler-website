import React from "react";
import Image from "next/image";

const BeautyButlerOffer: React.FC = () => {
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
        {/* First Div */}
        <div className="text-center max-w-xs w-full">
          {/* Text Outside */}
          <h2 className="text-xl font-semibold mb-2">Premium Butler Service</h2>

          {/* Button Inside */}
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md mb-4 w-full hover:bg-blue-600">
            Get Premium Offer
          </button>

          {/* Icon Image with Text */}
          <div className="flex items-center justify-center gap-2">
            <Image
              src="/check-mark.png"
              alt="Check mark"
              width={20}
              height={20}
            />
            <span>Top-tier beauty products</span>
          </div>
        </div>

        {/* Second Div */}
        <div className="text-center max-w-xs w-full">
          {/* Text Outside */}
          <h2 className="text-xl font-semibold mb-2">Standard Butler Service</h2>

          {/* Button Inside */}
          <button className="bg-green-500 text-white px-6 py-3 rounded-md mb-4 w-full hover:bg-green-600">
            Get Standard Offer
          </button>

          {/* Icon Image with Text */}
          <div className="flex items-center justify-center gap-2">
            <Image
              src="/check-mark.png"
              alt="Check mark"
              width={20}
              height={20}
            />
            <span>Affordable beauty solutions</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeautyButlerOffer;
