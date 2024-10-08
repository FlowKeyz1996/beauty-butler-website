import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Import the useRouter hook

const NavbarOne: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter(); // Initialize useRouter

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to check if the link is active
  // const isActiveLink = (href: string) => {
  //   return router.route === href;
  // };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo and Nav Links (with shadow, now taking almost full width) */}
        <div className="flex justify-between items-center w-full md:w-4/5 shadow-2xl rounded-full p-4 bg-white bg-opacity-100 backdrop-blur-lg border">
          {/* Always show purplelogo.svg */}
          <Link href="/">
          <div className="text-2xl font-bold">
            <img src='/purplelogo.svg' alt="Logo" /> {/* Purple logo shown at all times */}
          </div>
          </Link>

          {/* Nav Links (hidden on mobile) */}
          <div className={`hidden md:flex space-x-6 gap-6 mx-5 font-euclidmedium text-xl transition-colors duration-300 `}>
            <Link
              href="/features"
              className={`hover:text-[#FF8AF4]`}
            >
              Features
            </Link>
            <Link
              href="/benefit"
              className={`hover:text-[#FF8AF4]`}
            >
              Benefit
            </Link>
            <Link
              href="/company"
              className={`hover:text-[#FF8AF4]`}
            >
              Company
            </Link>
            <Link
              href="/contact"
              className={`hover:text-[#FF8AF4]`}
            >
              Blog
            </Link>
          </div>
        </div>

        {/* Button (outside the shadow div) */}
        <div className="hidden md:block">
          <Link href="/">
          <button className="bg-[#FFC8F2] text-black p-5 px-7 rounded-xl font-euclid">
            For Business
          </button>
          </Link>
        </div>

        {/* Hamburger Menu Icon (visible on mobile/tablet) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            {/* Hamburger menu icon as an image */}
            <Image
              src={isMenuOpen ? '/close-icon.svg' : '/menu-icon.svg'} // use appropriate image paths
              alt="Menu Icon"
              width={30}
              height={30}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu (visible when hamburger is clicked) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link href="/" className="text-gray-600 hover:text-gray-800" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-800" onClick={toggleMenu}>
              About
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-800" onClick={toggleMenu}>
              Services
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-800" onClick={toggleMenu}>
              Contact
            </Link>
            <button
              onClick={toggleMenu}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarOne;
