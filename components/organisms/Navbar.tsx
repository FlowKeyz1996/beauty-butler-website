import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import for handling the image

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent"> {/* Set a height for the navbar */}
      <div className="container mx-auto px-4 flex justify-between items-center h-full py-2 md:py-2"> {/* Ensure the container uses the full navbar height */}
        {/* Logo, Nav Links, and Hamburger Menu (inside the same border) */}
        <div className="flex justify-between items-center w-full md:w-5/6 shadow-2xl rounded-full p-2 bg-white bg-opacity-20 backdrop-blur-lg border h-[50px] md:h-[64px]">
          {/* Conditional Logo */}
          <Link href="/">
          <div className="text-2xl font-bold">
            {isScrolled ? (
              <img src='/purplelogo.svg' alt="Scrolled Logo" /> // Small logo for scrolled state
            ) : (
              <img src='/beautyicon.svg' alt="Main Logo" /> // Main logo for default state
            )}
          </div>
          </Link>

          {/* Nav Links (hidden on mobile) */}
          <div className={`hidden md:flex space-x-6 gap-6 mx-5 font-euclidmedium text-xl transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>
            <Link href="/features" className="hover:text-[#FF8AF4]">
              Features
            </Link>
            <Link href="/benefit" className="hover:text-[#FF8AF4]">
              Benefits
            </Link>
            <Link href="/company" className="hover:text-[#FF8AF4]">
              Company
            </Link>
            <Link href="/contact" className="hover:text-[#FF8AF4]">
              Blog
            </Link>
          </div>

          {/* Hamburger Menu Icon (inside the same border for mobile) */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              <Image
                src={isMenuOpen ? '/close.svg' : '/hamburgermenu.svg'} // use appropriate image paths
                alt="Menu Icon"
                width={30}
                height={30}
              />
            </button>
          </div>
        </div>

        {/* Button (outside the shadow div, same height as navbar) */}
        <div className="hidden  md:block h-full  sm:flex items-center"> {/* Ensure the button wrapper has full height */}
          <Link href="/">
          <button className="bg-[#FFC8F2] text-[#101828] py-3 px-4 sm:py-4 sm:px-7 rounded-2xl font-euclidmedium text-sm sm:text-xl h-[50px] md:h-[64px]">
              For customers
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu (visible when hamburger is clicked) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link href="/" className="text-gray-600 hover:text-gray-800" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/features" className="text-gray-600 hover:text-gray-800" onClick={toggleMenu}>
              features
            </Link>
            <Link href="#benefit" className="text-gray-600 hover:text-gray-800" onClick={toggleMenu}>
              benefits
            </Link>
            <Link href="/company" className="text-gray-600 hover:text-gray-800" onClick={toggleMenu}>
              Company
            </Link>
            <Link href="/">
            <button
              onClick={toggleMenu}
              className="bg-[#FFC8F2] text-[#101828] px-4 py-2 rounded-xl"
            >
              For Customers
            </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
