import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import {
  Phone, Mail, Globe, MapPin, Users, Shield, Award,
  Clock, Star, ArrowRight, Target, CheckCircle,
  Plane, Building, GraduationCap,
  Eye, Lock, AlertTriangle, Zap, Truck, Radio
} from 'lucide-react';

const AviationSpecialist = () => {
  const services = [
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Aerodrome & Aviation Consultancy",
      description: "ICAO certified professionals providing comprehensive aviation risk management and safety solutions",
      features: ["ICAO/ACI Certification", "Safety Management Systems", "Risk Assessments"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Airbase Security & Escort Services",
      description: "24/7 security escort services within Aircraft Manoeuvring Areas and restricted zones",
      features: ["Airbase Escort Officers", "Security Compliance", "Emergency Response"]
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Changi East Development",
      description: "Leading security and safety solutions for Terminal 5 and third runway construction",
      features: ["Package 1-3 Security", "Terminal 5 Development", "Runway Construction"]
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "ICAO Training & Certification",
      description: "Annex 14, 17, 19 training and familiarization programs for aviation professionals",
      features: ["Annex 14 - Aerodromes", "Annex 17 - Security", "Annex 19 - Safety"]
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Traffic Management - Airside",
      description: "Comprehensive traffic management for construction vehicles in operational airfields",
      features: ["Vehicle Banksmen", "Traffic Marshals", "Safety Protocols"]
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Surveillance & Monitoring",
      description: "Advanced surveillance solutions including Geo-Tracker systems and digital monitoring",
      features: ["Geo-Tracker Implementation", "Digital Monitoring", "Resource Tracking"]
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Airside Gate Operations",
      description: "Secure gate operations management for personnel and vehicle access control",
      features: ["N7 & E2 Gate Operations", "Security Screening", "Access Control"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Inadmissible Passenger Escorts",
      description: "Professional escort services for inadmissible passengers and deportees",
      features: ["Immigration Compliance", "Airline Coordination", "International Regulations"]
    }
  ];

  const clients = [
    "Samsung C&T", "Koh Brothers", "Hock Lian Seng", "Sembcorp",
    "John Holland", "Leighton", "China Railway Construction",
    "Beijing Urban Construction", "McConnell Dowell", "Sato Kogyo",
    "China Construction", "China Railway First Group", "Obayashi Singapore",
    "Samwoh", "Shanghai Tunnel Engineering"
  ];

  const teamExperts = [
    {
      name: "Dr Matthew Yap",
      role: "ICAO/IMO Consultant",
      expertise: "ICAO National Aerodrome Inspector, AVSEC PM, Safety Management System",
      achievements: ["AMPAP Certified", "ICAO/IAP Certified", "Changi East Advisor"],
      image: "/img/aviation/people/drmathew.png" // Add image paths
    },
    {
      name: "Victor Mathews Gomez",
      role: "ICAO/IATA Consultant",
      expertise: "Former RSAF Senior Air Traffic Control Officer with 25+ years experience",
      achievements: ["IATA Certified Trainer", "Civil & Military Airspace", "ATC Operations"],
      image: "/img/aviation/people/victor.png"
    },
    {
      name: "Schoen Karl Philippe",
      role: "Aerodrome Consultant",
      expertise: "24 years experience with Singapore Police Force and Changi Airport",
      achievements: ["CAAS Collaboration", "Security Operations", "Equipment Deployment"],
      image: "/img/aviation/people/schoen.png"
    },
    {
      name: "Jo Lee",
      role: "Security Consultant",
      expertise: "20+ years in EPC and system integration with multinational corporations",
      achievements: ["Project Startup", "Dispute Resolution", "SPF VSC Service"],
      image: "/img/aviation/people/joo lee.png"
    }
  ];

  const advisoryTeam = [
    {
      name: "AC (Ret) S Lakshmanan",
      role: "National Security",
      expertise: "35 years Singapore Police Force, Commander VSC",
      image: "/img/aviation/people/acret.png"
    },
    {
      name: "Kevin Ho",
      role: "Cybersecurity",
      expertise: "Director Norwegian Cybersecurity Institute, CISA, CEH, CADS Certified",
      image: "/img/aviation/people/kevin.png"
    },
    {
      name: "Bernie Ho",
      role: "Martial Arts & Self Defence",
      expertise: "Former Gurkha Contingent Commander, International Consultant",
      image: "/img/aviation/people/berniho.png"
    },
    {
      name: "Dr Stephen Chee",
      role: "Police Defensive Tactics",
      expertise: "Certified Forensic Psychologist, Instructor Trainer",
      image: "/img/aviation/people/dr stephin.png"
    },
    {
      name: "Wayne Koo",
      role: "Crisis Management",
      expertise: "Chartered Financial Accountant, Investor Relations",
      image: "/img/aviation/people/wayne.png"
    },
    {
      name: "Serene Wee",
      role: "Medical & Rescue",
      expertise: "30+ years defense industry, RESILO Certified Practitioner",
      image: "/img/aviation/people/serene.png"
    }
  ];

  const changiProjects = [
    {
      package: "Package 1",
      value: "S$1.12 Billion",
      contractor: "Samsung C&T + Koh Brothers JV",
      services: ["Security Managers", "Training & Pass Managers", "Consultants", "Security Officers", "Dormitory Security"],
      year: "2015"
    },
    {
      package: "Package 2",
      value: "S$1.107 Billion",
      contractor: "Hock Lian Seng + Sembcorp JV",
      services: ["Security Managers", "Training & Pass Managers", "Consultants", "Security Officers"],
      year: "2016"
    },
    {
      package: "Package 3",
      value: "S$1 Billion",
      contractor: "China Communications Construction",
      services: ["Security Managers", "Security Officers", "Traffic Marshals"],
      year: "2019"
    }
  ];

  const securityReminders = [
    "No consumption of food in base shelters, vehicles or runways",
    "No photography/video without CAG/RSAF clearance",
    "No loitering or trespass in restricted areas",
    "Personnel/vehicle passes must be displayed prominently",
    "Comply with OLS requirements",
    "Speed limits: 40km/h (Day), 20km/h (Night)",
    "All entry must be escorted by security personnel",
    "Comply with ATC CAT1/CAT2 status announcements"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <section
        className="pt-32 pb-20 text-white relative"
        style={{
          backgroundImage: `url("${process.env.PUBLIC_URL}/img/aviation/aviation1.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AVIATION SPECIALIST
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
              ASHTREE INTERNATIONAL PTE LTD - Advancing aviation security and safety solutions globally
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-blue-200">
                <Plane className="w-5 h-5 mr-2" />
                <span>ICAO Certified Professionals</span>
              </div>
              <div className="flex items-center text-blue-200">
                <Shield className="w-5 h-5 mr-2" />
                <span>Aviation Security Experts</span>
              </div>
              <div className="flex items-center text-blue-200">
                <Shield className="w-5 h-5 mr-2" />
                <span>Changi East Development Partners</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Image Section - Half Width */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src='/img/aviation/aviation2.png'
                alt="Aviation"
                className="w-full max-w-md lg:max-w-lg rounded-lg shadow-lg"
              />
            </div>

            {/* Content Section - Half Width */}
            <div className="w-full lg:w-1/2 px-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">ABOUT ASHTREE INTERNATIONAL</h2>
              <p className="text-lg text-gray-600 mb-6">
                Incorporated in 2008, ASHTREE International advises,
                designs and delivers complete and workable solutions
                to governments and private corporations. The key areas
                include critical infrastructure protection solutions, project
                funding and asset management, security consulting and
                risk management.
                Singapore an aviation hub of choice, is connected by
                about 100 airlines operating more than 6,000 scheduled
                flights every week to more than 300 cities from some 80
                countries across the globe.
                With the growing aviation industry, ASHTREE‘s security
                consultancy services support the industry by facilitating
                training to enhance the competency in aviation projects
                and integrating a wide range of security solutions.
                ASHTREE optimises a mix of cultural and functional
                applications to enable a comprehensive analysis of
                security solutions for clients. The Core consultancy team
                are experience Law Enforcement Personnel with seasoned
                intelligence knowledge and close government, military,
                police and business links.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Critical infrastructure protection solutions</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Aviation project funding and asset management</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Security consulting and risk management</p>
                </div>
              </div>
            </div>
          </div>

          {/* Full Width Bottom Section */}
          <div className="mt-12 w-full">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
              <div className="text-center">
                <Target className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Singapore Aviation Hub</h3>
                <p className="text-gray-700">
                  Connected by 100+ airlines operating 6,000+ weekly flights to 300+ cities across 80+ countries
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Expertise Team</h2>
            <p className="text-lg text-gray-600">ICAO certified professionals with decades of aviation experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamExperts.map((expert, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group text-center"
              >
                {/* Circular Image */}
                <div className="pt-6 px-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-blue-500 transition-colors duration-300">
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    {/* Fallback initial circle */}
                    <div className="w-full h-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg hidden">
                      {expert.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {expert.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">{expert.role}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {expert.expertise}
                  </p>
                  <ul className="space-y-1">
                    {expert.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <Zap className="w-3 h-3 text-yellow-500 mr-2 flex-shrink-0" />
                        <span className="text-left">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Team */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advisory Team</h2>
            <p className="text-lg text-gray-600">Specialized consultants supporting comprehensive aviation security</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advisoryTeam.map((advisor, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group text-center">
                {/* Circular Image */}
                <div className="pt-6 px-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-blue-500 transition-colors duration-300">
                    <img
                      src={advisor.image}
                      alt={advisor.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    {/* Fallback initial circle */}
                    <div className="w-full h-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg hidden">
                      {advisor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {advisor.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">{advisor.role}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {advisor.expertise}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Changi East Development */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">AVIATION AND AERODOME CONSULTANCY
              CHANGI EAST DEVELOPMENT</h2>
            <img src='/img/aviation/changieast.png' />
            <p className="text-xl text-blue-100">
              Securing Singapore's air hub status with Terminal 5 and third runway development
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Image Section - Half Width */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <img
                  src='/img/aviation/eastwest2.png'
                  alt="Aviation"
                  className="w-full max-w-md lg:max-w-lg rounded-lg shadow-lg"
                />
              </div>

              {/* Content Section - Half Width */}
              <div className="w-full lg:w-1/2 px-4">

                <p className="text-lg text-white-600 mb-6">
                  Airport operators and civil aviation authorities require
                  both in-house and external consultants for check and
                  balance and risk management. ASHTREE’s aviation
                  risk consultants are certified to Airport Management
                  Professional Accreditation Programme (AMPAP) International
                  Airport Professional (IAP) and International
                  Civil Aviation Organization (ICAO) – Airport Council
                  International (ACI) Airport Safety Professional (ASP)
                  to help with aeronautical and non aeronautical related
                  projects.
                  Aerodrome and airport operators also need airfield
                  inspectors, training and certification of new staff on
                  board. ASHTREE’s aerodrome consultants are certified
                  to ICAO National and Aerodrome inspectors, Aviation
                  Security Professional Manager (AVSEC PM) and
                  Safety Management System (SMS) Inspectors.
                  Since 2015, ASHTREE has also supported local and
                  foreign contractors in their bid efforts at the various
                  construction packages at Changi East Development
                </p>

              </div>
            </div>



            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Image Section - Half Width */}
            

              {/* Content Section - Half Width */}
              <div className="w-full lg:w-1/2 px-4">

                <p className="text-lg text-white-600 mb-6">
                  China Communications Construction Company is
                  awarded Changi Airport Group Changi East 3 runway
                  construction (Package -3) in March 2019. This contract
                  involved a taxiway construction across runway 2 and
                  runway 3. A second award to CCCC was Airport Road
                  Connector (ARC). The combined construction value
                  was close to $1 billion. ASHTREE International was
                  appointed security management and integrated
                  security solutions, providing security managers and
                  dormitory security officers. These services were
                  extended to stockpile access control and construction
                  temporary quarters through the COVID period in 2020.
                </p>

              </div>

  <div className="w-full lg:w-1/2 flex justify-center">
                <img
                  src='/img/aviation/award.png'
                  alt="Aviation"
                  className="w-full max-w-md lg:max-w-lg rounded-lg shadow-lg"
                />
              </div>



            </div>
            <div className='flex items-center mt-5 ml-9'>
               <img src='/img/aviation/escort.png' />

</div>








            {/* Full Width Bottom Section */}
            <div className="mt-12 w-full">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
                <div className="text-center">
                  <Target className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Singapore Aviation Hub</h3>
                  <p className="text-gray-700">
                    Connected by 100+ airlines operating 6,000+ weekly flights to 300+ cities across 80+ countries
                  </p>
                </div>
              </div>
            </div>
          </div>





          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {changiProjects.map((project, index) => (
              <div key={index} className="bg-gray-500 bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-center mb-4">
                  <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-bold">
                    {project.package}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">{project.value}</h3>
                <p className="text-blue-200 text-sm text-center mb-4">{project.contractor}</p>
                <p className="text-blue-200 text-sm text-center mb-4">Awarded: {project.year}</p>
                <ul className="space-y-2">
                  {project.services.map((service, idx) => (
                    <li key={idx} className="flex items-center text-blue-100 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-300 mr-2 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-500 bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Project Scale</h3>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    <span>1,080 hectares development area</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    <span>Third runway extended from 2.75km to 4km</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    <span>Terminal 5 capacity enhancement</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Security Innovations</h3>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    <span>Electronic worker tracking with transponders</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    <span>24/7 Command Centre surveillance</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    <span>Virtual fence systems with alarm triggers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Aviation Services</h2>
            <p className="text-lg text-gray-600">Comprehensive solutions for aviation security and safety</p>
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

      {/* Security Reminders */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <AlertTriangle className="w-8 h-8 text-red-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Airbase Security Protocols</h2>
            </div>
            <p className="text-lg text-gray-600">Strict compliance with CAG and RSAF security requirements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {securityReminders.map((reminder, index) => (
              <div key={index} className="flex items-start bg-red-50 border border-red-200 rounded-lg p-4">
                <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 text-sm">{reminder}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valued Clients */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Valued Aviation Clients</h2>
            <p className="text-gray-300">Trusted by leading construction and aviation partners</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {clients.map((client, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors">
                <Building className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="font-semibold text-xs">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Contact ASHTREE INTERNATIONAL</h2>
            <p className="text-xl text-blue-100">Get in touch with our aviation specialists</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-black-800 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Main Line</h3>
              <p className="text-blue-100 text-lg">(65) 9740 7333</p>
            </div>

            <div className="text-center">
              <div className="bg-black-800 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Operations</h3>
              <p className="text-blue-100 text-lg">(65) 9741 7333</p>
            </div>

            <div className="text-center">
              <div className="bg-black-800 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Emergency</h3>
              <p className="text-blue-100 text-lg">(65) 9742 7333</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Mail className="w-5 h-5 mr-2" />
                <h3 className="text-lg font-semibold">Email</h3>
              </div>
              <p className="text-blue-100 text-lg">info@ashtree.com.sg</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <h3 className="text-lg font-semibold">Address</h3>
              </div>
              <p className="text-blue-100">
                No. 18 Sin Ming Lane #06-34<br />
                Midview City, Singapore 573960
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="bg-gray-600 bg-opacity-10 rounded-xl p-6 inline-block">
              <p className="text-blue-100 mb-2">Main Office Tel: (65) 6554 7333</p>
              <p className="text-blue-100">Fax: (65) 6466-3733</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AviationSpecialist;