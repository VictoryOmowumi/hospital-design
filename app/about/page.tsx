'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { StatsSection } from '@/components/about/StatsSection';
import { ArrowRight, HeartPulse, Stethoscope, ShieldCheck, Users, BrainCircuit, HandHeart } from 'lucide-react';

const coreValues = [
  {
    icon: <HeartPulse className="w-8 h-8 text-primary" />,
    title: 'Compassion',
    description: 'Treating every patient with empathy, dignity, and respect.'
  },
  {
    icon: <Stethoscope className="w-8 h-8 text-primary" />,
    title: 'Excellence',
    description: 'Striving for the highest standards in medical care and service delivery.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: 'Integrity',
    description: 'Maintaining the highest ethical standards in all our operations.'
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: 'Teamwork',
    description: 'Collaborating effectively to provide comprehensive care.'
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-primary" />,
    title: 'Innovation',
    description: 'Embracing advanced technology and modern medical practices.'
  },
  {
    icon: <HandHeart className="w-8 h-8 text-primary" />,
    title: 'Community',
    description: 'Contributing to the well-being of our local communities.'
  }
];

const leadership = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Chief Executive Officer',
    image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg',
    bio: 'With over 20 years of healthcare leadership experience, Dr. Johnson has transformed Nakowa into a regional healthcare leader.'
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Chief Medical Officer',
    image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg',
    bio: 'Board-certified physician with expertise in clinical operations and quality improvement initiatives.'
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Chief of Surgery',
    image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg',
    bio: 'Renowned surgeon specializing in minimally invasive procedures with over 15 years of experience.'
  }
];

export default function AboutPage() {
  return (
    <div className="bg-offwhite">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center bg-gradient-to-r from-forest to-sacramento">
      
        <div className="absolute inset-0 bg-[url('/assets/nhc-3.png')] bg-fixed bg-cover bg-center opacity-20" />
      
        <div className="container relative z-20 ">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/50 backdrop-blur-md p-8 md:p-12 rounded-xl shadow-xl max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-sacramento mb-6 text-center">
              Our Commitment to <span className="text-sacramento">Your Health</span>
            </h1>
            <p className="text-lg text-onyx/80 text-center max-w-3xl mx-auto">
              For over two decades, Nakowa Medical Center has been at the forefront of medical excellence,
              providing comprehensive healthcare services with compassion and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container px-4 md:px-8 lg:px-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 md:gap-20"
          >
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-sacramento">Our Mission</h2>
              </div>
              <p className="text-onyx/80">
                To provide exceptional healthcare services that improve the quality of life for our
                patients and communities through innovative medical practices, compassionate care,
                and continuous advancement in medical technology.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M3 3l18 18M12 3a9 9 0 0 1 8.89 7.5M21 12a9 9 0 0 1-9 9 9 9 0 0 1-9-9" />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-sacramento">Our Vision</h2>
              </div>
              <p className="text-onyx/80">
                To be the leading healthcare provider in the region, recognized for clinical
                excellence, patient-centered care, and innovative medical solutions that set
                new standards in healthcare delivery.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-primary font-medium mb-3">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-sacramento mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-onyx/80 max-w-2xl mx-auto">
              The foundation of everything we do at Nakowa Medical Center
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-offwhite p-8 rounded-xl hover:shadow-md transition-all group"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-sacramento group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                </div>
                <p className="text-onyx/80">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </section>
        <StatsSection />

      {/* Leadership */}
      <section className="py-20 bg-offwhite/50">
        <div className="container px-4 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-primary font-medium mb-3">
              Meet The Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-sacramento mb-4">
              Our Leadership
            </h2>
            <p className="text-lg text-onyx/80 max-w-2xl mx-auto">
              Experienced professionals guiding Nakowa Medical Center&#39;s vision
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group"
              >
                <div className="relative h-80">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-sacramento mb-1">{leader.name}</h3>
                  <p className="text-primary mb-4">{leader.role}</p>
                  <p className="text-onyx/80 mb-6">{leader.bio}</p>
                  <Link 
                    href="#" 
                    className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors group/link"
                  >
                    View profile
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sacramento text-white">
        <div className="container px-4 md:px-8 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to experience compassionate healthcare?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Schedule your appointment today with our expert medical team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/book" 
                className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                Book Appointment
              </Link>
              <Link 
                href="/contact" 
                className="bg-transparent border-2 border-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}