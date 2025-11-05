import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Search, Shield, Users, FileText, Mail, Phone, MapPin, ArrowRight, Download } from 'lucide-react';
import Footer from './Footer';

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


// Auto-slide for services
useEffect(() => {
  const slideTimer = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % 4);
  }, 6000); // 5 seconds per slide
  return () => clearInterval(slideTimer);
}, []);



  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 flex items-center justify-center bg-gradient-to-r from-blue-900/80 to-gray-900/80">
  <div 
    className="absolute inset-0  bg-center bg-no-repeat z-0"
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
     “One Partner, Total Facility Confidence”
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










      {/* Next Six Months Strategy */}
      {/* <section className="py-20 bg-white">
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
      </section> */}


      {/* About us  */}
   <section
  className="relative py-20 bg-gray-900 text-white overflow-hidden"
  style={{
    backgroundImage: "url('/img/about-bg.jpg')", // <-- replace with your own image
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    {/* Left Image */}
    <div className="relative">
      <img
        src="/img/fihleft.png" // <-- your main image
        alt="About FIH"
        className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-700"
      />
      {/* Decorative gradient border */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-400 opacity-40 blur-lg -z-10"></div>
    </div>

    {/* Right Text */}
    <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20">
      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-snug">
        Focus Integrated Healthcare (FIH)
        <br />
        <span className="text-blue-400 text-2xl font-semibold">
          “One Partner, Total Facility Confidence”
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
        At FIH, we don’t just manage facilities — we protect, optimise, and
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
       <img src='/img/background.jpg'/>
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
    backgroundImage: "url('/img/value-bg.jpg')", // <-- replace with your own background
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    {/* Left Image */}
    <div className="relative order-2 lg:order-1">
      <img
        src="/img/valuedprop.png" // <-- replace with actual image
        alt="Our Value Proposition"
        className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-teal-400 to-blue-600 opacity-40 blur-lg -z-10"></div>
    </div>

    {/* Right Text */}
    <div className="order-1 lg:order-2 bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20">
      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-snug">
        Our Value Proposition
      </h3>

      <p className="text-blue-100 leading-relaxed text-justify mb-6">
        “We believe facilities are more than spaces — they are environments that
        safeguard people, enable productivity, and inspire trust. By integrating
        technology, expertise, and a people-first approach, we deliver solutions
        that go beyond maintenance to create long-term value for our
        stakeholders.”
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





      {/* Cleaning Services */}
{/* Services Carousel Section */}
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
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`
          }}
        >
          {[
            {
              title: "Security & Technology",
              description:
                "Advanced security solutions with integrated surveillance, access control, and real-time monitoring.",
              image: "/img/security/sec1.png",
              link: "/services/security-technology"
            },
            {
              title: "Cleaning",
              description:
                "Professional cleaning services for residential, commercial, and industrial spaces ensuring spotless hygiene.",
             image: "/img/cleaning.jpg",
              link: "/services/cleaning"
            },
            {
              title: "Pest Control & Fumigation",
              description:
                "Comprehensive pest management and fumigation for long-term prevention and safety compliance.",
              image: "/images/pest-control.jpg",
              link: "/services/pest-control"
            },
            {
              title: "Landscaping & Gardening",
              description:
                "Sustainable landscaping and garden maintenance services to enhance your property's green appeal.",
              image: "/images/landscaping.jpg",
              link: "/services/landscaping"
            }
          ].map((service, index) => (
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
        onClick={() =>
          setCurrentSlide((prev) =>
            prev === 0 ? 3 : prev - 1
          )
        }
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 shadow-lg transition"
      >
        ‹
      </button>

      <button
        onClick={() =>
          setCurrentSlide((prev) =>
            prev === 3 ? 0 : prev + 1
          )
        }
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 shadow-lg transition"
      >
        ›
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-8 space-x-3">
        {[0, 1, 2, 3].map((dot) => (
          <button
            key={dot}
            onClick={() => setCurrentSlide(dot)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === dot ? "bg-blue-600" : "bg-gray-300"
            } transition-colors duration-300`}
          ></button>
        ))}
      </div>
    </div>
  </div>
