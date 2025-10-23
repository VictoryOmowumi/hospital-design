'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock,  Activity, Baby, Scan, MessageSquare,  Phone } from 'lucide-react';

const services = [
  {
    id: 'emergency',
    title: 'Emergency Care',
    description: '24/7 emergency medical services with rapid response teams and advanced life support systems.',
    icon: <Clock className="w-8 h-8" />,
    image: '/assets/nhc-1.png',
    features: [
      'Trauma center',
      'Cardiac emergency care',
      'Pediatric emergency',
      'Stroke treatment'
    ],
    color: 'bg-red-50 text-red-600'
  },
  {
    id: 'surgery',
    title: 'Surgical Services',
    description: 'Advanced surgical procedures across multiple specialties with minimally invasive options.',
    icon: <Activity className="w-8 h-8" />,
    image: '/assets/nhc-18.png',
    features: [
      'Robotic surgery',
      'Laparoscopic procedures',
      'Neurosurgery',
      'Orthopedic surgery'
    ],
    color: 'bg-blue-50 text-blue-600'
  },
  {
    id: 'maternity',
    title: 'Maternity & Neonatal',
    description: 'Comprehensive care for mothers and newborns from conception through postnatal stages.',
    icon: <Baby className="w-8 h-8" />,
    image: '/assets/nhc-1.png',
    features: [
      'Prenatal classes',
      'Labor & delivery suites',
      'Neonatal ICU',
      'Lactation support'
    ],
    color: 'bg-pink-50 text-pink-600'
  },
  {
    id: 'pharmacy',
    title: 'Pharmacy',
    description: 'We offer a wide range of medications and healthcare products to meet your needs.',
    icon: <Scan className="w-8 h-8" />,
    image: '/assets/nhc-19.png',
    features: [
      'Medications',
      'Healthcare Products',
      'Pharmacy Services',
    ],
    color: 'bg-purple-50 text-purple-600'
  }
];

// Mobile Service Card Component
const ServiceCard = ({ service, index, isMobile }: { service: typeof services[0], index: number, isMobile?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all group w-[340px] flex-shrink-0 border border-gray-100"
  >
    <div className="relative h-56 overflow-hidden">
      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} className="w-full h-full">
        <Image src={service.image} alt={service.title} fill className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className={`absolute top-5 left-5 p-4 rounded-2xl backdrop-blur-sm ${service.color} shadow-lg`}>
        {service.icon}
      </motion.div>
      <div className="absolute bottom-5 left-5 right-5">
        <h3 className="text-2xl font-bold text-white drop-shadow-lg">{service.title}</h3>
      </div>
    </div>
    <div className="p-6">
      <p className="text-onyx/80 mb-6 leading-relaxed">{service.description}</p>
      <div className="space-y-3 mb-6">
        {service.features.map((feature, i) => (
          <div key={i} className="flex items-center group/item">
            <div className={`w-2 h-2 rounded-full mr-3 ${service.color.replace('bg-', 'bg-').replace('text-', '')} group-hover/item:scale-150 transition-transform`} />
            <span className="text-onyx/70 text-sm group-hover/item:text-onyx transition-colors">{feature}</span>
          </div>
        ))}
      </div>
      <motion.a whileHover={{ x: 5 }} href={`/services/${service.id}`} className="inline-flex items-center text-primary font-semibold hover:text-primary-dark group/link transition-colors">
        <span>Learn more</span>
        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/link:translate-x-1" />
      </motion.a>
    </div>
    <div className={`h-1 ${service.color.replace('text-', 'bg-')} group-hover:h-2 transition-all`} />
  </motion.div>
);

