import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full playfair z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-[#FAFAF9] shadow-sm "
      }`}
    >
      {/* Desktop Navigation - Hidden on medium and small screens */}
      <div className="hidden lg:flex items-center justify-between px-5 py-4 bg-[#FAFAF9] shadow-sm top-0 w-full z-50">
        <div className="flex cursor-pointer ">
          <img src="./logo.png" alt="Luman Logo" className="h-10 w-10 mr-2" />
          <a href="#home" className="text-4xl">
            Luman
          </a>
        </div>

        <div className="items-center">
          <a className="mr-10 hover:text-[#e55a5a] text-xl" href="#home">
            Home
          </a>
          <a className="mr-10 text-xl hover:text-[#e55a5a]" href="#about">
            About
          </a>
          <a className="hover:text-[#e55a5a] text-xl" href="#gallery">
            Gallery
          </a>
        </div>

        <div className="bg-[#FF6B6B] hover:bg-[#e55a5a] text-white rounded-xl px-3 py-1 transition-all justify-center shadow-lg hover:shadow-xl">
          <a
            href="#contact"
            className=" text-xl cursor-pointer hover:text-black"
          >
            Contact Me!
          </a>
        </div>
      </div>

      {/* Mobile Header - Shown on medium and small screens */}
      <div className="container mx-auto px-4 sm:px-6 lg:hidden">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src="./logo.png"
              alt="Luman Logo"
              className="h-10 w-10 mr-2"
              width="40"
              height="40"
            />
            <h1 className="text-2xl md:text-3xl font-medium text-gray-900">
              Luman
            </h1>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#e55a5a] focus:outline-none cursor-pointer"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <a
            href="#about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#e55a5a] hover:bg-gray-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#gallery"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#e55a5a] hover:bg-gray-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#e55a5a] hover:bg-gray-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
