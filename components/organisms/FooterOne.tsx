import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const FooterOne: React.FC = () => {
  return (
    <footer className="relative bg-[#8877D8] text-white py-24 mt-36 sm:mt-96 flex flex-col items-center">
      {/* Card positioned partially outside the footer */}
      <motion.div
        className="bg-white border-2 border-[#8877D8] rounded-3xl p-4 sm:p-6 md:p-8 w-[90%] sm:w-[70%] md:w-[90%] lg:w-[80%] absolute -top-32 sm:-top-48 transform flex flex-col-reverse sm:flex sm:flex-col md:flex-row items-center justify-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Image Section, visible only on medium screens and above */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-4 md:mb-0 hidden sm:flex">
          <img
            src="/footertwoimg.svg"
            alt="Profile"
            className="object-contain h-[100%] relative md:top-8 top-4"
          />
        </div>

        {/* Description Section */}
        <div className="w-full md:w- flex flex-col mx-2 items-center md:items-start">
          <h2 className="text-[#101828] text-2xl sm:text-xl md:text-5xl leading-8 sm:leading-[5rem] tracking-normal  mb-4 font-apfelmittel text-center md:text-left">
            Book your beauty and wellness needs in just a few clicks.
          </h2>
          <p className="text-[#475467] text-center md:text-left mb-4 font-euclidlight text-sm sm:text-base md:text-lg">
            Book on-demand beauty and wellness treatments delivered straight to your doorstep and manage your appointments efficiently!
          </p>

          {/* Button with Image */}
          <div className="w-full flex justify-center md:justify-start my-3">
            <button className="bg-[#8877D8] text-white px-6 sm:px-10 py-3 sm:py-5 rounded-xl flex items-center font-euclidmedium sm:text-2xl text-sm sm:w-auto w-full justify-center">
              <img src="/googleandapplepurple.svg" alt="Button Icon" className="mr-2 w-12 sm:w-20" />
              Download App
            </button>
          </div>
        </div>
      </motion.div>

      {/* Footer content */}
      <div className="container sm:mx-auto sm:px-4 sm:mt-16 w-[90%] sm:w-[80%] lg:w-[90%] items-center">
        <div className="w-full max-w-6xl mx-auto text-center">
          <div className="w-full my-10">
            {/* Input Field */}
            <div>
              <h3 className="sm:text-left text-center sm:ml-36 relative text-xl sm:text-3xl font-bold top-12 mb-14 sm:mb-0">
                For beauty tips and updates{' '}
                <span className="font-euclidmedium text-xl sm:text-3xl font-normal text-[#8FF1EC]">
                  subscribe to our newsletter.
                </span>
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center">
            <img
  src="/footerinputimg.svg"
  alt="footer_input_img"
  className="hidden sm:block sm:w-auto sm:mb-0"
/>
             <input
  type="email"
  placeholder="example@mail.com"
  className="flex-grow p-3 sm:p-4 border border-gray-300 rounded-l-lg rounded-r-lg sm:rounded-lg bg-[#8878D8] font-euclidmedium focus:outline-none w-[90%] sm:w-auto"
/>
              <button className="bg-white text-[#8877D8] px-6 sm:px-9 font-euclidmedium py-3 sm:py-4 border border-[#8877D8] rounded-r-xl rounded-l-xl sm:rounded-r-xl sm:rounded-l-none mt-4 sm:mt-0 w-[90%] sm:w-auto">
                Subscribe
              </button>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-1 sm:gap-4 sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-between text-left text-sm w-full">
            <div className="flex-1 font-euclidmedium">
              <h3 className="font-bold mb-2 font-euclidlight text-[#C2C6e8]">PRODUCT</h3>
              <ul className="font-euclidlight">
                <Link href="/"><li>Customers</li></Link>
                <Link href="/business"><li>Business</li></Link>
              </ul>
            </div>

            <div className="flex-1 font-euclidmedium">
              <h3 className="font-bold mb-2 text-[#C2C6e8]">COMPANY</h3>
              <ul className="font-euclidlight">
                <Link href="/company"><li>About Us</li></Link>
                <li>Blog</li>
              </ul>
            </div>

            <div className="flex-1 font-euclidmedium">
              <h3 className="font-bold mb-2 text-[#C2C6e8]">LEGAL</h3>
              <ul className="font-euclidlight">
                <Link href="/termsandcondition"><li>Terms and Condition</li></Link> 
                <Link href="/privacy"><li>Privacy Policy</li></Link>
              </ul>
            </div>

            <div className="flex-1 font-euclidmedium">
              <h3 className="font-bold mb-2 text-[#C2C6e8]">CONTACT US</h3>
              <ul className="font-euclidlight">
                <li>hello@mybeautybutler.com</li>
              </ul>
            </div>
          </div>

          {/* Faint Line */}
          <div className="mt-8 w-full h-[1px] bg-gray-400 mx-auto max-w-6xl"></div>

          {/* Image and Logos Section */}
          <div className="flex justify-between items-center mt-8 space-x-4 sm:space-x-8">
            {/* Main Image */}
            <div className="">
              <img
                src="/footerlogo.svg"
                alt="Footer Image"
                className="object-cover"
              />
            </div>

            {/* Logos Section */}
            <div className="flex space-x-4 sm:space-x-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center">
                <Link href="https://x.com/mybeautybutler?s=21&t=hj5cOxvYhYHM2OUwDyhVsA"><img src="/X.svg " alt="Logo 1" className="object-cover h-5" /></Link>
              </div>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center">
               <Link href="https://www.instagram.com/mybeautybutler?igsh=MWw1YXdwOTQycjhxYw== "><img src="/instagram.svg" alt="Logo 2" className="object-cover h-5" /></Link> 
              </div>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center">
                <Link href="https://substack.com/home"><img src="/socialicon.svg" alt="Logo 3" className="object-cover h-5" /></Link>
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
