import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';
import Marquee from '../molecules/Marquee';
import Navbar from './Navbar'; // Import the navbar component

const HeroSection: React.FC = () => {
  const controls = useAnimation();
  const [textIndex, setTextIndex] = useState(0);
  const [mounted, setMounted] = useState(false); // Track component mount

  const phrases = [
    "Connect with clients",
    "Empower your business",
    "Enhance your beauty services",
  ];

  // Function to split the first word and rest of the phrase
  const splitPhrase = (phrase: string) => {
    const firstSpaceIndex = phrase.indexOf(' ');
    if (firstSpaceIndex === -1) return [phrase, '']; // If there's no space, return the whole phrase
    return [phrase.substring(0, firstSpaceIndex), phrase.substring(firstSpaceIndex)];
  };

  useEffect(() => {
    setMounted(true); // Set mounted to true after component mounts
  }, []);

  useEffect(() => {
    if (!mounted) return; // Ensure controls.start() runs only after mounting

    const sequence = async () => {
      const direction = textIndex % 2 === 0 ? 100 : -100;

      // Fade out current phrase
      await controls.start({
        opacity: 0,
        y: direction, // Move up or down based on index
        transition: { duration: 0.5 },
      });

      // Change text after fading out
      setTextIndex((prevIndex) => (prevIndex + 1) % phrases.length);

      // Fade in new phrase
      await controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
    };

    const intervalId = setInterval(sequence, 3000);

    return () => clearInterval(intervalId);
  }, [controls, textIndex, mounted]);

  // Get the first word and rest of the phrase
  const [firstWord, restOfPhrase] = splitPhrase(phrases[textIndex]);

  return (
    <div className="relative w-full h-screen">
      {/* Background image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src="/heroimage.svg" // Replace with your image path
          alt="Background Image"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      {/* Text overlay */}
      <div className="relative top-7 z-10 h-full flex items-center">
        <div className="text-white p-10 md:p-16 max-w-2xl lg:max-w-4xl">
          <motion.h1
            className="text-5xl md:text-6xl font-apfelregular font-bold w-full max-w-[90%] lg:max-w-[80%] xl:max-w-[75%] whitespace-nowrap my-6"
            animate={controls}
            initial={{ opacity: 1, y: 0 }}
          >
            {/* Span the first word and style it */}
            <span className="text-[#8878D7]">{firstWord}</span>
            {restOfPhrase}
          </motion.h1>
          <p className="my-4 lg:text-xl md:text-xl font-euclidlight">
            Empower Your Beauty Business with Beauty Butler.<br></br>Join the platform
            that brings beauty professionals <br></br>and clients together seamlessly.
          </p>
          <button className="mt-8 bg-[#8877D8] font-euclidmedium text-xl  text-white p-20 py-5 rounded-xl">
            Book a Demo
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <Marquee />
      </div>
    </div>
  );
};

export default HeroSection;
