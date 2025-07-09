'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const doctors = [
  {
    name: "Dr. Amina Yusuf",
    specialty: "Cardiologist",
    image: "/assets/nhc-5.png",
  },
  {
    name: "Dr. Chike Obi",
    specialty: "Pediatrician",
    image: "/assets/nhc-6.png",
  },
  {
    name: "Dr. Fatima Bello",
    specialty: "Obstetrician",
    image: "/assets/nhc-7.png",
  },
  {
    name: "Dr. Tunde Okafor",
    specialty: "Neurologist",
    image: "/assets/nhc-8.png",
  },
];

export  function DoctorsPreview() {
  return (
    <section className="py-20 bg-[#F6FAFB] relative overflow-hidden">
      {/* Badge + Stats */}
      <div className="absolute top-10 right-10 hidden md:block text-right z-10">
        <p className="text-3xl font-semibold text-primary">20<span className="text-xl align-top">+</span></p>
        <p className="text-sm text-gray-600 leading-snug max-w-xs">
          Team Members <br />
          Each person on our team plays a vital role in delivering compassionate care.
        </p>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        {/* Title */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-medium text-sm px-4 py-1.5 rounded-full mb-2">
            Our Team
          </div>
          <h2 className="text-4xl font-semibold text-gray-900">
            Meet Our <span className="italic text-primary">Team</span>
          </h2>
        </div>

        {/* Staggered Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                bg-white rounded-2xl shadow-md text-center p-4 pt-6 
                ${index % 2 === 0 ? 'translate-y-4 md:translate-y-0' : 'md:translate-y-8'}
              `}
            >
              <div className="w-full h-48 relative mb-4 rounded-xl overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg text-gray-900">{doctor.name}</h3>
              <p className="text-sm text-gray-500">{doctor.specialty}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
