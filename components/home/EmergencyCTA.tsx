'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function EmergencyCTA() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16 bg-sacramento text-white"
    >
      <div className="container mx-auto px-4 md:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Need Immediate Medical Help?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Our emergency team is available 24/7 to provide urgent care when you need it most.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/contact" 
            className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            Contact Us Now
          </Link>
          <Link 
            href="tel:+2341234567890" 
            className="bg-transparent border-2 border-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition-all duration-300"
          >
            Call Emergency
          </Link>
        </div>
      </div>
    </motion.section>
  );
}