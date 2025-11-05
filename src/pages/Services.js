import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Shield, Users, Car, Building, School, TrafficCone, FileText, Target, TrendingUp, Zap, ShieldCheck, Sparkles, Bug, Trees } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Technology",
      description: "Comprehensive security solutions integrated with advanced technology for complete protection",
      image: "/img/security/sec.png",
      color: "blue",
      features: [
        "Event & Crowd Management",
        "Emergency Response Support",
        "Escort & Convoy Services",
        "Controlled Route Access",
        "Roving Security Responsive Support",
        "Traffic & Safety Monitoring",
        "Centralised 24-hr Facility Ops Centre"
      ],
      url: "/services/security-crowd-traffic-management"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Cleaning Services",
      description: "Professional cleaning solutions for commercial, healthcare, and specialized facilities",
      image: "/img/cleaning.jpg",
      color: "green",
      features: [
        "Commercial & Healthcare Facilities Cleaning",
        "External Facade & At-Height Cleaning & Restoration",
        "Customised Cleaning Services",
        "Specialised Cleaning Services (e.g. Upholstery & Carpet)"
      ],
      url: "/services/cleaning"
    },
    {
      icon: <Bug className="w-8 h-8" />,
      title: "Pest Control & Fumigation",
      description: "Complete pest management and fumigation services for all types of facilities",
      image: "/img/pest.jpeg",
      color: "orange",
      features: [
        "General Pest Control Services",
        "Integrated Termite Control Inspection / Treatment",
        "Fumigation Services: ISPM 15, PH3, BMSB",
        "Commodities / Vessel Fumigation",
        "Larvicide & Fogging Services",
        "Bird Control Measures"
      ],
      url: "/services/pest-control"
    },
    {
      icon: <Trees className="w-8 h-8" />,
      title: "Landscaping & Gardening",
      description: "Professional landscaping and gardening services to enhance your outdoor spaces",
      image: "/img/garden.jpeg",
      color: "emerald",
      features: [
        "Landscape Planting & Maintenance",
        "Arboriculture & Landscape Consultancy",
        "Plant Supply, Rental and Vertical Gardens",
        "Irrigation System Installation & Soil Management",
        "Pond Maintenance & Water Features"
      ],
      url: "/services/landscaping"
    }
  ];

  const colorClasses = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-emerald-600",
    orange: "from-orange-500 to-amber-600",
    emerald: "from-emerald-500 to-teal-600"
  };

  const iconBgClasses = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-emerald-600",
    orange: "bg-orange-100 text-amber-600",
    emerald: "bg-emerald-100 text-teal-600"
  };

  const approachFeatures = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Enhanced Productivity",
      description: "Streamlined processes and optimized workflows that maximize output"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Elevated Efficiency",
      description: "Smart solutions that reduce operational costs and improve performance"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Reliable Performance",
      description: "Consistent, dependable service delivery across all managed facilities"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Future-Ready Solutions",
      description: "Forward-thinking strategies that adapt to evolving challenges and needs"
    }
  ];

  return (
   <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Unifying expertise with innovative technology to deliver bespoke solutions that drive measurable impact
            </p>
          </div>
        </div>
      </section>

      {/* Integrated Approach Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255,255,255,0.2) 2%, transparent 0%)`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Our Integrated Approach
              </h2>
            </div>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              We combine strategic expertise with cutting-edge technology to create comprehensive solutions that
              transform your operational landscape. Our holistic methodology ensures seamless integration across
              all service domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {approachFeatures.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-4 group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
            <p className="text-lg text-center text-blue-50 leading-relaxed">
              With an unwavering commitment to excellence and a focus on long-term value creation,
              we empower our clients to operate with absolute confidence—knowing their environments
              are secure, optimized, and prepared for the future.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.url}
                className="group block"
              >
                `<div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col">
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    {/* Background Image */}
                    <div
                      className="w-full h-full bg-cover bg-center flex items-center justify-center"
                      style={{ backgroundImage: `url(${service.image})` }}
                    >
                      {/* Overlay for better text readability */}
                      <div className="absolute inset-0 bg-black/30"></div>

                      {/* Icon Container */}
                    <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 relative z-10">
  {service.icon}
</div>
                    </div>

                    {/* Service Badge */}
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm font-semibold bg-gradient-to-r ${colorClasses[service.color]}`}>
                      Service
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-1">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <div className={`w-2 h-2 rounded-full mt-2 mr-3 ${iconBgClasses[service.color].split(' ')[0]}`}></div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="mt-auto pt-4">
                      <div className={`w-full text-center py-3 px-4 rounded-xl bg-gradient-to-r ${colorClasses[service.color]} text-white font-semibold transform group-hover:scale-105 transition-all duration-300`}>
                        Explore Services
                      </div>
                    </div>
                  </div>
                </div>`
              </Link>
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
            <div className="bg-blue-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Work Pass Quota Solutions</h3>
              <p className="text-gray-600">
                Strategic partnerships to overcome WP quota limitations while maintaining service quality
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Risk Mitigation</h3>
              <p className="text-gray-600">
                Subcontractors provide protection against stop-work orders at various staffing sites
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
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
            Contact us to discuss your security, cleaning, pest control, and landscaping requirements
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Services;