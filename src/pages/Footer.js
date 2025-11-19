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
    backgroundImage: "url('/img/footer.png')",
    backgroundSize: '100% 100%',     // 100% width × 100% height → full stretch, no gaps
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    minHeight: '500px',              // Adjust this until the wave looks perfect
  }}
>
      <div className="footer-content max-w-6xl mx-auto px-4 absolute inset-0 bg-cover bg-center bg-no-repeat z-0 w-full"   >
        {/* Logo */}
        <div className="footer-logo-container text-center mb-2">
          <img
            src={logoUrl}
            alt="FOCUS INTEGRATED HEALTHCARE"
            className="footer-logo h-10 "
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>

        {/* Contact Information - More Compact */}
        <div className="contact-info flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-2">
          {/* First Contact Item */}
          <div className="contact-item flex-1 min-w-0 text-center lg:text-left">
            <span className="contact-label block text-lg font-semibold text-white mb-3">IFM</span>
            <div className="space-y-2 text-sm">
              <div className="contact-detail flex items-center justify-center lg:justify-start gap-2 text-gray-300">
                <span className="log text-blue-400 text-xs"><FaPhoneAlt /></span>
                <span>+65 9740-7333</span>
              </div>
              <div className="contact-website flex items-center justify-center lg:justify-start gap-2 text-gray-300">
                <span className="log text-blue-400 text-xs"><FaRegMessage /></span>
                <span>info@fih.com.sg</span>
              </div>
              <div className="contact-website flex items-center justify-center lg:justify-start gap-2 text-gray-300">
                <span className="log text-blue-400 text-xs"><CiGlobe /></span>
                <span>www.fih.com.sg</span>
              </div>
            </div>
          </div>

          {/* QR Code Image */}
          <div className="flex-shrink-0 mx-4 my-2 lg:my-0">
            <div className="bg-white p-3 rounded-lg shadow">
              <img
                src='/img/qr2.jpg'
                alt="QR Code"
                className="w-20 h-20 lg:w-24 lg:h-24 object-contain"
              />
              <p className="text-xs text-gray-600 mt-1 text-center">Scan QR</p>
            </div>
          </div>

          {/* Second Contact Item */}
          <div className="contact-item flex-1 min-w-0 text-center lg:text-left">
            <span className="contact-label block text-lg font-semibold text-white mb-3">Traffic & Security</span>
            <div className="space-y-2 text-sm">
              <div className="contact-detail flex items-center justify-center lg:justify-start gap-2 text-gray-300">
                <span className="log text-blue-400 text-xs"><FaPhoneAlt /></span>
                <div className="text-left">
                  <span className="block">+65 9741-7333</span>
                  <span>+65 9742-7333</span>
                </div>
              </div>
              <div className="contact-email  flex items-center justify-center lg:justify-start gap-2 text-gray-300">
                <span className="log text-blue-400 text-xs"><CiGlobe /></span>
                <span className=''>security@fih.com.sg</span>
              </div>
              <div className="contact-email flex items-center justify-center lg:justify-start gap-2 text-gray-300">
                <span className="log text-blue-400 text-xs"><CiGlobe /></span>
                <div className="text-left">
                  <span className="block">9 Eunos Ave 8A</span>
                  <span className="block">#02-00</span>
                  <span>Singapore 409461</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center  pt-2 border-t border-gray-700">
          <p className="text-gray-900 text-xs">
            © {new Date().getFullYear()} Focus Integrated Healthcare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;