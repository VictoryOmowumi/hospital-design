'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      if (window.scrollY < 10) {
        setShowHeader(true);
        lastScrollY.current = window.scrollY;
        return;
      }

      if (window.scrollY > lastScrollY.current) {
        // Scrolling down
        setShowHeader(false);
      } else {
        // Scrolling up
        setShowHeader(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Services', url: '/services' },
    { title: 'Doctors', url: '/team' },
    { title: 'Patients', url: '/patients' },
    { title: 'Contact', url: '/contact' },
  ];

  // Animation variants
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        when: "beforeChildren"
      }
    },
    scrolled: {
      backgroundColor: 'rgba(255, 255, 255, 1)',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      padding: '1rem 0',
    }
  };

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1 + i * 0.1,
        ease: "easeOut"
      }
    })
  };

  const mobileMenuVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
<motion.header
    initial="visible"
  animate={showHeader ? "visible" : "hidden"}
  variants={{
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    hidden: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  }}
  className={`sticky top-2 z-50 transition-all duration-300 rounded-xl lg:rounded-full w-full lg:w-11/12 mx-auto lg:my-4 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-2'}`}
>
      <div className=" px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo with animation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/nakowa-logo.svg"
                alt="Nakowa Health Care Logo"
                width={100}
                height={100}
                className="h-auto w-32 lg:w-48 rounded-full object-contain lg:object-cover"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.url}
                  className={`relative px-4 py-2  font-medium transition-colors ${pathname === item.url ? 'text-primary' : 'text-onyx hover:text-primary'}`}
                >
                  {item.title}
                  {pathname === item.url && (
                    <motion.span 
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                      layoutId="activeIndicator"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Book Now Button - Desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="hidden lg:block"
          >
            <Link
              href="/book"
              className="ml-4 bg-primary hover:bg-primary-dark  text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
            >
              Book Now
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div 
            className="lg:hidden flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-onyx hover:text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Mobile menu with animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="lg:hidden bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="px-4 space-y-2 py-4">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    <Link
                      href={item.url}
                      className={`block px-4 py-3 rounded-lg font-medium transition-colors ${pathname === item.url ? 'bg-primary/10 text-primary' : 'text-onyx hover:bg-gray-100'}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <Link
                    href="/book"
                    className="block w-full text-center bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium mt-2 transition-all hover:scale-[1.02]"
                    onClick={() => setIsOpen(false)}
                  >
                    Book Appointment
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}