import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { 
  Phone, Mail, Globe, MapPin, Users, Shield, Award, 
  Clock, Star, ArrowRight, Target, CheckCircle, 
  Building, Home, School, Hotel, AlertTriangle, 
  Zap, Camera, Truck, Heart, Car, Crosshair, Eye
} from 'lucide-react';

const EducationAndSchools = () => {
  const services = [
    {
      icon: <School className="w-8 h-8" />,
      title: "School Traffic Management",
      description: "Professional traffic marshals for safe drop-off and pick-up operations",
      features: ["Traffic Regulation", "Student Safety", "Congestion Management"]
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Road Crossing Safety",
      description: "Ensuring safe pedestrian crossings for students and parents",
      features: ["High-Visibility Presence", "Pedestrian Guidance", "Traffic Control"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "School Zone Security",
      description: "Comprehensive security solutions for educational institutions",
      features: ["Access Control", "Vehicle Monitoring", "Emergency Response"]
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Infrastructure Works Management",
      description: "Safety management during road works near school premises",
      features: ["Construction Zone Safety", "Traffic Diversion", "Risk Assessment"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "International School Support",
      description: "Specialized services for diverse international school communities",
      features: ["Multi-language Support", "Cultural Sensitivity", "Expat Family Assistance"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Emergency Response Drills",
      description: "Traffic management during emergency situations and drills",
      features: ["Evacuation Support", "Lockdown Procedures", "Crisis Management"]
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Visual Authority Presence",
      description: "Visible security presence to deter unsafe behavior",
      features: ["Authority Figure", "Behavior Monitoring", "Safety Deterrent"]
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Safety Culture Development",
      description: "Building long-term traffic safety awareness in school communities",
      features: ["Training Programs", "Safety Awareness", "Community Engagement"]
    }
  ];

  const schoolProjects = [
    {
      name: "Maris Stella High School",
      capacity: "Daily Traffic Management",
      services: ["Traffic Regulation", "Student Crossing", "Vehicle Control"],
      achievement: "Significant reduction in traffic congestion and improved safety"
    },
    {
      name: "Nan Hua High School",
      capacity: "Peak Hour Management",
      services: ["Drop-off Coordination", "Parent Guidance", "Parking Enforcement"],
      achievement: "Orderly vehicle flow during busy school hours"
    },
    {
      name: "Singapore American School",
      capacity: "International School Support",
      services: ["Multi-cultural Approach", "Expat Family Assistance", "High Standards"],
      achievement: "Enhanced safety for diverse international community"
    },
    {
      name: "Tanglin Trust School",
      capacity: "Comprehensive Security",
      services: ["Traffic Management", "Campus Security", "Emergency Planning"],
      achievement: "Integrated safety solutions since establishment"
    },
    {
      name: "International French School",
      capacity: "European Standards",
      services: ["Bilingual Support", "Cultural Adaptation", "Safety Protocols"],
      achievement: "Meeting international safety standards"
    },
    {
      name: "Ministry of Education Projects",
      capacity: "National Standards",
      services: ["Policy Compliance", "Standard Operating Procedures", "National Guidelines"],
      achievement: "Alignment with Singapore Police Force and Traffic Police guidelines"
    }
  ];

  const testimonials = [
    {
      quote: "Traffic marshals provide a visible, authoritative presence that helps guide everyone safely, regardless of background or language barriers.",
      author: "School Safety Committee, International School Singapore"
    },
    {
      quote: "Their presence does more than just direct traffic; it sends a clear signal that children's safety is not left to chance.",
      author: "Jo Lee, Director ADVANCER IFM"
    },
    {
      quote: "Every child injured is 'one too many', as many of such accidents can be avoided with proper traffic management.",
      author: "Amrin Amin, Senior Parliamentary Secretary for Health and Home Affairs"
    },
    {
      quote: "A well-run, organised, and safe traffic system gives a strong first impression of the school's commitment to professionalism and care.",
      author: "International School Parent Association"
    }
  ];

  const valuePropositions = [
    {
      title: "Trained & Experienced",
      description: "Professional marshals with comprehensive training and real-world experience",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Commitment to Safety",
      description: "Unwavering dedication to protecting children and school communities",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Integrity",
      description: "Trustworthy service with transparent operations and reporting",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      title: "Ease of Mind",
      description: "Peace of mind for parents, staff, and school administration",
      icon: <Heart className="w-8 h-8" />
    }
  ];

  const safetyPrinciples = [
    {
      name: "Safe School Environment",
      description: "Creating sanctuaries where children feel protected and free to learn",
      benefits: ["Emotional Well-being", "Physical Security", "Reliable Routines"]
    },
    {
      name: "Traffic Safety Culture",
      description: "Building awareness and making safety second nature for entire communities",
      benefits: ["Regular Training", "Role Playing Exercises", "Decision Making Practice"]
    },
    {
      name: "School Zone Improvement",
      description: "Continuous enhancement of traffic systems and pedestrian safety",
      benefits: ["Clear Markings", "Warning Systems", "Rule Enforcement"]
    },
    {
      name: "Emergency Preparedness",
      description: "Ready response for medical situations, fire drills, and external threats",
      benefits: ["Swift Evacuations", "Lockdown Support", "Crisis Management"]
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
              EDUCATIONAL INSTITUTIONS AND SCHOOLS
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
              Safe-guarding our children, one crossing at a time
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-blue-200">
                <School className="w-5 h-5 mr-2" />
                <span>School Traffic Safety</span>
              </div>
              <div className="flex items-center text-blue-200">
                <Shield className="w-5 h-5 mr-2" />
                <span>Student Protection</span>
              </div>
              <div className="flex items-center text-blue-200">
                <Heart className="w-5 h-5 mr-2" />
                <span>Community Safety</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Protecting Our Future Generation</h2>
              <p className="text-lg text-gray-600 mb-6">
                Every school day, millions of children around the world make a journey that should be routine, safe, and uneventful. 
                Yet, this seemingly simple passage often carries unseen risks. Roads near schools can quickly turn into danger zones, 
                especially during peak hours.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Vigilant stewards of school safety</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Creating culture where safety is second nature</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Treating every child as precious cargo</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
              <div className="text-center">
                <Target className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h3>
                <p className="text-gray-700 italic">
                  "Traffic marshalling near schools is not simply about order; it is also about creating a culture 
                  where safety is second nature and every child is treated as precious cargo."
                </p>
                <p className="text-gray-600 mt-4 font-semibold">- Dr Matthew Yap, Chief Commercial Officer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Value Proposition</h2>
            <p className="text-xl text-blue-100">
              Dedicated to providing differentiated experiences for our educational partners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valuePropositions.map((value, index) => (
              <div key={index} className="bg-gray-600 bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gray-600 bg-opacity-20 rounded-lg">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-blue-100 text-sm">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 bg-gray-600 bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm">
            <p className="text-lg italic mb-4">
              "Our dedicated team of traffic marshals are trained to handle traffic control projects with complex requirements 
              and strive to provide differentiated experiences for our customers."
            </p>
            <p className="font-semibold">Gary Chin, Chief Executive Officer</p>
            <p className="text-blue-200 text-sm">ADVANCER GLOBAL – SGX-ST:43Q</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our School Safety Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive traffic management and safety solutions for educational institutions
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

      {/* School Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <School className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Our School Partnerships</h2>
            </div>
            <p className="text-lg text-gray-600">Trusted by leading educational institutions across Singapore</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schoolProjects.map((project, index) => (
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

      {/* Safety Principles */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Safety Principles</h2>
            <p className="text-gray-300">Building comprehensive safety ecosystems for educational institutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {safetyPrinciples.map((principle, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-colors">
                <h3 className="text-xl font-bold mb-3 text-blue-400">{principle.name}</h3>
                <p className="text-gray-300 mb-4 text-sm">{principle.description}</p>
                <div className="space-y-2">
                  {principle.benefits.map((benefit, idx) => (
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Partners Say</h2>
            <p className="text-lg text-gray-600">Endorsements from educational institutions and government bodies</p>
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

      {/* Emergency Response */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-8 h-8 mr-3" />
                <h2 className="text-3xl font-bold">Emergency Response Team</h2>
              </div>
              <p className="text-xl mb-6 text-blue-100">
                24/7 support for security breaches, emergency evacuations, and crisis management in educational settings
              </p>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Active security breach response
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Swift evacuation and lockdown support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Crisis management coordination
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Irregular patrols and security inspections
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
                  <p className="text-blue-200 text-sm">Director, Security ADVANCER IFM</p>
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
            <h2 className="text-3xl font-bold mb-4">Contact ADVANCER IFM</h2>
            <p className="text-xl text-blue-100">Get in touch with our educational safety specialists</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-gray-800 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Recruitment</h3>
              <p className="text-blue-100 text-lg">(65) 9741 7333</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-800 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Operations</h3>
              <p className="text-blue-100 text-lg">(65) 9474 7333</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-800 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <AlertTriangle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Response</h3>
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
                135 Jurong Gateway Road, #06-317<br />
                Singapore 600135
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

export default EducationAndSchools;