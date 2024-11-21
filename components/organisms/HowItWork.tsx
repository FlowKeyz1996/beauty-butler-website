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
      className="relative flex flex-col items-center justify-center bg-[#8877d8] h-screen w-screen px-4 sm:px-8"
    >
      {/* Animate the heading coming from the top when in view */}
      {/* <motion.h2
        className="absolute top-5 sm:top-10 text-2xl sm:text-4xl font-apfelmittel mb-5 sm:mb-7 text-white z-10"
        initial={{ y: -100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        How It Works
      </motion.h2> */}

      {/* Animate the video sliding in from the left when in view */}
      <motion.div
        className="relative w-full h-[60vh] sm:h-[75vh] md:h-full"
        initial={{ x: '-100vw', opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ type: 'spring', duration: 2 }}
      >
        <video
          id="howItWorksVideo"
          className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
          controls={isPlaying}
          poster="/cover-img-for-video.png"
        >
          <source src="/website-demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
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

      {/* <Link href="https://airtable.com/appbyIQgO429LydxX/pagpJUqsZCrQzQcYg/form">
        <motion.button
          className="absolute bottom-5 sm:bottom-10 bg-white text-[#8877d8] py-2 px-6 sm:py-3 sm:px-10 rounded-lg sm:rounded-2xl text-lg sm:text-xl md:text-2xl font-euclidmedium z-10"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Book a Demo
        </motion.button>
      </Link> */}
    </div>
  );
};

export default HowItWork;
