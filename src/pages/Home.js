import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Search, Shield, Users, FileText, Mail, Phone, MapPin, ArrowRight, Download, ChevronLeft, ChevronRight, Eye, X } from 'lucide-react';
import Footer from './Footer';
import { FaWhatsapp } from 'react-icons/fa';
import ReactPlayer from 'react-player';
function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
const [currentVideoSlide, setCurrentVideoSlide] = useState(0);
const videoRefs = useRef([]);

// Initialize video refs
useEffect(() => {
  videoRefs.current = [React.createRef(), React.createRef()];
}, []);

// Handle slide change
const handleVideoNext = () => {
  // Pause current video
  if (videoRefs.current[currentVideoSlide]?.current) {
    videoRefs.current[currentVideoSlide].current.pause();
  }
  
  const nextSlide = currentVideoSlide === 1 ? 0 : currentVideoSlide + 1;
  setCurrentVideoSlide(nextSlide);
  
  // Play next video after slide transition
  setTimeout(() => {
    if (videoRefs.current[nextSlide]?.current) {
      videoRefs.current[nextSlide].current.play().catch(e => {
        console.log("Auto-play prevented, user interaction required");
      });
    }
  }, 300);
};

const handleVideoPrev = () => {
  // Pause current video
  if (videoRefs.current[currentVideoSlide]?.current) {
    videoRefs.current[currentVideoSlide].current.pause();
  }
  
  const prevSlide = currentVideoSlide === 0 ? 1 : currentVideoSlide - 1;
  setCurrentVideoSlide(prevSlide);
  
  // Play previous video after slide transition
  setTimeout(() => {
    if (videoRefs.current[prevSlide]?.current) {
      videoRefs.current[prevSlide].current.play().catch(e => {
        console.log("Auto-play prevented, user interaction required");
      });
    }
  }, 300);
};

const goToVideoSlide = (index) => {
  // Don't do anything if clicking current slide
  if (index === currentVideoSlide) return;
  
  // Pause current video
  if (videoRefs.current[currentVideoSlide]?.current) {
    videoRefs.current[currentVideoSlide].current.pause();
  }
  
  setCurrentVideoSlide(index);
  
  // Play new slide video
  setTimeout(() => {
    if (videoRefs.current[index]?.current) {
      videoRefs.current[index].current.play().catch(e => {
        console.log("Auto-play prevented");
      });
    }
  }, 300);
};

