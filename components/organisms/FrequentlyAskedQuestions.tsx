import { useState, useRef, ChangeEvent, FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import TagHeader from "../atoms/TagHeader";

type FAQ = {
  question: string;
  answer: string;
};

type FrequentlyAskedQuestionsProps = {
  faqs: FAQ[];
};

const FrequentlyAskedQuestions: React.FC<FrequentlyAskedQuestionsProps> = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const formRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  // useInView hooks for animations
  const formInView = useInView(formRef, { once: true });
  const accordionInView = useInView(accordionRef, { once: true });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const response = await fetch("/api/sendQuestion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Question submitted successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to submit question. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
      console.error("Form submission error:", error);
    }
  };

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto p-5 md:p-8 h-auto sm:my-10">
      <div className="text-center md:flex md:justify-center">
        <TagHeader text="Frequently Asked Questions" position="center" mobilePosition="center" />
      </div>
      <h2 className="text-3xl sm:text-4xl text-center mb-10 mt-5 text-[#101828] font-apfelmittel">
        Got questions? We’ve got answers
      </h2>

      <div className="flex flex-col md:flex-row justify-between space-y-2 md:space-y-0 md:space-x-8">
        {/* Form Section */}
        <motion.div
          ref={formRef}
          className="w-full md:w-1/2 flex flex-col max-w-lg hidden md:flex"
          initial={{ x: "-100%", opacity: 0 }}
          animate={formInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <div>
            <h4 className="text-xl my-1 font-apfelregular font-semibold text-[#101828]">
              Have a question we haven't answered?
            </h4>
            <p className="font-euclidlight my-2 text-[#475467]">
              Your insights drive our evolution—ask us any question you have about Beauty Butler, and we’ll answer it 😉.
            </p>
          </div>

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md mt-4 md:mt-0"
              />
            </div>
            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />

            {/* Image and Submit Button */}
            <div className="w-full flex items-center mt-6 gap-32 relative">
              <Image
                src="/Faqimg.svg"
                alt="Related Image"
                width={200}  // Adjust width
                height={100}  // Adjust height
                className="object-contain"
              />
              <button
                type="submit"
                className="px-16 font-euclidmedium py-3 bg-[#8878d7] text-white rounded-2xl text-xl absolute top-2 -right-1"
              >
                Submit
              </button>
            </div>
          </form>
          <p>{status}</p>
        </motion.div>

        {/* Accordion Section */}
        <motion.div
          ref={accordionRef}
          className="w-full md:w-1/2"
          initial={{ x: "100%", opacity: 0 }}
          animate={accordionInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left p-4 font-light text-md sm:text-xl font-apfelregular flex justify-between bg-[#F7F7ff] text-[#101828] items-center rounded-lg"
              >
                {faq.question}
                <span className="flex items-center justify-center w-10 h-10 min-w-[2.5rem] min-h-[2.5rem] bg-[#8878d7] text-white rounded-full text-xl">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
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
