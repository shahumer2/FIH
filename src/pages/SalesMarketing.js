import React from 'react';
import { Link } from 'react-router-dom';

function SalesMarketingPage() {
  const marketingCards = [
    {
      id: 'advancer-ifm',
      title: 'ADVANCER IFM',
      description: 'Integrated Facility Management solutions with comprehensive security services',
      image: '/img/advancer-ifm.jpg',
      path: '/sales-marketing/advancer-ifm',
      gradient: 'from-blue-600 to-purple-700',
      icon: '🏢'
    },
    {
      id: 'security-crowd',
      title: 'Security Crowd & Traffic Management',
      description: 'Professional traffic marshals and crowd control services for events and institutions',
      image: '/img/security-traffic.jpg',
      path: '/sales-marketing/security-crowd',
      gradient: 'from-green-600 to-teal-700',
      icon: '🚦'
    },
    {
      id: 'ashtree-international',
      title: 'Ashtree International',
      description: 'Specialist security services, training, and aviation security solutions',
      image: '/img/ashtree-security.jpg',
      path: '/sales-marketing/ashtree-international',
      gradient: 'from-orange-500 to-red-600',
      icon: '🛡️'
    },
    {
      id: 'social-media',
      title: 'Social Media Campaigns',
      description: 'Engaging content showcasing our traffic marshals and community initiatives',
      image: '/img/social-campaign.jpg',
      path: '/sales-marketing/social-media',
      gradient: 'from-pink-500 to-rose-600',
      icon: '📱'
    },
    {
      id: 'case-study',
      title: 'Case Study: Medical Security',
      description: 'Security implementation for SingHealth medical facilities',
      image: '/img/medical-security.jpg',
      path: '/sales-marketing/case-study',
      gradient: 'from-indigo-600 to-purple-800',
      icon: '🏥'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sales & Marketing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of security and facility management solutions. 
            Each service is tailored to meet specific client needs with professional excellence.
          </p>
        </div>

        {/* Marketing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {marketingCards.map((card) => (
            <Link
              key={card.id}
              to={card.path}
              className="group block"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 h-full">
                {/* Card Header with Gradient */}
                <div className={`bg-gradient-to-r ${card.gradient} p-6 text-white`}>
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{card.icon}</div>
                    <h3 className="text-xl font-bold">{card.title}</h3>
                  </div>
                </div>
                
                {/* Card Body */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {card.description}
                  </p>
                  
                  {/* Action Button */}
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                      Learn More
                    </span>
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Enhance Your Security?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contact our sales team to discuss customized solutions for your organization. 
              We provide comprehensive security assessments and tailored proposals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+6597417333"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: (65) 9741 7333
              </a>
              <Link
                to="/contact"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                Contact Sales Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesMarketingPage;