'use client';

import { useEffect } from 'react';

export default function BookPage() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="py-12">
      <div className="container">
        <h1 className="section-title text-center">Book an Appointment</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
          Schedule your visit with one of our healthcare professionals
        </p>
        
        {/* Calendly inline widget */}
        <div 
          className="calendly-inline-widget" 
          data-url="https://calendly.com/your-calendar-url"
          style={{ minWidth: '320px', height: '700px' }}
        />
      </div>
    </div>
  );
}