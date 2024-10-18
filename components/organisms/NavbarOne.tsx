import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const NavbarOne: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 flex justify-between items-center py-2 md:py-4">
        {/* Logo and Nav Links */}
        <div className="flex justify-between items-center w-full md:w-5/6 shadow-2xl rounded-full p-2 sm:p-4 bg-white bg-opacity-100 backdrop-blur-lg border h-[50px] md:h-[64px]">
          {/* Logo and Hamburger */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href="/">
              <div className="text-xl sm:text-2xl font-bold">
                <img src='/purplelogo.svg' alt="Logo" className="h-8 sm:h-10" /> {/* Adjusted logo size */}
              </div>
            </Link>

            {/* Hamburger Menu Icon */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                <Image
                  src={isMenuOpen ? '/close-icon.svg' : '/hamburgermenu.svg'}
                  alt="Menu Icon"
                  width={25} // Reduced size for mobile
                  height={25}
                  className='text-black'
                />
              </button>
            </div>
          </div>

          {/* Nav Links */}
          <div className={`hidden md:flex space-x-4 md:space-x-6 gap-2 md:gap-6 mx-2 md:mx-5 font-euclidmedium  text-[#475467] text-base md:text-xl transition-colors duration-300`}>
            <Link href="/features" className={`hover:text-[#FF8AF4]`}>
              Features
            </Link>
            <Link href="/benefit" className={`hover:text-[#FF8AF4]`}>
              Benefits
            </Link>
            <Link href="/company" className={`hover:text-[#FF8AF4]`}>
              Company
            </Link>
            <Link href="/contact" className={`hover:text-[#FF8AF4]`}>
              Blog
            </Link>
          </div>
        </div>

        {/* Button */}
        <div className="hidden md:block">
          <Link href="/">
            <button className="bg-[#FFC8F2] text-[#101828] py-3 px-4 sm:py-4 sm:px-7 rounded-2xl font-euclidmedium text-sm sm:text-xl h-[50px] md:h-[64px]">
              For Business
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full overflow-hidden">
          <div className="flex flex-col items-center py-2 sm:py-4 space-y-2 sm:space-y-4">
            <Link href="/" className="text-gray-600 hover:text-gray-800" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/features" className="text-gray-600 hover:text-gray-800" onClick={toggleMenu}>
              Features
            </Link>
            <Link href="/benefits" className="text-gray-600 hover:text-gray-800" onClick={toggleMenu}>
              Benefits
            </Link>
            <Link href="/company" className="text-gray-600 hover:text-gray-800" onClick={toggleMenu}>
              Company
            </Link>
            <button
              onClick={toggleMenu}
              className="bg-[#FFC8F2] text-[#101828] px-4 py-2 rounded hover:bg-blue-600"
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
