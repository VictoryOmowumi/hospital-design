'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle, ArrowRight, ArrowLeft, Stethoscope } from 'lucide-react';
import Link from 'next/link';

const departments = [
  'General Medicine',
  'Cardiology',
  'Pediatrics',
  'Maternity',
  'Surgery',
  'Pharmacy',
  'Emergency',
  'Diagnostics'
];

const timeSlots = [
  '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM',
  '04:00 PM', '05:00 PM'
];

type FormData = {
  // Personal Info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  
  // Appointment Details
  department: string;
  appointmentDate: string;
  timeSlot: string;
  reason: string;
  
  // Additional
  previousPatient: string;
  notes: string;
};

export default function BookPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    department: '',
    appointmentDate: '',
    timeSlot: '',
    reason: '',
    previousPatient: '',
    notes: ''
  });

  const totalSteps = 3;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Implement your booking logic here
    // Options:
    // 1. Send to API route (recommended)
    // 2. Send email notification
    // 3. Save to database
    // 4. Integrate with calendar service
    
    console.log('Booking submitted:', formData);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-offwhite/50 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-12 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-16 h-16 text-green-600" />
            </motion.div>
            
            <h1 className="text-4xl font-bold text-sacramento mb-4">
              Appointment Confirmed! 🎉
            </h1>
            
            <p className="text-lg text-onyx/80 mb-8">
              Thank you, {formData.firstName}! Your appointment has been successfully booked for{' '}
              <span className="font-semibold text-primary">
                {new Date(formData.appointmentDate).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })} at {formData.timeSlot}
              </span>
            </p>

            <div className="bg-primary/5 rounded-2xl p-6 mb-8 text-left">
              <h3 className="font-semibold text-sacramento mb-4">Appointment Details:</h3>
              <div className="space-y-2 text-onyx/80">
                <p><span className="font-medium">Department:</span> {formData.department}</p>
                <p><span className="font-medium">Reason:</span> {formData.reason}</p>
                <p><span className="font-medium">Email:</span> {formData.email}</p>
                <p><span className="font-medium">Phone:</span> {formData.phone}</p>
              </div>
            </div>

            <p className="text-sm text-onyx/60 mb-8">
              A confirmation email has been sent to <span className="font-semibold">{formData.email}</span>
            </p>

            <div className="flex gap-4 justify-center">
              <Link
                href="/"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full transition-all"
              >
                Back to Home
              </Link>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setCurrentStep(1);
                  setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    dateOfBirth: '',
                    department: '',
                    appointmentDate: '',
                    timeSlot: '',
                    reason: '',
                    previousPatient: '',
                    notes: ''
                  });
                }}
                className="bg-white border-2 border-primary text-primary hover:bg-primary/5 px-8 py-3 rounded-full transition-all"
              >
                Book Another
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-offwhite/50 to-primary/5 py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-medium text-sm px-4 py-2 rounded-full mb-4">
            <Calendar className="w-4 h-4" />
            Book Appointment
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-sacramento mb-4">
            Schedule Your Visit
          </h1>
          <p className="text-lg text-onyx/70 max-w-2xl mx-auto">
            Book an appointment with our healthcare professionals in just a few simple steps
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center flex-1">
                <motion.div
                  initial={false}
                  animate={{
                    backgroundColor: currentStep >= step ? '#0F766E' : '#E5E7EB',
                    scale: currentStep === step ? 1.1 : 1
                  }}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold"
                >
                  {step}
                </motion.div>
                {step < 3 && (
                  <motion.div
                    initial={false}
                    animate={{
                      backgroundColor: currentStep > step ? '#0F766E' : '#E5E7EB'
                    }}
                    className="flex-1 h-1 mx-2"
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-onyx/60">
            <span>Personal Info</span>
            <span>Appointment</span>
            <span>Confirmation</span>
          </div>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12"
        >
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <User className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold text-sacramento">Personal Information</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-sacramento mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="John"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-sacramento mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-sacramento mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-sacramento mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="+234 123 456 7890"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-sacramento mb-2">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-sacramento mb-2">
                      Are you a previous patient?
                    </label>
                    <select
                      name="previousPatient"
                      value={formData.previousPatient}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                      <option value="">Select an option</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Appointment Details */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Stethoscope className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold text-sacramento">Appointment Details</h2>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-sacramento mb-2">
                      Department *
                    </label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                      <option value="">Select a department</option>
                      {departments.map((dept) => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-sacramento mb-2">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        name="appointmentDate"
                        value={formData.appointmentDate}
                        onChange={handleInputChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-sacramento mb-2">
                      Preferred Time Slot *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, timeSlot: slot }))}
                          className={`p-3 rounded-xl border-2 transition-all text-sm font-medium ${
                            formData.timeSlot === slot
                              ? 'border-primary bg-primary text-white'
                              : 'border-gray-300 hover:border-primary'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-sacramento mb-2">
                      Reason for Visit *
                    </label>
                    <input
                      type="text"
                      name="reason"
                      value={formData.reason}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="e.g., General checkup, Consultation, Follow-up"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-sacramento mb-2">
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Any additional information we should know..."
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 3: Review & Confirm */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <FileText className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold text-sacramento">Review Your Information</h2>
                  </div>

                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 space-y-4">
                    <div>
                      <h3 className="text-sm font-semibold text-onyx/60 mb-1">Personal Information</h3>
                      <p className="text-sacramento font-medium">
                        {formData.firstName} {formData.lastName}
                      </p>
                      <p className="text-onyx/70">{formData.email}</p>
                      <p className="text-onyx/70">{formData.phone}</p>
                      <p className="text-onyx/70">DOB: {formData.dateOfBirth}</p>
                    </div>

                    <div className="border-t border-primary/20 pt-4">
                      <h3 className="text-sm font-semibold text-onyx/60 mb-1">Appointment Details</h3>
                      <p className="text-sacramento font-medium">{formData.department}</p>
                      <p className="text-onyx/70">
                        {new Date(formData.appointmentDate).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                      <p className="text-onyx/70">{formData.timeSlot}</p>
                      <p className="text-onyx/70">Reason: {formData.reason}</p>
                      {formData.notes && (
                        <p className="text-onyx/70 mt-2">Notes: {formData.notes}</p>
                      )}
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                    <p className="text-sm text-yellow-800">
                      <strong>Please note:</strong> Your appointment request will be confirmed within 24 hours. 
                      You will receive a confirmation email at <strong>{formData.email}</strong>
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              {currentStep > 1 && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={handleBack}
                  className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary/5 transition-all"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back
                </motion.button>
              )}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type={currentStep === totalSteps ? 'submit' : 'button'}
                onClick={currentStep === totalSteps ? undefined : handleNext}
                className="flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-all ml-auto"
              >
                {currentStep === totalSteps ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Confirm Booking
                  </>
                ) : (
                  <>
                    Next
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto mt-12 text-center"
        >
          <p className="text-onyx/70">
            Need help? <a href="/contact" className="text-primary hover:text-primary-dark font-semibold">Contact us</a> or call{' '}
            <a href="tel:+2341234567890" className="text-primary hover:text-primary-dark font-semibold">
              +234 123 456 7890
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}