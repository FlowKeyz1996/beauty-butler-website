import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import TagHeader from '../atoms/TagHeader';

type FAQ = {
  question: string;
  answer: string;
};

type FrequentlyAskedQuestionsProps = {
  faqs: FAQ[];
};

const FrequentlyAskedQuestions: React.FC<FrequentlyAskedQuestionsProps> = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const formRef = useRef(null);
  const accordionRef = useRef(null);

  // useInView hooks for triggering animations
  const formInView = useInView(formRef, { once: true });
  const accordionInView = useInView(accordionRef, { once: true });

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto p-5 md:p-8 h-auto  md:h-auto my-10">
      <TagHeader text="Frequently Asked Questions" />
      <h2 className="text-4xl font-bold text-center mb-10 mt-5 font-apfelregular">
        Got questions? We’ve got answers
      </h2>

      <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
        {/* Form Section - Visible only on desktop */}
        <motion.div
          ref={formRef}
          className="w-full md:w-1/2 flex flex-col max-w-lg hidden md:flex"
          initial={{ x: '-100%', opacity: 0 }}
          animate={formInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <div>
            <h4 className="text-xl my-1 font-apfelregular font-semibold text-[#101828]">Have a question we have not answered? </h4>
            <p className="font-euclidlight my-2 text-[#475467]">Your insights drive our evolution— ask us any question you have about Beauty Butler and we will answer them 😉.</p>
          </div>
          
          {/* Form Fields */}
          <form className="w-full space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email Address"
                className="w-full p-2 border border-gray-300 rounded-md mt-4 md:mt-0"
              />
            </div>
            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              className="w-full p-2 border border-gray-300 rounded-md"
            />

            {/* Image Inside the Form */}
            <div className="w-full flex items-center mt-6 gap-32 relative">
              <img
                src="/faqimg.svg"
                alt="Related Image"
                className="w-[40%] h-[20%] object-contain"
              />
              {/* Button aligned with the start of the image */}
              <button
                type="submit"
                className="px-16 font-euclidmedium py-3 bg-[#8878d7] top-2 -right-1 absolute text-white rounded-2xl text-xl"
              >
                Submit
              </button>
            </div>
          </form>
        </motion.div>

        {/* Accordion Section */}
        <motion.div
          ref={accordionRef}
          className="w-full md:w-1/2"
          initial={{ x: '100%', opacity: 0 }}
          animate={accordionInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left p-4 font-light text-xl font-apfelregular flex justify-between bg-[#F7F7ff] text-[#101828] items-center rounded-lg"
              >
                {faq.question}
                <span
                  className={`flex items-center justify-center w-10 h-10 bg-[#8878d7] text-white rounded-full text-2xl`}
                >
                  {activeIndex === index ? '-' : '+'}
                </span>
              </button>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-4 text-gray-600 bg-white"
                >
                  {faq.answer}
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
