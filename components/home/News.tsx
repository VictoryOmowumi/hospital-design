'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const news = [
  {
    id: 1,
    title: "New Maternity Wing Opening",
    excerpt: "Our state-of-the-art maternity facility opens next month with enhanced services for expectant mothers and newborns.",
    date: "May 15, 2024",
    category: "Facility Update",
    readTime: "2 min read"
  },
  {
    id: 2,
    title: "Community Health Fair",
    excerpt: "Join us for free health screenings, consultations, and wellness workshops on June 10th at our main campus.",
    date: "May 5, 2024",
    category: "Event",
    readTime: "3 min read"
  },
  {
    id: 3,
    title: "COVID-19 Safety Update",
    excerpt: "Latest protocols and measures we're taking to ensure the safety of our patients and staff members.",
    date: "April 28, 2024",
    category: "Safety",
    readTime: "4 min read"
  },
  {
    id: 4,
    title: "New Telehealth Services",
    excerpt: "We are excited to announce the launch of our telehealth services, allowing patients to consult with doctors remotely.",
    date: "April 20, 2024",
    category: "Service Update",
    readTime: "3 min read"
  },

];

export function NewsSection() {
  return (
    <section className="py-20 bg-offwhite/50">
      <div className=" mx-auto px-4 md:px-8 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16"
        >
          <div className="mb-6 md:mb-0">
            <span className="inline-block text-primary font-medium mb-3">
              News & Updates
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-sacramento mb-2">
              Stay Informed
            </h2>
            <p className="text-lg text-onyx/80 max-w-2xl">
              The latest announcements, health tips, and events from Nakowa Health Care.
            </p>
          </div>
          <Link 
            href="/news" 
            className="flex items-center text-primary font-medium hover:text-primary-dark transition-colors group"
          >
            View all updates
            <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Horizontal Scroll on Mobile, Grid on Desktop */}
        <div className="overflow-x-auto md:overflow-x-visible -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar">
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 min-w-max md:min-w-0">
            {news.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden w-[300px] md:w-auto flex-shrink-0 md:flex-shrink"
              >
                <div className="h-48 bg-gradient-to-r from-primary/10 to-primary/5 flex items-center justify-center">
                  <div className="text-5xl text-primary/30">📰</div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-medium text-primary px-3 py-1 bg-primary/10 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-xs text-onyx/60">
                      {item.readTime}
                    </span>
                  </div>
                  
                  <time className="block text-sm text-onyx/60 mb-2">
                    {item.date}
                  </time>
                  
                  <h3 className="text-xl font-bold text-sacramento mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-onyx/80 mb-5 line-clamp-2">
                    {item.excerpt}
                  </p>
                  
                  <Link 
                    href={`/news/${item.id}`}
                    className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors group/link"
                  >
                    Read more
                    <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Mobile View All Link */}
        <div className="mt-12 text-center md:hidden">
          <Link 
            href="/news" 
            className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors group"
          >
            View all updates
            <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}