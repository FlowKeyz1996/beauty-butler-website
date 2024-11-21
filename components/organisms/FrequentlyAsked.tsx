"use client";

import { useState, useRef, FormEvent, ChangeEvent } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import TagHeader from "../atoms/TagHeader";
import emailjs from "@emailjs/browser";

const FrequentlyAsked: React.FC = () => {
  const [formData, setFormData] = useState({ user_name: "", user_email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const formRef = useRef<HTMLFormElement>(null);
  const formInView = useInView(formRef, { once: true });

  const faqData = [
    { question: "What is Beauty Butler?", answer: "Beauty Butler is your personal beauty concierge, connecting you with top-tier beauty services and products." },
    { question: "How does the service work?", answer: "Sign up, browse our offerings, and book beauty services delivered straight to your doorstep." },
    { question: "Are the products authentic?", answer: "Absolutely! We partner with verified suppliers to ensure all products are genuine and high-quality." },
    { question: "What areas do you serve?", answer: "Currently, we operate in major cities. Check our app for the latest service locations." },
    { question: "Can I customize my services?", answer: "Yes! Our platform allows you to tailor services to suit your unique beauty needs." },
  ];

  const handleAccordionClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Submitting...");
    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        "service_bn20igc",
        "template_66fiamb",
        formRef.current!,
        "hFiwbDMjuxUCuv5yv"
      );

      if (result.text === "OK") {
        setStatus("Message sent successfully!");
        setFormData({ user_name: "", user_email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
      console.error("EmailJS error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-5 md:p-8 sm:my-10">
      <div className="text-center md:flex md:justify-center">
        <TagHeader text="Contact Us" position="center" mobilePosition="center" />
      </div>
      <h2 className="text-3xl sm:text-4xl text-center mb-10 mt-5 text-[#101828] font-apfelmittel">
        Get in Touch with Us
      </h2>

      <motion.div
       
        className="w-full flex flex-col max-w-lg mx-auto mb-16"
        initial={{ x: "-100%", opacity: 0 }}
        animate={formInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <div>
          <h4 className="text-xl my-1 font-apfelregular font-semibold text-[#101828]">
            We’re here to help!
          </h4>
          <p className="font-euclidlight my-2 text-[#475467]">
            Send us a message, and we'll get back to you shortly.
          </p>
        </div>

        <form onSubmit={sendEmail} ref={formRef} className="w-full space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Enter Your Name"
            value={formData.user_name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Enter Your Email Address"
            value={formData.user_email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />

          <div className="w-full flex items-center mt-6 gap-32 relative">
            <Image
              src="/Faqimg.svg"
              alt="Related Image"
              width={200}
              height={100}
              className="object-contain"
            />
            <button
              type="submit"
              className="px-16 font-euclidmedium py-3 bg-[#8878d7] text-white rounded-2xl text-xl absolute top-2 -right-1"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
        <p
          className={`mt-4 ${
            status.includes("error") || status.includes("Failed") ? "text-red-500" : "text-green-500"
          }`}
        >
          {status}
        </p>
      </motion.div>

      <h2 className="text-3xl sm:text-4xl text-center mb-10 mt-5 text-[#101828] font-apfelmittel">
        Frequently Asked Questions
      </h2>

      <div className="w-full max-w-3xl mx-auto">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-300 py-4">
            <button
              onClick={() => handleAccordionClick(index)}
              className="flex justify-between w-full text-left font-medium text-lg text-[#101828]"
            >
              {item.question}
              <span>{activeIndex === index ? "-" : "+"}</span>
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="text-gray-600 mt-2 overflow-hidden"
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrequentlyAsked;
