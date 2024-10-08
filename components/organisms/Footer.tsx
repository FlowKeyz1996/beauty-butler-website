import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#8877D8] text-white py-24 mt-96 flex flex-col items-center">
      {/* Card positioned partially outside the footer */}
      <motion.div
        className="bg-white shadow-lg border-2 border-[#8877D8] rounded-lg p-8 w-full lg:w-[90%] absolute -top-48 transform flex flex-col md:flex-row items-center justify-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-4 md:mb-0">
          <img
            src="/footerimgone.svg"
            alt="Profile"
            className="object-cover"
          />
        </div>

        {/* Description Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <h2 className="text-gray-800 text-2xl font-bold mb-4 font-apfelregular">Shape the Future of Beauty, One Idea at a Time!</h2>
          <p className="text-gray-700 text-center md:text-left mb-4">
            Hi, I'm a software developer with 8 years of experience and 3 years in web3. I love solving problems and using the right tools for the job!
          </p>
          {/* Text Area and Button */}
          <textarea
            className="w-full h-24 p-2 border border-gray-300 rounded-md mb-4 md:w-[80%] lg:w-[90%]"
            placeholder="Leave a message"
          />
          <div className="w-full flex justify-end">
            <button className="bg-[#8877D8] text-white px-20 py-2 rounded-md hover:bg-[#6d5fc1] transition-colors duration-300">
              Submit
            </button>
          </div>
        </div>
      </motion.div>

      {/* Footer content */}
      <div className="container mx-auto px-4 mt-56 w-full items-center">
        <div className="w-full max-w-6xl mx-auto text-center">
          <div className="flex flex-wrap justify-between text-left text-sm space-y-4 lg:space-y-0">
            {/* Product Section */}
            <div className="flex-1">
              <h3 className="font-bold mb-2">Product</h3>
              <ul>
                <li>Features</li>
                <li>Pricing</li>
                <li>FAQ</li>
              </ul>
            </div>
            {/* Company Section */}
            <div className="flex-1">
              <h3 className="font-bold mb-2">Company</h3>
              <ul>
                <li>About Us</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
            {/* Legal Section */}
            <div className="flex-1">
              <h3 className="font-bold mb-2">Legal</h3>
              <ul>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
            {/* Contact Us Section */}
            <div className="flex-1">
              <h3 className="font-bold mb-2">Contact Us</h3>
              <ul>
                <li>Email</li>
                <li>Support</li>
                <li>Live Chat</li>
              </ul>
            </div>
          </div>
          
          {/* Faint Line */}
          <div className="mt-8 w-full h-[1px] bg-gray-400 mx-auto max-w-6xl"></div>

          {/* Image and Logos Section */}
          <div className="flex  justify-between items-center mt-8 space-x-8">
            {/* Main Image */}
            <div className="flex-shrink-0">
              <img
                src="/footerimgtwo.svg"
                alt="Footer Image"
                className="object-cover"
              />
            </div>

            {/* Logos Section */}
            <div className="flex space-x-8">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <img src="/logo1.svg" alt="Logo 1" className="object-contain" />
              </div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <img src="/logo2.svg" alt="Logo 2" className="object-contain" />
              </div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <img src="/logo3.svg" alt="Logo 3" className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
