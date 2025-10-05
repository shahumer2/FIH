import React from 'react';
import { Link } from 'react-router-dom';

import { 
  Phone, Mail, Globe, MapPin, Users, Car, Shield, 
  School, Building, Award, Clock, Star, ArrowRight,
  Target, Heart, Zap, CheckCircle, AlertTriangle,
  Truck, Package, Camera
} from 'lucide-react';
import Navbar from '../../components/Navbar';

const CrowdAndTraffic = () => {
  const services = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Hospitality & Attraction",
      description: "Ensuring smooth pickups/drop-offs, guiding vehicles, and maintaining clear driveways for venues like Marina Bay Sands & Gardens By The Bay",
      features: ["Touting enforcement", "Data-informed strategy", "Enhanced visitor experience"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Escort Services",
      description: "Professional security escorts for various needs including ATM maintenance and executive protection",
      features: ["ATM Repair & Maintenance", "Vendor/Customer Escort", "Executive Protection"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Outrider Services",
      description: "VIP escort services for high net worth individuals, VIPs, and artists with high visibility equipment",
      features: ["High visibility motorcycles", "Professional trained officers", "24/7 availability"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Crowd Control - Retail/Commercial",
      description: "Field-proven crowd control solutions for retail spaces and commercial areas",
      features: ["Zero incidence standard", "Physical boundaries", "Risk assessment"]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Large Scale Events",
      description: "Comprehensive security for live music, sports, exhibitions, and conventions",
      features: ["Extensive coordination", "Safety protocols", "Positive public experience"]
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Road Works & Public Streets",
      description: "Fully trained and licensed traffic marshals for construction projects and public roads",
      features: ["Traffic control plans", "Safety compliance", "Minimal disruptions"]
    },
    {
      icon: <School className="w-8 h-8" />,
      title: "Educational Zones",
      description: "Traffic management for schools during pick-up and drop-off times",
      features: ["Student safety", "Traffic regulation", "School zone management"]
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "High Value Package Security",
      description: "Secure transportation for valuable items below SGD$250,000 threshold",
      features: ["Specialized vehicles", "GPS tracking", "Trained Security Transport Operators"]
    }
  ];

  const clients = [
    "Marina Bay Sands", "Gardens By The Bay", "ION Orchard", "Maris Stella High School", 
    "Nan Hua High School", "Changi Airport Group", "Samsung C&T", "China Communications Construction",
    "Dragages Singapore", "Singapore International Water Week", "Singapore Airshow"
  ];

  const testimonials = [
    {
      quote: "Ashtree demonstrated the ability to understand the complexities, while respecting the individual stakeholder's concerns and interests.",
      author: "Project Engineer, Hi Power"
    },
    {
      quote: "We are satisfied and confident with Advancer IFM traffic regulating work and their Safety-First approach is very respectful.",
      author: ""
    },
    {
      quote: "We are privileged to work with an experience AIFM Management staff with both strategic and tactical perspectives.",
      author: "Keith It, Director, Office of Campus Security, NUS"
    },
    {
      quote: "AIFM Team is quick to address key concern & issues to meet our demanding business needs, while remains flexible in responding to changing expectation, is a commendable effort.",
      author: "Tome Oh, COO, TS Group"
    },
    {
      quote: "Great Service! All I can say is that Traffic@AIFM has one of the best operational procedures and the staff are top notch.",
      author: "Project Coordinator, NCB Contractor"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              SECURITY CROWD & TRAFFIC MANAGEMENT SERVICES
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
              Enabling cities of the future with comprehensive security and traffic solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-blue-200">
                <Shield className="w-5 h-5 mr-2" />
                <span>Professional Security Services</span>
              </div>
              <div className="flex items-center text-blue-200">
                <Users className="w-5 h-5 mr-2" />
                <span>Expert Crowd Management</span>
              </div>
              <div className="flex items-center text-blue-200">
                <Car className="w-5 h-5 mr-2" />
                <span>Traffic Control Solutions</span>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About ADVANCER IFM</h2>
              <p className="text-lg text-gray-600 mb-6">
                Incorporated in 2008, ADVANCER IFM advises, designs and delivers complete and workable solutions 
                to government institutions and commercial organizations. Since 2019, we've expanded our services 
                to include crowd and traffic management, ensuring minimal risks and hazards for your business.
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 italic">
                  "Your Safety and Security is our Top Priority, for your Peace of Mind"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Comprehensive Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional security, crowd, and traffic management solutions tailored to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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

      {/* Emergency Response Team */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-8 h-8 mr-3" />
                <h2 className="text-3xl font-bold">Emergency Response Team</h2>
              </div>
              <p className="text-xl mb-6 text-red-100">
                24/7 support for active security breaches, restoring operations quickly, and bolstering security operations
              </p>
              <ul className="space-y-3 text-red-100">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-300" />
                  Crisis management and primary interface
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-300" />
                  Investigation and analysis
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-300" />
                  Security best practices training
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-300" />
                  Immediate on-site response within hours
                </li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <blockquote className="text-lg italic mb-6">
                "Incident Response needs people, because successful incident response requires thinking."
              </blockquote>
              <div className="flex items-center">
                <div className="bg-white bg-opacity-20 rounded-full p-2 mr-4">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Chan Meng Chuen</p>
                  <p className="text-red-200 text-sm">Director, Security ADVANCER IFM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-lg text-gray-600">What our valued clients say about our services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                {testimonial.author && (
                  <p className="text-gray-900 font-semibold">{testimonial.author}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valued Clients */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Valued Clients</h2>
            <p className="text-gray-300">Trusted by leading organizations across Singapore</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors">
                <Building className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <p className="font-semibold text-sm">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-xl text-blue-100">Get in touch with our specialized teams</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Recruitment</h3>
              <p className="text-blue-100 text-lg">(65) 9741 7333</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Operations</h3>
              <p className="text-blue-100 text-lg">(65) 9474 7333</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-8 h-8" />
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
                <p className="text-blue-100">sales1@advancer.sg</p>
                <p className="text-blue-100">traffic1@advancer.sg</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <h3 className="text-lg font-semibold">Address</h3>
              </div>
              <p className="text-blue-100">
                Blk 135 Jurong Gateway Road,<br />
                #06-317 Singapore 600135
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a 
              href="https://www.trafficmarshal.sg" 
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

export default CrowdAndTraffic;