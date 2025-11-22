import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const HomePage = () => {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Hero slides - Temple images
  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=1600&q=80",
      title: "Experience Pilgrimage, the Divine Way",
      subtitle: "Explore sacred destinations with spiritual themes, curated stays, and guided devotion"
    },
    {
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600&q=80",
      title: "Sacred Journeys, Divine Experiences",
      subtitle: "Where devotion becomes a beautiful journey of the heart and soul"
    },
    {
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1600&q=80",
      title: "Soulful Retreats for Devotees",
      subtitle: "Thoughtfully curated journeys to India's holiest temples"
    }
  ];

  // Featured Temples with details
  const featuredTemples = [
    {
      id: 1,
      name: "Tirumala Tirupati",
      location: "Andhra Pradesh",
      image: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=800&q=80",
      deity: "Lord Venkateswara",
      history: "One of the richest and most visited temples in the world, attracting millions of devotees annually",
      significance: "Famous for its divine darshan and prasadam"
    },
    {
      id: 2,
      name: "Srisailam",
      location: "Andhra Pradesh",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
      deity: "Lord Shiva",
      history: "Ancient Jyotirlinga temple located in the Nallamala Hills, one of the twelve sacred Jyotirlingas",
      significance: "Also a Shakti Peetha, making it doubly significant"
    },
    {
      id: 3,
      name: "Yadadri",
      location: "Telangana",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
      deity: "Lord Narasimha",
      history: "Recently renovated temple known for its magnificent architecture and spiritual significance",
      significance: "One of the most beautiful modern temple complexes"
    },
    {
      id: 4,
      name: "Kanaka Durga Temple",
      location: "Vijayawada, Andhra Pradesh",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
      deity: "Goddess Kanaka Durga",
      history: "Situated on Indrakeeladri Hill, overlooking the Krishna River",
      significance: "Famous for Navratri celebrations and powerful Devi worship"
    },
    {
      id: 5,
      name: "Annavaram",
      location: "Andhra Pradesh",
      image: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=800&q=80",
      deity: "Lord Satyanarayana",
      history: "Dedicated to Lord Satyanarayana, known for Satyanarayana Vratam",
      significance: "One of the most visited temples in Andhra Pradesh"
    },
    {
      id: 6,
      name: "Rameswaram",
      location: "Tamil Nadu",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
      deity: "Lord Shiva",
      history: "One of the twelve Jyotirlingas and one of the Char Dham pilgrimage sites",
      significance: "Famous for its sacred water tanks and architectural beauty"
    }
  ];

  // Themes Preview
  const themes = [
    {
      id: 1,
      name: "Vedic Theme",
      description: "Nature, pure simplicity, and traditional Vedic ambiance",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
      icon: "🌿",
      color: "from-green-100 to-emerald-50"
    },
    {
      id: 2,
      name: "South Indian Temple Theme",
      description: "Brass, stone, lamps - authentic Dravidian temple experience",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
      icon: "🏛️",
      color: "from-amber-100 to-yellow-50"
    },
    {
      id: 3,
      name: "Himalayan Spiritual Theme",
      description: "Meditation, wood & chill ambiance - mountain spirituality",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
      icon: "⛰️",
      color: "from-blue-100 to-cyan-50"
    },
    {
      id: 4,
      name: "Ayurvedic Wellness Theme",
      description: "Herbs, nature, healing - holistic spiritual wellness",
      image: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=800&q=80",
      icon: "🌿",
      color: "from-orange-100 to-amber-50"
    }
  ];

  // Packages Preview
  const packages = [
    {
      id: 1,
      name: "Rudrabhishekam Pooja",
      price: "₹999",
      originalPrice: "₹1,299",
      description: "Sacred abhishekam performed by temple priests",
      category: "Pooja",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80"
    },
    {
      id: 2,
      name: "VIP Darshan (Tirupati)",
      price: "₹1,499",
      originalPrice: "₹1,999",
      description: "Special entry darshan with prasadam",
      category: "Darshan",
      image: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=800&q=80"
    },
    {
      id: 3,
      name: "Srisailam Trip Package",
      price: "₹1,999",
      originalPrice: "₹2,499",
      description: "Complete 1-day trip with pooja and meals",
      category: "Tour",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80"
    },
    {
      id: 4,
      name: "Navratri Special Package",
      price: "₹2,499",
      originalPrice: "₹3,499",
      description: "9-day Navratri pooja and darshan package",
      category: "Festival",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80"
    }
  ];

  // Why Choose Us
  const whyChooseUs = [
    {
      icon: "🕉️",
      title: "Curated Temple-Based Themes",
      description: "Each stay reflects the authentic spirit of the temple"
    },
    {
      icon: "✨",
      title: "Authentic Spiritual Experiences",
      description: "Genuine rituals and traditions preserved with devotion"
    },
    {
      icon: "🏨",
      title: "Clean & Comfortable Stays",
      description: "Devotional stays with modern amenities and temple ambiance"
    },
    {
      icon: "✅",
      title: "Verified Pooja Services",
      description: "All pooja services performed by certified temple priests"
    },
    {
      icon: "📞",
      title: "24/7 Support",
      description: "Round-the-clock assistance throughout your journey"
    },
    {
      icon: "💰",
      title: "Affordable Pricing",
      description: "Transparent pricing with no hidden charges"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Delhi",
      rating: 5,
      comment: "The Tirupati package was well-organized and peaceful. Every detail was taken care of.",
      avatar: "👨‍💼",
      temple: "Tirupati"
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      comment: "Loved the themed rooms—felt divine and pure. The stay location had complete temple information.",
      avatar: "👩‍💼",
      temple: "Srisailam"
    },
    {
      id: 3,
      name: "Amit Patel",
      location: "Gujarat",
      rating: 5,
      comment: "Booking poojas was super easy! The Rudrabhishekam was performed with such devotion.",
      avatar: "👨‍💻",
      temple: "Kashi Vishwanath"
    },
    {
      id: 4,
      name: "Sunita Reddy",
      location: "Hyderabad",
      rating: 5,
      comment: "Anand Devocation made our pilgrimage truly meaningful. Highly recommended!",
      avatar: "👩‍🏫",
      temple: "Yadadri"
    }
  ];

  // How It Works Steps
  const howItWorks = [
    {
      step: 1,
      title: "Choose a Temple or Package",
      description: "Browse our curated temples and devotional packages",
      icon: "🛕"
    },
    {
      step: 2,
      title: "Select Date & Details",
      description: "Pick your preferred date and fill in your details",
      icon: "📅"
    },
    {
      step: 3,
      title: "Experience Devotion with Peace",
      description: "Enjoy your spiritual journey with complete guidance",
      icon: "🙏"
    }
  ];

  // Auto-rotate hero slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const StarRating = ({ rating }) => {
    return (
      <div className="flex justify-center space-x-1">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`text-lg ${
              index < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-orange-50">
      {/* 1️⃣ Hero Section */}
      <section className="relative h-screen md:h-[90vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHeroSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img
              src={heroSlides[currentHeroSlide].image}
              alt={heroSlides[currentHeroSlide].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex justify-center space-x-4 mb-6">
                <span className="text-3xl">🕉️</span>
                <span className="text-3xl">🔔</span>
                <span className="text-3xl">🏺</span>
                <span className="text-3xl">🪷</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4 md:mb-6">
                {heroSlides[currentHeroSlide].title}
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-yellow-100 mb-8 md:mb-12 font-light">
                {heroSlides[currentHeroSlide].subtitle}
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="flex flex-col md:flex-row gap-3 bg-white/95 backdrop-blur-sm rounded-full p-2 shadow-2xl">
                  <input
                    type="text"
                    placeholder="Search temples or pooja packages..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 px-6 py-4 rounded-full border-none outline-none text-gray-700 text-lg"
                  />
                  <button className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-500 hover:to-yellow-500 transition-all transform hover:scale-105">
                    Search
                  </button>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/temples"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-xl"
                >
                  Explore Temples
                </Link>
                <Link
                  to="/packages"
                  className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-500 hover:to-yellow-500 transition-all transform hover:scale-105 shadow-xl"
                >
                  View Packages
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentHeroSlide
                  ? 'bg-yellow-300 w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>

      {/* 2️⃣ Themes Preview Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-800 mb-4">
              Devotional Themes for Every <span className="text-blue-500">Pilgrimage</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Curated spiritual experiences inspired by the authentic essence of each temple
            </p>
          </motion.div>

          <div className="overflow-x-auto pb-4">
            <div className="flex gap-6 md:gap-8" style={{ minWidth: 'max-content' }}>
              {themes.map((theme, index) => (
                <motion.div
                  key={theme.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="min-w-[280px] md:min-w-[320px] bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className={`relative h-48 bg-gradient-to-br ${theme.color} p-6`}>
                    <div className="text-5xl mb-3">{theme.icon}</div>
                    <h3 className="text-xl font-display font-bold text-gray-800">{theme.name}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{theme.description}</p>
                    <Link
                      to="/themes"
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                      View Theme
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ Featured Temples Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white via-orange-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-800 mb-4">
              Popular Sacred <span className="text-orange-500">Temples</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Discover India's most revered pilgrimage destinations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredTemples.map((temple, index) => (
              <motion.div
                key={temple.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={temple.image}
                    alt={temple.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl md:text-2xl font-display font-bold mb-1">{temple.name}</h3>
                    <p className="text-sm text-yellow-200">{temple.location}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="text-blue-500 font-semibold text-sm">Deity: </span>
                    <span className="text-gray-700">{temple.deity}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{temple.history}</p>
                  <p className="text-gray-500 text-xs italic mb-4">{temple.significance}</p>
                  <Link
                    to={`/temples/${temple.id}`}
                    className="inline-block w-full text-center bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all"
                  >
                    Explore Temple
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4️⃣ Packages Preview Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-100 via-white to-yellow-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-800 mb-4">
              Popular Devotional <span className="text-orange-500">Packages</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our thoughtfully curated spiritual packages
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="relative h-40">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-yellow-300 text-gray-800 px-3 py-1 rounded-full text-xs font-bold">
                    {pkg.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-display font-bold text-gray-800 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{pkg.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400 line-through text-sm">{pkg.originalPrice}</span>
                    <span className="text-orange-500 font-bold text-lg">{pkg.price}</span>
                  </div>
                  <Link
                    to="/packages"
                    className="block w-full text-center bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all text-sm"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/packages"
              className="inline-flex items-center bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-500 hover:to-yellow-500 transition-all"
            >
              View All Packages
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 5️⃣ Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-800 mb-4">
              Why Devotees Love <span className="text-blue-500">Anand Devocation</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the difference of authentic spiritual journeys
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-display font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6️⃣ Reviews/Testimonial Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-orange-50 via-yellow-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-800 mb-4">
              Devotee <span className="text-orange-500">Testimonials</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from devotees who have experienced divine journeys with us
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl"
              >
                <StarRating rating={testimonials[currentTestimonial].rating} />
                <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 text-center leading-relaxed mt-4">
                  "{testimonials[currentTestimonial].comment}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-4xl">{testimonials[currentTestimonial].avatar}</div>
                  <div className="text-center">
                    <div className="font-bold text-gray-800 text-lg">{testimonials[currentTestimonial].name}</div>
                    <div className="text-gray-600">{testimonials[currentTestimonial].location}</div>
                    <div className="text-orange-500 font-semibold text-sm mt-1">
                      Visited: {testimonials[currentTestimonial].temple}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial
                      ? 'bg-orange-400 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7️⃣ How It Works Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-800 mb-4">
              How It <span className="text-blue-500">Works</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to begin your spiritual journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-4xl shadow-lg">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8️⃣ Footer CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Begin Your Devotional Journey Today
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Experience pilgrimage in its truest and most meaningful form
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-2xl"
              >
                Book a Temple Visit
              </Link>
              <Link
                to="/packages"
                className="bg-gradient-to-r from-orange-300 to-yellow-300 text-gray-800 px-8 py-4 rounded-full font-bold text-lg hover:from-orange-400 hover:to-yellow-400 transition-all transform hover:scale-105 shadow-2xl"
              >
                Explore Packages
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;