export default function ServicesPage() {
  return (
    <>
    
      <motion.div className="h-screen flex items-center overflow-clip">
        {/* Background image with zoom-in animation */}
        <motion.div 
          className="absolute inset-0 bg-[url('/assets/nhc-1.png')] bg-fixed bg-cover bg-center opacity-80" />
        
        <div className="container relative z-20 ">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white backdrop-blur-md p-8 md:p-12 rounded-xl shadow-xl max-w-4xl"
          >
            <h1 className="text-3xl lg:text-7xl font-bold text-primary mb-2 ">
              Our Services <span className="text-sacramento"></span>
            </h1>
            <p className="text-lg text-onyx/80 ml-1">
            We offer a complete range of healthcare services to meet all your medical needs
            </p>
             {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row justify-start gap-4 mt-5"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="tel:+2341234567890" 
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-medium py-3 px-5 text-sm rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                <span>Book Appointment</span>
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-onyx hover:bg-white/20 font-medium py-3 px-5 text-sm rounded-full transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Emergency Contact</span>
              </Link>
            </motion.div>
          </motion.div>
          </motion.div>
        </div>
      </motion.div>
     

      {/* Services Grid */}
      <section id="services" className="py-20 bg-gradient-to-br from-offwhite/50 to-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-medium text-sm px-4 py-2 rounded-full mb-4">
              Our Services
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-3">
              Customized <span className="italic text-primary">Care</span> For Your Needs
            </h2>
            <p className="text-lg text-onyx/70 max-w-3xl">
              Comprehensive medical services delivered by experienced professionals using the latest technology
            </p>
          </motion.div>

          {/* Creative Bento Grid Layout */}
          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto -mx-4 px-4 no-scrollbar">
            <div className="flex gap-6 min-w-max pb-4">
              {services.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} isMobile />
              ))}
            </div>
          </div>

          {/* Desktop: Creative Bento Grid */}
          <div className="hidden md:grid md:grid-cols-6 md:grid-rows-6 gap-6 h-[900px]">
            {/* Emergency Care - Large Featured Card (spans 2x3) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="col-span-4 row-span-3 bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all group border border-gray-100"
            >
              <div className="relative h-full flex">
                {/* Image Side */}
                <div className="relative w-1/2 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={services[0].image}
                      alt={services[0].title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
                  
                  {/* Icon Badge */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`absolute top-6 left-6 p-5 rounded-2xl backdrop-blur-sm ${services[0].color} shadow-lg`}
                  >
                    {services[0].icon}
                  </motion.div>
                </div>

                {/* Content Side */}
                <div className="w-1/2 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-sacramento mb-4">{services[0].title}</h3>
                    <p className="text-onyx/80 mb-6 leading-relaxed">{services[0].description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {services[0].features.map((feature, i) => (
                        <div key={i} className="flex items-center group/item">
                          <div className={`w-2.5 h-2.5 rounded-full mr-3 ${services[0].color.replace('bg-', 'bg-').replace('text-', '')} group-hover/item:scale-150 transition-transform`} />
                          <span className="text-onyx/70 group-hover/item:text-onyx transition-colors">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <motion.a
                    whileHover={{ x: 5 }}
                    href={`/services/${services[0].id}`}
                    className="inline-flex items-center text-primary font-semibold hover:text-primary-dark group/link transition-colors"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/link:translate-x-1" />
                  </motion.a>
                </div>
              </div>
              <div className={`h-1.5 ${services[0].color.replace('text-', 'bg-')} group-hover:h-3 transition-all`} />
            </motion.div>

            {/* Surgical Services - Vertical Card (spans 1x3) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="col-span-2 row-span-3 bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all group border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} className="w-full h-full">
                  <Image src={services[1].image} alt={services[1].title} fill className="object-cover" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className={`absolute top-5 left-5 p-3 rounded-2xl backdrop-blur-sm ${services[1].color} shadow-lg`}>
                  {services[1].icon}
                </motion.div>
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-xl font-bold text-white drop-shadow-lg">{services[1].title}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-onyx/80 mb-4 text-sm leading-relaxed">{services[1].description}</p>
                <div className="space-y-2 mb-4">
                  {services[1].features.map((feature, i) => (
                    <div key={i} className="flex items-center group/item">
                      <div className={`w-1.5 h-1.5 rounded-full mr-2 ${services[1].color.replace('bg-', 'bg-').replace('text-', '')} group-hover/item:scale-150 transition-transform`} />
                      <span className="text-onyx/70 text-xs group-hover/item:text-onyx transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>
                <motion.a whileHover={{ x: 5 }} href={`/services/${services[1].id}`} className="inline-flex items-center text-primary font-semibold hover:text-primary-dark text-sm group/link">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </motion.a>
              </div>
              <div className={`h-1 ${services[1].color.replace('text-', 'bg-')} group-hover:h-2 transition-all`} />
            </motion.div>

            {/* Maternity - Wide Card (spans 2x2) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="col-span-3 row-span-3 bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all group border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} className="w-full h-full">
                  <Image src={services[2].image} alt={services[2].title} fill className="object-cover" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className={`absolute top-5 left-5 p-4 rounded-2xl backdrop-blur-sm ${services[2].color} shadow-lg`}>
                  {services[2].icon}
                </motion.div>
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">{services[2].title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-onyx/80 mb-5 leading-relaxed">{services[2].description}</p>
                <div className="space-y-2 mb-5">
                  {services[2].features.map((feature, i) => (
                    <div key={i} className="flex items-center group/item">
                      <div className={`w-2 h-2 rounded-full mr-3 ${services[2].color.replace('bg-', 'bg-').replace('text-', '')} group-hover/item:scale-150 transition-transform`} />
                      <span className="text-onyx/70 text-sm group-hover/item:text-onyx transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>
                <motion.a whileHover={{ x: 5 }} href={`/services/${services[2].id}`} className="inline-flex items-center text-primary font-semibold hover:text-primary-dark group/link">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/link:translate-x-1" />
                </motion.a>
              </div>
              <div className={`h-1 ${services[2].color.replace('text-', 'bg-')} group-hover:h-2 transition-all`} />
            </motion.div>

            {/* Pharmacy - Square Card (spans 2x2) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="col-span-3 row-span-3 bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all group border border-gray-100"
            >
              <div className="relative h-44 overflow-hidden">
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} className="w-full h-full">
                  <Image src={services[3].image} alt={services[3].title} fill className="object-cover" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className={`absolute top-5 left-5 p-4 rounded-2xl backdrop-blur-sm ${services[3].color} shadow-lg`}>
                  {services[3].icon}
                </motion.div>
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">{services[3].title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-onyx/80 mb-5 leading-relaxed">{services[3].description}</p>
                <div className="space-y-2 mb-5">
                  {services[3].features.map((feature, i) => (
                    <div key={i} className="flex items-center group/item">
                      <div className={`w-2 h-2 rounded-full mr-3 ${services[3].color.replace('bg-', 'bg-').replace('text-', '')} group-hover/item:scale-150 transition-transform`} />
                      <span className="text-onyx/70 text-sm group-hover/item:text-onyx transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>
                <motion.a whileHover={{ x: 5 }} href={`/services/${services[3].id}`} className="inline-flex items-center text-primary font-semibold hover:text-primary-dark group/link">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/link:translate-x-1" />
                </motion.a>
              </div>
              <div className={`h-1 ${services[3].color.replace('text-', 'bg-')} group-hover:h-2 transition-all`} />
            </motion.div>
          </div>

          {/* View All Services Link - Mobile Only */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center md:hidden"
          >
            <p className="text-sm text-onyx/60">
              Scroll horizontally to view all services →
            </p>
          </motion.div>
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
            Care
          </h2>
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
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
              <Activity className="w-4 h-4" />
              Get Started Today
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Ready to experience exceptional healthcare?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-white/90"
            >
              Our team of specialists is here to provide personalized care for you and your family
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
                  <Phone className="w-5 h-5" />
                  Book Appointment
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 font-medium py-4 px-8 rounded-full transition-all duration-300"
                >
                  <MessageSquare className="w-5 h-5" />
                  Emergency Contact
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-8 mt-12 text-white/70 text-sm"
            >
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>24/7 Availability</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                <span>Expert Specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <Scan className="w-5 h-5 text-primary" />
                <span>Advanced Technology</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}