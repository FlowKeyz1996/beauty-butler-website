import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import TagHeader from '../atoms/TagHeader';

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  { question: 'What is Beauty Butler?', answer: 'Beauty Butler is your beauty bestie in an app! Think of us as your go-to for all things beauty and wellness, delivering top-tier treatments right to your doorstep — so you can chill while we handle the rest.' },
  { question: 'What services does Beauty Butler offer?', answer: 'From hair, makeup, and facials to massages, mani-pedis, and more — we’ve got all your self-care covered. Our professionals are certified and ready to provide top-quality services whenever you need them!.' },
  { question: 'Is Beauty Butler available in my area?', answer: 'Right now, we are available in Lagos, Nigeria! But don’t worry, we’re expanding to new cities soon. Subscribe to our newsletter to stay tuned for updates on our expansion plans.' },
  { question: 'How do I pay for services on Beauty Butler? / How are payments processed?', answer: 'Once you’ve booked a service, the checkout page will show you a few simple payment options! You can pay using your in-app wallet, online via Paystack, or by card—whatever works best for you. Our payment structure is safe, simple and secure!'},
  { question: 'Is there a cancellation policy?', answer: 'Life happens, we feel you! If you need to cancel, just do it 24 hours in advance, and you’re all good. If you cancel within 24 hours, we’ll need to charge 80% of the service price. For no-shows, it’s the full price—so try not to miss out!' },
];

const FrequentlyAskedQuestions = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const formRef = useRef(null);
  const accordionRef = useRef(null);

  // useInView hooks for triggering animations with logging to ensure the views are working
  const formInView = useInView(formRef, { once: true, });
  const accordionInView = useInView(accordionRef, { once: true,  });

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto p-5 h-screen">
      <TagHeader text="Frequently Asked Questions"/>
      <h2 className="text-4xl font-bold text-center mb-10 my-5 font-apfelregular">
        Got questions? We’ve got answers
      </h2>

      <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
        {/* Form Section */}
        <motion.div
          ref={formRef}
          className="w-full md:w-1/2 flex flex-col max-w-lg"
          initial={{ x: '-100%', opacity: 0 }}
          animate={formInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
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
            <div className="w-full flex  items-center mt-6">
              <img
                src="/faqimg.svg"
                alt="Related Image"
                className="w-full h-full object-cover"
              />
              {/* Button aligned with the start of the image */}
              <button
                type="submit"
                className="px-16 font-euclidmedium py-3 bg-[#8878d7] bottom-36 relative text-white rounded-xl transition"
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
            <div key={index} className="mb-4  rounded-xl overflow-hidden">
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
