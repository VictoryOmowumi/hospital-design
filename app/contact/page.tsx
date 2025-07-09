'use client';
import { useForm } from '@formspree/react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

export default function ContactPage() {
  const [state, handleSubmit] = useForm("xyyqzzzz"); // Replace with your form ID

  return (
    <div className="bg-offwhite">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primaryLight to-primaryDark text-white py-24 md:py-52">
        <div className="absolute inset-0 bg-[url('/images/medical-pattern.png')] opacity-10" />
        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Contact <span className="text-secondary-300">Nakowa Medical Center</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              We&apos;re here to answer your questions and provide the care you need
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <div className="bg-primary-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
              <MapPin className="text-primary-600 w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-center text-sacramento mb-4">Our Location</h2>
            <address className="text-center not-italic text-onyx/80">
              123 Healthcare Avenue<br />
              Medical District<br />
              Lagos, Nigeria<br />
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-800 mt-2 inline-block"
              >
                Get Directions →
              </a>
            </address>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <div className="bg-primary-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
              <Phone className="text-primary-600 w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-center text-sacramento mb-4">Phone Contacts</h2>
            <div className="text-center text-onyx/80 space-y-2">
              <p className="font-medium">Emergency: <a href="tel:+234800NAKOWA" className="text-primary-600">1-800-NAKOWA</a></p>
              <p>General Inquiries: <a href="tel:+2345551234567" className="text-primary-600">(555) 123-4567</a></p>
              <p>Appointments: <a href="tel:+2345551234568" className="text-primary-600">(555) 123-4568</a></p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <div className="bg-primary-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
              <Clock className="text-primary-600 w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-center text-sacramento mb-4">Working Hours</h2>
            <div className="text-center text-onyx/80 space-y-2">
              <p className="flex justify-between max-w-xs mx-auto">
                <span>Monday - Friday:</span> <span>7:00 AM - 9:00 PM</span>
              </p>
              <p className="flex justify-between max-w-xs mx-auto">
                <span>Saturday:</span> <span>8:00 AM - 5:00 PM</span>
              </p>
              <p className="flex justify-between max-w-xs mx-auto">
                <span>Sunday:</span> <span>Emergency Only</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map and Form Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-xl overflow-hidden shadow-lg h-full min-h-[400px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5!2d3.4!3d6.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzAnMDAuMCJOIDPCsDI0JzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="min-h-[400px]"
              ></iframe>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-offwhite p-8 md:p-10 rounded-xl shadow-md"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-sacramento mb-6 flex items-center">
                <MessageCircle className="text-primary-600 mr-3" />
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-onyx mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-onyx mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-onyx mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-onyx mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="appointment">Appointment Booking</option>
                    <option value="general">General Inquiry</option>
                    <option value="billing">Billing Question</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-onyx mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  disabled={state.submitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary hover:bg-primary/80 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all flex items-center justify-center"
                >
                  {state.submitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="mr-2 w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
                {state.succeeded && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                    Thank you! Your message has been sent. We&#39;ll contact you soon.
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-10 rounded-xl shadow-sm inline-block"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
              Need Emergency Assistance?
            </h2>
            <p className="text-lg text-onyx/80 mb-6 max-w-2xl mx-auto">
              For immediate medical attention, please call our emergency line or visit our emergency department
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+234800NAKOWA"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all"
              >
                Call Emergency
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/emergency"
                className="bg-white text-red-600 hover:bg-gray-50 font-semibold py-3 px-8 rounded-lg border border-red-600 transition-all"
              >
                Emergency Info
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <a
          href="https://wa.me/2341234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl flex items-center justify-center transition-all"
          aria-label="Chat on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </motion.div>
    </div>
  );
}