import React from 'react';
import { Link } from 'react-router-dom';

import {
  Phone, Mail, Globe, MapPin, Users, Car, Shield,
  School, Building, Award, Clock, Star, ArrowRight,
  Target, Heart, Zap, CheckCircle, AlertTriangle,
  Truck, Package, Camera,
  TrafficCone,
  ShieldCheck
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaRegMessage } from 'react-icons/fa6';
import { CiGlobe } from 'react-icons/ci';

const CrowdAndTraffic = () => {



  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Risk Mitigation & Control",
      description:
        "We provide proactive risk assessment and threat mitigation strategies that minimize potential hazards before they occur. Our team identifies vulnerabilities, implements safety protocols, and ensures operational continuity for all types of environments.",
      features: [
        "Comprehensive risk assessments",
        "Incident prevention planning",
        "Strategic threat management"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Event & Crowd Management",
      description:
        "Our experienced officers manage crowd dynamics at concerts, sports events, and public gatherings to ensure the safety and comfort of all attendees. We specialize in smooth ingress/egress flow and incident-free crowd behavior monitoring.",
      features: [
        "Pre-event risk evaluation",
        "Flow and density control",
        "Emergency crowd response protocols"
      ]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Emergency Response Support",
      description:
        "Trained emergency response teams are ready to act swiftly in any situation — from accidents to medical emergencies or fire evacuations. We coordinate closely with public agencies to ensure rapid and effective responses.",
      features: [
        "On-site emergency coordination",
        "Medical & evacuation assistance",
        "Collaboration with local authorities"
      ]
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Safety & Best Practices",
      description:
        "Our operations follow internationally recognized safety standards and continuous training programs. We promote best practices in all aspects of fieldwork to ensure safety compliance and service excellence.",
      features: [
        "ISO & MOM safety compliance",
        "Standard Operating Procedures (SOPs)",
        "Continuous improvement initiatives"
      ]
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Traffic & Safety Monitoring",
      description:
        "We deliver professional traffic management and monitoring solutions for construction zones, road closures, and public events. Our officers ensure minimal disruption and the highest safety for motorists and pedestrians.",
      features: [
        "Real-time traffic supervision",
        "Pedestrian safety assurance",
        "Adaptive route management"
      ]
    },
    {
      icon: <School className="w-8 h-8" />,
      title: "Trained & Certified Personnel",
      description:
        "All our officers are professionally trained, licensed, and certified under industry and government standards. Regular refresher courses guarantee up-to-date knowledge in safety, security, and emergency response protocols.",
      features: [
        "WSQ-certified & licensed personnel",
        "Continuous skill development",
        "Professional conduct & discipline"
      ]
    }
  ];

  // const services = [
  //   {
  //     icon: <Building className="w-8 h-8" />,
  //     title: "Hospitality & Attraction",
  //     description: "Ensuring smooth pickups/drop-offs, guiding vehicles, and maintaining clear driveways for venues like Marina Bay Sands & Gardens By The Bay",
  //     features: ["Touting enforcement", "Data-informed strategy", "Enhanced visitor experience"]
  //   },
  //   {
  //     icon: <Shield className="w-8 h-8" />,
  //     title: "Escort Services",
  //     description: "Professional security escorts for various needs including ATM maintenance and executive protection",
  //     features: ["ATM Repair & Maintenance", "Vendor/Customer Escort", "Executive Protection"]
  //   },
  //   {
  //     icon: <Shield className="w-8 h-8" />,
  //     title: "Outrider Services",
  //     description: "VIP escort services for high net worth individuals, VIPs, and artists with high visibility equipment",
  //     features: ["High visibility motorcycles", "Professional trained officers", "24/7 availability"]
  //   },
  //   {
  //     icon: <Users className="w-8 h-8" />,
  //     title: "Crowd Control - Retail/Commercial",
  //     description: "Field-proven crowd control solutions for retail spaces and commercial areas",
  //     features: ["Zero incidence standard", "Physical boundaries", "Risk assessment"]
  //   },
  //   {
  //     icon: <Award className="w-8 h-8" />,
  //     title: "Large Scale Events",
  //     description: "Comprehensive security for live music, sports, exhibitions, and conventions",
  //     features: ["Extensive coordination", "Safety protocols", "Positive public experience"]
  //   },
  //   {
  //     icon: <Car className="w-8 h-8" />,
  //     title: "Road Works & Public Streets",
  //     description: "Fully trained and licensed traffic marshals for construction projects and public roads",
  //     features: ["Traffic control plans", "Safety compliance", "Minimal disruptions"]
  //   },
  //   {
  //     icon: <School className="w-8 h-8" />,
  //     title: "Educational Zones",
  //     description: "Traffic management for schools during pick-up and drop-off times",
  //     features: ["Student safety", "Traffic regulation", "School zone management"]
  //   },
  //   {
  //     icon: <Package className="w-8 h-8" />,
  //     title: "High Value Package Security",
  //     description: "Secure transportation for valuable items below SGD$250,000 threshold",
  //     features: ["Specialized vehicles", "GPS tracking", "Trained Security Transport Operators"]
  //   }
  // ];




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
      <section className="pt-32 pb-20  text-white" style={{backgroundColor:"#702727"}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Security & Technology
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
              Unlocking Innovative Solutions

            </p>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
              Enabling cities of the future with comprehensive security and traffic solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-blue-200">
                <Shield className="w-5 h-5 mr-2" />
                <span>Event & Crowd Management
                </span>
              </div>
              <div className="flex items-center text-blue-200">
                <Users className="w-5 h-5 mr-2" />
                <span>Emergency Response Support
                </span>
              </div>
              <div className="flex items-center text-blue-200">
                <Car className="w-5 h-5 mr-2" />
                <span>Escort & Convoy Services
                </span>
              </div>

              <div className="flex items-center text-blue-200">
                <Shield className="w-5 h-5 mr-2" />
                <span>Controlled Route Access

                </span>
              </div>



            </div>


            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">


              <div className="flex items-center text-blue-200">
                <Users className="w-5 h-5 mr-2" />
                <span>Roving Security Responsive Support

                </span>
              </div>
              <div className="flex items-center text-blue-200">
                <Car className="w-5 h-5 mr-2" />
                <span>Traffic & Safety Monitoring

                </span>
              </div>
              <div className="flex items-center text-blue-200">
                <Car className="w-5 h-5 mr-2" />
                <span>Centralised 24-hr Facility Ops Centre


                </span>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">TRAFFIC AND CROWD MANAGEMENT</h2>
              <p className="text-lg text-gray-600 mb-6">
                Efficient traffic control road diversions, and vigilant supervision to safeguard the public from potential risks and hazards. Compliant with stringent safety standards at worksites, work convoys, and major event venues
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




      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">


        <div className="max-w-7xl mx-auto px-4">


         <div className="relative py-16 mb-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }}></div>
  </div>

  {/* Animated Background Elements */}
  <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
  <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

  <div className="max-w-4xl mx-auto px-6 relative z-10">
    {/* Enhanced Heading */}
    <div className="text-center mb-12">
      <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl px-8 py-4 mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
          CROWD CONTROL | MAJOR EVENTS
        </h2>
      </div>
    </div>

    {/* Enhanced Image */}
    <div className="relative mb-8 group">
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
      <img 
        src='/img/security/sec1.png' 
        alt='Crowd Control Major Events'
        className="relative w-full h-64 object-cover rounded-xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
      />
      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
        🛡️ Professional Event Security
      </div>
    </div>

    {/* Enhanced Content */}
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
      <div className="flex items-start mb-4">
        <div className="bg-blue-500 rounded-lg p-3 mr-4">
          <Users className="w-6 h-6 text-white" />
        </div>
        <p className="text-lg text-blue-100 leading-relaxed flex-1">
          As an event host, you want to ensure that the security team you hire will have the skill set needed to handle safety issues, as the risk of injuries or altercations due to large crowd moving en-masse at events are extremely high. Whether the events is a live music, sports, exhibitions & conventions or industry show it should be coordinated to maximise security and efficiencies inside and outside the venue with the best practice protocols in place to avoid any uncertainty of disruption. As event security entails far more than just dotting the venue with security personnel. The process is quite complex and requires extensive coordination and communication
        </p>
      </div>
    </div>
  </div>
</div>







          <div className="max-w-7xl mx-auto">

            
          <div className="flex flex-col lg:flex-row gap-8 items-center">
  {/* Image Section - Enhanced */}
  <div className="w-full lg:w-1/2">
    <div className="relative group">
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
      <img
        src='/img/security/sec2.png'
        alt="Event Security Solutions"
        className="relative w-full h-full object-cover rounded-xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
      />
      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
        🎯 Custom Solutions
      </div>
    </div>
  </div>

  {/* Content Section - Enhanced */}
  <div className="w-full lg:w-1/2">
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
      {/* First Paragraph with Icon */}
      <div className="flex items-start mb-6">
        <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg p-3 mr-4 flex-shrink-0">
          <ShieldCheck className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Bespoke Security Solutions</h3>
          <p className="text-blue-100 leading-relaxed">
            At FIH, with our years of experiences in evaluating event security and safety concern, we have help deliver bespoke solutions for event's organisers and reducing their daunting challenge of finding the right balance of maximising event success and safety of attendees.
          </p>
        </div>
      </div>

      {/* Second Paragraph with Icon */}
      <div className="flex items-start">
        <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg p-3 mr-4 flex-shrink-0">
          <Award className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Positive Public Experience</h3>
          <p className="text-blue-100 leading-relaxed">
            Notably, by implementing the right security practices and crowd management will ensure that everything goes as planned, as well as provide a positive public's experience to help you build credibility for future events.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>







            <div className="relative py-16 mb-16 mt-4 overflow-hidden">
              {/* Background with gradient and pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900">
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                  }}>
                </div>
              </div>

              {/* Animated background elements */}
              <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
              <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
              <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>

              <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Beautiful Heading Section */}
                <div className="text-center mb-12">
                  <div className="inline-block relative">
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-blue-400"></div>
                    <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-blue-400"></div>
                    <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-purple-400"></div>
                    <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-purple-400"></div>

                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent py-4 px-8">
                      TRAFFIC OUTRIDERS | ENFORCEMENT
                    </h2>

                    {/* Underline effect */}
                    <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
                    <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-1 rounded-full"></div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left Side - Beautiful Content */}
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                            <Shield className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-3">Professional Event Security</h3>
                          <p className="text-blue-100 text-lg leading-relaxed">
                            As an event host, you want to ensure that the security team you hire will have the skill set needed to handle safety issues, as the risk of injuries or altercations due to large crowd moving en-masse at events are extremely high.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                            <Users className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-3">Comprehensive Coordination</h3>
                          <p className="text-blue-100 text-lg leading-relaxed">
                            Whether the event is a live music, sports, exhibitions & conventions or industry show, it should be coordinated to maximise security and efficiencies inside and outside the venue with the best practice protocols.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                            <Target className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-3">Expert Enforcement</h3>
                          <p className="text-blue-100 text-lg leading-relaxed">
                            Our traffic outriders and enforcement teams ensure smooth operations with protocols in place to avoid any uncertainty of disruption, going beyond just security personnel placement.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Image */}
                  <div className="relative">
                    <div className="relative rounded-2xl overflow-hidden group">
                      {/* Image container with beautiful frame */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl"></div>
                      <img
                        src='/img/security/sec3.png'
                        alt='Traffic Outriders Enforcement'
                        className="w-full h-96 object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
                      />

                      {/* Overlay effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>

                      {/* Floating badge */}
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-semibold text-sm backdrop-blur-sm">
                        Professional Security
                      </div>
                    </div>

                    {/* Stats below image */}
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <div className="text-2xl font-bold text-white">100%</div>
                        <div className="text-blue-200 text-sm">Safety Rate</div>
                      </div>
                      <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <div className="text-2xl font-bold text-white">24/7</div>
                        <div className="text-blue-200 text-sm">Support</div>
                      </div>
                      <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <div className="text-2xl font-bold text-white">500+</div>
                        <div className="text-blue-200 text-sm">Events</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>





            <div className="relative py-16 mb-16 overflow-hidden">
              {/* Background with gradient and pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-900 to-gray-900">
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                  }}>
                </div>
              </div>

              {/* Animated background elements */}
              <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
              <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
              <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>

              <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Beautiful Heading Section */}
                <div className="text-center mb-12">
                  <div className="inline-block relative">
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-amber-400"></div>
                    <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-amber-400"></div>
                    <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-orange-400"></div>
                    <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-orange-400"></div>

                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent py-4 px-8">
                      TRAFFIC OUTRIDERS | ESCORT
                    </h2>

                    {/* Underline effect */}
                    <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
                    <div className="h-1 w-16 bg-gradient-to-r from-red-500 to-amber-500 mx-auto mt-1 rounded-full"></div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left Side - Image */}
                  <div className="relative">
                    <div className="relative rounded-2xl overflow-hidden group mb-2">

                      {/* Image container with beautiful frame */}
                      <div className="absolute inset-0 bg-gradient-to-br  from-amber-500/20 to-orange-500/20 rounded-2xl"></div>
                      <img
                        src='/img/security/swec4.png'
                        alt='Traffic Outriders Escort Services'
                        className="w-full h-96 object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
                      />

                      {/* Overlay effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>

                      {/* Floating badge */}
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 rounded-full font-semibold text-sm backdrop-blur-sm">
                        Professional Escort
                      </div>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden group mb-2">
                      <img
                        src='/img/security/sec5.png'
                        alt='Traffic Outriders Escort Services'
                        className="w-full h-96 object-cover rounded-2xl mb-6 transform group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Image container with beautiful frame */}
                      <div className="absolute inset-0 bg-gradient-to-br  from-amber-500/20 to-orange-500/20 rounded-2xl"></div>


                      {/* Overlay effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>

                      {/* Floating badge */}
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 rounded-full font-semibold text-sm backdrop-blur-sm">
                        Escort
                      </div>
                    </div>

                    {/* Stats below image */}
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <div className="text-2xl font-bold text-white">100%</div>
                        <div className="text-amber-200 text-sm">Trained Staff</div>
                      </div>
                      <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <div className="text-2xl font-bold text-white">24/7</div>
                        <div className="text-amber-200 text-sm">Availability</div>
                      </div>
                      <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <div className="text-2xl font-bold text-white">500+</div>
                        <div className="text-amber-200 text-sm">Projects</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Beautiful Content */}
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                            <Car className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-3">Professional Traffic Management</h3>
                          <p className="text-amber-100 text-lg leading-relaxed">
                            FIH provides traffic outrider services to construction projects and sites for a range of clients. Our traffic marshals are fully trained, licensed and experienced to preserve traffic and pedestrian routes.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                            <Shield className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-3">Safety & Efficiency</h3>
                          <p className="text-amber-100 text-lg leading-relaxed">
                            Road works construction projects tend to cause disruption to normal traffic flow. Our dedicated traffic marshals keep traffic moving smoothly and prevent long delays while ensuring a safe work environment.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                            <Users className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-3">Expert Consultation</h3>
                          <p className="text-amber-100 text-lg leading-relaxed">
                            Our traffic managers are skilled controllers who provide professional advice from site reconnaissance to ensure smooth workflow for construction activities and minimize risks to workers and road users.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Feature Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                  <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrafficCone className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">Traffic Control</h4>
                    <p className="text-amber-100">Expert management of traffic flow around construction sites</p>
                  </div>

                  <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ShieldCheck className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">Safety First</h4>
                    <p className="text-amber-100">Ensuring worker safety and public protection at all times</p>
                  </div>

                  <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">Quick Response</h4>
                    <p className="text-amber-100">Rapid deployment and adaptive traffic solutions</p>
                  </div>
                </div>
              </div>
            </div>



            <div className="relative py-16 overflow-hidden">
              {/* Background with gradient and pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-900 to-gray-900">
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                  }}>
                </div>
              </div>

              {/* Animated background elements */}
              <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
              <div className="absolute top-0 right-0 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
              <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>

              <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Main Heading */}
                <div className="text-center mb-16">
                  <div className="inline-block relative">
                    <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-emerald-400"></div>
                    <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-emerald-400"></div>
                    <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-green-400"></div>
                    <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-green-400"></div>

                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent py-4 px-8">
                      TRAFFIC OUTRIDERS | SCHOOLS
                    </h2>

                    <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto mt-4 rounded-full"></div>
                    <div className="h-1 w-16 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mt-1 rounded-full"></div>
                  </div>
                </div>

                {/* School Safety Section */}
                <div className="mb-20">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Image */}
                    <div className="relative">
                      <div className="relative rounded-2xl overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-2xl"></div>
                        <img
                          src='/img/security/sec6.png'
                          alt='School Traffic Safety'
                          className="w-full h-80 object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-4 py-2 rounded-full font-semibold text-sm backdrop-blur-sm">
                          School Safety
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                        <h3 className="text-2xl font-bold text-white mb-4">School Zone Safety Concerns</h3>
                        <p className="text-emerald-100 text-lg leading-relaxed">
                          Today, one of the most frequently expressed road safety concerns is the safety of children outside schools.
                          During drop-off and pick-up times, roads near schools experience high levels of vehicle and pedestrian traffic,
                          causing congestion and frustration among road users.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* School Implementation Section */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Content */}
                    <div className="space-y-6">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                        <h3 className="text-2xl font-bold text-white mb-4">Risk Management & Safety</h3>
                        <p className="text-emerald-100 text-lg leading-relaxed mb-4">
                          It is paramount that school leaders assess risks from vehicular movement and take reasonable steps to manage
                          those risks within school zones during assembly and dismissal periods to ensure students' safe commuting.
                        </p>
                        <p className="text-emerald-100 text-lg leading-relaxed">
                          At FIH, our traffic marshals support schools with road safety, particularly during high traffic volumes.
                          Serving schools like Maris Stella High School & Nan Hua High School, our marshals regulate traffic,
                          facilitate safe road crossing, and ensure orderly vehicle parking for pick-up/drop-off.
                        </p>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="relative">
                      <div className="relative rounded-2xl overflow-hidden group">
                        <img
                          src='/img/security/sec7.png'
                          alt="School Traffic Management"
                          className="w-full h-80 object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* School Zone Improvements Section */}
                <div className="mb-20">
                  <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-white mb-4">School Zone Safety Improvements</h3>
                    <div className="relative rounded-2xl overflow-hidden group max-w-4xl mx-auto mb-8">
                      <img
                        src='/img/security/sec8.png'
                        alt='School Zone Improvements'
                        className="w-full h-64 object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <p className="text-emerald-100 text-lg max-w-4xl mx-auto">
                      There are distinct ways to improve school zones, from clearly marking crosswalks and warning motorists
                      to enforcing rules in drop-off and pick-up zones. Our security and traffic consultants help clients
                      review traffic management plans annually and provide SOPs complying with Singapore Police Force and
                      Traffic Police Guidelines.
                    </p>
                  </div>

                  {/* Pedestrian Safety Section */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-white mb-4 text-center">Pedestrian Safety Principles</h3>
                    <div className="relative rounded-2xl overflow-hidden group max-w-2xl mx-auto mb-6">
                      <img
                        src='/img/security/sec9.png'
                        alt='Pedestrian Safety'
                        className="w-full h-64 object-cover rounded-2xl"
                      />
                    </div>
                    <p className="text-emerald-100 text-lg text-center">
                      Keeping pedestrians away from vehicles is crucial. During risk assessment, we focus on segregating
                      pedestrians from vehicles to prevent accidents. Despite planning, people may disobey rules, especially children.
                      Ideal solutions include separate vehicle and pedestrian routes with properly marked crossings, warning signs,
                      and supervision for better road safety awareness.
                    </p>
                  </div>
                </div>

                {/* 24-Hour Facility Response Section */}
                <div className="mb-20">
                  <div className="text-center mb-12">
                    <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                      FACILITY RESPONSE | 24 Hours
                    </h3>
                    <div className="relative rounded-2xl overflow-hidden group max-w-4xl mx-auto mb-8">
                      <img
                        src='/img/security/sec10.png'
                        alt='24-Hour Facility Response'
                        className="w-full h-64 object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <h4 className="text-xl font-bold text-white mb-4">Emergency Response Team</h4>
                      <p className="text-blue-100">
                        Our 24-hour Facility Operations Centre offers Emergency Response Team services seven days a week,
                        responding to security breaches, restoring operations quickly, and bolstering security to detect
                        and respond to any security situation.
                      </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <h4 className="text-xl font-bold text-white mb-4">Crisis Management</h4>
                      <p className="text-blue-100">
                        We help companies perform crisis management as the primary interface with industry crisis management teams,
                        activating security professionals on-site within hours for investigation, vulnerability resolution,
                        and security best practices.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Traffic Marshals Construction Section */}
                <div className="mb-16">
                  <div className="text-center mb-12">
                    <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-6">
                      TRAFFIC MARSHALS | CONSTRUCTION
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="relative">
                      <div className="relative rounded-2xl overflow-hidden group">
                        <img
                          src='/img/security/sec11.png'
                          alt="Construction Traffic Management"
                          className="w-full h-80 object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                        <h4 className="text-xl font-bold text-white mb-4">Project Safety & Scheduling</h4>
                        <p className="text-amber-100 mb-4">
                          Large projects operate on tight schedules with regular milestones. Any mishaps resulting in stop-work
                          orders significantly impact project completion. Road safety is typically incorporated into EHS and
                          overall safety programs.
                        </p>
                        <p className="text-amber-100">
                          To prevent injuries, only authorized vehicles are permitted on site. Our officers provide site entry
                          administration and escort services, especially valuable in large projects with multiple simultaneous
                          work parcels and unfamiliar visitors.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                  <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <School className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">School Safety</h4>
                    <p className="text-emerald-100">Protecting children during school hours</p>
                  </div>

                  <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">24/7 Response</h4>
                    <p className="text-blue-100">Round-the-clock emergency support</p>
                  </div>

                  <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">Construction Sites</h4>
                    <p className="text-amber-100">Traffic management for projects</p>
                  </div>
                </div>
              </div>
            </div>





















            {/* Full Width Bottom Section */}
            {/* <div className="mt-12 w-full">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
                <div className="text-center">
                  <Target className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Singapore Aviation Hub</h3>
                  <p className="text-gray-700">
                    Connected by 100+ airlines operating 6,000+ weekly flights to 300+ cities across 80+ countries
                  </p>
                </div>
              </div>
            </div> */}
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
              <blockquote className="text-lg text-black italic mb-6">
                "Incident Response needs people, because successful incident response requires thinking."
              </blockquote>
              <div className="flex items-center">
                <div className="bg-white bg-opacity-20 rounded-full p-2 mr-4">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-black">Chan Meng Chuen</p>
                  <p className=" text-sm text-black">Director, Security ADVANCER IFM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-20 bg-white">
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
      </section> */}

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
      <section className="py-20  items-center mx-auto"   >

        <div className="footer-logo-container">
          <img
            src="/img/logo.png"
            alt="FIH Logo"
            className={`h-10 w-auto transition-all duration-300 
                }`}
          />
          <span className={`text-3xl transition-all duration-300 
                }`}>SECURITY</span>
        </div>



        <div className="contact-info flex justify-center  mx-auto mt-8 flex-wrap">
          

          <div className="contact-item">
            <img
              src="/img/security/securityscanner.png"
              alt="FIH Logo"
              className={`h-40 w-auto transition-all duration-300 
                }`}
            />
          </div>

          <div className="contact-item">
            <span className="contact-label">Traffic & Security</span>
            <span className="contact-detail text-white mb-6" ><span class="log "><FaPhoneAlt /></span>+65 9741-7333  <br />+65 9742-7333</span>

            <span className="contact-email text-white mb-3" ><span class="log "><CiGlobe /></span>security@fih.com.sg</span>
            <span className="contact-email text-white" > <span class="log "><CiGlobe /> </span>  9 Eunos Ave 8A,<br />
              #02-00 <br />
              Singapore 409461</span>
          </div>
        </div>


      </section>
    </div>
  );
}

export default CrowdAndTraffic;