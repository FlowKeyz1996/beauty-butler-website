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

  // Disable body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo and Nav Links (with shadow, now taking more width) */}
        <div className="flex justify-between items-center w-full md:w-5/6 shadow-2xl rounded-full p-4 bg-white bg-opacity-100 backdrop-blur-lg border">
          {/* Logo and Hamburger (on mobile) */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href="/">
              <div className="text-2xl font-bold">
                <img src='/purplelogo.svg' alt="Logo" /> {/* Purple logo shown at all times */}
              </div>
            </Link>

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

          {/* Nav Links (hidden on mobile) */}
          <div className={`hidden md:flex space-x-6 gap-6 mx-5 font-euclidmedium  text-[#475467] text-xl transition-colors duration-300`}>
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

        {/* Button (outside the shadow div) */}
        <div className="hidden md:block">
          <Link href="/">
            <button className="bg-[#FFC8F2] text-[#101828] p-5 px-7 rounded-2xl  font-euclidmedium text-xl">
              For Business
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu (visible when hamburger is clicked) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full overflow-hidden">
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link href="/" className="text-gray-600 hover:text-gray-800" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/features" className="text-gray-600 hover:text-gray-800" onClick={toggleMenu}>
              features
            </Link>
            <Link href="/benefits" className="text-gray-600 hover:text-gray-800" onClick={toggleMenu}>
              Benefits
            </Link>
            <Link href="/company" className="text-gray-600 hover:text-gray-800" onClick={toggleMenu}>
              Company
            </Link>
            <button
              onClick={toggleMenu}
              className="bg-[] text-white px-4 py-2 rounded hover:bg-blue-600"
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
