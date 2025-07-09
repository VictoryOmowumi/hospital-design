'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ClipboardList, Clock, CreditCard, Shield, MapPin, Luggage } from 'lucide-react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function PatientsPage() {
  const infoCards = [
    {
      title: 'Admission Process',
      content: 'Learn about our streamlined admission procedures and required documents for your stay.',
      icon: <ClipboardList className="w-6 h-6" />,
      link: '#admission',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: 'Visiting Hours',
      content: 'General visiting hours 10AM-8PM daily with special arrangements available.',
      icon: <Clock className="w-6 h-6" />,
      link: '#visiting',
      color: 'bg-green-50 text-green-600'
    },
    {
      title: 'Payment & Insurance',
      content: 'Information about payment options and accepted insurance providers.',
      icon: <CreditCard className="w-6 h-6" />,
      link: '#payment',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      title: 'Patient Rights',
      content: 'Understand your rights and responsibilities as our patient.',
      icon: <Shield className="w-6 h-6" />,
      link: '#rights',
      color: 'bg-red-50 text-red-600'
    },
    {
      title: 'What to Bring',
      content: 'Essential checklist for your hospital stay and items to leave at home.',
      icon: <Luggage className="w-6 h-6" />,
      link: '#checklist',
      color: 'bg-yellow-50 text-yellow-600'
    },
    {
      title: 'Hospital Amenities',
      content: 'Cafeteria, parking, wifi and other available facilities.',
      icon: <MapPin className="w-6 h-6" />,
      link: '#amenities',
      color: 'bg-indigo-50 text-indigo-600'
    }
  ];

  return (
    <div className="bg-offwhite">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center bg-gradient-to-r from-forest to-sacramento text-offwhite">
      
        <div className="absolute inset-0 bg-[url('/assets/nhc-5.png')] bg-fixed bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Patients & <span className="text-secondary-300">Visitors</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Everything you need to know for your visit to Nakowa Medical Center
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#information"
              className="inline-block bg-sacramento text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg shadow-md transition-all"
            >
              View Information
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Information Grid */}
      <section id="information" className="py-20 container mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-sacramento mb-4">
            Your Visit Made Simple
          </h2>
          <p className="text-lg text-onyx/80 max-w-3xl mx-auto">
            Quick access to essential information for patients and visitors
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {infoCards.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden group"
            >
              <div className={`p-6 ${item.color} flex items-center`}>
                <div className="p-3 rounded-lg bg-white/20 mr-4">
                  {item.icon}
                </div>
                <h2 className="text-xl font-bold text-current">{item.title}</h2>
              </div>
              <div className="p-6">
                <p className="text-onyx/80 mb-6">{item.content}</p>
                <a
                  href={item.link}
                  className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium group"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 space-y-20">
          {/* Admission Process */}
          <div id="admission" className="scroll-mt-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row gap-12 items-start"
            >
              <div className="md:w-1/3">
                <h2 className="text-3xl font-bold text-sacramento mb-6">
                  Admission Process
                </h2>
                <Image
                  src="https://images.pexels.com/photos/7088521/pexels-photo-7088521.jpeg"
                  alt="Admission process"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-2/3">
                <div className="prose max-w-none text-onyx/80">
                  <p className="text-lg mb-6">
                    Our admission process is designed to be as smooth and stress-free as possible. 
                    Here&#39;s what you need to know when preparing for your stay:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-sacramento">Required Documents</h3>
                      <ul className="space-y-8 mt-4">
                        <li className="flex items-start">
                          <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>Valid identification (driver&#39;s license, passport)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>Insurance card and information</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>Referral letter (if applicable)</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-sacramento">What to Expect</h3>
                      <ul className="space-y-8 mt-4">
                        <li className="flex items-start">
                          <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>Registration at main desk</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>Initial health assessment</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>Room assignment</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Visiting Hours */}
          <div id="visiting" className="scroll-mt-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary-50 rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl font-bold text-sacramento mb-6">
                Visiting Hours & Guidelines
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-sacramento">General Visiting Hours</h3>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-4">
                      <Clock className="text-primary mr-3" />
                      <span className="font-medium">10:00 AM - 8:00 PM daily</span>
                    </div>
                    <p className="text-onyx/80">
                      We understand the importance of family support during recovery while maintaining 
                      a healing environment for all patients.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-sacramento">Special Departments</h3>
                  <div className="space-y-4">
                    {[
                      { unit: 'ICU', hours: '11:00 AM - 1:00 PM and 5:00 PM - 7:00 PM' },
                      { unit: 'Maternity', hours: '24-hour access for partners' },
                      { unit: 'Pediatrics', hours: 'Parents can stay 24/7' },
                      { unit: 'Emergency', hours: 'Limited to 1 visitor per patient' }
                    ].map((item, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                        <div className="bg-primary/10 p-2 rounded-lg mr-4">
                          <ClipboardList className="text-primary w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-medium">{item.unit}</p>
                          <p className="text-sm text-onyx/60">{item.hours}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Payment & Insurance */}
          <div id="payment" className="scroll-mt-20">
            <h2 className="text-3xl font-bold text-sacramento mb-6">
              Payment & Insurance Information
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { 
                  title: 'Insurance Accepted', 
                  content: 'We accept most major insurance plans including NHIS, HMOs, and private insurers.' 
                },
                { 
                  title: 'Self-Pay Options', 
                  content: 'Flexible payment plans and discounts available for self-paying patients.' 
                },
                { 
                  title: 'Financial Assistance', 
                  content: 'Need-based financial aid programs for qualifying patients.' 
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-primary"
                >
                  <h3 className="text-xl font-semibold mb-3 text-sacramento">{item.title}</h3>
                  <p className="text-onyx/80">{item.content}</p>
                </motion.div>
              ))}
            </div>
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-sacramento">Insurance Providers</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['NHIS', 'Hygeia', 'AXA', 'Avon', 'Reliance', 'Leadway', 'AIICO', 'Others'].map((provider, i) => (
                  <div key={i} className="bg-white p-4 rounded-lg text-center shadow-sm">
                    <p className="font-medium text-blue-600">{provider}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Patient Rights */}
          <div id="rights" className="scroll-mt-20">
            <h2 className="text-3xl font-bold text-sacramento mb-6">
              Patient Rights & Responsibilities
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-sacramento mb-6 flex items-center">
                  <Shield className="text-green-600 mr-3" />
                  Your Rights
                </h3>
                <ul className="space-y-4">
                  {[
                    'Receive respectful, considerate care',
                    'Be informed about your diagnosis and treatment',
                    'Participate in healthcare decisions',
                    'Privacy and confidentiality',
                    'Access your medical records',
                    'Voice concerns about your care'
                  ].map((right, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-onyx/80">{right}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-sacramento mb-6 flex items-center">
                  <ClipboardList className="text-blue-600 mr-3" />
                  Your Responsibilities
                </h3>
                <ul className="space-y-4">
                  {[
                    'Provide accurate medical information',
                    'Follow treatment plans',
                    'Respect hospital policies',
                    'Be considerate of other patients',
                    'Meet financial obligations',
                    'Respect staff and property'
                  ].map((responsibility, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-onyx/80">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sacramento text-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our patient care team is available to assist you with any additional information you may need
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact" 
                className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all"
              >
                Contact Us
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+2341234567890" 
                className="bg-transparent border-2 border-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-all"
              >
                Call Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}