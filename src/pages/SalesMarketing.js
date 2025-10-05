import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { FileText, Download, Shield, Users, Building, School, Zap, PenTool, FilePlus, Combine, Layout, Bot, Signature, Scan } from 'lucide-react';

function SalesMarketingPage() {
  const navigate = useNavigate();

  // All Tools Section with navigation links
  const allTools = [
    {
      icon: <Download className="w-6 h-6" />,
      title: "Security Crowd And Traffic Management",
      description: "Comprehensive security, crowd, and traffic management solutions",
      color: "blue",
      link: "/services/security-crowd-traffic-management"
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "CRITICAL INFRASTRUCTURE PROTECTION",
      description: "Advanced protection for critical infrastructure facilities",
      color: "green",
      link: "/services/critical-infrastructure-protection"
    },
    {
      icon: <FilePlus className="w-6 h-6" />,
      title: "INTEGRATED FACILITY SERVICE PROVIDER",
      description: "Complete facility management and integrated services",
      color: "purple",
      link: "/services/integrated-facility-service"
    },
    {
      icon: <Combine className="w-6 h-6" />,
      title: "EDUCATIONAL INSTITUTIONS SCHOOLS",
      description: "Security and management solutions for educational institutions",
      color: "orange",
      link: "/services/educational-institutions"
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "SPECIALIST SECURITY SERVICE",
      description: "Specialized security services for unique requirements",
      color: "red",
      link: "/services/specialist-security"
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "SPECIALIST TRAINING SERVICE",
      description: "Professional training programs and security education",
      color: "indigo",
      link: "/services/specialist-training"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AVIATION SPECIALIST",
      description: "Specialized security solutions for aviation sector",
      color: "yellow",
      link: "/services/aviation-specialist"
    },
  ];

  // Sales & Marketing Security Services
  const securityServices = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "SECURITY SERVICES",
      subtitle: "ADVANCER BY",
      description: "Professional security agency services including licensed security personnel",
      color: "blue",
      link: "/services/security-services"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "CROWD MANAGEMENT & TRAFFIC CONTROL",
      subtitle: "ADVANCER BY",
      description: "Expert crowd control and traffic management services",
      color: "green",
      link: "/services/crowd-management-traffic-control"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "CRITICAL INFRASTRUCTURE PROTECTION",
      subtitle: "ADVANCER BY",
      description: "Security solutions for critical infrastructure protection",
      color: "purple",
      link: "/services/critical-infrastructure"
    },
    {
      icon: <School className="w-8 h-8" />,
      title: "EDUCATIONAL INSTITUTIONS SCHOOLS",
      subtitle: "ADVANCER BY",
      description: "Campus security and management for educational institutions",
      color: "orange",
      link: "/services/educational-institutions-security"
    }
  ];

  const colorClasses = {
    blue: "bg-blue-50 border-blue-200 hover:bg-blue-100 text-blue-700",
    green: "bg-green-50 border-green-200 hover:bg-green-100 text-green-700",
    purple: "bg-purple-50 border-purple-200 hover:bg-purple-100 text-purple-700",
    orange: "bg-orange-50 border-orange-200 hover:bg-orange-100 text-orange-700",
    red: "bg-red-50 border-red-200 hover:bg-red-100 text-red-700",
    yellow: "bg-yellow-50 border-yellow-200 hover:bg-yellow-100 text-yellow-700",
    indigo: "bg-indigo-50 border-indigo-200 hover:bg-indigo-100 text-indigo-700",
    teal: "bg-teal-50 border-teal-200 hover:bg-teal-100 text-teal-700",
    pink: "bg-pink-50 border-pink-200 hover:bg-pink-100 text-pink-700",
    gray: "bg-gray-50 border-gray-200 hover:bg-gray-100 text-gray-700"
  };

  const iconColorClasses = {
    blue: "text-blue-600",
    green: "text-green-600",
    purple: "text-purple-600",
    orange: "text-orange-600",
    red: "text-red-600",
    yellow: "text-yellow-600",
    indigo: "text-indigo-600",
    teal: "text-teal-600",
    pink: "text-pink-600",
    gray: "text-gray-600"
  };

  // Handle card click
  const handleCardClick = (link) => {
    navigate(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sales & Marketing</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Professional security solutions for your business
            </p>
          </div>
        </div>
      </section>

      {/* All Tools Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {allTools.map((tool, index) => (
              <div 
                key={index}
                onClick={() => handleCardClick(tool.link)}
                className={`group relative bg-white rounded-2xl shadow-sm border-2 ${colorClasses[tool.color]} p-6 cursor-pointer transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl`}
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className={`p-3 rounded-xl bg-white shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300 ${iconColorClasses[tool.color]}`}>
                    {tool.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors line-clamp-2">
                    {tool.title}
                  </h3>
                  <p className="text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-grow">
                    {tool.description}
                  </p>
                  
                  {/* Click indicator */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-center text-sm font-medium text-gray-500">
                      <span>Click to explore</span>
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white group-hover:border-opacity-30 transition-all duration-300" />
              </div>
            ))}
          </div>

          {/* Free Trial Banner */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg p-8 text-center text-white">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="bg-white bg-opacity-20 rounded-full p-3">
                <Zap className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Free Consultation</h3>
                <p className="text-xl font-semibold">Get Professional Advice</p>
              </div>
            </div>
            <p className="text-blue-100 mb-4">Book a free consultation with our security experts</p>
            <Link 
              to="/contact" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Security Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Security Solutions</h2>
            <p className="text-lg text-gray-600">Comprehensive security services backed by industry expertise</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityServices.map((service, index) => (
              <div 
                key={index}
                onClick={() => handleCardClick(service.link)}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 rounded-xl ${colorClasses[service.color]} bg-opacity-50 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        {service.subtitle}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500 group-hover:text-gray-600 transition-colors">
                      Click to learn more →
                    </span>
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold group-hover:bg-blue-700 transition-colors">
                      Explore Service
                    </div>
                  </div>
                </div>
                
                {/* Animated border effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Custom Security Solutions?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us for tailored security services that meet your specific requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Free Quote
            </Link>
            <Link 
              to="/services" 
              className="bg-transparent hover:bg-white hover:bg-opacity-10 text-white border-2 border-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SalesMarketingPage;