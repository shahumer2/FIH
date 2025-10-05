import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Shield, Users, Car, Building, School, TrafficCone, FileText } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Services",
      description: "Professional security agency services including licensed security personnel",
      pdf: "/pdfs/security-services.pdf",
      color: "blue"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Crowd Management",
      description: "Expert crowd control for events, commercial spaces, and public areas",
      pdf: "/pdfs/crowd-management.pdf",
      color: "green"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Traffic Management",
      description: "Comprehensive traffic control and management services",
      pdf: "/pdfs/traffic-management.pdf",
      color: "purple"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Critical Infrastructure",
      description: "Security solutions for critical infrastructure protection",
      pdf: "/pdfs/critical-infrastructure.pdf",
      color: "orange"
    },
    {
      icon: <School className="w-8 h-8" />,
      title: "Educational Institutions",
      description: "Campus security and traffic management for schools",
      pdf: "/pdfs/educational-security.pdf",
      color: "red"
    },
    {
      icon: <TrafficCone className="w-8 h-8" />,
      title: "Event Security",
      description: "Specialized security for events and public gatherings",
      pdf: "/pdfs/event-security.pdf",
      color: "yellow"
    }
  ];

  const colorClasses = {
    blue: "bg-blue-100 text-blue-600 hover:bg-blue-200",
    green: "bg-green-100 text-green-600 hover:bg-green-200",
    purple: "bg-purple-100 text-purple-600 hover:bg-purple-200",
    orange: "bg-orange-100 text-orange-600 hover:bg-orange-200",
    red: "bg-red-100 text-red-600 hover:bg-red-200",
    yellow: "bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Comprehensive security, crowd, and traffic management solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`p-6 ${colorClasses[service.color]}`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white rounded-lg">
                      {service.icon}
                    </div>
                    <FileText className="w-6 h-6 opacity-70" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </div>
                <div className="p-6 bg-gray-50">
                  <div className="flex space-x-4">
                    <Link 
                      to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-semibold transition-colors"
                    >
                      View Details
                    </Link>
                    <a 
                      href={service.pdf}
                      download
                      className="flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg font-semibold transition-colors"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      PDF
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Strategic Resource Partners</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Working with trusted subcontractors to overcome work pass quotas and provide comprehensive service coverage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Work Pass Quota Solutions</h3>
              <p className="text-gray-600">
                Strategic partnerships to overcome WP quota limitations while maintaining service quality
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Risk Mitigation</h3>
              <p className="text-gray-600">
                Subcontractors provide protection against stop-work orders at various staffing sites
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6">
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
          <h2 className="text-3xl font-bold mb-6">Need Our Services?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us to discuss your security, crowd, and traffic management requirements
          </p>
          <Link 
            to="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Services;