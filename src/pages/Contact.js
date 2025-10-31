import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

function Contact() {
  return (
  
   <div className="min-h-screen relative">
      {/* Background Image with Opacity from Public Folder */}
      <div 
        className="absolute inset-0 bg-cover bg-cover bg-no-repeat z-0 opacity-60 mb-[-200px]"
        style={{
          backgroundImage: `url("${process.env.PUBLIC_URL}/img/background.jpg")`
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10">
        <nav className="bg-gray-900 text-white shadow-lg relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-8">
                     <img 
                src="/img/logo.png" 
                alt="FIH Logo" 
                className={`h-10 w-auto transition-all duration-300 
                }`}
              />
                <a href="/" className="text-xl font-bold text-white">FIH</a>
                <div className="hidden md:flex space-x-6">
                  <a href="/" className="hover:text-blue-300">Home</a>
                  <a href="/about" className="hover:text-blue-300">About Us</a>
                  <a href="/services" className="hover:text-blue-300">Services</a>
                  <a href="/contact" className="text-blue-300">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              Get in touch with our team for professional security and traffic management solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone Number</h3>
                    <div className="text-gray-700 space-y-1 mt-1">
                      <div>(65) 9740-7333</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <div className="text-gray-700 space-y-1 mt-1">
                      <div>info@fih.com.sg</div>
                      <div>www.fih.com.sg</div>
                      <div>security@fih.com.sg</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-700 mt-1">
                      9 Euros Ave 8A<br />
                      #02-00 Singapore 409461
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50/80 rounded-lg p-6 border border-blue-100">
                <h3 className="font-semibold text-gray-900 mb-3">Website</h3>
                <a href="https://www.fih.com.sg" className="text-blue-600 hover:text-blue-700 font-medium">
                  www.fih.com.sg
                </a>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/90" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/90" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/90" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/90" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/90">
                    <option>Crowd Management</option>
                    <option>Traffic Management</option>
                    <option>Security Escort</option>
                    <option>Emergency Response</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/90"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;