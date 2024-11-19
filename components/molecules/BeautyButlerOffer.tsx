import React from "react";
import Image from "next/image";

const BeautyButlerOffer: React.FC = () => {
  const premiumFeatures = [
    "Calendar & appointment scheduling",
    "Instant Online Booking",
    "Marketplace Visibility",
    "Multiple Payment Options",
    "Professional Business App",
    "Client Profiles & Management Tools",
    "Admin & Team Management Tools",
    "Smart Reminders & Notifications",
    "Reporting & Analytics",
    "Messaging & Chats",
    "Email Marketing Tools",
    "Customer support",
    "Data Migration",
  ];

  const standardFeatures = [
    "Calendar & appointment scheduling",
    "Instant Online Booking",
    "Prioritized Marketplace Visibility",
    "Multiple Payment Options",
    "Professional Business App",
    "Client Profiles & Management Tools",
    "Admin & Team Management Tools",
    "Smart Reminders & Notifications",
    "Advanced Reporting & Analytics",
    "Messaging & Chats",
    "Advanced Email Marketing Tools",
    "Priority 24/7 support",
    "Data Migration",
    "Loyalty Programs",
    "Memberships & Packages",
  ];

  return (
    <section className="p-8 flex flex-col my-20 items-center bg-[#F7f7ff]">
      <h1 className="text-2xl sm:text-4xl text-center mb-4 font-apfelmittel mt-0 sm:mt-10">
        Free booking platform for businesses
      </h1>
      <p className="text-sm sm:text-lg text-center semi-bold text-[#475467] sm:mb-8 font-euclidlight">
        Beauty Butler is free to use. We only charge a small processing fee when you get paid.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-start sm:gap-8 w-full h-[100%]">
        {/* Offer 1 Header */}
        <div className="flex flex-col items-center w-full md:max-w-[40%] sm:my-5 h-[40.3rem] md:h-[52.5rem] sm:h-[52.5rem]">
          <h3 className="text-2xl md:text-4xl my-6 md:my-10 text-center text-[#101828] font-apfelmittel">
            Beauty Butler Pro
          </h3>
          {/* Premium Butler Service Card */}
          <div className="text-left bg-white p-6 rounded-3xl flex flex-col pt-10 justify-between flex-1 w-full h-full md:w-full md:h-full">
            <div className="flex flex-col items-start gap-2 mb-auto">
              {premiumFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 mb-2">
                  <Image src="/check.svg" alt="Check mark" width={20} height={20} />
                  <span className="font-euclidlight text-lg text-[#475467] md:text-lg text-sm">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-auto"></div>
          </div>
        </div>

        {/* Offer 2 Header */}
        <div className="flex flex-col items-center w-full md:max-w-[40%] my-5 md:h-auto">
          <h3 className="text-2xl md:text-4xl my-6 md:my-10 font-apfelmittel text-center text-[#101828]">
            Beauty Butler Enterprise
          </h3>
          {/* Standard Butler Service Card */}
          <div
            className="text-left bg-[#8877D8] p-6 rounded-3xl flex flex-col pt-10 justify-between flex-1 w-full h-full md:w-full md:h-full relative"
            style={{ backgroundImage: 'url(/background-pattern.png)' }}
          >
            <div className="flex flex-col items-start gap-2 text-white">
              {standardFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 mb-2">
                  <Image src="/Path.svg" alt="Check-mark" width={20} height={20} />
                  <span className="font-euclidlight text-lg text-[#ffffff] md:text-lg text-sm">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Small image positioned at the bottom-right, hidden on mobile */}
            <div className="absolute bottom-[-20px] right-[-20px] hidden md:block">
              <Image
                src="/featurescardimg.svg"
                alt="Decorative image"
                width={350}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeautyButlerOffer;
