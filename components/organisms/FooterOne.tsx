import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import LaunchListWidget from '../atoms/LaunchListWidget';
import DownloadButton from '../atoms/DownloadButton';

const FooterOne: React.FC = () => {
  // State for managing modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [buttonText, setButtonText] = useState('Subscribe');
   
  
    const handleSubscribe = () => {
      if (!email) {
        setError('Please enter a valid email address.');
        setButtonText('Subscribe'); // Reset to initial text in case of an error
      } else {
        setError(''); // Clear the error message
        setButtonText('Subscribed'); // Update button text
        setEmail(''); // Clear the input field
      }
    };

  // Toggle modal function
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  

  return (
    <footer className="relative bg-[#8877D8] text-white py-24 mt-36 sm:mt-96 flex flex-col items-center">
      {/* Card positioned partially outside the footer */}
      <motion.div
        className="bg-white border-2 border-[#8877D8] rounded-3xl p-4 sm:p-6 md:p-8 w-[90%] sm:w-[70%] md:w-[90%] lg:w-[80%] absolute -top-32 sm:-top-48 transform flex flex-col-reverse sm:flex sm:flex-col md:flex-row items-center justify-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-4 md:mb-0 hidden sm:flex">
          <img
            src="/footertwoimg.svg"
            alt="Profile"
            className="object-contain h-[100%] relative md:top-8 top-4"
          />
        </div>

        {/* Description Section */}
        <div className="w-full flex flex-col mx-2 items-center md:items-start">
          <h2 className="text-[#101828] text-2xl sm:text-xl md:text-5xl leading-8 sm:leading-[5rem] tracking-normal mb-4 font-apfelmittel text-center md:text-left">
            Book your beauty and wellness needs in just a few clicks.
          </h2>
          <p className="text-[#475467] text-center md:text-left mb-4 font-euclidlight text-sm sm:text-base md:text-lg">
            Book on-demand beauty and wellness treatments delivered straight to your doorstep and manage your appointments efficiently!
          </p>

          {/* Button with Image */}
          <div className="w-full flex justify-center md:justify-start my-3">
          <DownloadButton
  backgroundColor="bg-[#8877D8]"
  textColor="text-white"
  text="Download App"
  images={[
    {
      src: "/apple-white.svg",
      alt: "Apple Store",
      width: 12,
      height: 12,
      link: "https://apps.apple.com/app/beauty-butler-app/id6608976314",
    },
    {
      src: "/white-line.svg", // Middle image without a link
      alt: "Google Play",
      width: 12,
      height: 2,
    },
    {
      src: "/google-white.svg",
      alt: "Google Play",
      width: 12,
      height: 12,
      link: "https://apps.apple.com/app/beauty-butler-app/id6608976314",
    },
  ]}
/>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={toggleModal}
        >
          <div
            className="bg-white rounded-xl p-8 w-[90%] sm:w-[50%] md:w-[40%] lg:w-[30%] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4 text-center">Join Waitlist</h2>
            <p className="text-gray-600 text-center mb-8">Enter your details to be added to our waitlist!</p>
             <LaunchListWidget/>
            
          </div>
        </div>
      )}

      {/* Footer content */}
      <div className="container sm:mx-auto sm:px-4 mt-5 sm:mt-16 w-[90%] sm:w-[80%] lg:w-[90%] items-center">
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
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="example@mail.com"
        className="flex-grow p-3 sm:p-4 border border-gray-300 rounded-l-lg rounded-r-lg sm:rounded-lg bg-[#8878D8] font-euclidmedium focus:outline-none w-[90%] sm:w-auto"
      />
      <button
        onClick={handleSubscribe}
        className="bg-white text-[#8877D8] px-6 sm:px-9 font-euclidmedium py-3 sm:py-4 border border-[#8877D8] rounded-r-xl sm:rounded-r-xl rounded-l-xl sm:rounded-l-none mt-4 sm:mt-0 w-[90%] sm:w-auto"
      >
        {buttonText}
      </button>
      
    </div>
    {error && <p className="text-black ">{error}</p>}
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-1 sm:gap-4 sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-between text-left text-sm w-full">
            <div className="flex-1">
              <h3 className="font-bold mb-2 font-euclidlight text-[#C2C6e8]">PRODUCT</h3>
              <ul className="font-euclidlight">
                <Link href="/"><li>Customers</li></Link>
                <Link href="/business"><li>Business</li></Link>
              </ul>
            </div>

            <div className="flex-1">
              <h3 className="font-bold mb-2 text-[#C2C6e8]">COMPANY</h3>
              <ul className="font-euclidlight">
                <Link href="/company"><li>About Us</li></Link>
                <Link href="https://substack.com/@beautybutler?r=46sczw&utm_campaign=profile&utm_medium=profile-page"><li>Blog</li></Link>
              </ul>
            </div>

            <div className="flex-1">
              <h3 className="font-bold mb-2 text-[#C2C6e8]">LEGAL</h3>
              <ul className="font-euclidlight">
                <Link href="/termsandcondition"><li>Terms and Conditions</li></Link> 
                <Link href="/privacy"><li>Privacy Policy</li></Link>
              </ul>
            </div>

            <div className="flex-1">
              <h3 className="font-bold mb-2 text-[#C2C6e8]">CONTACT US</h3>
              <ul className="font-euclidlight">
                <li>hello@mybeautybutler.com</li>
                <Link href="/support"><li>support</li></Link>
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
                <Link href="https://x.com/mybeautybutler?s=21&t=hj5cOxvYhYHM2OUwDyhVsA"><img src="/X.svg " alt="Logo 1" className="object-cover h-7" /></Link>
              </div>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center">
                <Link href="https://www.instagram.com/mybeautybutler?igsh=MWw1YXdwOTQycjhxYw=="><img src="/instagram.svg" alt="Logo 2" className="object-cover h-7" /></Link>
              </div>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center">
                <Link href="https://substack.com/home"><img src="/socialicon.svg" alt="Logo 3" className="object-cover h-7" /></Link>
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
