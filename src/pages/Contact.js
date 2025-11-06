import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Replace with your EmailJS credentials
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        to_email: 'info@fih.com.sg'
      };

      await emailjs.send(
        'service_iudpeby',    // Get from EmailJS dashboard
        'template_b9chvg6',   // Get from EmailJS dashboard
        templateParams,
        '4L5eFSH8m29NrOM4p'     // Get from EmailJS dashboard
      );

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get in touch with our team for professional security and traffic management solutions
            </p>
          </div>
        </div>
      </section>

      <div className="relative z-10">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-60"
          style={{
            backgroundImage: `url("${process.env.PUBLIC_URL}/img/background.jpg")`
          }}
        ></div>
        
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info Section - Same as before */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone Number</h3>
                    <div className="text-gray-700 space-y-1 mt-1">
                      <div>(65) 9740-7333</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <div className="text-gray-700 space-y-1 mt-1">
                      <div>info@fih.com.sg</div>
                      <div>www.fih.com.sg</div>
                      <div>security@fih.com.sg</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-700 mt-1">
                      9 Euros Ave 8A<br />
                      #02-00 Singapore 409461
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50/80 rounded-lg p-6 border border-blue-100">
                <h3 className="font-semibold text-gray-900 mb-3">Website</h3>
                <a href="https://www.fih.com.sg" className="text-blue-600 hover:text-blue-700 font-medium">
                  www.fih.com.sg
                </a>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  Failed to send message. Please try again or contact us directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/90" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/90" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/90" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/90" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/90"
                  >
                    <option value="">Select a service</option>
                    <option value="Crowd Management">Crowd Management</option>
                    <option value="Traffic Management">Traffic Management</option>
                    <option value="Security Escort">Security Escort</option>
                    <option value="Emergency Response">Emergency Response</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows="4" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/90"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 px-6 rounded-lg font-semibold transition duration-300"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;