'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { StatsSection } from '@/components/about/StatsSection';
import { ArrowRight, HeartPulse, Stethoscope, ShieldCheck, Users, BrainCircuit, HandHeart, Target, Eye } from 'lucide-react';

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
    name: 'Dr. Chike Obi',
    role: 'Chief Executive Officer',
    image: '/assets/nhc-14.png',
    bio: 'With over 20 years of healthcare leadership experience, Dr. Johnson has transformed Nakowa into a regional healthcare leader.'
  },
  {
    name: 'Dr. Amina Yusuf',
    role: 'Chief Medical Officer',
    image: '/assets/nhc-15.png',
    bio: 'Board-certified physician with expertise in clinical operations and quality improvement initiatives.'
  },
  {
    name: 'Nurse. Beatrice Adamu',
    role: 'Chief of Surgery',
    image: '/assets/nhc-16.png',
    bio: 'Renowned surgeon specializing in minimally invasive procedures with over 15 years of experience.'
  }
];

export default function AboutPage() {
  return (
    <>
      <motion.div className="h-screen flex items-center overflow-clip">
        {/* Background image with zoom-in animation */}
        <motion.div 
          className="absolute inset-0 bg-[url('/assets/nhc-13.png')] bg-fixed bg-cover bg-center opacity-80" />
        
        <div className="container relative z-20 ">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white backdrop-blur-md p-8 md:p-12 rounded-xl shadow-xl max-w-4xl mx-auto"
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
      </motion.div>
    
      {/* Mission & Vision - Creative Grid Layout */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container px-4 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-primary font-medium mb-3">
              Our Purpose
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-sacramento">
              Mission & Vision
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Images Grid */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4 h-[500px]"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative rounded-xl overflow-hidden shadow-md"
              >
                <Image
                  src="/assets/nhc-11.png"
                  alt="Healthcare mission"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative rounded-xl overflow-hidden shadow-md mt-12"
              >
                <Image
                  src="/assets/nhc-16.png"
                  alt="Healthcare vision"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Right Side - Mission & Vision Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl border border-primary/10"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-primary/20 p-4 rounded-xl mr-4">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-sacramento mb-3">Our Mission</h3>
                    <p className="text-onyx/80 leading-relaxed">
                      To provide exceptional healthcare services that improve the quality of life for our
                      patients and communities through innovative medical practices, compassionate care,
                      and continuous advancement in medical technology.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-sacramento/5 to-sacramento/10 p-8 rounded-2xl border border-sacramento/10"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-sacramento/20 p-4 rounded-xl mr-4">
                    <Eye className="w-8 h-8 text-sacramento" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-sacramento mb-3">Our Vision</h3>
                    <p className="text-onyx/80 leading-relaxed">
                      To be the leading healthcare provider in the region, recognized for clinical
                      excellence, patient-centered care, and innovative medical solutions that set
                      new standards in healthcare delivery.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values - Bento Box Style */}
      <section className="py-20 bg-gradient-to-br from-offwhite/50 to-primary/5">
        <div className="container px-4 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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

          {/* Horizontal Scroll on Mobile, Grid on Desktop */}
          <div className="overflow-x-auto md:overflow-x-visible -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar">
            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 min-w-max md:min-w-0">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all group border border-gray-100 w-[320px] md:w-auto flex-shrink-0 md:flex-shrink"
                >
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="bg-gradient-to-br from-primary/10 to-primary/5 p-5 rounded-2xl mb-6 group-hover:from-primary/20 group-hover:to-primary/10 transition-all"
                    >
                      {value.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-sacramento mb-3 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-onyx/70 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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

      {/* CTA Section - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-sacramento via-sacramento to-sacramento/90 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"
          />
        </div>

        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="text-[12rem] md:text-[18rem] font-bold text-white/5 select-none whitespace-nowrap">
            Join
          </h2>
        </div>

        <div className="container px-4 md:px-8 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/20 text-primary-light px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <HeartPulse className="w-4 h-4" />
              Start Your Healthcare Journey
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Ready to experience compassionate healthcare?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-white/90"
            >
              Schedule your appointment today with our expert medical team and discover the Nakowa difference.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/book" 
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-medium py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <ArrowRight className="w-5 h-5" />
                  Book Appointment
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 font-medium py-4 px-8 rounded-full transition-all duration-300"
                >
                  <Users className="w-5 h-5" />
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-8 mt-12 text-white/70 text-sm"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span>Certified Medical Care</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span>10,000+ Patients Served</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartPulse className="w-5 h-5 text-primary" />
                <span>24/7 Emergency Care</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}