// Auto-play first video on mount (only once)
useEffect(() => {
  const timer = setTimeout(() => {
    if (videoRefs.current[0]?.current) {
      videoRefs.current[0].current.play().catch(e => {
        console.log("Initial auto-play prevented - user needs to interact first");
      });
    }
  }, 1000);
  
  return () => clearTimeout(timer);
}, []);


  const [servicesCurrentSlide, setServicesCurrentSlide] = useState(0);
  const [isServicesAutoPlaying, setIsServicesAutoPlaying] = useState(true);

  // Separate state for certificates carousel
  const [certificatesCurrentSlide, setCertificatesCurrentSlide] = useState(0);
  const [isCertificatesAutoPlaying, setIsCertificatesAutoPlaying] = useState(true);


    const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


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
      image: "/img/cleaning/cleaning.png",
      link: "/services/cleaning"
    },
    {
      title: "Pest Control & Fumigation",
      description: "Comprehensive pest management and fumigation for long-term prevention and safety compliance.",
      image: "/img/pest/pest.png",
      link: "/services/pest-control"
    },
    {
      title: "Landscaping & Gardening",
      description: "Sustainable landscaping and garden maintenance services to enhance your property's green appeal.",
      image: "/img/garden/garden.png",
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
  // const handleNext = () => {
  //   handleSlideChange((currentSlide + 1) % services.length);
  // };

  // // Handle previous slide
  // const handlePrev = () => {
  //   handleSlideChange((currentSlide - 1 + services.length) % services.length);
  // };

  const handleServicesSlideChange = (newSlide) => {
    setIsServicesAutoPlaying(false);
    setServicesCurrentSlide(newSlide);
    
    setTimeout(() => {
      setIsServicesAutoPlaying(true);
    }, 8000);
  };

  const handleServicesNext = () => {
    handleServicesSlideChange((servicesCurrentSlide + 1) % services.length);
  };

  const handleServicesPrev = () => {
    handleServicesSlideChange((servicesCurrentSlide - 1 + services.length) % services.length);
  };

  // Certificates carousel handlers
  const handleCertificatesNext = () => {
    setCertificatesCurrentSlide((prev) => 
      prev === certificates.length - 1 ? 0 : prev + 1
    );
  };

  const handleCertificatesPrev = () => {
    setCertificatesCurrentSlide((prev) => 
      prev === 0 ? certificates.length - 1 : prev - 1
    );
  };

   const handleCertificatesSlideChange = (newSlide) => {
    setIsCertificatesAutoPlaying(false);
    setCertificatesCurrentSlide(newSlide);
    
    setTimeout(() => {
      setIsCertificatesAutoPlaying(true);
    }, 5000);
  };





  // Auto-slide effect
  useEffect(() => {
    if (!isServicesAutoPlaying) return;

    const slideTimer = setInterval(() => {
      setServicesCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(slideTimer);
  }, [isServicesAutoPlaying, services.length]);




  // for cert
   const certificates = [
    {
      num: 1,
      title: "BizSafe STAR",
      description: "BizSafe STAR Certification for workplace safety excellence"
    },
    {
      num: 2,
      title: "Cleaning",
      description: "Class 2"
    },
    {
      num: 3,
      title: "Vector Control",
      description: "Vector Control"
    },
    {
      num: 4,
      title: "ISO 9001 :2015",
      description: "QUALITY MANAGEMENT SYSTEMS certification"
    },
    {
      num: 5,
      title: "ISO 45001 :2018",
      description: "OCCUPATIONAL HEALTH AND SAFETY MANAGEMENT SYSTEMS certification"
    },
    {
      num: 6,
      title: "ISO 14001 :2015",
      description: "ENVIRONMENTAL MANAGEMENT SYSTEMS certification"
    }
  ];

      useEffect(() => {
    // Only auto-slide certificates on mobile screens
    const isMobile = window.innerWidth < 768;
    if (!isCertificatesAutoPlaying || !isMobile) return;

    const slideTimer = setInterval(() => {
      setCertificatesCurrentSlide((prev) => (prev + 1) % certificates.length);
    }, 4000); // Slightly faster for certificates (4 seconds)

    return () => clearInterval(slideTimer);
  }, [isCertificatesAutoPlaying, certificates.length]);

  const openModal = (cert) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
    // Disable body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCert(null);
    // Re-enable body scroll
    document.body.style.overflow = 'unset';
  };

  // Close modal when clicking on backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Close modal with Escape key
  useState(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);



  // CertificateCard component (can be in a separate file or same file)
const CertificateCard = ({ cert, openModal }) => (
  <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
    {/* Certificate Image */}
    <div className="relative h-80 overflow-hidden">
      <img
        src={`/img/cert/cert${cert.num}.jpg`}
        alt={`${cert.title} Certificate`}
        className="w-full h-full object-center transition-transform duration-700 group-hover:scale-110"
      />
      {/* Overlay on Hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
        <button
          onClick={() => openModal(cert)}
          className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded-full"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-colors duration-300">
            <Eye className="w-6 h-6 text-gray-900" />
          </div>
        </button>
      </div>
    </div>
    
    {/* Certificate Info */}
    <div className="p-6 text-center">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {cert.title}
      </h3>
      <p className="text-sm text-gray-600">
        {cert.description}
      </p>
    </div>
  </div>
);


  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 flex items-center justify-center bg-gradient-to-r from-blue-900/80 to-gray-900/80">
        <div
          className="absolute inset-0 bg-center bg-no-repeat z-0"
          style={{
           backgroundColor:'#204b29'
          }}
        />
        <div className="absolute inset-0 bg-black/40 z-0" />

        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Focus Integrated Healthcare (FIH)
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white-800 font-light">
            "Your Facility Matters"
          </p>

          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed bg-white/10 backdrop-blur-sm p-6 rounded-lg">
           Your Trusted Partner in Integrated Facilities Management Excellence.
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
              href="tel:+6597407333"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center"
            >
              <FaWhatsapp className="w-5 h-7 mr-2" />
              (65) 9740-7333
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      {/* Image Section */}
      <div className="lg:h-full w-full">
        <div className="h-full w-full overflow-hidden rounded-2xl shadow-lg">
          <img 
            src='/img/background.png' 
            alt="IFM Services" 
            className='w-full h-full object-cover'
            style={{ minHeight: '400px' }}
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="lg:h-full">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 md:p-8 h-full">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">INTEGRATED FACILITY MANAGEMENT</h3>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <h4 className="font-semibold text-gray-900 mb-2">Security & Technology</h4>
              <p className="text-gray-600 text-sm">Unlocking Innovative Solutions</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <h4 className="font-semibold text-gray-900 mb-2">Cleaning</h4>
              <p className="text-gray-600 text-sm">Relieving the Burden of Upkeeping & Maintenance</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <h4 className="font-semibold text-gray-900 mb-2">Pest Control & Fumigation</h4>
              <p className="text-gray-600 text-sm">Protecting Health & Facilities</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <h4 className="font-semibold text-gray-900 mb-2">Landscaping & Gardening</h4>
              <p className="text-gray-600 text-sm">Beautifying Your Spaces</p>
            </div>
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



      {/* Services */}
 <section className="py-16 bg-white relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-green-800 to-blue-300 bg-clip-text text-transparent mb-2">
        Our Services
      </h2>
      <p className="text-xl text-slate-600 max-w-2xl mx-auto">
        Delivering integrated solutions to meet every facility need
      </p>
    </div>

    {/* Slider Container */}
    <div className="relative">
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${servicesCurrentSlide  * 100}%)`
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0"
              style={{ flex: "0 0 100%" }}
            >
              {/* Hero Style with Text Overlay */}
           <div className="relative h-[600px] md:h-[800px] w-full overflow-hidden group">
      {/* Background Image Container with top padding */}
      <div className="h-full w-full pt-8 md:pt-12"> {/* Add top padding */}
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
      </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                  <div className="max-w-4xl mx-auto">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
                      {service.title}
                    </h3>
                    <p className="text-lg md:text-xl mb-8 drop-shadow-md opacity-90 max-w-2xl">
                      {service.description}
                    </p>
                    <Link
                      to={service.link}
                      className="inline-flex items-center justify-center bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 transform"
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slider Controls */}
      <button
        onClick={handleServicesPrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all duration-300 z-10 backdrop-blur-sm hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleServicesNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all duration-300 z-10 backdrop-blur-sm hover:scale-110"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-3">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => handleServicesSlideChange(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              servicesCurrentSlide  === index 
                ? "bg-white scale-125" 
                : "bg-white/50 hover:bg-white/80"
            }`}
          ></button>
        ))}
      </div>
    </div>
  </div>
