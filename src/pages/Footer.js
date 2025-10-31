import React from 'react';
import '../css/Footer.css';
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";


const Footer = () => {
  const logoUrl = `${process.env.PUBLIC_URL}/img/logo.png`;
  
  return (
    <footer className="fih-footer">
      <div className="footer-content">
        {/* Logo */}
        <div className="footer-logo-container">
          <img 
            src={logoUrl} 
            alt="FOCUS INTEGRATED HEALTHCARE" 
            className="footer-logo"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>

        {/* Brand Name */}
      
        
        {/* Contact Information */}
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-label">IFM</span>
            <span className="contact-detail"><span class="log"><FaPhoneAlt /></span>+65 9740-7333</span>
            <span className="contact-email"><span class="log"><FaRegMessage /></span>info@fih.com.sg</span>
            <span className="contact-website"><span class="log"><CiGlobe /></span>www.fih.com.sg</span>
          </div>
          
          <div className="contact-item">
            <span className="contact-label">Traffic & Security</span>
            <span className="contact-detail"><span class="log"><FaPhoneAlt /></span>+65 9741-7333  <br/>+65 9742-7333</span>

            <span className="contact-email"><span class="log"><CiGlobe /></span>security@fih.com.sg</span>
            <span className="contact-email"> <span class="log"><CiGlobe /> </span>  9 Euros Ave 8A <br/>
        #02-00 <br/>
          Singapore 409461</span>
          </div>
        </div>
        
        {/* Address */}
 
      </div>
    </footer>
  );
};

export default Footer;