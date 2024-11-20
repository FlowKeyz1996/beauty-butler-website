import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TagHeader from '../atoms/TagHeader';

type TextWithIcon = {
  imgSrc: string;
  text: string;
  description: string;
};

const BenefitSection = () => {
  const controlLeft = useAnimation();
  const controlRight = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const items: TextWithIcon[] = [
    { 
      imgSrc: '/user-benefit-icon.svg', 
      text: 'Increased client base & visibility',
      description: 'Tap into a larger audience by showcasing your services to our growing user base. Leverage our marketing efforts to enhance your brand visibility.' 
    },
    { 
      imgSrc: '/naira.svg', 
      text: 'Increased bookings & revenue',
      description: 'Fill up your schedule with more appointments by being part of a trusted and popular beauty marketplace.' 
    },
    { 
      imgSrc: '/headphone.svg', 
      text: 'Improved quality & reliability',
      description: 'Access our dedicated support team to assist you with any questions or issues, ensuring smooth operations for your business.' 
    },
    { 
      imgSrc: '/phoneicon.svg', 
      text: 'Improved customer satisfaction',
      description: 'Provide your clients with an easy and convenient way to book their favorite beauty treatments from anywhere.' 
    },
    { 
      imgSrc: '/bellicon.svg', 
      text: 'Reduce no shows & cancellations',
      description: 'Reduce no-shows and last-minute cancellations with automated reminders for your clients.' 
    },
  ];

  useEffect(() => {
    if (inView) {
      controlLeft.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1.5, ease: "easeOut" },
      });
      controlRight.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1.5, ease: "easeOut" },
      });
    }
  }, [controlLeft, controlRight, inView]);

  // Adjusted handleScroll to update currentIndex when a card is fully on the screen
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const cardWidth = e.currentTarget.clientWidth/1; // Ensure full card width is considered
    const newIndex = Math.round((scrollLeft + cardWidth / 2) / cardWidth);

    // Update index only if it has changed to avoid unnecessary renders
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <motion.div
    id="benefit-section"
      ref={ref}
      className="w-full my-14 px-4 py-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12 sm:flex-col-reverse"
    >
      {/* Left side - Image fades in from the left */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={controlLeft}
        className="w-full md:w-1/2 h-full flex justify-center"
      >
        <img
          src="/benefitlowimg.png"
          alt="provider-benefit-image"
          className="object-contain"
        />
      </motion.div>

      {/* Right side - Header, Descriptive Paragraph and Text with Icons */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={controlRight}
        className="w-full md:w-1/2 h-full flex flex-col space-y-4 justify-center text-left"
      >
        <div className="">
          <TagHeader text="Our Benefits" position="left" maxWidth='max-w-[150px]'/>
        </div>
        <h2 className="text-3xl md:text-4xl font-apfelmittel max-w-lg text-[#101828]">
          Take your beauty business to the next level
        </h2>
        <p className="text-base md:text-lg text-[#475467] font-euclidlight max-w-lg mx-auto md:mx-0">
          Our all-in-one management software automates scheduling, manages customer data, processes payments, and more.
        </p>

        {/* Benefits List - Horizontal scroll on mobile */}
        <div className="space-y-6 md:space-y-0 overflow-x-auto hide-scroll-bar" onScroll={handleScroll}>
          <div className="flex flex-row md:flex-col items-start space-x-6 md:space-x-0">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-shrink-0 flex-col items-start text-left space-y-2 md:space-y-1 max-w-lg"
              >
                <div className="flex items-center justify-start space-x-2 mt-2">
                  <img src={item.imgSrc} alt={item.text} className="w-10 h-10" />
                  <p className="text-lg font-apfelmittel">{item.text}</p>
                </div>
                <p className="text-md text-[#475467] ml-12 font-euclidlight ">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator - only on mobile screens */}
        <div className="flex justify-center mt-6 sm:hidden">
          {items.map((_, index) => (
            <div
              key={index}
              className={`h-3 rounded-full mx-1 ${currentIndex === index ? 'bg-[#8878D8] w-12' : 'bg-gray-300 w-3'}`}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BenefitSection;
