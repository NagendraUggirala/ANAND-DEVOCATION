import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMultiFormModal } from "../context/ModalContext";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { openModal } = useMultiFormModal();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/temples", label: "Temples" },
    { path: "/themes", label: "Special Pooja's" },
    { path: "/packages", label: "Packages" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const isActiveLink = (path) => location.pathname === path;



  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 
      bg-white border-b 
      ${isScrolled ? "shadow-md border-saffron/20" : "border-gray-100"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 md:space-x-3 group">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-saffron/30 overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300">
              <img
                src="./images/image.png"
                alt="Anand Devocation Logo"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="flex flex-col items-start">
              <div className="flex items-center space-x-2">
                <img
                  src="./images/Anandhlogo.png"
                  alt="Anand Devocation"
                  className="w-8 h-10 md:w-10 md:h-12 object-contain"
                />
                <div className="flex flex-col items-start">
                  <h1 className="text-lg md:text-xl font-display font-bold text-orange-500">
                    <span className="text-blue-500">ANAND </span>DEVOCATION
                  </h1>
                  <p className="text-xs text-earth-light italic mt-1">
                    Sacred Journeys, Divine Experiences
                  </p>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2.5 rounded-lg text-base font-semibold transition-all duration-200 ${
                  isActiveLink(item.path)
                    ? "text-saffron bg-saffron/10 border border-saffron/30"
                    : "text-earth-dark hover:bg-sage hover:text-saffron"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Book Now Button */}
            <Link
              to="/book"
              className="px-6 py-3 rounded-lg text-base font-semibold bg-blue-500 text-white hover:shadow-xl transition-all duration-300 shadow-lg transform hover:scale-105 flex items-center space-x-2"
            >
              
              <span>Book Now</span>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 md:p-3 text-earth-dark hover:bg-sage rounded-lg transition-all duration-200"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6 md:w-7 md:h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 md:w-7 md:h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 pb-4">
            <nav className="space-y-2 pt-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                    isActiveLink(item.path)
                      ? "bg-saffron/10 text-saffron border border-saffron/30"
                      : "text-earth-dark hover:bg-sage hover:text-saffron"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Book Now Button */}
              <Link
                to="/book"
                onClick={() => setIsMenuOpen(false)}
                className="w-full text-left px-4 py-3 bg-sacred-gradient text-white text-base font-semibold rounded-lg mt-2 hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              >
                <span className="text-lg bg-blue-500 px-3 py-3 rounded-full">Book Now</span>
                <span>Book Now</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;