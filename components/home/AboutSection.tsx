"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import Link from "next/link";
export default function AboutSection() {
  return (
    <section className="py-12 md:py-20 lg:py-24 overflow-hidden  md:-mt-24  -mt-10">
      <div className="container mx-auto px-2 sm:px-6 lg:px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <motion.span
              className="inline-block px-4 py-2 rounded-full text-sm bg-[#E5FAF7] text-primary font-medium mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              About Nakowa
            </motion.span>

            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6 font-medium leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Compassionate healthcare, rooted in trust and accessibility
            </motion.h2>

            <motion.p
              className="text-gray-600 mb-8 text-base md:text-lg max-w-2xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              At Nakowa Health Care, we&apos;re dedicated to providing modern,
              personalized medical services to communities that matter. From
              consultation to recovery, our focus is on delivering quality,
              dignified care you can count on.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
            >
              <Link href="/about" passHref
              className="bg-primary text-white px-8 py-3.5 rounded-full hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                Learn more
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Visual Grid */}
          <motion.div
            className="grid grid-rows-6 md:grid-cols-2 md:grid-rows-3 gap-3 sm:gap-4 md:gap-5  md:h-[650px] order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Image Card 1 */}
            <motion.div
              className="relative  row-span-2 col-span-2 md:col-span-1 rounded-xl overflow-hidden shadow-md  "
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src="/assets/nhc-9.png"
                alt="About Nakowa Health Care"
                fill
                className="object-top object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>

            {/* Mission Card */}
            <motion.div
              className="flex flex-col rounded-xl bg-white items-center justify-center gap-3 p-4 sm:p-6 shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="p-3 bg-primary/10 rounded-full">
                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-primary" strokeWidth={1} />
              </div>
              <h4 className="font-normal text-lg sm:text-xl text-gray-900 text-center">
                Our Mission
              </h4>
              <p className="text-gray-600 text-sm text-center">
                To deliver accessible, quality healthcare with compassion and
                integrity.
              </p>
            </motion.div>
            {/* Image Card 2 */}
            <motion.div
              className="relative row-span-2 col-span-2 md:col-span-1 rounded-xl overflow-hidden shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src="/assets/nhc-10.png"
                alt="About Nakowa Health Care"
                fill
                className="object-top object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            {/* Vision Card */}
            <motion.div
              className="flex flex-col rounded-xl bg-white items-center justify-center gap-3 p-4 sm:p-6 shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="p-5 bg-primary/10 rounded-full">
                <Eye
                  className="w-6 h-6 sm:w-8 sm:h-8 text-primary"
                  strokeWidth={1}
                />
              </div>
              <h4 className="font-normal text-lg sm:text-xl text-gray-900 text-center">
                Our Vision
              </h4>
              <p className="text-gray-600 text-sm text-center">
                To be the most trusted healthcare provider in every community we
                serve.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
