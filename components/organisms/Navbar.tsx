import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 flex justify-between items-center h-full py-2 md:py-2">
        <div className="flex justify-between items-center w-full shadow-2xl rounded-full p-2 bg-white bg-opacity-20 backdrop-blur-lg border h-[50px] md:h-[64px]">
          {/* Logo */}
          <Link href="/">
            <div className="text-2xl font-bold">
              {isScrolled ? (
                <img src='/purplelogo.svg' alt="Scrolled Logo" />
              ) : (
                <img src='/beautyicon.svg' alt="Main Logo" />
              )}
            </div>
          </Link>

          {/* Dropdown Button with Nav Links (desktop only) */}
          <div className="relative hidden md:block">
            <button
              onClick={toggleDropdown}
              className="flex items-center bg-[#FFC8F2] text-[#101828] py-2 px-4 sm:py-2 sm:px-5 mx-5 rounded-xl font-euclidmedium text-sm sm:text-lg"
            >
              Menu
              <span className="ml-2">▼</span> {/* Arrow icon */}
            </button>
            <div
              className={`absolute right-0 mt-4 p-4 w-56 bg-white rounded-lg shadow-lg transition-all duration-300 transform ${
                isDropdownOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
              }`}
            >
              <Link href="/features" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                <Image src="/features-nav-img.svg" alt="Features Icon" width={20} height={20} className="mr-3" />
                Features
              </Link>
              <Link href="/benefit" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                <Image src="/benefit-nav-img.svg" alt="Benefits Icon" width={20} height={20} className="mr-3" />
                Benefits
              </Link>
              <Link href="/company" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                <Image src="/company-nav-img.svg" alt="Company Icon" width={20} height={20} className="mr-3" />
                Company
              </Link>
              <Link href="/contact" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                <Image src="/blog-nav-img.svg" alt="Blog Icon" width={20} height={20} className="mr-3" />
                Blog
              </Link>
              <Link href="/contact" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                <Image src="/download-nav-img.svg" alt="Blog Icon" width={20} height={20} className="mr-3" />
                Download the App
              </Link>
              {/* Divider */}
              <hr className="my-1 border-gray-300" />
              <Link href="/" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                <Image src="/for-customer-nav-img.svg" alt="Customers Icon" width={20} height={20} className="mr-3" />
                For Customers
              </Link>
            </div>
          </div>

          {/* Hamburger Menu Icon (for mobile) */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              <Image
                src={isMenuOpen ? '/close.svg' : '/hamburgermenu.svg'}
                alt="Menu Icon"
                width={30}
                height={30}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link href="/features" className="text-gray-600 hover:text-gray-800" onClick={toggleMenu}>Features</Link>
            <Link href="/benefit" className="text-gray-600 hover:text-gray-800" onClick={toggleMenu}>Benefits</Link>
            <Link href="/company" className="text-gray-600 hover:text-gray-800" onClick={toggleMenu}>Company</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-800" onClick={toggleMenu}>Blog</Link>
            {/* Divider */}
            <hr className="my-1 border-gray-300" />
              <Link href="/" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                <Image src="/for-customer-nav-img.svg" alt="Customers Icon" width={20} height={20} className="mr-3" />
                For Businesses
              </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
