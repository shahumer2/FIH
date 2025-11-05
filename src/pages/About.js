import { Bug, Shield, Sparkles, Star, Trees, Users } from 'lucide-react';
import React from 'react';

function About() {
  return (
    <div className="min-h-screen ">
      <nav className="bg-gray-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
                   <img 
                src="/img/logo.png" 
                alt="FIH Logo" 
                className={`h-10 w-auto transition-all duration-300 
                }`}
              />
              <a href="/" className="text-xl font-bold text-white">FIH</a>
              <div className="hidden md:flex space-x-6">
                <a href="/" className="hover:text-blue-300">Home</a>
                <a href="/about" className="text-blue-300">About Us</a>
                <a href="/services" className="hover:text-blue-300">Services</a>
                <a href="/contact" className="hover:text-blue-300">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About FIH</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
           Focus Integrated Healthcare (FIH)
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
             We are more than a service provider but your strategic IFM
partner, committed to creating safe, sustainable, and futureready
environments. With a proven track record across
healthcare, commercial, and institutional sectors, we deliver
integrated, technology-enabled, and people-driven solutions
that ensure operational excellence and peace of mind.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our Vision: Integration. Technology. People.
Integration – A seamless suite of IFM services, from
Cleaning, Landscaping, Pest Control and Security. We unify
these under one framework to deliver efficiency, consistency,
and measurable outcomes.
            </p>

            <p>Our Commitment to Excellence
We are relentless in our pursuit of excellence, ensuring every
engagement is marked by <br></br>
<span className='font-bold'> Certified Standards </span> – ISO 9001, ISO 14001, ISO 45001,
bizSAFE Star, NEA licensing<br></br>
<span className='font-bold'> Operational Resilience</span> – 24/7 response teams and
centralised command oversight <br></br>
<span className='font-bold'> Sustainability</span> – Eco-conscious practices that balance
efficiency with environmental responsibility <br></br>
 <span className='font-bold'>Enduring Partnerships</span> – Long-term relationships built on
trust, accountability, and measurable results</p>
          </div>
          <div className="bg-gray-200 h-100 rounded-lg flex items-center justify-center">
            <img src="/img/fihleft.png" alt="About Us" className="w-full h-100 object-cover rounded-lg"/>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Value Proposition</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Commitment to Safety</h4>
              <p className="text-gray-600 text-sm">Zero incidents, maximum protection</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">One Team</h4>
              <p className="text-gray-600 text-sm">Collaborative approach, unified goals</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Trusted Partner</h4>
              <p className="text-gray-600 text-sm">Reliability and integrity guaranteed</p>
            </div>
          </div>
        </div>




        <div className="relative py-20 bg-gradient-to-br from-gray-50 to-blue-50">
  <div className="max-w-7xl mx-auto px-4">
    {/* Main Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
        INTEGRATED FACILITY MANAGEMENT
      </h2>
      <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
        At Focus Integrated Healthcare (FIH), we invite you to experience a new standard in Integrated
        Facilities Management; one that is built on innovation, reliability, and care. We go beyond service
        delivery to address our clients' unique challenges, creating value through a holistic and future-ready
        approach. With expertise spanning multiple service divisions, we deliver seamless,
        integrated solutions that safeguard people, elevate facilities, and empower long-term success.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Security & Technology */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
        <div className="flex items-start mb-6">
          <div className="bg-blue-100 p-3 rounded-xl mr-4">
            <Shield className="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Security & Technology | Unlocking Innovative Solutions
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Safeguard your facilities with advanced Security & Technology solutions
              that go beyond conventional measures. From AI-enabled surveillance
              and enhanced access control to real-time monitoring and predictive
              threat detection, our systems ensure proactive protection. Supported by
              our 24-hour Operations Centre, we provide continuous oversight and
              rapid response, giving you confidence that your facilities are safe,
              compliant, and resilient.
            </p>
          </div>
        </div>
      </div>

      {/* Cleaning */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
        <div className="flex items-start mb-6">
          <div className="bg-green-100 p-3 rounded-xl mr-4">
            <Sparkles className="w-8 h-8 text-green-600" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Cleaning | Relieving the Burden of Upkeeping & Maintenance
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We take the burden of cleanliness and upkeep off your shoulders with our
              professional Cleaning services. Our trained teams, equipped with
              advanced tools and eco-friendly products, ensure your facilities maintain a
              pristine and professional image. From daily routines to specialised deep
              cleaning, we deliver consistent hygiene standards that not only protect
              health but also enhance the reputation and appearance of your premises.
            </p>
          </div>
        </div>
      </div>

      {/* Pest Control */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
        <div className="flex items-start mb-6">
          <div className="bg-orange-100 p-3 rounded-xl mr-4">
            <Bug className="w-8 h-8 text-orange-600" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Pest Control & Fumigation | Protecting Health & Facilities
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Provide reliable Pest Control and Fumigation services designed to
              safeguard both people and property. Our trained specialists use the
              latest techniques and NEA-approved products to survey, identify,
              and eliminate pests effectively. With proactive monitoring and
              targeted treatments, we ensure a safe, hygienic environment that
              protects the health, integrity, and reputation of your facilities.
            </p>
          </div>
        </div>
      </div>

      {/* Landscaping */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
        <div className="flex items-start mb-6">
          <div className="bg-emerald-100 p-3 rounded-xl mr-4">
            <Trees className="w-8 h-8 text-emerald-600" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Landscaping & Gardening | Beautifying Your Spaces
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Transform your areas into vibrant, functional landscapes that elevate
              the image of your facilities. From designing new green spaces to
              enhancing existing ones, our skilled team delivers solutions that
              balance aesthetic appeal with practical functionality. With
              sustainable practices and meticulous care, we create landscapes
              that inspire, endure, and leave a lasting impression.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="text-center mt-12">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Facilities?</h3>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Partner with us to experience comprehensive facility management solutions that drive efficiency, safety, and excellence.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Get Started Today
        </button>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
}

export default About;