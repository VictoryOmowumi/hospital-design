'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const doctors = [
  {
    name: "Dr. Aliyu M.A",
    specialty: "CHIEF MEDICAL DIRECTOR AND FOUNDER",
    image: "/assets/nhc-10.png",
  },
  {
    name: "Dr. Salawudeen Z",
    specialty: "CHIEF MEDICAL OFFICER",
    image: "/assets/nhc-9.png",
  },
  {
    name: "Mrs. Aliyu S.A",
    specialty: "CHIEF NURSING OFFICER & MANAGING DIRECTOR",
    image: "/assets/nhc-12.png",
  },
  {
    name: "Ayodeji Aliyu",
    specialty: "GENERAL SECRETARY",
    image: "/assets/nhc-20.png",
  },
  {
    name: "Maryam Usman",
    specialty: "ADMINISTRATIVE OFFICER",
    image: "/assets/nhc-22.png",
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

      <div className="container mx-auto lg:px-6 relative z-20">
        {/* Title */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-medium text-sm px-4 py-1.5 rounded-full mb-2">
            Our Team
          </div>
          <h2 className="text-4xl font-semibold text-gray-900">
            Meet Our <span className="italic text-primary">Team</span>
          </h2>
        </div>

        {/* Horizontal Scroll on Mobile, Grid on Desktop */}
        <div className="overflow-x-auto md:overflow-x-visible  px-4 md:px-0 no-scrollbar max-w-6xl w-full md:mx-auto">
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 min-w-max md:max-w-[300px]">
            {doctors.map((doctor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`
                  bg-white rounded-2xl border border-gray-100 text-center p-4 pt-6 
                  w-[280px] md:w-auto flex-shrink-0 md:flex-shrink
                  ${index % 2 === 0 ? 'translate-y-4 md:translate-y-0' : 'md:translate-y-8'}
                `}
              >
                <div className="w-full h-80 relative mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <h3 className="font-semibold text-lg text-gray-900">{doctor.name}</h3>
                <p className="text-sm text-gray-500">{doctor.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
