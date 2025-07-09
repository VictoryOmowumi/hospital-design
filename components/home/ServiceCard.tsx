'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function ServiceCard({ service, index }: { service: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
    >
      <div className="p-8">
        <div className="text-5xl mb-6 text-primary">{service.icon}</div>
        <h3 className="text-2xl font-bold text-sacramento mb-3">{service.title}</h3>
        <p className="text-onyx/80 mb-6">{service.description}</p>
        <Link 
          href="/services" 
          className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
        >
          Learn more
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}