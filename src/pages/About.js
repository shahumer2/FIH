import { Shield, Star, Users } from 'lucide-react';
import React from 'react';

function About() {
  return (
    <div className="min-h-screen ">
      <nav className="bg-gray-900 text-white shadow-lg">
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
                <a href="/about" className="text-blue-300">About Us</a>
                <a href="/services" className="hover:text-blue-300">Services</a>
                <a href="/contact" className="hover:text-blue-300">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Advancer IFM</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the way in integrated facility management and security solutions since 2008
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Incorporated in 2008, ADVANCER IFM advises, designs and delivers complete and workable solutions 
              to government institutions and commercial organizations. Our key areas include critical infrastructure 
              protection solutions, project funding, consulting and risk management as well as cybersecurity asset management.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Since 2019, ADVANCER IFM expanded our suite of security services by offering crowd and traffic management 
              services which are of paramount importance to manage traffic flow efficiently, improve road safety, and 
              organize crowds of people at public events to minimize risks, hazards and potential downtime to businesses.
            </p>
          </div>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Company Image</span>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Value Proposition</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Commitment to Safety</h4>
              <p className="text-gray-600 text-sm">Zero incidents, maximum protection</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">One Team</h4>
              <p className="text-gray-600 text-sm">Collaborative approach, unified goals</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Trusted Partner</h4>
              <p className="text-gray-600 text-sm">Reliability and integrity guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;