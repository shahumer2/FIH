import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Search, Shield, Users, FileText, Mail, Phone, MapPin, ArrowRight, Download } from 'lucide-react';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Optimization",
      description: "Search Engine Optimize www.fih.com.sg for better online visibility"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Agency",
      description: "Set up security agency license and compliance"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Work Pass Quota",
      description: "Secure work pass quota for international staffing"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Streamlined Operations",
      description: "Streamline roles and responsibilities for efficiency"
    }
  ];

  const services = [
    {
      title: "Cleaning Services",
      description: "Highly professional cleaning services for commercial and residential spaces",
      image: "/images/cleaning-service.jpg"
    },
    {
      title: "Window Cleaning",
      description: "Professional window cleaning services for buildings and facilities",
      image: "/images/window-cleaning.jpg"
    },
    {
      title: "Carpet Cleaning",
      description: "Expert carpet cleaning and maintenance services",
      image: "/images/carpet-cleaning.jpg"
    },
    {
      title: "Home Cleaning",
      description: "Comprehensive home cleaning solutions",
      image: "/images/home-cleaning.jpg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 flex items-center justify-center bg-gradient-to-r from-blue-900/80 to-gray-900/80">
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
    style={{
      backgroundImage: 'url("/img/cleaning.jpg")'
    }}
  />
  <div className="absolute inset-0 bg-black/40 z-0" />
  
  <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
      Highly Professional Cleaning Services.
    </h1>
    
    <p className="text-xl md:text-2xl mb-8 text-blue-100 font-light">
      IFM Strategy for 2026 - Next Six Months
    </p>
    
    <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed bg-white/10 backdrop-blur-sm p-6 rounded-lg">
      Your trusted partner for integrated facility management and healthcare services
    </p>
    
    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
      <Link 
        to="/services" 
        className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
      >
        Our Services
        <ArrowRight className="w-5 h-5 ml-2" />
      </Link>
      <a 
        href="tel:+6569260792" 
        className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center"
      >
        <Phone className="w-5 h-5 mr-2" />
        Call: (65) 6926 0792
      </a>
    </div>
  </div>
  
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
      <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
    </div>
  </div>
</section>

      {/* Next Six Months Strategy */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Next Six Months Strategy</h2>
            <p className="text-xl text-gray-600">Our strategic focus areas for business growth and development</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Search Engine Optimise (SEO) www.fih.com.sg",
              "Set up security agency/ license",
              "Secure work pass quota",
              "Streamline roles and responsibilities",
              "Sales and marketing / Social Media",
              "Strategic resource partners / Subcontractors"
            ].map((strategy, index) => (
              <div key={index} className="bg-blue-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{strategy}</h3>
                <p className="text-gray-600">Strategic initiative for business growth and operational excellence</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Focus Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Search Engine Optimize <span className="text-blue-600">www.fih.com.sg</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Enhancing our online presence through comprehensive SEO strategies to reach more customers 
                and showcase our professional cleaning and facility management services.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Improved search engine rankings</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Increased website traffic and visibility</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Better customer engagement and conversion</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Website Features</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Professional Cleaning Services</h4>
                  <p className="text-gray-600 text-sm">Highly professional cleaning services for all your needs</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Window Cleaning</h4>
                  <p className="text-gray-600 text-sm">Expert window cleaning for commercial and residential properties</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Carpet Cleaning</h4>
                  <p className="text-gray-600 text-sm">Professional carpet cleaning and maintenance</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Home Cleaning</h4>
                  <p className="text-gray-600 text-sm">Comprehensive home cleaning solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cleaning Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Cleaning Services</h2>
            <p className="text-xl text-gray-600">Professional cleaning solutions for every need</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-48 bg-blue-200 flex items-center justify-center">
                  <FileText className="w-16 h-16 text-blue-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Contact Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Team</h2>
              <p className="text-lg text-blue-200 mb-8 leading-relaxed">
                Meet our dedicated team of professionals committed to delivering exceptional 
                facility management and healthcare services.
              </p>
              
              <div className="space-y-6">
                <div className="bg-blue-800 rounded-lg p-6">
                  <h4 className="font-semibold text-lg mb-2">James Lim</h4>
                  <p className="text-blue-200">IFM Director</p>
                  <p className="text-blue-300">9321-2554 | james.lim@stie.com.sg</p>
                </div>
                
                <div className="bg-blue-800 rounded-lg p-6">
                  <h4 className="font-semibold text-lg mb-2">Matthew Yap</h4>
                  <p className="text-blue-200">COO</p>
                  <p className="text-blue-300">9745-7333 | matthew.yap@stie.com.sg</p>
                </div>
                
                <div className="bg-blue-800 rounded-lg p-6">
                  <h4 className="font-semibold text-lg mb-2">Jo Lee</h4>
                  <p className="text-blue-200">IFM Director</p>
                  <p className="text-blue-300">9776-6123 | jo.lee@stie.com.sg</p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-300 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-blue-200">10 [Joshman Rogers], Singapore 2020</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-300 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-blue-200">Tel: 0792 6926</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-300 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-blue-200">a.design@FIH.ch</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FileText className="w-6 h-6 text-blue-300 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Business Hours</h4>
                    <p className="text-blue-200">8:00 - 16:00 AM - 5:00</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-blue-700">
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <div className="grid grid-cols-2 gap-2">
                  <a href="#" className="text-blue-300 hover:text-white transition-colors">Home</a>
                  <a href="#" className="text-blue-300 hover:text-white transition-colors">About Us</a>
                  <a href="#" className="text-blue-300 hover:text-white transition-colors">Our Services</a>
                  <a href="#" className="text-blue-300 hover:text-white transition-colors">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Strategic Resource Partners</h2>
            <p className="text-xl text-gray-600">Building strong partnerships for comprehensive service delivery</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 rounded-xl p-6 text-center">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Work Pass Quota Solutions</h3>
              <p className="text-gray-600">
                Working with subcontractors to overcome WP quota limitations while maintaining service quality
              </p>
            </div>
            
            <div className="bg-orange-50 rounded-xl p-6 text-center">
              <Shield className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Risk Mitigation</h3>
              <p className="text-gray-600">
                Subcontractors provide protection against stop-work orders at various staffing sites
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-6 text-center">
              <FileText className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Emergency Placement</h3>
              <p className="text-gray-600">
                Quick mobilization alternatives for short-term staffing needs and emergency situations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact FIH today for professional integrated facility management and healthcare services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Us
            </Link>
            <a 
              href="/pdfs/fih-strategy.pdf"
              download
              className="border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Strategy PDF
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;