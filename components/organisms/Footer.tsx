import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#8877D8] text-white py-24 mt-80 md:mt-72 flex flex-col items-center">
      {/* Card positioned partially outside the footer */}
      <motion.div
        className="bg-white border-2 border-[#8877D8] rounded-3xl p-4 sm:p-6 md:p-8 w-[95%] sm:w-[70%] md:w-[60%] lg:w-[80%]  absolute -top-80 sm:-top-48 transform flex flex-col md:flex-row items-center justify-center"
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
        <div className="w-full md:w flex flex-col mx-4 items-center md:items-start">
          <h2 className="text-[#101828] text-2xl text-center  sm:text-xl md:text-3xl font-semibold mb-4 font-apfelregular">
            Shape the Future of Beauty, One Idea at a Time!
          </h2>
          <p className="text-[#475467] text-center md:text-left mb-4 font-euclidlight text-sm sm:text-base md:text-lg">
            Your insights drive our evolution—share your feature requests and help us create the ultimate beauty experience.
          </p>
          {/* Text Area and Button */}
          <textarea
            className="w-full h-20 sm:h-24 p-2 border border-gray-300 rounded-xl mb-4 md:w-[90%] lg:w-[100%] font-euclidlight"
            placeholder="Tell us the features you’d love to see on Beauty Butler"
          />
         <div className="w-full flex justify-center md:mr-32 md:justify-end ">
  <button className="bg-[#8877D8] text-xl font-euclidmedium text-white px-6 sm:px-14 py-3 sm:py-3 rounded-xl w-full sm:w-auto">
    Submit
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
              <h3 className="sm:text-left ml-6 sm:ml-36 relative text-xl sm:text-3xl font-bold top-12 mb-14">
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
                className="w-12 sm:w-auto mb-4 sm:mb-0"
              />
              <input
                type="email"
                placeholder="example@mail.com"
                className="flex-grow p-3 sm:p-4 border-t border-b border-l border-r border-gray-300 sm:border-0 rounded-l-lg rounded-r-lg sm:rounded-none bg-[#8878D8] font-euclidmedium focus:outline-none w-[90%] sm:w-auto"
              />
              <button className="bg-white text-[#8877D8] px-6 sm:px-9 font-euclidmedium py-3 sm:py-4 border border-[#8877D8] rounded-r-xl rounded-l-xl sm:rounded-l-none sm:rounded-r-xl mt-4 sm:mt-0 w-[90%] sm:w-auto">
                Subscribe
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2  sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-between text-left text-sm w-full">
  
  {/* Product Section */}
  <div className="flex-1 font-euclidmedium">
    <h3 className="font-bold mb-2 font-euclidlight text-[#C2C6e8]">PRODUCT</h3>
    <ul className="font-euclidlight">
     <Link href="/"> <li>Customers</li></Link>
     <Link href="/business"><li>Businesses</li></Link> 
    </ul>
  </div>
  
  {/* Company Section */}
  <div className="flex-1 font-euclidmedium">
    <h3 className="font-bold mb-2 text-[#C2C6e8]">COMPANY</h3>
    <ul className="font-euclidlight">
      <li>About Us</li>
      <li>Blog</li>
    </ul>
  </div>
  
  {/* Legal Section */}
  <div className="flex-1 font-euclidmedium">
    <h3 className="font-bold mb-2 text-[#C2C6e8]">LEGAL</h3>
    <ul className="font-euclidlight">
      <Link href="/"><li>Terms and Conditions</li></Link> 
      <Link href="/privacy"><li>Privacy Policy</li></Link>
    </ul>
  </div>
  
  {/* Contact Us Section */}
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
                <Link href="https://www.instagram.com/mybeautybutler?igsh=MWw1YXdwOTQycjhxYw=="><img src="/instagram.svg" alt="Logo 1" className="object-cover" /></Link>
              </div>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center">
               <Link href="https://x.com/mybeautybutler?s=21&t=hj5cOxvYhYHM2OUwDyhVsA"><img src="/X.svg" alt="Logo 2" className="object-cover" /></Link> 
              </div>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center">
                <Link href="https://substack.com/home"><img src="/socialicon.svg" alt="Logo 3" className="object-cover" /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-8  font-euclidlight">
        <p>&copy; Beauty Butler 2024. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
