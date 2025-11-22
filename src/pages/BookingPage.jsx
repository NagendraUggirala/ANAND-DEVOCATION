import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaArrowLeft } from 'react-icons/fa';

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState(null);

  // Get package/temple from URL params or location state
  const selectedPackage = location.state?.package || '';
  const selectedTemple = location.state?.temple || '';

  const validationSchema = Yup.object({
    temple: Yup.string().required('Temple selection is required'),
    package: Yup.string().required('Package selection is required'),
    packageType: Yup.string().required('Package type is required'),
    date: Yup.date().required('Date is required'),
    timeSlot: Yup.string().required('Time slot is required'),
    name: Yup.string().required('Name is required'),
    phone: Yup.string().required('Phone is required').matches(/^[0-9]{10}$/, 'Invalid phone number'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    gotram: Yup.string(),
    nakshatra: Yup.string(),
    numberOfPeople: Yup.number().min(1, 'At least 1 person required').required('Number of people is required'),
    address: Yup.string(),
    paymentMethod: Yup.string().required('Payment method is required')
  });

  const formik = useFormik({
    initialValues: {
      temple: selectedTemple || '',
      package: selectedPackage || '',
      packageType: '',
      date: '',
      timeSlot: '',
      name: '',
      phone: '',
      email: '',
      gotram: '',
      nakshatra: '',
      numberOfPeople: 1,
      address: '',
      specialInstructions: '',
      paymentMethod: ''
    },
    validationSchema,
    onSubmit: (values) => {
      // Generate booking ID
      const id = 'BK' + Date.now().toString().slice(-8);
      setBookingId(id);
      console.log('Booking submitted:', values);
      setIsSubmitted(true);
      setCurrentStep(4);
    }
  });

  const temples = [
    'Tirupati Balaji',
    'Kashi Vishwanath',
    'Meenakshi Amman',
    'Jagannath Puri',
    'Somnath Temple',
    'Vaishno Devi',
    'Rameshwaram',
    'Kedarnath'
  ];

  const packages = {
    'Tirupati Balaji': ['VIP Darshan', 'Special Entry Darshan', 'Prasadam Package', 'Seva Package'],
    'Kashi Vishwanath': ['Morning Darshan', 'Evening Aarti', 'Rudrabhishekam', 'Ganga Aarti'],
    'Meenakshi Amman': ['Darshan Package', 'Kalyanam Seva', 'Abhishekam', 'Archana'],
    'Jagannath Puri': ['Darshan Package', 'Mahaprasadam', 'Rath Yatra Special'],
    'Somnath Temple': ['Darshan Package', 'Aarti Seva', 'Abhishekam'],
    'Vaishno Devi': ['Helicopter Package', 'Trekking Package', 'VIP Darshan'],
    'Rameshwaram': ['Darshan Package', 'Theertham Package', 'Abhishekam'],
    'Kedarnath': ['Helicopter Package', 'Trekking Package', 'Darshan Package']
  };

  const packageTypes = [
    { value: 'pooja', label: 'Pooja' },
    { value: 'darshan', label: 'Darshan' },
    { value: 'tour', label: 'Tour' },
    { value: 'donation', label: 'Donation' }
  ];

  const timeSlots = [
    { value: 'morning', label: 'Morning (6:00 AM - 12:00 PM)' },
    { value: 'afternoon', label: 'Afternoon (12:00 PM - 4:00 PM)' },
    { value: 'evening', label: 'Evening (4:00 PM - 8:00 PM)' }
  ];

  const paymentMethods = [
    { value: 'pay-on-arrival', label: 'Pay on Arrival', icon: '💵' },
    { value: 'upi', label: 'UPI', icon: '📱' },
    { value: 'card', label: 'Credit/Debit Card', icon: '💳' },
    { value: 'cash-donation', label: 'Cash Donation', icon: '💰' }
  ];

  // Calculate price (mock calculation)
  const calculatePrice = () => {
    const basePrice = 1500;
    const peopleMultiplier = formik.values.numberOfPeople || 1;
    const gst = basePrice * 0.18;
    const serviceCharge = 200;
    const total = (basePrice * peopleMultiplier) + gst + serviceCharge;
    return {
      base: basePrice * peopleMultiplier,
      gst: gst,
      serviceCharge: serviceCharge,
      total: total
    };
  };

  const price = calculatePrice();

  const steps = [
    { number: 1, title: 'Select Package', icon: '📦' },
    { number: 2, title: 'Date & Time', icon: '📅' },
    { number: 3, title: 'Personal Info', icon: '👤' },
    { number: 4, title: 'Payment', icon: '💳' }
  ];

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Success Page
  if (isSubmitted && bookingId) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-orange-50 py-12">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-6"
          >
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-semibold transition-colors"
            >
              <FaArrowLeft className="text-lg" />
              <span>Back to Home</span>
            </button>
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl max-w-2xl w-full"
            >
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-2">
              Booking Successful!
            </h2>
            <p className="text-lg text-gray-600">
              Thank you for your devotion. Your booking details are below.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-6 rounded-xl mb-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-semibold">Booking ID:</span>
                <span className="text-blue-600 font-bold text-lg">{bookingId}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-semibold">Temple:</span>
                <span className="text-gray-800 font-semibold">{formik.values.temple}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-semibold">Package:</span>
                <span className="text-gray-800 font-semibold">{formik.values.package}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-semibold">Date & Time:</span>
                <span className="text-gray-800 font-semibold">
                  {formik.values.date} - {formik.values.timeSlot}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-semibold">Total Amount:</span>
                <span className="text-orange-600 font-bold text-lg">₹{price.total.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-6">
            <p className="text-sm text-yellow-800">
              <strong>Support Contact:</strong> +91-9876543210 | support@ananddevocation.com
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
              Download PDF
            </button>
            <Link
              to="/"
              className="flex-1 bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 rounded-lg font-semibold text-center hover:from-orange-600 hover:to-yellow-600 transition-all"
            >
              Back to Home
            </Link>
          </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-orange-50 py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-semibold transition-colors"
          >
            <FaArrowLeft className="text-lg" />
            <span>Back to Home</span>
          </button>
        </motion.div>

        {/* 1️⃣ Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-800 mb-4">
            Complete Your <span className="text-blue-600">Booking</span>
          </h1>
          <p className="text-lg text-gray-600">
            Fill your details to proceed with your spiritual journey
          </p>
          {selectedTemple && (
            <p className="text-blue-600 font-semibold mt-2">
              Booking → {selectedTemple} {selectedPackage && `→ ${selectedPackage}`}
            </p>
          )}
        </motion.div>

        {/* Progress Steps */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                      currentStep >= step.number
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {currentStep > step.number ? '✓' : step.number}
                  </div>
                  <p className={`text-xs md:text-sm mt-2 text-center ${
                    currentStep >= step.number ? 'text-blue-600 font-semibold' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-1 mx-2 ${
                    currentStep > step.number ? 'bg-blue-600' : 'bg-gray-200'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
            >
              <form onSubmit={formik.handleSubmit}>
                {/* Step 1: Select Temple / Package */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-display font-bold text-gray-800 mb-6">
                      Step 1: Select Temple & Package
                    </h2>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Temple Name *
                      </label>
                      <select
                        name="temple"
                        value={formik.values.temple}
                        onChange={(e) => {
                          formik.handleChange(e);
                          formik.setFieldValue('package', '');
                        }}
                        onBlur={formik.handleBlur}
                        className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                      >
                        <option value="">Select a temple</option>
                        {temples.map((temple) => (
                          <option key={temple} value={temple}>
                            {temple}
                          </option>
                        ))}
                      </select>
                      {formik.touched.temple && formik.errors.temple && (
                        <p className="text-red-500 text-sm mt-1">{formik.errors.temple}</p>
                      )}
                    </div>

                    {formik.values.temple && (
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          Package Name *
                        </label>
                        <select
                          name="package"
                          value={formik.values.package}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                        >
                          <option value="">Select a package</option>
                          {packages[formik.values.temple]?.map((pkg) => (
                            <option key={pkg} value={pkg}>
                              {pkg}
                            </option>
                          ))}
                        </select>
                        {formik.touched.package && formik.errors.package && (
                          <p className="text-red-500 text-sm mt-1">{formik.errors.package}</p>
                        )}
                      </div>
                    )}

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Package Type *
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {packageTypes.map((type) => (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() => formik.setFieldValue('packageType', type.value)}
                            className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                              formik.values.packageType === type.value
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {type.label}
                          </button>
                        ))}
                      </div>
                      {formik.touched.packageType && formik.errors.packageType && (
                        <p className="text-red-500 text-sm mt-1">{formik.errors.packageType}</p>
                      )}
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={nextStep}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all"
                      >
                        Next Step →
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Date & Time */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-display font-bold text-gray-800 mb-6">
                      Step 2: Select Date & Time
                    </h2>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formik.values.date}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                      />
                      {formik.touched.date && formik.errors.date && (
                        <p className="text-red-500 text-sm mt-1">{formik.errors.date}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Time Slot *
                      </label>
                      <div className="space-y-2">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot.value}
                            type="button"
                            onClick={() => formik.setFieldValue('timeSlot', slot.value)}
                            className={`w-full px-4 py-3 rounded-lg font-semibold text-left transition-all ${
                              formik.values.timeSlot === slot.value
                                ? 'bg-orange-500 text-white shadow-lg'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {slot.label}
                          </button>
                        ))}
                      </div>
                      {formik.touched.timeSlot && formik.errors.timeSlot && (
                        <p className="text-red-500 text-sm mt-1">{formik.errors.timeSlot}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Special Instructions (Optional)
                      </label>
                      <textarea
                        name="specialInstructions"
                        rows="3"
                        value={formik.values.specialInstructions}
                        onChange={formik.handleChange}
                        className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                        placeholder="Any special requirements or instructions..."
                      />
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all"
                      >
                        ← Previous
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all"
                      >
                        Next Step →
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Personal Information */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-display font-bold text-gray-800 mb-6">
                      Step 3: Personal Information
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                        />
                        {formik.touched.name && formik.errors.name && (
                          <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formik.values.phone}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                          placeholder="10-digit number"
                        />
                        {formik.touched.phone && formik.errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                      />
                      {formik.touched.email && formik.errors.email && (
                        <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          Gotram (Optional)
                        </label>
                        <input
                          type="text"
                          name="gotram"
                          value={formik.values.gotram}
                          onChange={formik.handleChange}
                          className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          Nakshatra (Optional)
                        </label>
                        <input
                          type="text"
                          name="nakshatra"
                          value={formik.values.nakshatra}
                          onChange={formik.handleChange}
                          className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Number of People *
                      </label>
                      <input
                        type="number"
                        name="numberOfPeople"
                        min="1"
                        value={formik.values.numberOfPeople}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                      />
                      {formik.touched.numberOfPeople && formik.errors.numberOfPeople && (
                        <p className="text-red-500 text-sm mt-1">{formik.errors.numberOfPeople}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Address (Optional - Required for home pooja)
                      </label>
                      <textarea
                        name="address"
                        rows="3"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                        placeholder="Enter your complete address..."
                      />
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all"
                      >
                        ← Previous
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all"
                      >
                        Next Step →
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 4: Payment */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-display font-bold text-gray-800 mb-6">
                      Step 4: Payment Method
                    </h2>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-4">
                        Select Payment Method *
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {paymentMethods.map((method) => (
                          <button
                            key={method.value}
                            type="button"
                            onClick={() => formik.setFieldValue('paymentMethod', method.value)}
                            className={`p-4 rounded-xl border-2 transition-all text-left ${
                              formik.values.paymentMethod === method.value
                                ? 'border-blue-600 bg-blue-50 shadow-lg'
                                : 'border-gray-200 hover:border-blue-300'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <span className="text-2xl">{method.icon}</span>
                              <span className="font-semibold text-gray-800">{method.label}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                      {formik.touched.paymentMethod && formik.errors.paymentMethod && (
                        <p className="text-red-500 text-sm mt-1">{formik.errors.paymentMethod}</p>
                      )}
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all"
                      >
                        ← Previous
                      </button>
                      <button
                        type="submit"
                        className="flex-1 bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-yellow-600 transition-all transform hover:scale-105"
                      >
                        Confirm Booking
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </motion.div>
          </div>

          {/* Booking Summary Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-6 sticky top-4"
            >
              <h3 className="text-xl font-display font-bold text-gray-800 mb-6">
                Booking Summary
              </h3>

              {formik.values.temple ? (
                <div className="space-y-4">
                  <div>
                    <span className="text-gray-600 text-sm">Temple:</span>
                    <p className="text-gray-800 font-semibold">{formik.values.temple}</p>
                  </div>

                  {formik.values.package && (
                    <div>
                      <span className="text-gray-600 text-sm">Package:</span>
                      <p className="text-gray-800 font-semibold">{formik.values.package}</p>
                    </div>
                  )}

                  {formik.values.date && (
                    <div>
                      <span className="text-gray-600 text-sm">Date:</span>
                      <p className="text-gray-800 font-semibold">{formik.values.date}</p>
                    </div>
                  )}

                  {formik.values.timeSlot && (
                    <div>
                      <span className="text-gray-600 text-sm">Time:</span>
                      <p className="text-gray-800 font-semibold capitalize">
                        {formik.values.timeSlot}
                      </p>
                    </div>
                  )}

                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Base Price:</span>
                      <span className="text-gray-800">₹{price.base.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">GST (18%):</span>
                      <span className="text-gray-800">₹{price.gst.toFixed(0)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Service Charge:</span>
                      <span className="text-gray-800">₹{price.serviceCharge}</span>
                    </div>
                    <div className="flex justify-between pt-4 border-t border-gray-200">
                      <span className="text-lg font-bold text-gray-800">Total:</span>
                      <span className="text-lg font-bold text-orange-600">
                        ₹{price.total.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500 text-sm text-center py-8">
                  Complete the form to see summary
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
