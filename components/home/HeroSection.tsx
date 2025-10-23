'use client';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import Stats from './Stats';

export default function HeroSection() {
  // Animation values for the zoom effect
  const scale = useMotionValue(0.8);
  const opacity = useMotionValue(0);

  useEffect(() => {
    const sequence = async () => {
      await animate(scale, 1, {
        duration: 1.2,
        ease: [0.17, 0.67, 0.83, 0.67]
      });
      await animate(opacity, 1, {
        duration: 0.8,
        ease: "easeOut"
      });
    }
    sequence();
  }, [scale, opacity]);

  return (
    <section className="h-screen flex items-center overflow-clip">
      {/* Background image with zoom-in animation */}
      <motion.div 
        className="absolute inset-0 h-full w-full overflow-hidden "
        initial={{ scale: 0.8, opacity: 0 }}
        style={{
          scale,
          opacity
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#252525]/80 to-[#2e2e2e]/80 z-10 h-full"></div>

        {/* Background image */}
        <Image
          src="/assets/nhc-11.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>

      {/* Content with staggered fade-in */}
      <div className="relative z-20 w-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.8,
            duration: 0.8,
            ease: "easeOut"
          }}
          className="text-white mx-auto"
        >
          <motion.h1 
            className="text-4xl md:text-[4rem] lg:text-[7rem] leading-[1] lg:max-w-7xl mx-auto font-light tracking-tight mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              delay: 1,
              duration: 1
            }}
          >
            Welcome to Nakowa Medical Center
          </motion.h1>
          
          <motion.p 
            className="text-base mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              delay: 1.2,
              duration: 0.8
            }}
          >
            Your trusted partner in health and wellness, providing comprehensive medical services with compassion and expertise.
          </motion.p>
          
          {/* Buttons with staggered animation */}
          <motion.div 
            className="flex justify-center gap-4 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              delay: 1.4,
              duration: 0.8
            }}
          >
            <Link
              href="/services"
              className="bg-primary text-white px-4 md:px-8 py-3 md:py-4 text-sm rounded-full hover:bg-primary/80 transition-all duration-300 transform hover:scale-105"
            >
              Explore Services
            </Link>
            <Link
              href="/appointment"
              className="bg-offwhite text-primary px-4 md:px-8 py-3 md:py-4 text-sm rounded-full  hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Book Appointment
            </Link>
          </motion.div>


        </motion.div>
     
      </div>
    </section>
  );
}