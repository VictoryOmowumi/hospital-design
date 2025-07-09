'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Phone, Calendar, ArrowRight } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. John Smith',
    specialty: 'Cardiology',
    education: 'MD, Harvard Medical School',
    experience: '15+ years',
    image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg',
    bio: 'Specializes in interventional cardiology with expertise in complex coronary cases.'
  },
  {
    name: 'Dr. Emily Brown',
    specialty: 'Pediatrics',
    education: 'MD, Johns Hopkins University',
    experience: '12+ years',
    image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg',
    bio: 'Passionate about child development and preventive pediatric care.'
  },
  {
    name: 'Dr. Michael Lee',
    specialty: 'Neurology',
    education: 'MD, Stanford University',
    experience: '18+ years',
    image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg',
    bio: 'Expert in movement disorders and neurodegenerative diseases.'
  },
  {
    name: 'Dr. Sarah Wilson',
    specialty: 'Obstetrics & Gynecology',
    education: 'MD, Yale University',
    experience: '10+ years',
    image: 'https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg',
    bio: 'Special focus on high-risk pregnancies and minimally invasive surgery.'
  },
  {
    name: 'Dr. David Martinez',
    specialty: 'Orthopedics',
    education: 'MD, Columbia University',
    experience: '14+ years',
    image: 'https://images.pexels.com/photos/5452291/pexels-photo-5452291.jpeg',
    bio: 'Pioneer in robotic-assisted joint replacement procedures.'
  },
  {
    name: 'Dr. Lisa Chen',
    specialty: 'Dermatology',
    education: 'MD, University of California',
    experience: '9+ years',
    image: 'https://images.pexels.com/photos/5452282/pexels-photo-5452282.jpeg',
    bio: 'Specializes in cosmetic dermatology and skin cancer prevention.'
  }
];

export default function TeamPage() {
  return (
    <div className="bg-offwhite">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center bg-gradient-to-r from-forest to-sacramento text-offwhite">
      
        <div className="absolute inset-0 bg-[url('/assets/nhc-4.png')] bg-fixed bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-8xl font-bold mb-6 leading-tight">
              Meet Our <span className="text-secondary-300">Medical Experts</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Our team of board-certified specialists is dedicated to providing exceptional care
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#team"
              className="inline-block bg-sacramento text-primary-600 hover:bg-sacramento/80 font-semibold py-3 px-8 rounded-lg shadow-md transition-all"
            >
              View Our Team
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Specializations Filter */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-wrap justify-center gap-3">
            {['All', 'Cardiology', 'Pediatrics', 'Neurology', 'OB/GYN', 'Orthopedics', 'Dermatology'].map((specialty) => (
              <button
                key={specialty}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  specialty === 'All'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {specialty}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section id="team" className="py-20 container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden group"
            >
              <div className="relative h-80">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h2 className="text-2xl font-bold text-white">{doctor.name}</h2>
                  <p className="text-primary-300 font-medium">{doctor.specialty}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium mr-3">
                    {doctor.experience}
                  </div>
                  <p className="text-gray-600 text-sm">{doctor.education}</p>
                </div>
                <p className="text-gray-700 mb-6">{doctor.bio}</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <a 
                    href={`mailto:${doctor.name.split(' ')[1].toLowerCase()}@nakowahealth.com`}
                    className="flex items-center text-sm text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-2" /> Email
                  </a>
                  <a 
                    href="/book" 
                    className="flex items-center text-sm text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    <Calendar className="w-4 h-4 mr-2" /> Book
                  </a>
                </div>
                <a 
                  href={`/team/${doctor.name.replace(' ', '-').toLowerCase()}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium group"
                >
                  View full profile
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
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
              Ready to meet your specialist?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Schedule an appointment with one of our expert physicians today
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/book" 
                className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all"
              >
                Book Appointment
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact" 
                className="bg-transparent border-2 border-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-all"
              >
                Contact Our Team
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-sacramento mb-4">
              Join Our Medical Team
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We&apos;re looking for passionate healthcare professionals to join our growing team
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/careers" 
                className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all"
              >
                View Open Positions
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact" 
                className="bg-white text-primary hover:bg-gray-50 font-semibold py-3 px-8 rounded-lg shadow-sm transition-all"
              >
                HR Contact
              </motion.a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}