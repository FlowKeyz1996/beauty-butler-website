import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const NavbarOne: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-full py-2 md:py-2">
        <div className="flex justify-between items-center w-full shadow-2xl rounded-full p-2 bg-white bg-opacity-100 backdrop-blur-lg border h-[50px] md:h-[64px]">
          {/* Logo */}
          <Link href="/">
            <div className="text-2xl font-bold">
              <img src="/purplelogo.svg" alt="Logo" className="h-8 sm:h-10" />
            </div>
          </Link>

          {/* Dropdown Button with Nav Links (desktop only) */}
          <div className="relative hidden md:block">
            <button
              onClick={toggleDropdown}
              className="flex items-center bg-[#FFC8F2] text-[#101828] py-2 px-4 sm:py-2 sm:px-5 mx-5 rounded-xl font-euclidmedium text-sm sm:text-lg"
            >
              Menu
              <Image src="/arrow-down.svg" alt="Benefits Icon" width={20} height={20} className="ml-2" />
            </button>
            <div
              className={`absolute right-0 mt-4 p-4 w-56 bg-white rounded-lg font-euclidlight shadow-lg transition-all duration-300 transform ${
                isDropdownOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
              }`}
            >
              {/* <Link href="/features" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                <Image src="/features-nav-img.svg" alt="Features Icon" width={20} height={20} className="mr-3" />
                Features
              </Link> */}
               {/* <Link href="/benefit" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                <Image src="/benefit-nav-img.svg" alt="Benefits Icon" width={20} height={20} className="mr-3" />
                Benefits
              </Link>  */}
               {/* <Link href="/company" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                <Image src="/company-nav-img.svg" alt="Company Icon" width={20} height={20} className="mr-3" />
                Company
              </Link> */}
              <Link href="https://substack.com/@beautybutler?r=46sczw&utm_campaign=profile&utm_medium=profile-page" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                <Image src="/blog-nav-img.svg" alt="Blog Icon" width={20} height={20} className="mr-3" />
                Blog
              </Link>
              <Link href="https://apps.apple.com/app/beauty-butler-pro/id6608976623" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                <Image src="/download-nav-img.svg" alt="Blog Icon" width={20} height={20} className="mr-3" />
                Download App 
              </Link>
              {/* Divider */}
              <hr className="my-1 border-gray-300" />
              <Link href="/business" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                <Image src="/for-businesses-nav-img.svg" alt="Customers Icon" width={20} height={20} className="mr-3" />
                For Businesses
              </Link>
            </div>
          </div>

          {/* Hamburger Menu Icon (for mobile) */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              <Image
                src={isMenuOpen ? '/close.svg' : '/burger.svg'}
                alt="Menu Icon"
                width={30}
                height={30}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu starting just below the navbar */}
      {isMenuOpen && (
        <div className="md:hidden gap-3 fixed top-[70px] font-euclidlight left-0 w-full h-[calc(100%-70px)] bg-white flex flex-col items-center py-4 z-40">
          {/* <Link href="/features" className="flex items-center px-4 py-2 text-gray-700 w-full hover:bg-gray-100">
            <Image src="/features-nav-img.svg" alt="Features Icon" width={20} height={20} className="mr-3" />
            <span className="flex-1 text-gray-600">Features</span>
          </Link> */}
          {/* <hr className="w-full border-gray-200" />
          <Link href="/benefit" className="flex items-center px-4 py-2 text-gray-700 w-full hover:bg-gray-100">
            <Image src="/benefit-nav-img.svg" alt="Benefits Icon" width={20} height={20} className="mr-3" />
            <span className="flex-1 text-gray-600">Benefits</span>
          </Link> */}
          {/* <hr className="w-full border-gray-200" /> */}
          {/* <Link href="/company" className="flex items-center px-4 py-2 text-gray-700 w-full hover:bg-gray-100">
            <Image src="/company-nav-img.svg" alt="Company Icon" width={20} height={20} className="mr-3" />
            <span className="flex-1 text-gray-600">Company</span>
          </Link> */}
          <hr className="w-full border-gray-200" />
          <Link href="https://substack.com/@beautybutler?r=46sczw&utm_campaign=profile&utm_medium=profile-page" className="flex items-center px-4 py-2 text-gray-700 w-full hover:bg-gray-100">
            <Image src="/blog-nav-img.svg" alt="Blog Icon" width={20} height={20} className="mr-3" />
            <span className="flex-1 text-gray-600">Blog</span>
          </Link>
          <hr className="w-full border-gray-200" />
          <Link href="https://apps.apple.com/app/beauty-butler-app/id6608976314" className="flex items-center px-4 py-2 text-gray-700 w-full hover:bg-gray-100">
            <Image src="/download-nav-img.svg" alt="Blog Icon" width={20} height={20} className="mr-3" />
            <span className="flex-1 text-gray-600">Download the App</span>
          </Link>
          <hr className="w-full border-gray-200" />
          <Link href="/business" className="flex items-center px-4 py-2 text-gray-700 w-full hover:bg-gray-100">
            <Image src="/for-businesses-nav-img.svg" alt="Customers Icon" width={20} height={20} className="mr-3" />
            <span className="flex-1 text-gray-600">For Businesses</span>
          </Link>
          
        </div>
      
      )}
    </nav>
  );
};

export default NavbarOne;
