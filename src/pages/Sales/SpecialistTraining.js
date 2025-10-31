import React from 'react';
import { 
  Phone, Mail, Globe, MapPin, Users, Shield, Award, 
  Clock, Star, ArrowRight, Target, CheckCircle, 
  Zap, Heart, Crosshair, Activity, Stethoscope, 
  GraduationCap, Sword, AlertTriangle, Truck
} from 'lucide-react';
import Navbar from '../../components/Navbar';

const SpecialistTraining = () => {
  const trainingPrograms = [
    {
      icon: <Crosshair className="w-8 h-8" />,
      title: "Tactical Weapon Training",
      description: "Certified training for Sea Marshal, Maritime Boarding Officer, and Private Security Contractors",
      features: ["Executive Protection", "Firearms Techniques", "Vehicle Tactics", "FX Gear Training"]
    },
    {
      icon: <Sword className="w-8 h-8" />,
      title: "Contact Tactics Training",
      description: "Defensive tactics, control and restraint techniques for close quarter combat",
      features: ["Pekiti-Tirsia Kali", "Krav Maga", "Defensive Tactics", "Control & Restraint"]
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Medical Response Training",
      description: "Pre-hospital trauma life support and tactical combat casualty care",
      features: ["PHTLS Certified", "TCCC Training", "EMT Certification", "Trauma Care"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "SWAT/Air Assault Training",
      description: "Special Weapons and Tactics training for elite law enforcement operations",
      features: ["Fast Roping", "Marksmanship", "Explosives", "K9 Operations"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Executive Protection",
      description: "Advanced personal protection and close protection specialist training",
      features: ["Route Planning", "Motorcade Operations", "Surveillance Detection", "Risk Assessment"]
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Emergency Medical Technician",
      description: "Comprehensive EMT training for tactical and civilian emergency response",
      features: ["BCLS/AED", "Advanced Trauma", "Flight Medicine", "Dive Medicine"]
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "International Accreditations",
      description: "Globally recognized certifications through IAEMT and other bodies",
      features: ["IAEMT Badges", "SRFAC Certified", "DAN Qualifications", "International Standards"]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Trainer Certification",
      description: "Become a certified instructor in various tactical and medical disciplines",
      features: ["Master Level", "Instructor Courses", "Certification Programs", "Continuous Training"]
    }
  ];

  const masterTrainers = [
    {
      name: "Grandmaster Dr Steve Ng",
      rank: "9th Dan Tae Kwon-Do ITF",
      expertise: "Tae Kwon-Do, Shotokan Karate",
      achievement: "Learned directly from Founder General Choi",
      credentials: "PhD in Martial Arts, 41 years teaching experience"
    },
    {
      name: "Sensei James Lee",
      rank: "15th Dan Ninjutsu",
      expertise: "Bujinkan Budo Taijutsu, Chinese Martial Arts",
      achievement: "Multiple traditional martial arts lineages",
      credentials: "ICSAA degree, 4th Dan ITF Tae Kwon-Do"
    },
    {
      name: "Sensei Marcel Fabian",
      rank: "5th Dan Ninjutsu",
      expertise: "Tae Kwon-Do, Silat, Mixed Martial Arts",
      achievement: "Former Army Ranger, National Athlete",
      credentials: "Accounting degree, Former journalist"
    },
    {
      name: "Dr Matthew Yap",
      rank: "3rd Dan Tae Kwon-Do ITF",
      expertise: "Police Defensive Tactics, ERT, EMT",
      achievement: "Chief Trainer for Singapore Police Force",
      credentials: "ERT/EMT/SWAT Certified"
    },
    {
      name: "Sensei Kevin Ho",
      rank: "4th Dan Tae Kwon-Do",
      expertise: "Law Enforcement Combatives, Firearms",
      achievement: "Former SPF Coast Guard ERT Operator",
      credentials: "PTK Edged Weapons Instructor"
    },
    {
      name: "Sensei Wayne Koo",
      rank: "Black Belt Multiple Disciplines",
      expertise: "Jujitsu, PTK Kali, Police Defense Tactics",
      achievement: "Country Director PTK Association",
      credentials: "Registered Coach with Sports Singapore"
    }
  ];

  const specialistExperts = [
    {
      name: "August Chen",
      role: "Paramedic Training (Asia)",
      expertise: "First Aid and Healthcare Training",
      credentials: "SRFAC Chief Instructor, International NGO Deputy Commissioner"
    },
    {
      name: "Master Bernie Ho",
      role: "Aikido/Hapkido",
      expertise: "International Martial Arts Consultant",
      credentials: "Former Police Superintendent, Gurkha Contingent Wing Commander"
    },
    {
      name: "Kenneth Chng",
      role: "Medical Training (Singapore)",
      expertise: "Firearm Trainer, Medical Instructor",
      credentials: "SRFAC Chief Instructor, SPF Drill Instructor"
    },
    {
      name: "Ann Sim",
      role: "Flight Emergency Care",
      expertise: "Flight and Trauma Nurse",
      credentials: "Advanced Trauma Life Support, Singapore Airlines"
    },
    {
      name: "Taylor Lam",
      role: "Close Protection (Thailand)",
      expertise: "Tactical Training & Protective Security",
      credentials: "35+ years experience, Hong Kong Government"
    },
    {
      name: "Nicholas Cheong",
      role: "Dive Medicine and Investigation",
      expertise: "Diving Emergency Management",
      credentials: "DAN Board Member, Advanced Trauma Life Support"
    }
  ];

  const testimonials = [
    {
      quote: "A well trained bodyguard aims to de-escalate ground zero rather than turned it into a fighting ring. To extricate and evacuate the principal, saving lives and properties are the highest priority.",
      author: "Taylor Lam, Thailand Country Director, Security Consultant"
    },
    {
      quote: "Within a very short timeframe of 10 days, Ashtree was able to mobilise resources and have them trained in operations and safety protocols, contributing to the success of the national pandemic strategy.",
      author: "Keck Tong San, Vice President, Resorts World Sentosa"
    },
    {
      quote: "SWAT team members are considered to be elite within the ranks of law enforcement agencies. Highly cohesive teams where every member plays a vital role in advancing the mission.",
      author: "Dr Matthew Yap, ERT/EMT/SWAT Certified"
    },
    {
      quote: "Defensive tactics, control and restraint techniques are not restricted to just law enforcement officers. Security operators in critical installation or high seas face the same threat.",
      author: "Dr Matthew Yap, Programme Director Police Defensive Tactics"
    }
  ];

  const accreditations = [
    {
      name: "International Association of Emergency Medical Technicians (IAEMT)",
      description: "Global accreditation for emergency medical and tactical response training"
    },
    {
      name: "Singapore Resuscitation and First Aid Council (SRFAC)",
      description: "National standards for first aid and life support training"
    },
    {
      name: "Monadnock Defence Training Council (MDTC)",
      description: "Law enforcement defensive tactics and weapon systems"
    },
    {
      name: "Divers Alert Network (DAN)",
      description: "International diving medicine and emergency care standards"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-20 text-white relative"
        style={{
          backgroundImage: `url("${process.env.PUBLIC_URL}/img/security/security.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              SPECIALIST TRAINING SERVICES
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
              Certified Training for Elite Security Professionals and First Responders
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-blue-200">
                <Crosshair className="w-5 h-5 mr-2" />
                <span>Tactical Weapons & Defense</span>
              </div>
              <div className="flex items-center text-blue-200">
                <Stethoscope className="w-5 h-5 mr-2" />
                <span>Medical Response Training</span>
              </div>
              <div className="flex items-center text-blue-200">
                <Shield className="w-5 h-5 mr-2" />
                <span>International Accreditations</span>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">ARE YOU CERTIFIED TO BE THE RESCUE TEAM?</h2>
              <p className="text-lg text-gray-600 mb-6">
                The post-COVID security environment requires the tactical operator and security trooper to be trained 
                in three basic areas: personal protection and defensive tactics, emergency healthcare and medical response, 
                and tactical procedure with weapon training.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">100,000+ law enforcement personnel trained in Singapore</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">250,000+ personnel trained across 12 countries worldwide</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">International accreditations and certifications</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
              <div className="text-center">
                <Target className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Training Philosophy</h3>
                <p className="text-gray-700 italic">
                  "Defensive tactics, control and restraint techniques and close quarter battle are not restricted 
                  to just law enforcement officers or the military. Security operators in critical installation 
                  or high seas face the same threat."
                </p>
                <p className="text-gray-600 mt-4 font-semibold">- Dr Matthew Yap, Programme Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Specialist Training Programs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive training solutions for security professionals, first responders, and tactical operators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainingPrograms.map((program, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-blue-100 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {program.icon}
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {program.description}
                  </p>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
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

      {/* Master Trainers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Master Trainers</h2>
            </div>
            <p className="text-lg text-gray-600">Learn from internationally recognized masters and senseis</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {masterTrainers.map((trainer, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{trainer.name}</h3>
                <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-3">
                  {trainer.rank}
                </div>
                <p className="text-gray-600 text-sm mb-3"><strong>Expertise:</strong> {trainer.expertise}</p>
                <p className="text-gray-500 text-sm mb-3 italic">{trainer.achievement}</p>
                <p className="text-gray-500 text-xs bg-white bg-opacity-50 rounded-lg p-2">
                  {trainer.credentials}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialist Experts */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Specialist Experts</h2>
            <p className="text-gray-300">Industry professionals bringing real-world experience to training</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialistExperts.map((expert, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-colors">
                <h3 className="text-xl font-bold mb-2 text-blue-400">{expert.name}</h3>
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mb-3">
                  {expert.role}
                </div>
                <p className="text-gray-300 text-sm mb-3"><strong>Specialization:</strong> {expert.expertise}</p>
                <p className="text-gray-400 text-xs bg-gray-700 bg-opacity-50 rounded-lg p-2">
                  {expert.credentials}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">International Accreditations</h2>
            <p className="text-xl text-blue-100">
              Globally recognized certifications and training standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {accreditations.map((accreditation, index) => (
              <div key={index} className="bg-gray-600 bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-yellow-300 mr-4" />
                  <h3 className="text-xl font-bold">{accreditation.name}</h3>
                </div>
                <p className="text-blue-100 text-sm">{accreditation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Training Testimonials</h2>
            <p className="text-lg text-gray-600">Hear from our partners and training participants</p>
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

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Contact ASHTREE INTERNATIONAL</h2>
            <p className="text-xl text-blue-100">Get certified with our specialist training programs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-gray-800 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Training Inquiries</h3>
              <p className="text-blue-100 text-lg">(65) 9740 7333</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-800 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Operations</h3>
              <p className="text-blue-100 text-lg">(65) 9741 7333</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-800 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <AlertTriangle className="w-8 h-8" />
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
              <p className="text-blue-100">info@ashtree.com.sg</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <h3 className="text-lg font-semibold">Address</h3>
              </div>
              <p className="text-blue-100">
                18 Sin Ming Lane, #06-34 Midview City<br />
                Singapore 573960
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a 
              href="https://www.ashtree.com.sg" 
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

export default SpecialistTraining;