</section>



<section className="py-16 bg-gradient-to-br from-gray-900 to-slate-800">
  <div className="max-w-6xl mx-auto px-4">
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">Our Videos</h2>
      <p className="text-gray-300">Watch our facilities management solutions in action</p>
    </div>

    {/* Simple HTML5 Video Carousel */}
    <div className="relative overflow-hidden rounded-2xl bg-black/30">
      {/* Video Slides */}
      <div 
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(-${currentVideoSlide * 100}%)` }}
      >
        {/* Video Slide 1 */}
        <div className="w-full flex-shrink-0 p-4">
          <div className="relative">
            {/* Playing Indicator */}
            <div className={`absolute top-4 left-4 z-20 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center transition-opacity duration-300 ${
              currentVideoSlide === 0 ? 'opacity-100' : 'opacity-0'
            }`}>
              <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
              Now Playing
            </div>
            
            <div className="bg-black rounded-xl overflow-hidden shadow-2xl">
              <video
                ref={videoRefs.current[0]}
                controls
                className="w-full h-auto max-h-[500px]"
                onPlay={() => setCurrentVideoSlide(0)}
                onPause={() => {}}
              >
                <source src="/videos/fih1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-6 bg-gradient-to-r from-gray-900 to-black">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Company Overview</h3>
                <p className="text-gray-300">A comprehensive look at FIH's integrated facilities management</p>
              </div>
            </div>
          </div>
        </div>

        {/* Video Slide 2 */}
        <div className="w-full flex-shrink-0 p-4">
          <div className="relative">
            {/* Playing Indicator */}
            <div className={`absolute top-4 left-4 z-20 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center transition-opacity duration-300 ${
              currentVideoSlide === 1 ? 'opacity-100' : 'opacity-0'
            }`}>
              <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
              Now Playing
            </div>
            
            <div className="bg-black rounded-xl overflow-hidden shadow-2xl">
              <video
                ref={videoRefs.current[1]}
                controls
                className="w-full h-auto max-h-[500px]"
                onPlay={() => setCurrentVideoSlide(1)}
                onPause={() => {}}
              >
                <source src="/videos/fih2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-6 bg-gradient-to-r from-gray-900 to-black">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Our Process in Action</h3>
                <p className="text-gray-300">See how our teams deliver security, cleaning, and pest control services</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Navigation Controls */}
      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={handleVideoPrev}
          className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors flex items-center"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Previous
        </button>
        
        <div className="flex space-x-2">
          <button
            onClick={() => goToVideoSlide(0)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentVideoSlide === 0 ? 'bg-white scale-125' : 'bg-white/30'
            }`}
            aria-label="Go to video 1"
          />
          <button
            onClick={() => goToVideoSlide(1)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentVideoSlide === 1 ? 'bg-white scale-125' : 'bg-white/30'
            }`}
            aria-label="Go to video 2"
          />
        </div>
        
        <button
          onClick={handleVideoNext}
          className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors flex items-center"
        >
          Next
          <ChevronRight className="w-5 h-5 ml-1" />
        </button>
      </div>
    </div>

    {/* Auto-play Notice */}
    <div className="mt-6 p-4 bg-blue-900/20 rounded-lg">
      <p className="text-blue-300 text-sm text-center">
        <span className="font-semibold">Note:</span> First video auto-plays. Browser may require one click to enable sound.
      </p>
    </div>
  </div>
</section>

      {/* Strategic Partners */}
 <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-800 to-blue-300 bg-clip-text text-transparent mb-4">
        Our Licensing Certifications & ISO Awards
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Recognized for excellence and compliance with international standards
      </p>
    </div>

    {/* Desktop Grid / Mobile Carousel */}
    <div className="relative">
      {/* Desktop Grid (hidden on mobile) */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert) => (
          <CertificateCard key={cert.num} cert={cert} openModal={openModal} />
        ))}
      </div>

      {/* Mobile Carousel (visible on mobile) */}
      <div className="md:hidden">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${certificatesCurrentSlide  * 100}%)`
            }}
          >
            {certificates.map((cert, index) => (
              <div
                key={cert.num}
                className="w-full flex-shrink-0 px-2"
                style={{ flex: "0 0 100%" }}
              >
                <CertificateCard cert={cert} openModal={openModal} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Carousel Controls */}
        <div className="flex justify-center mt-6 space-x-3">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => handleCertificatesSlideChange(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                certificatesCurrentSlide  === index 
                  ? "bg-blue-600 scale-125" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            ></button>
          ))}
        </div>

        {/* Mobile Navigation Arrows */}
        <button
          onClick={handleCertificatesPrev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full shadow-lg transition-all duration-300 z-10 backdrop-blur-sm hover:scale-110"
          disabled={certificatesCurrentSlide  === 0}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleCertificatesNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full shadow-lg transition-all duration-300 z-10 backdrop-blur-sm hover:scale-110"
          disabled={certificatesCurrentSlide === certificates.length - 1}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
</section>

{/* Modal Popup (unchanged) */}
{isModalOpen && selectedCert && (
  <div 
    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-all duration-300"
    onClick={handleBackdropClick}
  >
    <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl max-h-[90vh] w-full overflow-hidden animate-in fade-in-90 zoom-in-90 duration-300">
      {/* Modal Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">
            {selectedCert.title}
          </h3>
          <p className="text-gray-600 mt-1">
            {selectedCert.description}
          </p>
        </div>
        <button
          onClick={closeModal}
          className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-2 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Modal Content */}
      <div className="p-6 max-h-[calc(90vh-120px)] overflow-y-auto">
        <div className="flex justify-center">
          <img
            src={`/img/cert/cert${selectedCert.num}.png`}
            alt={`${selectedCert.title} Certificate`}
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        
        {/* Additional Info */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            <Eye className="w-4 h-4" />
            Click outside or press ESC to close
          </div>
        </div>
      </div>
    </div>
  </div>
)}

      

      {/* Footer Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
        padding: '2px 0',
        color: 'white',
        boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.5), 0 -2px 10px rgba(165, 97, 97, 0.3)',
        borderTop: '3px solid #a36161',
        position: 'relative'
      }}>
        <Footer />
      </section>
    </div>
  );
}

export default Home;