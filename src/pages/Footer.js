import React from 'react';
import '../css/Footer.css';
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";

const Footer = () => {
  const logoUrl = `${process.env.PUBLIC_URL}/img/logo.png`;

  return (
    <footer
      className="footer-top relative text-white py-10 overflow-hidden"
      style={{
        backgroundImage: "url('/img/poster.png')",
        backgroundSize: '100% 100%',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        minHeight: '500px',
      }}
    >
      <div className="footer-content max-w-6xl mx-auto px-4 relative z-10 flex flex-col min-h-[450px] lg:min-h-[450px]">
        {/* Main Content - Pushed down with margin-top */}
        <div className="mt-17 lg:mt-24 flex-grow flex flex-col">
          {/* Contact Row - Row on both mobile and desktop */}
          <div className="flex flex-row flex-wrap lg:flex-nowrap items-start justify-between gap-6 lg:gap-8">
            {/* Left Contact - IFM */}
            <div className="contact-item flex-1 min-w-[45%] lg:min-w-0 text-center lg:text-left">
              <span className="contact-label block text-lg font-semibold text-white mb-4">IFM</span>
              <div className="space-y-3 text-sm">
                <div className="contact-detail flex items-center justify-center lg:justify-start gap-3 text-gray-300">
                  <span className="log text-blue-400"><FaPhoneAlt /></span>
                  <span>+65 9740-7333</span>
                </div>
                <div className="contact-website flex items-center justify-center lg:justify-start gap-3 text-gray-300">
                  <span className="log text-blue-400"><FaRegMessage /></span>
                  <span>info@fih.com.sg</span>
                </div>
                <div className="contact-website flex items-center justify-center lg:justify-start gap-3 text-gray-300">
                  <span className="log text-blue-400"><CiGlobe /></span>
                  <span>www.fih.com.sg</span>
                </div>
              </div>
            </div>

            {/* Center Section - QR & Logo */}
            <div className="hidden lg:flex flex-col items-center justify-center flex-shrink-0 mx-4 lg:mx-8 lg:mt-[-50px]">
                 <img 
                src='/img/logoGreen.png' 
                alt="FIH Logo" 
                className="h-12 lg:h-20 object-contain mt-3 lg:mt-1"
              />
              <div className="bg-white p-3 lg:p-4 rounded-lg shadow-lg">
                <img
                  src='/img/qr2.jpg'
                  alt="QR Code"
                  className="w-20 h-20 lg:w-24 lg:h-24 object-contain"
                />
                <p className="text-xs text-gray-600 mt-1 text-center">Scan QR</p>
              </div>
           
            </div>

            {/* Right Contact - Traffic & Security */}
            <div className="contact-item flex-1 min-w-[45%] lg:min-w-0 text-center lg:text-left">
              <span className="contact-label block text-lg font-semibold text-white mb-4">Traffic & Security</span>
              <div className="space-y-3 text-sm">
                <div className="contact-detail flex items-center justify-center lg:justify-start gap-3 text-gray-300">
                  <span className="log text-blue-400"><FaPhoneAlt /></span>
                  <div className="text-left">
                    <span className="block">+65 9741-7333</span>
                    <span>+65 9742-7333</span>
                  </div>
                </div>
                <div className="contact-email flex items-center justify-center lg:justify-start gap-3 text-gray-300">
                  <span className="log text-blue-400"><CiGlobe /></span>
                  <span>security@fih.com.sg</span>
                </div>
                <div className="contact-email mr-4 flex items-center justify-center lg:justify-start gap-2 text-gray-300">
                  <span className="log text-blue-400"><CiGlobe /></span>
                  <div className="text-left ml-2">
                    <span className="block">9 Eunos Ave 8A</span>
                    <span className="block">#02-00</span>
                    <span>Singapore 409461</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile QR Code - Below the contacts */}
            <div className="lg:hidden w-full flex flex-col items-center justify-center mt-[-50px] mb-[60px] lg:mb-0">
              <div className="bg-white p-3 rounded-lg shadow-lg">
                 <img 
                src='/img/logoGreen.png' 
                alt="FIH Logo" 
                className="h-10 object-contain mt-3"
              />
                <img
                  src='/img/qr2.jpg'
                  alt="QR Code"
                  className="w-24 h-24 object-contain"
                />
                <p className="text-xs text-gray-600 mt-1 text-center">Scan QR Code</p>
              </div>
             
            </div>
          </div>
        </div>

        {/* Copyright at bottom */}
        {/* <div className="text-center    border-gray-700 pt-6 mt-10">
          <p className="text-gray-900 text-xs">
            © {new Date().getFullYear()} Focus Integrated Healthcare. All rights reserved.
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;