</section>






      {/* Team & Contact Section */}
      {/* <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Leadership Oversight
</h2>
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
      </section> */}



     <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0" style={{
      backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255,255,255,0.2) 2%, transparent 0%)`,
      backgroundSize: '100px 100px'
    }}></div>
  </div>
  
  {/* Animated Background Elements */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

  <div className="max-w-7xl mx-auto px-4 relative z-10">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
        Leadership Oversight
      </h2>
      <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
        We ensure smooth operations, prompt responses, and coordinated support across every level of MBS Singapore, 
        so your teams and visitors can experience a safe and well-managed facilities.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Column - Leadership Team */}
      <div className="space-y-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20  rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img src="/img/leaders/mushtaq.png" alt="James Lim" className="w-30 h-20 rounded-full object-cover"/>
              </div>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-xl mb-2">Mushtaq Ahmad</h4>
              <p className="text-blue-200 font-semibold mb-2">IFM Director</p>
              {/* <div className="space-y-1">
                <p className="text-cyan-300 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  9321-2554
                </p>
                <p className="text-cyan-300 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  james.lim@stie.com.sg
                </p>
              </div> */}
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
             <div className="w-20 h-20  rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img src="/img/leaders/masline.png" alt="James Lim" className="w-30 h-20 rounded-full object-cover"/>
              </div>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-xl mb-2">Maslina Binte Mohamed</h4>
              <p className="text-blue-200 font-semibold mb-2">Executive Director</p>
              {/* <div className="space-y-1">
                <p className="text-cyan-300 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  9745-7333
                </p>
                <p className="text-cyan-300 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  matthew.yap@stie.com.sg
                </p>
              </div> */}
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
               <div className="w-20 h-20  rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img src="/img/leaders/kevin.png" alt="James Lim" className="w-30 h-20 rounded-full object-cover"/>
              </div>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-xl mb-2">Kevin Teo</h4>
              <p className="text-blue-200 font-semibold mb-2">Executive Director</p>
              {/* <div className="space-y-1">
                <p className="text-cyan-300 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  9776-6123
                </p>
                <p className="text-cyan-300 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  jo.lee@stie.com.sg
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Additional Leadership Team */}
      <div className="space-y-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
               <div className="w-20 h-20  rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img src="/img/leaders/dharul.png" alt="James Lim" className="w-30 h-20 rounded-full object-cover"/>
              </div>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-xl mb-2">Dharulsalam Koh</h4>
              <p className="text-blue-200 font-semibold mb-2">Director Sales & Operation</p>
              {/* <div className="space-y-1">
                <p className="text-cyan-300 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  9776-6123
                </p>
                <p className="text-cyan-300 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  jo.lee@stie.com.sg
                </p>
              </div> */}
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
             <div className="w-20 h-20  rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img src="/img/leaders/amin.png" alt="James Lim" className="w-30 h-20 rounded-full object-cover"/>
              </div>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-xl mb-2">Mohamed Amin</h4>
              <p className="text-blue-200 font-semibold mb-2">Director IT</p>
              {/* <div className="space-y-1">
                <p className="text-cyan-300 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  9776-6123
                </p>
                <p className="text-cyan-300 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  jo.lee@stie.com.sg
                </p>
              </div> */}
            </div>
          </div>
        </div>

        {/* Additional Content Space */}
        <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold mb-4 text-white">Our Commitment</h3>
          <p className="text-blue-100 leading-relaxed">
            Our leadership team is dedicated to providing exceptional integrated facility management services, 
            ensuring the highest standards of safety, efficiency, and customer satisfaction across all our operations.
          </p>
        </div>
      </div>
    </div>

    {/* Stats Section */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
        <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
        <div className="text-blue-200">Client Satisfaction</div>
      </div>
      <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
        <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
        <div className="text-blue-200">Support Available</div>
      </div>
      <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
        <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
        <div className="text-blue-200">Years Combined Experience</div>
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
      <section style={{
  background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
  padding: '1rem 0',
  color: 'white',
  boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.5), 0 -2px 10px rgba(165, 97, 97, 0.3)',
  borderTop: '3px solid #a36161',
  position: 'relative'
}}>
    <Footer/>
        {/* <div className="max-w-4xl mx-auto px-4 text-center">
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
        
          </div>
        </div> */}

    
      </section>
    </div>
  );
}

export default Home;