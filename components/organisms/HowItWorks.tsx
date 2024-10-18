import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const HowItWorks: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Ref for the section we want to observe
  const sectionRef = useRef(null);

  // Trigger animation when section comes into view
  const isInView = useInView(sectionRef, { once: true });

  const handlePlay = () => {
    setIsPlaying(true);
    const videoElement = document.getElementById('howItWorksVideo') as HTMLVideoElement;
    videoElement?.play();
  };

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center justify-center my-5 bg-[#8877d8] p-5 h-auto sm:h-screen rounded-3xl"
    >
      {/* Animate the heading coming from the top when in view */}
      <motion.h2
        className="text-3xl sm:text-4xl font-semibold mb-5 sm:mb-7 text-white"
        initial={{ y: -100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        How It Works
      </motion.h2>

      {/* Animate the video container sliding in from the left when in view */}
      <motion.div
        className="relative w-full sm:w-[70%] h-[30vh] sm:h-[60%] rounded-lg my-4 sm:my-6 bg-white"
        initial={{ x: '-100vw', opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ type: 'spring', duration: 2 }}
      >
        <video
          id="howItWorksVideo"
          className="w-full h-full rounded-lg"
          controls={isPlaying}
          poster="/path-to-your-poster-image.jpg"
        >
          <source src="/howitworks.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {!isPlaying && (
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center text-[#8877D8] text-5xl sm:text-6xl"
          >
            &#9654; {/* Play button */}
          </button>
        )}
      </motion.div>

      <button className="bg-white text-[#8877d8] py-3 px-10 sm:py-4 sm:px-24 rounded-2xl text-2xl font-euclidmedium">
        Book a Demo
      </button>
    </div>
  );
};

export default HowItWorks;
