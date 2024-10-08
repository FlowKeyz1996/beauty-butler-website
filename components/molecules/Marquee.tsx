import { motion } from 'framer-motion';

const Marquee: React.FC = () => {
  return (
    <div className="relative w-full bg-white bg-opacity-20 backdrop-blur-lg overflow-hidden">
      <motion.div
        className="whitespace-nowrap text-2xl md:text-4xl text-black font-semibold"
        animate={{ x: ['100%', '-100%', '100%'] }} // Moves left to right, then right to left
        transition={{
          repeat: Infinity, // Infinite loop
          repeatType: 'mirror', // Makes it reverse (left to right, right to left)
          duration: 15, // Adjust the speed by changing the duration
          ease: 'linear', // Keeps the motion smooth and consistent
        }}
      >
        <img src="/logo.svg" alt="Logo" />
      </motion.div>
    </div>
  );
};

export default Marquee;
