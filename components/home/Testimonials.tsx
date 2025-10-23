'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    quote: "The care I received was exceptional, and the staff made me feel at ease throughout my treatment.",
    author: "Chinonso",
    role: "Patient",
    image: "/assets/nhc-5.png"
  },
  {
    quote: "From the moment I walked in, I felt welcomed and well cared for. The doctors and nurses were incredibly attentive.",
    author: "Amina",
    role: "Patient",
    image: "/assets/nhc-6.png"
  },
  {
    quote: "I was nervous about my procedure, but the team explained everything clearly and made sure I was comfortable.",
    author: "Tunde",
    role: "Patient",
    image: "/assets/nhc-7.png"
  },
  {
    quote: "Nakowa Health Care made my recovery smooth and stress-free. I am grateful for their professionalism.",
    author: "Ngozi",
    role: "Patient",
    image: "/assets/nhc-8.png"
  },
  {
    quote: "The doctors listened to my concerns and provided excellent care. I highly recommend them.",
    author: "Emeka",
    role: "Patient",
    image: "/assets/nhc-9.png"
  },
  {
    quote: "I appreciate the friendly environment and the way the nurses attended to me.",
    author: "Bola",
    role: "Patient",
    image: "/assets/nhc-10.png"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 0: initial, 1: next, -1: prev
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Show 3 cards at a time
  const visibleCount = 3;
  const totalTestimonials = testimonials.length;

  // Get visible testimonials with wrap-around
  const getVisibleTestimonials = () => {
    let indices = [];
    for (let i = 0; i < visibleCount; i++) {
      indices.push((currentIndex + i) % totalTestimonials);
    }
    return indices;
  };

  const visibleTestimonials = getVisibleTestimonials();

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalTestimonials);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalTestimonials) % totalTestimonials);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % totalTestimonials);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalTestimonials]);

  // Animation variants
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  return (
    <section className="py-16 md:py-24 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm bg-primary/10 text-primary font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from those who&#39;ve experienced our care firsthand
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Carousel */}
          <div className="overflow-hidden relative h-[400px] md:h-[350px]">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ 
                  type: 'spring', 
                  stiffness: 300, 
                  damping: 30,
                  duration: 0.5 
                }}
                className="absolute inset-0 flex"
              >
                {visibleTestimonials.map((idx) => {
                  const testimonial = testimonials[idx];
                  return (
                    <div 
                      key={idx}
                      className="w-full lg:w-1/3 px-4 h-full flex-shrink-0"
                    >
                      <motion.div
                        className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="flex-1 flex flex-col items-center">
                          <div className="w-20 h-20 mb-6 rounded-full overflow-hidden relative">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.author}
                              fill
                              className="object-cover object-top"
                              sizes="(max-width: 768px) 100vw, 33vw"
                            />
                          </div>
                          <blockquote className="text-lg text-gray-700 italic mb-8 text-center flex-1">
                            &ldquo;{testimonial.quote}&rdquo;
                          </blockquote>
                          <div className="text-center">
                            <div className="text-primary font-medium">
                              {testimonial.author}
                            </div>
                            <div className="text-sm text-gray-500">
                              {testimonial.role}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white p-3 rounded-full shadow-md hover:bg-gray-50 transition z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-white p-3 rounded-full shadow-md hover:bg-gray-50 transition z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? 'bg-primary w-6' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}