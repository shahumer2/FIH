import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { 
  Phone, Mail, Globe, MapPin, Users, Shield, Award, 
  Clock, Star, ArrowRight, Target, CheckCircle, 
  Building, Home, School, Hotel, AlertTriangle, 
  Zap, Camera, Truck, Heart
} from 'lucide-react';

const CriticalInfrastructure = () => {
  const services = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Critical Infrastructure Protection",
      description: "Complete security solutions for government institutions and commercial organizations",
      features: ["Threat Vulnerability Assessment", "Risk Management", "Integrated Security Solutions"]
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Residential Security",
      description: "Professional security guard forces for residential complexes and private estates",
      features: ["24/7 Surveillance", "Access Control", "Rapid Response Teams"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Club Security",
      description: "Specialized security services for exclusive clubs and private establishments",
      features: ["Traffic Management", "VIP Protection", "Event Security"]
    },
    {
      icon: <School className="w-8 h-8" />,
      title: "Educational Institutions",
      description: "Comprehensive security and traffic management for schools and universities",
      features: ["Student Safety", "Traffic Regulation", "Campus Security"]
    },
    {
      icon: <Hotel className="w-8 h-8" />,
      title: "Healthcare Facilities",
      description: "Specialized security for hospitals, clinics, and medical facilities",
      features: ["Infection Control", "Patient Safety", "Medical Facility Security"]
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Body Worn Camera Solutions",
      description: "Advanced surveillance technology for enhanced security operations",
      features: ["Video Evidence", "Civilizing Effect", "Quick Resolution"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Emergency Response Team",
      description: "24/7 rapid response services for security breaches and emergencies",
      features: ["Crisis Management", "Incident Response", "Security Breach Recovery"]
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Money Escort Services",
      description: "Secure transportation for high-value items and financial institutions",
      features: ["ATM Services", "Alarm Response", "Banking Security"]
    }
  ];

  const covidProjects = [
    {
      name: "Big Box Community Care Facility",
      capacity: "2,900 Patients",
      services: ["Security Guard Services", "Infection Control", "Patient Management"],
      achievement: "First patient received within 10 days of contract award"
    },
    {
      name: "Festive Hotel SHF",
      capacity: "Special Hybrid Facility",
      services: ["Quarantine Security", "PPE Management", "Infection Prevention"],
      achievement: "First Special Hybrid Facility in Singapore"
    },
    {
      name: "Hard Rock Hotel SHF",
      capacity: "Combined Security Operations",
      services: ["Command Centre", "Safety Screening", "Zone Demarcation"],
      achievement: "40+ officers deployed across both hotel facilities"
    },
    {
      name: "Tuas South CCF",
      capacity: "2,000 Beds",
      services: ["Surveillance Operations", "Infection Control", "Emergency Response"],
      achievement: "Successful transition from Big Box operations"
    },
    {
      name: "Ang Mo Kio CCF",
      capacity: "1,509 Beds",
      services: ["Access Control", "Traffic Management", "Emergency Evacuation"],
      achievement: "Deployed within 72 hours in dense township"
    },
    {
      name: "Changi East Development",
      capacity: "Worker Quarters",
      services: ["Infection Control", "Deep Cleaning", "CERT Operations"],
      achievement: "Reduced COVID-19 spread in construction workforce"
    }
  ];

  const testimonials = [
    {
      quote: "Ashtree demonstrated the ability to understand the complexities, while respecting the individual stakeholder's concerns and interests.",
      author: "Keith It, Director of Campus Security, National University of Singapore"
    },
    {
      quote: "Within a very short timeframe of 10 days, Advancer was able to establish resources and have been an active association and safety coordinator.",
      author: "Keck Tung San, Vice President, Resorts World Sentosa"
    },
    {
      quote: "We are privileged to work with an experienced ASHTREE management staff with both strategic and tactical improvement in the national fight against COVID.",
      author: "Mr Zinchen, Chief Consulting Officer, TS Group"
    },
    {
      quote: "The body worn camera is a management initiative for both safety and security. Footages recorded help management understand and review potential complacency.",
      author: "Dave Resendez, HSSE Director, Tiong Seng Construction"
    }
  ];

  const awards = [
    {
      title: "President's Truck of Commendation (COVID-19)",
      description: "Only Security Agency in Singapore besides AETOS and CERTIS to receive this national award",
      year: "2022"
    },
    {
      title: "COVID-19 Resilience Medal",
      description: "Awarded to over 200 security officers for their contributions during the pandemic",
      year: "2022"
    },
    {
      title: "Excellence in Security Services",
      description: "Recognition for outstanding performance in national COVID-19 projects",
      year: "2021"
    }
  ];

  const technologies = [
    {
      name: "Body Worn Cameras",
      description: "Wearable audio/video recording systems for evidence collection and behavior modification",
      benefits: ["Increased civility", "Quicker resolution", "Corroborating evidence"]
    },
    {
      name: "Smart Robot Patrol (Kenobi)",
      description: "AI-powered robots for automated patrols and public health monitoring",
      benefits: ["Contactless operations", "24/7 surveillance", "Remote assistance"]
    },
    {
      name: "Geo-Tracker Systems",
      description: "Real-time location tracking for officers and resource management",
      benefits: ["Movement monitoring", "Digital processes", "Safety enhancement"]
    },
    {
      name: "Command Centre Operations",
      description: "Centralized surveillance and control for multiple facilities",
      benefits: ["Real-time monitoring", "Rapid response", "Coordination"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              CRITICAL INFRASTRUCTURE PROTECTION
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
              ASHTREE INTERNATIONAL - Your Safety and Security is our Top Priority, for your Peace of Mind
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-blue-200">
                <Shield className="w-5 h-5 mr-2" />
                <span>Residential, Clubs & Critical Infrastructure</span>
              </div>
              <div className="flex items-center text-blue-200">
                <Award className="w-5 h-5 mr-2" />
                <span>President's Award Recipient</span>
              </div>
              <div className="flex items-center text-blue-200">
                <Heart className="w-5 h-5 mr-2" />
                <span>National COVID-19 Response Partner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About ASHTREE INTERNATIONAL</h2>
              <p className="text-lg text-gray-600 mb-6">
                Incorporated in 2008, ASHTREE INTERNATIONAL advises, designs and delivers complete and workable solutions 
                to government institutions and commercial organizations. We specialize in critical infrastructure protection 
                solutions, project funding, consulting, risk management, and cybersecurity asset management.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Critical infrastructure protection solutions</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Project funding, consulting and risk management</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Cybersecurity asset management</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
              <div className="text-center">
                <Target className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h3>
                <p className="text-gray-700 italic">
                  "We advise threat vulnerability risk faced by your facility, design a guard force and technology 
                  mitigation to deliver the optimal integrated security solution to your facility."
                </p>
                <p className="text-gray-600 mt-4 font-semibold">- Dr Matthew Yap, Managing Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Presidential Award Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Award className="w-8 h-8 mr-3" />
              <h2 className="text-3xl font-bold">President's Truck of Commendation (COVID-19)</h2>
            </div>
            <p className="text-xl text-red-100">
              The only Security Agency in Singapore besides AETOS and CERTIS to receive this prestigious national award
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="bg-gray-600 bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm text-center">
                <Truck className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                <p className="text-red-100 text-sm mb-3">{award.description}</p>
                <span className="bg-white text-red-600 px-3 py-1 rounded-full text-sm font-bold">
                  {award.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Comprehensive Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional security solutions tailored for residential, commercial, and critical infrastructure protection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-blue-100 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {service.icon}
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <Zap className="w-4 h-4 text-yellow-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COVID-19 National Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-8 h-8 text-red-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">National COVID-19 Response Projects</h2>
            </div>
            <p className="text-lg text-gray-600">Leading Singapore's fight against COVID-19 through comprehensive security solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {covidProjects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.name}</h3>
                <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                  {project.capacity}
                </div>
                <ul className="space-y-2 mb-4">
                  {project.services.map((service, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500 bg-white bg-opacity-50 rounded-lg p-3">
                  {project.achievement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Solutions */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Advanced Technology Solutions</h2>
            <p className="text-gray-300">Leveraging cutting-edge technology for enhanced security operations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-colors">
                <h3 className="text-xl font-bold mb-3 text-blue-400">{tech.name}</h3>
                <p className="text-gray-300 mb-4 text-sm">{tech.description}</p>
                <div className="space-y-2">
                  {tech.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-400">
                      <Zap className="w-4 h-4 text-yellow-400 mr-2" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-lg text-gray-600">Trusted by leading organizations across Singapore</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-gray-900 font-semibold">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Response Team */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-8 h-8 mr-3" />
                <h2 className="text-3xl font-bold">Emergency Response Team</h2>
              </div>
              <p className="text-xl mb-6 text-blue-100">
                24/7 support for active security breaches, restoring operations quickly, and bolstering security operations
              </p>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Crisis management and primary interface
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Investigation and analysis
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Security best practices training
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Immediate on-site response within hours
                </li>
              </ul>
            </div>
            <div className="bg-gray-600 bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <blockquote className="text-lg italic mb-6">
                "Incident Response needs people, because successful incident response requires thinking."
              </blockquote>
              <div className="flex items-center">
                <div className="bg-gray-700 bg-opacity-20 rounded-full p-2 mr-4">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Chan Meng Chuen</p>
                  <p className="text-blue-200 text-sm">Operations Director, ASHTREE International</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Contact ASHTREE INTERNATIONAL</h2>
            <p className="text-xl text-blue-100">Get in touch with our security specialists</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-gray-800 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Recruitment</h3>
              <p className="text-blue-100 text-lg">(65) 9740 7333</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-800 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Operations</h3>
              <p className="text-blue-100 text-lg">(65) 9741 7333</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-800 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <AlertTriangle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Emergency Response</h3>
              <p className="text-blue-100 text-lg">(65) 9742 7333</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Mail className="w-5 h-5 mr-2" />
                <h3 className="text-lg font-semibold">Email Addresses</h3>
              </div>
              <div className="space-y-2">
                <p className="text-blue-100">info@ashtree.com.sg</p>
                <p className="text-blue-100">sales@ashtree.com.sg</p>
                <p className="text-blue-100">ops@ashtree.com.sg</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <h3 className="text-lg font-semibold">Address</h3>
              </div>
              <p className="text-blue-100">
                18 Sin Ming Lane, #06-34 Midview City<br />
                Singapore 573960
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a 
              href="https://www.ashtree.com.sg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Globe className="w-5 h-5 mr-2" />
              Visit Our Website
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CriticalInfrastructure;