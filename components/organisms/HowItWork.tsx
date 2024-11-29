import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const HowItWork: React.FC = () => {
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
      className="relative flex flex-col items-center justify-start bg-[#8877d8] my-5 sm:my-0 rounded-3xl h-auto sm:h-screen sm:w-screen px-4 sm:px-8 py-12"
    >
      {/* Animate the video sliding in from the left when in view */}
      <motion.div
        className="relative w-full h-[35vh] sm:h-[75vh] md:h-[140vh] mt-7 sm:mt-0 mb-12"
        initial={{ x: '-100vw', opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ type: 'spring', duration: 2 }}
      >
        <video
          id="howItWorksVideo"
          className="absolute top-0 left-0 w-full h-full object-contain rounded-md"
          controls={isPlaying}
          poster="/cover-img-for-video.png"
        >
          <source src="/website-demo.mp4" type="video/mp4" />
          Your browser does not support the videos tag.
        </video>

        {!isPlaying && (
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center text-white text-4xl sm:text-5xl md:text-6xl z-10 bg-opacity-70"
          >
            &#9654; {/* Play button */}
          </button>
        )}
      </motion.div>

      {/* Centered Button */}
      <motion.div
        className="flex justify-center items-center w-full mt-8"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <Link href="https://airtable.com/appbyIQgO429LydxX/pagpJUqsZCrQzQcYg/form">
          <button
            className="bg-white text-[#8877d8] py-2 px-6 sm:py-4 sm:px-20 rounded-lg sm:rounded-2xl text-lg sm:text-xl md:text-2xl font-euclidmedium"
          >
            Book a Demo
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default HowItWork;
