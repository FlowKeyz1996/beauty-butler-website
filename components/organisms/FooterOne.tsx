import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const FooterOne: React.FC = () => {
  return (
    <footer className="relative bg-[#8877D8] text-white py-24 mt-96 flex flex-col items-center">
      {/* Card positioned partially outside the footer */}
      <motion.div
        className="bg-white shadow-lg border-2 border-[#8877D8] rounded-3xl p-4 sm:p-6 md:p-8 w-[95%] sm:w-[70%] md:w-[60%] lg:w-[80%] absolute -top-80 sm:-top-48 transform flex flex-col md:flex-row items-center justify-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-4 md:mb-0">
          <img
            src="/footertwoimg.svg"
            alt="Profile"
            className="object-contain h-[100%]"
          />
        </div>

        {/* Description Section */}
        <div className="w-full md:w-2/3 flex flex-col mx-2 items-center md:items-start">
          <h2 className="text-[#101828] text-lg sm:text-xl md:text-4xl leading-[9rem] tracking-normal font-bold mb-4 font-apfelregular">
            Book your beauty and wellness needs in just a few clicks.
          </h2>
          <p className="text-[#475467] text-center md:text-left mb-4 font-euclidlight text-sm sm:text-base md:text-lg">
            Book on-demand beauty and wellness treatments delivered straight to your doorstep and manage your appointments efficiently!
          </p>
          
          {/* Button with Image */}
          <div className="w-full flex justify-start mr-3 my-3">
            <button className="bg-[#8877D8] text-white px-6 sm:px-10 py-2 sm:py-3 rounded-xl flex items-center font-euclidlight font-semibold">
              <img src="/googleandapplepurple.svg" alt="Button Icon" className="mr-2 w-10" />
              Download App
            </button>
          </div>
        </div>
      </motion.div>

      {/* Footer content */}
      <div className="container mx-auto px-4 mt-44 sm:mt-56 w-[90%] sm:w-[80%] lg:w-[90%] items-center">
        <div className="w-full max-w-6xl mx-auto text-center">
          
          <div className="w-full my-10">
            {/* Input Field */}
            <div>
              <h3 className="text-left ml-6 sm:ml-32 text-2xl sm:text-3xl font-bold sm:top-12">
                For beauty tips and updates{' '}
                <span className="font-euclidmedium text-xl font-normal text-[#8FF1EC]">
                  subscribe to our newsletter.
                </span>
              </h3>
            </div>
            <div className="flex items-center justify-center flex-col sm:flex-row">
              <img
                src="/footerinputimg.svg"
                alt="footer_input_img"
                className="mb-4 sm:mb-0"
              />
              <input
                type="email"
                placeholder="example@mail.com"
                className="flex-grow p-2 border-t border-b border-gray-300 bg-[#8878D8] font-euclidmedium focus:outline-none"
              />
              {/* Button with White Background */}
              <button className="bg-white text-[#8877D8] px-9 font-euclidmedium py-2 border border-[#8877D8] rounded-r-xl">
                Subscribe
              </button>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-between text-left text-sm space-y-4 lg:space-y-0 w-[90%] sm:w-[80%] lg:w-[90%]">
            
            <div className="flex-1 font-euclidmedium">
              <h3 className="font-bold mb-2 font-euclidlight text-[#C2C6e8]">PRODUCT</h3>
              <ul className="font-euclidlight">
                <li>Customers</li>
                <li>Service Provider</li>
              </ul>
            </div>

            <div className="flex-1 font-euclidmedium">
              <h3 className="font-bold mb-2 text-[#C2C6e8]">COMPANY</h3>
              <ul className="font-euclidlight">
                <li>About Us</li>
                <li>Blog</li>
              </ul>
            </div>

            <div className="flex-1 font-euclidmedium">
              <h3 className="font-bold mb-2 text-[#C2C6e8]">LEGAL</h3>
              <ul className="font-euclidlight">
                <li>Terms and Condition</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            <div className="flex-1 font-euclidmedium">
              <h3 className="font-bold mb-2 text-[#C2C6e8]">CONTACT US</h3>
              <ul className="font-euclidlight">
                <li>hello@mybeautybutler@gmail.com</li>
              </ul>
            </div>
          </div>

          {/* Faint Line */}
          <div className="mt-8 w-full h-[1px] bg-gray-400 mx-auto max-w-6xl"></div>

          {/* Image and Logos Section */}
          <div className="flex justify-between items-center mt-8 space-x-4 sm:space-x-8 flex-col sm:flex-row w-[90%] sm:w-[80%] lg:w-[90%]">
            {/* Main Image */}
            <div className="flex-shrink-0 mb-4 sm:mb-0">
              <img
                src="/footerlogo.svg"
                alt="Footer Image"
                className="object-cover"
              />
            </div>

            {/* Logos Section */}
            <div className="flex space-x-4 sm:space-x-8">
              <div className="w-10 h-10 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center">
                <img src="/instagram.svg" alt="Logo 1" className="object-contain" />
              </div>
              <div className="w-10 h-10 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center">
                <img src="/X.svg" alt="Logo 2" className="object-contain" />
              </div>
              <div className="w-10 h-10 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center">
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

export default FooterOne;