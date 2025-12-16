import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSalesDropdownOpen, setIsSalesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    // { 
    //   path: '/salesmarketing', 
    //   label: 'Sales & Marketing',

    // },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },

    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Top Emergency Bar */}


      {/* Main Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-6'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              {/* Scrolled logo */}
              <img
                src="/img/logoGreen.png"
                alt="FIH Logo"
                className={`h-16 w-auto transition-all duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 absolute'
                  }`}
              />

              {/* Default logo */}
              <img
                src="/img/logo.png"
                alt="FIH Logo"
                className={`h-16 w-auto transition-all duration-300 ${isScrolled ? 'opacity-0 absolute' : 'opacity-100'
                  }`}
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {navItems.map((item) => (
                <div key={item.path} className="relative">
                  {item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsSalesDropdownOpen(true)}
                      onMouseLeave={() => setIsSalesDropdownOpen(false)}
                    >
                      <button
                        className={`font-medium transition-all duration-300 hover:text-blue-500 ${isScrolled
                            ? 'text-gray-700 hover:text-blue-600'
                            : 'text-white hover:text-blue-200'
                          } ${location.pathname.startsWith(item.path)
                            ? (isScrolled ? 'text-blue-600' : 'text-blue-300')
                            : ''
                          }`}
                      >
                        {item.label} ▼
                      </button>

                      {isSalesDropdownOpen && (
                        <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.path}
                              to={dropdownItem.path}
                              className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border-b border-gray-100 last:border-b-0"
                              onClick={() => setIsSalesDropdownOpen(false)}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`font-medium transition-all duration-300 hover:text-blue-500 ${isScrolled
                          ? 'text-gray-700 hover:text-blue-600'
                          : 'text-white hover:text-blue-200'
                        } ${location.pathname === item.path
                          ? (isScrolled ? 'text-blue-600' : 'text-blue-300')
                          : ''
                        }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Emergency Contact - Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:+6597407333"
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${isScrolled
                    ? 'bg-green-600 text-white hover:bg-blue-700'
                    : 'bg-white text-green-600 hover:bg-blue-50'
                  }`}
              >
                Call: +65 9795-7333
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-md transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'
                }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <div key={item.path}>
                    {item.dropdown ? (
                      <div className="space-y-2">
                        <div className="font-semibold text-gray-700 mb-2">{item.label}</div>
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.path}
                            to={dropdownItem.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block pl-4 py-2 text-gray-600 hover:text-blue-600 transition-colors border-l-2 border-blue-200"
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`font-medium transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'
                          } ${location.pathname === item.path
                            ? (isScrolled ? 'text-blue-600' : 'text-blue-300')
                            : ''
                          }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;