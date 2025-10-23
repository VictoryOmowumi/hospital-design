'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone, MessageSquare, Clock, Ambulance } from 'lucide-react';

export function EmergencyCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-sacramento via-sacramento to-sacramento/90 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
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
          24/7
        </h2>
      </div>

      <div className="container mx-auto px-4 md:px-16 relative z-10">
        {/* Pulse Icon */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring" }}
          className="flex justify-center mb-6"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="bg-primary/20 p-6 rounded-full relative"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-primary rounded-full"
            />
            <Ambulance className="w-12 h-12 text-primary relative z-10" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block bg-primary/20 text-primary-light px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            Emergency Services Available
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Need Immediate Medical Help?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90"
          >
            Our emergency team is available 24/7 to provide urgent care when you need it most.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 mb-10"
          >
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-white/90">24/7 Available</span>
            </div>
            <div className="flex items-center gap-2">
              <Ambulance className="w-5 h-5 text-primary" />
              <span className="text-white/90">Quick Response</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-white/90">Direct Contact</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="tel:+2341234567890" 
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-medium py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                <span>Call Emergency</span>
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 font-medium py-4 px-8 rounded-full transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Send Message</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Phone Number Display */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-white/70 text-sm"
          >
            Emergency Hotline: <a href="tel:+2341234567890" className="text-primary hover:text-primary-light font-semibold">+234 123 456 7890</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}