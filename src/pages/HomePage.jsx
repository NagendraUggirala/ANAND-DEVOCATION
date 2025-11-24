import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaOm, 
  FaBell, 
  FaWineBottle, 
  FaLeaf, 
  FaMonument, 
  FaMountain, 
  FaStar, 
  FaHotel, 
  FaCheckCircle, 
  FaPhone, 
  FaMoneyBillWave, 
  FaMosque, 
  FaCalendar, 
  FaPrayingHands,
  FaQuoteLeft
} from 'react-icons/fa';

const HomePage = () => {
  const navigate = useNavigate();
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Handle search functionality
  const handleSearch = (e) => {
    e?.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to temples page with search query
      navigate(`/temples?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      // If empty, just navigate to temples page
      navigate('/temples');
    }
  };

  // Handle Enter key press in search input
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

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
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Tirumala_090615.jpg",
      deity: "Lord Venkateswara",
      history: "One of the richest and most visited temples in the world, attracting millions of devotees annually",
      significance: "Famous for its divine darshan and prasadam"
    },
    {
      id: 2,
      name: "Srisailam",
      location: "Andhra Pradesh",
      image: "https://www.poojn.in/wp-content/uploads/2025/06/Srisailam-Online-Booking-Made-Easy-Your-2025-Guide-to-Simple-Darshan-Bookings.jpeg.jpg",
      deity: "Lord Shiva",
      history: "Ancient Jyotirlinga temple located in the Nallamala Hills, one of the twelve sacred Jyotirlingas",
      significance: "Also a Shakti Peetha, making it doubly significant"
    },
    {
      id: 3,
      name: "Yadadri",
      location: "Telangana",
      image: "https://www.deccanchronicle.com/h-upload/2024/11/11/1861538-untitleddesign19.webp",
      deity: "Lord Narasimha",
      history: "Recently renovated temple known for its magnificent architecture and spiritual significance",
      significance: "One of the most beautiful modern temple complexes"
    },
    {
      id: 4,
      name: "Kanaka Durga Temple",
      location: "Vijayawada, Andhra Pradesh",
      image: "https://www.poojn.in/wp-content/uploads/2025/02/Kanaka-Durga-Temple-A-Guide-to-Your-Visit.jpeg.jpg",
      deity: "Goddess Kanaka Durga",
      history: "Situated on Indrakeeladri Hill, overlooking the Krishna River",
      significance: "Famous for Navratri celebrations and powerful Devi worship"
    },
    {
      id: 5,
      name: "Annavaram",
      location: "Andhra Pradesh",
      image: "https://travellerkaka.com/wp-content/uploads/2024/09/Untitled-design-48-1024x536.png.webp",
      deity: "Lord Satyanarayana",
      history: "Dedicated to Lord Satyanarayana, known for Satyanarayana Vratam",
      significance: "One of the most visited temples in Andhra Pradesh"
    },
    {
      id: 6,
      name: "Rameswaram",
      location: "Tamil Nadu",
      image: "https://www.daiwikhotels.com/wp-content/uploads/2024/08/Bannerheader-1-1536x998.jpg",
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
      icon: FaLeaf,
      color: "from-green-100 to-emerald-50"
    },
    {
      id: 2,
      name: "South Indian Temple Theme",
      description: "Brass, stone, lamps - authentic Dravidian temple experience",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
      icon: FaMonument,
      color: "from-amber-100 to-yellow-50"
    },
    {
      id: 3,
      name: "Himalayan Spiritual Theme",
      description: "Meditation, wood & chill ambiance - mountain spirituality",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
      icon: FaMountain,
      color: "from-blue-100 to-cyan-50"
    },
    {
      id: 4,
      name: "Ayurvedic Wellness Theme",
      description: "Herbs, nature, healing - holistic spiritual wellness",
      image: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=800&q=80",
      icon: FaLeaf,
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
      image: "https://static.wixstatic.com/media/6642a4_8930a82d27434739a6aeaf5fc2d4e2fe~mv2.jpg/v1/fill/w_740,h_493,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6642a4_8930a82d27434739a6aeaf5fc2d4e2fe~mv2.jpg"
    },
    {
      id: 2,
      name: "VIP Darshan (Tirupati)",
      price: "₹1,499",
      originalPrice: "₹1,999",
      description: "Special entry darshan with prasadam",
      category: "Darshan",
      image: "https://assets.thehansindia.com/h-upload/2020/10/27/1007837-ttd.webp"
    },
    {
      id: 3,
      name: "Srisailam Trip Package",
      price: "₹1,999",
      originalPrice: "₹2,499",
      description: "Complete 1-day trip with pooja and meals",
      category: "Tour",
      image: "https://www.poojn.in/wp-content/uploads/2025/06/Srisailam-Online-Booking-Made-Easy-Your-2025-Guide-to-Simple-Darshan-Bookings.jpeg.jpg"
    },
    {
      id: 4,
      name: "Navratri Special Package",
      price: "₹2,499",
      originalPrice: "₹3,499",
      description: "9-day Navratri pooja and darshan package",
      category: "Festival",
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2022/09/unique-traditions-and-customs-of-navratri-in-india.jpg"
    }
  ];

  // Why Choose Us
  const whyChooseUs = [
    {
      icon: FaOm,
      title: "Curated Temple-Based Themes",
      description: "Each stay reflects the authentic spirit of the temple"
    },
    {
      icon: FaStar,
      title: "Authentic Spiritual Experiences",
      description: "Genuine rituals and traditions preserved with devotion"
    },
    {
      icon: FaHotel,
      title: "Clean & Comfortable Stays",
      description: "Devotional stays with modern amenities and temple ambiance"
    },
    {
      icon: FaCheckCircle,
      title: "Verified Pooja Services",
      description: "All pooja services performed by certified temple priests"
    },
    {
      icon: FaPhone,
      title: "24/7 Support",
      description: "Round-the-clock assistance throughout your journey"
    },
    {
      icon: FaMoneyBillWave,
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
      avatar: "https://i.pravatar.cc/150?img=12",
      temple: "Tirupati"
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      comment: "Loved the themed rooms—felt divine and pure. The stay location had complete temple information.",
      avatar: "https://i.pravatar.cc/150?img=47",
      temple: "Srisailam"
    },
    {
      id: 3,
      name: "Amit Patel",
      location: "Gujarat",
      rating: 5,
      comment: "Booking poojas was super easy! The Rudrabhishekam was performed with such devotion.",
      avatar: "https://i.pravatar.cc/150?img=33",
      temple: "Kashi Vishwanath"
    },
    {
      id: 4,
      name: "Sunita Reddy",
      location: "Hyderabad",
      rating: 5,
      comment: "Anand Devocation made our pilgrimage truly meaningful. Highly recommended!",
      avatar: "https://i.pravatar.cc/150?img=68",
      temple: "Yadadri"
    }
  ];

  // How It Works Steps
  const howItWorks = [
    {
      step: 1,
      title: "Choose a Temple or Package",
      description: "Browse our curated temples and devotional packages",
      icon: FaMosque
    },
    {
      step: 2,
      title: "Select Date & Details",
      description: "Pick your preferred date and fill in your details",
      icon: FaCalendar
    },
    {
      step: 3,
      title: "Experience Devotion with Peace",
      description: "Enjoy your spiritual journey with complete guidance",
      icon: FaPrayingHands
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
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div 
            className="absolute top-1/2 left-1/2 w-full h-full"
            style={{
              transform: 'translate(-50%, -50%) scale(1.2)',
              minWidth: '100%',
              minHeight: '100%',
              width: '177.77777778vh',
              height: '56.25vw'
            }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/t7qYk_HwJQw?autoplay=1&loop=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&playlist=t7qYk_HwJQw&enablejsapi=1&iv_load_policy=3"
              title="Background Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              frameBorder="0"
              style={{
                pointerEvents: 'none'
              }}
            />
          </div>
          {/* Fallback image if video doesn't load */}
          <img
            src="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=1600&q=80"
            alt="Temple background"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: -1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30 z-10" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex justify-center space-x-6 mb-6">
                <FaOm className="text-4xl md:text-5xl text-yellow-300" />
                <FaBell className="text-4xl md:text-5xl text-yellow-300" />
                <FaWineBottle className="text-4xl md:text-5xl text-yellow-300" />
                <FaLeaf className="text-4xl md:text-5xl text-yellow-300" />
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-display font-bold text-white mb-4 md:mb-6 leading-tight">
                Experience Pilgrimage, the Divine Way
              </h1>
              <p className="text-xl md:text-1xl lg:text-1xl text-yellow-100 mb-8 md:mb-12 font-light leading-relaxed px-4">
                Explore sacred destinations with spiritual themes, curated stays, and guided devotion
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8  hidden md:block" >
                <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-3 bg-white/95 backdrop-blur-sm rounded-full p-2 shadow-2xl">
                  <input
                    type="text"
                    placeholder="Search temples or pooja packages..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1 px-6 py-4 rounded-full border-none outline-none text-gray-700 text-lg"
                  />
                  <button 
                    type="submit"
                    className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-500 hover:to-yellow-500 transition-all transform hover:scale-105"
                  >
                    Search
                  </button>
                </form>
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
      </section>

      {/* 2️⃣ Themes Preview Section */}
      <section className="pt-16 md:pt-24 pb-5 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-orange-500 mb-4 leading-tight">
              Devotional Themes for Every <span className="text-blue-500">Pilgrimage</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Curated spiritual experiences inspired by the authentic essence of each temple
            </p>
          </motion.div>

          <div 
            className="overflow-x-auto pb-4 scroll-smooth" 
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <style>{`
              .overflow-x-auto::-webkit-scrollbar {
                display: none;
              }
              .overflow-x-auto {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}</style>
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
                    <div className="mb-3">
                      {React.createElement(theme.icon, { className: "text-5xl md:text-6xl text-gray-700" })}
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-gray-800">{theme.name}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm mb-5 leading-relaxed">{theme.description}</p>
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
      <section className="pt-5 pb-5 md:pb-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-blue-500 mb-4 leading-tight">
              Popular Sacred <span className="text-orange-500">Temples</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover India's most revered pilgrimage destinations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredTemples.map((temple, index) => {
              return (
                <Link to={`/temples/${temple.id}`} key={temple.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  >
                    {/* Image Section */}
                    <div className="relative h-56 md:h-64 overflow-hidden">
                      <img
                        src={temple.image}
                        alt={temple.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    
                    {/* Colored Section with Content */}
                    <div className="text-blue p-5 md:p-6 relative">
                      {/* Orange Strip at Top */}
                      <div className="absolute top-0 left-0 right-0 h-1 "></div>
                      
                      <h3 className="text-xl md:text-2xl font-display font-bold mb-3 text-blue leading-tight">
                        {temple.name}
                      </h3>
                      <p className="text-sm md:text-base mb-5 leading-relaxed text-blue opacity-90">
                        {temple.history.length > 80 ? `${temple.history.substring(0, 80)}...` : temple.history}
                      </p>
                      <div className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm md:text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg inline-block cursor-pointer">
                        Tap to know more
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4️⃣ Packages Preview Section */}
      <section className="py-5 md:py-5 bg-gradient-to-br from-blue-100 via-white to-yellow-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-blue-600 mb-4 leading-tight">
              Popular Devotional <span className="text-orange-500">Packages</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
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
                  <h3 className="text-lg font-display font-bold text-gray-800 mb-3 leading-tight">{pkg.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{pkg.description}</p>
                  <div className="flex items-center justify-between mb-5">
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
      <section className="py-5 md:py-5 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-orange-600 mb-4 leading-tight">
              Why Devotees Love <span className="text-blue-500">Anand Devocation</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
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
                <div className="mb-4">
                  {React.createElement(item.icon, { className: "text-4xl md:text-5xl text-blue-500" })}
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-gray-800 mb-3 leading-tight">{item.title}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6️⃣ Reviews/Testimonial Section */}
      <section className="py-5 md:py-10 bg-gradient-to-b from-orange-50 via-yellow-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-800 mb-4 leading-tight">
              Devotee <span className="text-orange-500">Testimonials</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
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
                <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-8 text-center leading-relaxed mt-6 px-4">
                  "{testimonials[currentTestimonial].comment}"
                </blockquote>
                <div className="flex items-center justify-center space-x-6">
                  <div className="flex-shrink-0">
                    <img
                      src={testimonials[currentTestimonial].avatar}
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-orange-200 shadow-lg"
                    />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-800 text-lg mb-1">{testimonials[currentTestimonial].name}</div>
                    <div className="text-gray-600 mb-1">{testimonials[currentTestimonial].location}</div>
                    <div className="text-orange-500 font-semibold text-sm">
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
      <section className="py-5 md:py-24 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-orange-500 mb-4 leading-tight">
              How It <span className="text-blue-500">Works</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
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
                  <div className="w-20 h-20 md:w-24 md:h-24 mx-auto bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                    {React.createElement(step.icon, { className: "text-3xl md:text-4xl text-white" })}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-gray-800 mb-3 leading-tight">{step.title}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8️⃣ Customer Testimonial Card Section */}
      <section className="py-5 md:py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://www.invoicesimple.com/wp-content/webp-express/webp-images/uploads/2025/04/E1-Featured-Image-Man-at-desk-with-customer-reviews-overlaid_-1200x631.jpg.webp"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://as2.ftcdn.net/jpg/04/97/81/35/1000_F_497813542_mhI42VozemjwmfbU0Dve7h0JN2VPtV7W.jpg"
                alt="Temple and Lotus"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Right Side - Testimonial Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-3 leading-tight">
                  Customer <span className="text-orange-500">Testimonials</span>
                </h2>
                <div className="w-20 h-1 bg-orange-500 mb-3"></div>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-3">
                  Where relationships are built on trust.
                </p>
                <div className="w-20 h-1 bg-orange-500"></div>
              </div>

              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl relative">
                <FaQuoteLeft className="text-6xl md:text-7xl text-orange-500 absolute top-4 left-6 opacity-20" />
                <div className="relative z-10">
                  <p className="text-gray-800 font-semibold text-lg mb-4 leading-relaxed">Dear Anand Devocation,</p>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                    For many years I and my community have enjoyed Anand Devocation's very high standards of efficiency and courtesy in all aspects of travel. I have no hesitation in appreciating and recommending them as a professional service that offers genuinely personal attention.
                  </p>
                  <p className="text-gray-800 font-semibold text-lg mb-2 leading-relaxed">Laurence Freeman OSB</p>
                  <p className="text-orange-500 font-semibold text-sm md:text-base leading-relaxed">
                    WCCM (The World Community for Christian Meditation)
                  </p>
                  <div className="mt-6 flex justify-end">
                    <button className="px-6 py-2 border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-all">
                      READ MORE
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9️⃣ Additional Why Choose Us Cards Section */}
      <section className="py-5 md:py-24 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-orange-500 mb-4 leading-tight">
              Why Choose <span className="text-blue-500">Anand Devocation</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover what makes us the preferred choice for spiritual journeys
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all text-white"
            >
              <div className="mb-4">
                <FaOm className="text-5xl md:text-6xl text-yellow-300" />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold mb-3 leading-tight">Spiritual Excellence</h3>
              <p className="text-blue-100 text-sm md:text-base leading-relaxed">
                Deeply rooted in spiritual traditions, ensuring authentic and meaningful experiences
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all text-white"
            >
              <div className="mb-4">
                <FaStar className="text-5xl md:text-6xl text-yellow-300" />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold mb-3 leading-tight">Premium Quality</h3>
              <p className="text-orange-100 text-sm md:text-base leading-relaxed">
                Curated experiences with attention to every detail for your comfort and satisfaction
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all text-white"
            >
              <div className="mb-4">
                <FaCheckCircle className="text-5xl md:text-6xl text-yellow-300" />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold mb-3 leading-tight">Trusted Service</h3>
              <p className="text-green-100 text-sm md:text-base leading-relaxed">
                Years of experience serving devotees with integrity and dedication
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all text-white"
            >
              <div className="mb-4">
                <FaPrayingHands className="text-5xl md:text-6xl text-yellow-300" />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold mb-3 leading-tight">Devotional Care</h3>
              <p className="text-purple-100 text-sm md:text-base leading-relaxed">
                Personalized care and support throughout your entire spiritual journey
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🔟 Footer CTA Section */}
      <section className="py-5 md:py-24 bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 text-white relative overflow-hidden">
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">
              Begin Your Devotional Journey Today
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
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