import { motion } from 'framer-motion';
import TagHeader from '../atoms/TagjHeader';

interface Category {
  id: number;
  imageSrc: string;
  text: string;
}

const categories: Category[] = [
  { id: 1, imageSrc: '/heroimage.svg', text: 'Manicure & Pedicure' },
  { id: 2, imageSrc: '/heroimage.svg', text: 'Hair Salons' },
  { id: 3, imageSrc: '/heroimage.svg', text: 'Facials' },
  { id: 4, imageSrc: '/heroimage.svg', text: 'Waxing' },
  
];

const CategoriesSection: React.FC = () => {
  return (
    
    <section className="my-9 py-9 bg-[#f7f7ff]">
      <div className="py-3 mx-auto max-w-[30%] sm:max-w-[80%] lg:max-w-[60%]">
      <TagHeader text="categories"/>
      </div>
      
      {/* Animated Heading (Triggers when section is in view) */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        
        className="text-5xl font-bold text-center my-5 font-apfelregular"
      >
       
        Elevating Businesses Like Yours
      </motion.h2>
      <p className="font-euclidlight text-center text-2xl mb-7 text-[#475467]">Your One Stop Shop for Beauty and Wellness</p>

      {/* Card and Text Container with Marquee Effect */}
      <motion.div
        className="flex space-x-6 overflow-hidden"
        animate={{ x: ['100%', '-100%'] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear', repeatType: 'mirror' }}
      >
        {categories.map((category) => (
          <div key={category.id} className="flex flex-col items-center min-w-[300px]">
            {/* Card */}
            <motion.div
              className="bg-white rounded-t-full rounded-lf overflow-hidden shadow-lg border-4 border-[#8877D8]" // Added rounded-b-md for bottom corners
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={category.imageSrc}
                alt={category.text}
                className="w-full h-64 object-cover"
              />
            </motion.div>

            {/* Text */}
            <p className="text-center text-xl font-bold text-black mt-4 font-apfelregular">
              {category.text}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default CategoriesSection;
