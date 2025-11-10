import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Search, Shield, Users, FileText, Mail, Phone, MapPin, ArrowRight, Download } from 'lucide-react';
import Footer from './Footer';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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
      title: "Security & Technology",
      description: "Advanced security solutions with integrated surveillance, access control, and real-time monitoring.",
      image: "/img/security/sec1.png",
      link: "/services/security-crowd-traffic-management"
    },
    {
      title: "Cleaning",
      description: "Professional cleaning services for residential, commercial, and industrial spaces ensuring spotless hygiene.",
      image: "/img/cleaning.jpg",
      link: "/services/cleaning"
    },
    {
      title: "Pest Control & Fumigation",
      description: "Comprehensive pest management and fumigation for long-term prevention and safety compliance.",
      image: "/img/pest.jpeg",
      link: "/services/pest-control"
    },
    {
      title: "Landscaping & Gardening",
      description: "Sustainable landscaping and garden maintenance services to enhance your property's green appeal.",
      image: "/img/garden.jpeg",
      link: "/services/landscaping"
    }
  ];

  // Handle manual slide change
  const handleSlideChange = (newSlide) => {
    setIsAutoPlaying(false); // Pause auto-slide when user manually changes slide
    setCurrentSlide(newSlide);
    
    // Resume auto-slide after 8 seconds of manual interaction
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 8000);
  };

  // Handle next slide
  const handleNext = () => {
    handleSlideChange((currentSlide + 1) % services.length);
  };

  // Handle previous slide
  const handlePrev = () => {
    handleSlideChange((currentSlide - 1 + services.length) % services.length);
  };

  // Auto-slide effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(slideTimer);
  }, [isAutoPlaying, services.length]);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 flex items-center justify-center bg-gradient-to-r from-blue-900/80 to-gray-900/80">
        <div
          className="absolute inset-0 bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: 'url("/img/background.jpg")',
            transform: 'scale(1)'
          }}
        />
        <div className="absolute inset-0 bg-black/40 z-0" />

        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Focus Integrated Healthcare (FIH)
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white-800 font-light">
            "One Partner, Total Facility Confidence"
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
              Call: (65) 9740-7333
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About us  */}
      <section
        className="relative py-20 bg-gray-900 text-white overflow-hidden"
        style={{
          backgroundImage: "url('/img/about-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/img/fihleft.png"
              alt="About FIH"
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-400 opacity-40 blur-lg -z-10"></div>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-snug">
              Focus Integrated Healthcare (FIH)
              <br />
              <span className="text-blue-400 text-2xl font-semibold">
                "One Partner, Total Facility Confidence"
              </span>
            </h3>

            <p className="text-blue-100 leading-relaxed mb-6 text-justify">
              We are more than a service provider — we are your strategic IFM partner,
              committed to creating safe, sustainable, and future-ready environments.
              With a proven track record across healthcare, commercial, and
              institutional sectors, we deliver integrated, technology-enabled, and
              people-driven solutions that ensure operational excellence and peace of
              mind.
            </p>

            <h4 className="text-2xl font-semibold text-blue-300 mb-4">
              Our Vision: Integration. Technology. People.
            </h4>
            <ul className="list-disc pl-6 text-blue-100 mb-6 space-y-2">
              <li>
                <strong>Integration –</strong> A seamless suite of IFM services from
                Cleaning, Landscaping, Pest Control, and Security — unified for
                consistency and efficiency.
              </li>
              <li>
                <strong>Technology –</strong> Using IoT, AI analytics, and digital
                dashboards to make facilities smarter and more responsive.
              </li>
              <li>
                <strong>People –</strong> Skilled professionals empowered through
                training, safety, and innovation.
              </li>
            </ul>

            <h4 className="text-2xl font-semibold text-blue-300 mb-4">
              Our Commitment to Excellence
            </h4>
            <ul className="space-y-2 text-blue-100 list-disc pl-6 mb-6">
              <li>Certified Standards – ISO 9001, ISO 14001, ISO 45001, bizSAFE Star, NEA licensing</li>
              <li>Operational Resilience – 24/7 response teams and centralised command oversight</li>
              <li>Sustainability – Eco-conscious practices balancing efficiency and environment</li>
              <li>Enduring Partnerships – Trust, accountability, measurable results</li>
            </ul>

            <p className="text-blue-100 text-justify">
              At FIH, we don't just manage facilities — we protect, optimise, and
              future-proof them. With integrated expertise, digital innovation, and a
              people-first approach, we empower clients to focus on their mission
              while we safeguard their spaces.
            </p>
          </div>
        </div>
      </section>

      {/* SEO Focus Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src='/img/background.jpg' alt="IFM Services" />
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">INTEGRATED FACILITY MANAGEMENT</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Security & Technology</h4>
                  <p className="text-gray-600 text-sm">Unlocking Innovative Solutions</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Cleaning</h4>
                  <p className="text-gray-600 text-sm">Relieving the Burden of Upkeeping & Maintenance</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Pest Control & Fumigation</h4>
                  <p className="text-gray-600 text-sm">Protecting Health & Facilities</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Landscaping & Gardening</h4>
                  <p className="text-gray-600 text-sm">Beautifying Your Spaces</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative py-20 bg-gray-900 text-white overflow-hidden"
        style={{
          backgroundImage: "url('/img/value-bg.jpg')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src="/img/valuedprop.png" 
              alt="Our Value Proposition"
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-teal-400 to-blue-600 opacity-40 blur-lg -z-10"></div>
          </div>

          <div className="order-1 lg:order-2 bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-snug">
              Our Value Proposition
            </h3>

            <p className="text-blue-100 leading-relaxed text-justify mb-6">
              "We believe facilities are more than spaces — they are environments that
              safeguard people, enable productivity, and inspire trust. By integrating
              technology, expertise, and a people-first approach, we deliver solutions
              that go beyond maintenance to create long-term value for our
              stakeholders."
            </p>

            <p className="text-blue-100 text-justify mb-6">
              Our commitment is simple: to be a partner in resilience, innovation, and
              excellence.
            </p>

            <div className="mt-8">
              <p className="text-xl font-semibold text-blue-300">
                — Dr. Matthew Yap, COO
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Carousel Section - FIXED */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Integrated solutions for every facility need</p>
          </div>

          {/* Slider Container */}
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`
                }}
              >
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-4 md:px-6 lg:px-8"
                    style={{ flex: "0 0 100%" }}
                  >
                    <div className="bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-64 w-full object-cover"
                      />
                      <div className="p-8 text-center">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-6">{service.description}</p>
                        <Link
                          to={service.link}
                          className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                        >
                          Learn More
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Controls */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 shadow-lg transition z-10"
            >
              ‹
            </button>

            <button
              onClick={handleNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 shadow-lg transition z-10"
            >
              ›
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentSlide === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                ></button>
              ))}
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

      {/* Footer Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
        padding: '1rem 0',
        color: 'white',
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.5), 0 -2px 10px rgba(165, 97, 97, 0.3)',
        borderTop: '3px solid #a36161',
        position: 'relative'
      }}>
        <Footer />
      </section>
    </div>
  );
}

export default Home;