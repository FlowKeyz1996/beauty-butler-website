import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TagHeader from '../atoms/TagjHeader';

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

  return (
    <motion.div
      ref={ref}
      className="w-full my-14 px-4 py-4 flex flex-col mx-16 md:flex-row items-stretch justify-between gap-x-28"  // Adjusted gap-x-12 for horizontal spacing
    >
      {/* Left side - Image fades in from the left */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={controlLeft}
        className="md:w-2/5 w-full h-full"
      >
        <img
          src="/benefitimage.svg"
          alt="provider-benefit-image"
          className="rounded-lg mx-12 w-full  h-auto object-cover"
        />
        <img src="/Notifications.jpg" alt="notification-image"  className="relative bottom-[40rem]"/>
      </motion.div>

      {/* Right side - Header, Descriptive Paragraph and Text with Icons */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={controlRight}
        className="md:w-3/5 w-full h-full flex flex-col space-y-4 mx-5"
      >
        {/* <HeaderTip text="Features"/> */}
       <div>
        <TagHeader text="Our Benefit" position='left'/>
       </div>
        <h2 className="text-4xl font-bold max-w-lg font-apfelregular">Take your beauty business to the next level</h2>
        <p className="text-lg text-gray-600 max-w-lg font-euclidlight">
        Our all-in-one management software automates scheduling, manages customer data, processes payments, and more.
        </p>

        {items.map((item, index) => (
          <div key={index} className="flex flex-col space-y-1 max-w-[60%]">
            <div className="flex items-center space-x-2">
              <img src={item.imgSrc} alt={item.text} className="w-8 h-8" /> {/* Increased icon size */}
              <p className="text-lg font-semibold font-apfelregular leading-7">{item.text}</p> {/* Adjusted line height */}
            </div>
            <p className="text-sm text-gray-500 ml-7 font-euclidlight leading-6"> {/* Adjusted line height */}
              {item.description}
            </p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default BenefitSection;
