"use client";
import { Stethoscope, HeartPulse, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      icon: <Stethoscope className="w-6 h-6" strokeWidth={1} />,
      title: "Primary Care",
      description:
        "Comprehensive health services for all ages with personalized treatment plans.",
      bgColor: "bg-primary",
    },
    {
      icon: <HeartPulse className="w-6 h-6" strokeWidth={1} />,
      title: "Cardiology",
      description:
        "Advanced heart care with cutting-edge diagnostic technology.",
      bgColor: "bg-primaryLight",
    },
    {
      icon: <Activity className="w-6 h-6" strokeWidth={1} />,
      title: "Physiotherapy",
      description: "Rehabilitation programs to restore movement and function.",
      bgColor: "bg-green-500",
    },
  ];

  // Animation variants for 3D transforms
  const cardVariants = {
    hidden: {
      opacity: 0,
      transform:
        "translate3d(0px, 30px, 0px) scale3d(0.95, 0.95, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
      filter: "blur(2px)",
    },
    visible: {
      opacity: 1,
      transform:
        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      transform: "translate3d(0px, -5px, 0px) scale3d(1.02, 1.02, 1)",
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
    },
  };

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Text Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transform:
                  "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              Nakowa Health Services
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transform:
                  "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-6"
            >
              Comprehensive care for every stage of{" "}
              <span className="text-primary">life</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transform:
                  "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-gray-600 mb-8 text-lg"
            >
              At Nakowa Health Care, we prioritize your health with a range of
              services tailored to your needs. From routine check-ups to
              specialized treatments, our dedicated team is here to support you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transform:
                  "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 mt-8"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white"
                  />
                ))}
              </div>
              <div className="text-gray-600">
                <span className="text-primary font-medium">10k+</span> Satisfied
                patients
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transform:
                  "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-10"
            >
              <Link
                href="/services"
                passHref
                className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-dark transition-all shadow-md hover:shadow-lg"
              >
                View All Services
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Services Cards */}
          <div className="lg:w-1/2 space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                transition={{ delay: index * 0.15 }}
                className="w-full h-64 bg-offwhite rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100"
              >
                <div className="flex flex-col justify-between h-full p-8">
                  <div
                    className={`w-16 h-16 rounded-full ${service.bgColor} flex items-center justify-center`}
                  >
                    <div className="text-white">{service.icon}</div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <Link
                      href={`/services/${service.title.toLowerCase()}`}
                      className="text-primary font-medium flex items-center"
                    >
                      Learn more <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
