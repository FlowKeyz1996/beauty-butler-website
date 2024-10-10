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
          <p className="text-gray-700 text-center md:text-left mb-4 font-euclidlight">
          Your insights drive our evolution—share your feature requests and help us create the ultimate beauty experience.
          </p>
          {/* Text Area and Button */}
          <textarea
            className="w-full h-24 p-2 border border-gray-300 rounded-md mb-4 md:w-[80%] font-euclidlight lg:w-[90%]"
            placeholder=" Tell us the features you’d love to see on Beauty Butler"
          />
          <div className="w-full flex justify-end mr-3">
            <button className="bg-[#8877D8] font-euclidmedium text-white px-10 py-3 rounded-xl ">
              Submit
            </button>
          </div>
        </div>
      </motion.div>

      {/* Footer content */}
      <div className="container mx-auto px-4 mt-56 w-full items-center">
        <div className="w-full max-w-6xl mx-auto text-center">
        <div className="w-full lg:w-[90%] flex items-center justify-center my-10">
        {/* Input Field */}
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none"
        />
        {/* Button with White Background */}
        <button className="bg-white text-[#8877D8] px-4 py-2 border border-[#8877D8] rounded-r-md hover:bg-gray-100 transition-colors duration-300">
          Subscribe
        </button>
      </div>
          <div className="flex flex-wrap justify-between text-left text-sm space-y-4 lg:space-y-0">
            
            {/* Product Section */}
            <div className="flex-1">
              <h3 className="font-bold mb-2 font-euclidlight text-[#C2C6e8]">PRODUCT</h3>
              <ul>
                <li>Customers</li>
                <li>Service Provider</li>
                
              </ul>
            </div>
            {/* Company Section */}
            <div className="flex-1">
              <h3 className="font-bold mb-2">COMPANY</h3>
              <ul>
                <li>About Us</li>
                <li>Blog</li>
                
              </ul>
            </div>
            {/* Legal Section */}
            <div className="flex-1">
              <h3 className="font-bold mb-2">LEGAL</h3>
              <ul>
                <li>Terms and Condition</li>
                <li>Privacy Policy</li>
                
              </ul>
            </div>
            {/* Contact Us Section */}
            <div className="flex-1">
              <h3 className="font-bold mb-2">CONTACT US</h3>
              <ul>
                <li>hello@mybeautybutler@gmail.com</li>
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
                src="/footerlogo.svg"
                alt="Footer Image"
                className="object-cover"
              />
            </div>

            {/* Logos Section */}
            <div className="flex space-x-8">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <img src="/instagram.svg" alt="Logo 1" className="object-contain" />
              </div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <img src="/X.svg" alt="Logo 2" className="object-contain" />
              </div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <img src="/socialicon.svg" alt="Logo 3" className="object-contain" />
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
