import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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
          <div
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer"
          >
            <img
              src="/play-button-image.png" // Replace with the path to your play button image
              alt="Play"
              className="w-16 sm:w-24 md:w-32"
            />
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default HowItWork;
