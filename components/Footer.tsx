import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const services = [
    { name: 'Emergency Care', url: '/services#emergency' },
    { name: 'Maternity Services', url: '/services#maternity' },
    { name: 'Surgical Services', url: '/services#surgery' },
    { name: 'Diagnostics', url: '/services#diagnostics' },
    { name: 'Outpatient Care', url: '/services#outpatient' },
    { name: 'Support Services', url: '/services#support' },
  ];

  const quickLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Doctors', url: '/team' },
    { name: 'Patients & Visitors', url: '/patients' },
    { name: 'News & Events', url: '/news' },
    { name: 'Careers', url: '/careers' },
    { name: 'Testimonials', url: '/testimonials' },
  ];

  return (
    <footer className="bg-onyx text-offwhite pt-16 pb-8 relative overflow-hidden">
      {/* Overlay Text */}
      <div className="absolute inset-0 flex justify-center p-5  pointer-events-none">
        <h2 className="text-[7rem] md:text-[10rem] lg:text-[25rem] font-bold text-white/5 select-none whitespace-nowrap">
          Nakowa
        </h2>
      </div>
      
      <div className="container mx-auto px-4 md:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div>
            <div className="flex items-center mb-6">
              <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="ml-3 text-2xl font-bold text-white">Nakowa Health</span>
            </div>
            <p className="text-offwhite/80 mb-6">
              Providing compassionate, comprehensive healthcare services with state-of-the-art facilities and expert medical professionals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-offwhite/70 hover:text-primary transition-colors">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-offwhite/70 hover:text-primary transition-colors">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-offwhite/70 hover:text-primary transition-colors">
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.url}
                    className="text-offwhite/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.url}
                    className="text-offwhite/80 hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
            <address className="not-italic">
              <p className="text-offwhite/80 mb-4">
                123 Medical Drive<br />
                Lagos, Nigeria
              </p>
              <p className="mb-4">
                <span className="text-offwhite/80">Phone:</span>{' '}
                <a href="tel:+2341234567890" className="text-primary hover:text-primary-light">
                  +234 123 456 7890
                </a>
              </p>
              <p className="mb-4">
                <span className="text-offwhite/80">Email:</span>{' '}
                <a href="mailto:info@nakowahealth.com" className="text-primary hover:text-primary-light">
                  info@nakowahealth.com
                </a>
              </p>
              <div className="mt-6">
                <a
                  href="https://wa.me/2341234567890"
                  className="inline-flex items-center bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <FaWhatsapp className="mr-2" />
                  WhatsApp Us
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-offwhite/10 text-center text-offwhite/60">
          <p>
            &copy; {new Date().getFullYear()} Nakowa Health Care & Medical Services LTD. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <Link href="/privacy" className="text-offwhite/60 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-offwhite/60 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}