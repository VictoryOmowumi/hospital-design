'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Clock, ShieldCheck, Activity, Baby, Scan } from 'lucide-react';

const services = [
  {
    id: 'emergency',
    title: 'Emergency Care',
    description: '24/7 emergency medical services with rapid response teams and advanced life support systems.',
    icon: <Clock className="w-8 h-8" />,
    image: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg',
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
    image: 'https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg',
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
    image: 'https://images.pexels.com/photos/3259624/pexels-photo-3259624.jpeg',
    features: [
      'Prenatal classes',
      'Labor & delivery suites',
      'Neonatal ICU',
      'Lactation support'
    ],
    color: 'bg-pink-50 text-pink-600'
  },
  {
    id: 'diagnostics',
    title: 'Diagnostic Imaging',
    description: 'State-of-the-art diagnostic technology for accurate and timely results.',
    icon: <Scan className="w-8 h-8" />,
    image: 'https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg',
    features: [
      'MRI & CT scanning',
      'Digital X-ray',
      'Ultrasound',
      'Mammography'
    ],
    color: 'bg-purple-50 text-purple-600'
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-offwhite">
      {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center bg-gradient-to-r from-forest to-sacramento text-offwhite">
      
        <div className="absolute inset-0 bg-[url('/assets/nhc-4.png')] bg-fixed bg-cover bg-center opacity-20" />
      
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-24 md:py-64 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Comprehensive <span className="text-secondary-300">Healthcare</span> Services
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Delivering exceptional medical care through advanced technology and compassionate professionals
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/book" 
                className="bg-sacramento text-primary-600 hover:bg-sacramento/80  text-offwhite font-semibold py-3 px-8 rounded-lg shadow-md transition-all"
              >
                Book Appointment
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#services" 
                className="bg-transparent border-2 border-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-all"
              >
                Explore Services
              </motion.a>
            </div>
          </motion.div>
        </div>
     
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 container  mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-primary font-medium mb-3">
              OUR SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-sacramento mb-4">
              Specialized Medical Care
            </h2>
            <p className="text-lg text-onyx/80">
              We offer a complete range of healthcare services to meet all your medical needs
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className={`absolute top-6 left-6 p-3 rounded-lg ${service.color}`}>
                  {service.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-sacramento mb-3">{service.title}</h3>
                <p className="text-onyx/80 mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className={`w-2 h-2 rounded-full mr-3 ${service.color.replace('bg-', 'bg-').replace('text-', '')}`} />
                      <span className="text-onyx/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={`/services/${service.id}`} 
                  className="inline-flex items-center text-primary font-medium hover:text-primary-dark group"
                >
                  Learn more
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
            <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-2xl inline-block">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to experience exceptional healthcare?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our team of specialists is here to provide personalized care for you and your family
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
                  Emergency Contact
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}