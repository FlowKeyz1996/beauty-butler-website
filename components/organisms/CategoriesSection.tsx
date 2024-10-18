import { motion } from 'framer-motion';
import TagHeader from '../atoms/TagHeader';

interface Category {
  id: number;
  imageSrc: string;
  text: string;
}

const categories: Category[] = [
  { id: 1, imageSrc: '/manicureimg.svg', text: 'Manicure & Pedicure' },
  { id: 2, imageSrc: '/hairsalonimg.svg', text: 'Hair Salons' },
  { id: 3, imageSrc: '/facials.svg', text: 'Facials' },
  { id: 4, imageSrc: '/waxing.svg', text: 'Waxing' },
  { id: 5, imageSrc: '/massage.svg', text: 'Massage Therapy' },
  { id: 6, imageSrc: '/barber.svg', text: 'Barber Shops' },
  { id: 7, imageSrc: '/imagecategory.svg', text: 'Make Up' },
  { id: 8, imageSrc: '/lashextension.svg', text: 'Lash Extension' },
  { id: 9, imageSrc: '/brows.svg', text: 'Brows' },
  { id: 10, imageSrc: '/reflexology.svg', text: 'Reflexology' },
];

const CategoriesSection: React.FC = () => {
  return (
    <section className="my-9 py-9 bg-[#f7f7ff]">
      <div className="py-3 mx-auto max-w-[30%] sm:max-w-[80%] lg:max-w-[60%]">
        <TagHeader text="Categories" />
      </div>

      {/* Animated Heading (Triggers when section is in view) */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-5xl font-semibold text-[#101828] text-center mb-5 font-apfelregular tracking-wide"
      >
        Elevating Businesses Like Yours
      </motion.h2>
      <p className="font-euclidlight text-center text-2xl my-7 text-[#475467]">
        Your One Stop Shop for Beauty and Wellness
      </p>

      {/* Card and Text Container with Continuous Marquee Effect */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex space-x-6"
          animate={{ x: ['0%', '-100%'] }}
          transition={{ repeat: Infinity, repeatType: 'mirror', duration: 20, ease: 'linear' }}
        >
          {/* Repeat the category list to achieve continuous scrolling */}
          {[...categories, ...categories].map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center min-w-[220px]"
            >
              {/* Card */}
              <motion.div
                className=""
                transition={{ duration: 0.3 }}
              >
                <img
                  src={category.imageSrc}
                  alt={category.text}
                  className=" h-64 object-contain"
                />
              </motion.div>

              {/* Text */}
              <p className="text-center text-lg text-[#101828] font-apfelmittel">
                {category.text}
              </p>
            </div>
            
          ))}
        </motion.div>
      </div>
     
    </section>
  );
};

export default CategoriesSection;
