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
  FaGopuram,
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
      image: "https://www.poojn.in/wp-content/uploads/2025/09/Temple-Architectures-of-India-Sacred-Designs-Divine-Symbolism-Explored.jpeg.jpg",
      title: "Experience Pilgrimage, the Divine Way",
      subtitle: "Explore sacred destinations with spiritual themes, curated stays, and guided devotion"
    },
    {
      image: "https://hinduvism.com/wp-content/uploads/2025/04/Mandir-Design-Elements-Exploring-Garbhagriha-Shikhara-Sacred-Architecture-in-Hindu-Temples.jpg",
      title: "Sacred Journeys, Divine Experiences",
      subtitle: "Where devotion becomes a beautiful journey of the heart and soul"
    },
    {
    image: "https://static.vecteezy.com/system/resources/previews/059/581/222/non_2x/stunning-marble-carvings-of-ranakpur-jain-temple-shining-in-golden-sunset-light-photo.jpg",
    title: "Walk the Path of Devotion",
    subtitle: "Ancient temples, sacred rituals, and divine serenity"
  }
  ];

  // Featured Temples with details
  const featuredTemples = [
    {
      id: 1,
      name: "Tirumala Tirupati",
      location: "Andhra Pradesh",
      image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTDSlIFONevEMRAsuR8nKaRYTSSul3kKKIYx_kB0aFFQEaJtGZknUDs9vdlCPDE7fH0AyDX_isC3ubGovaOk5gNIB8&s=19",
      deity: "Lord Venkateswara",
      history: "One of the richest and most visited temples in the world, attracting millions of devotees annually",
      significance: "Famous for its divine darshan and prasadam"
    },
    {
      id: 2,
      name: "Kashi Vishwanath",
      location: 'Varanasi, Uttar Pradesh',
      image: "https://d26dp53kz39178.cloudfront.net/media/uploads/Travel_Guide_Images/Kashi_Vishwanath_Temple_1-1750491872856.webp",
      deity: "Lord Shiva",
      history: 'The Kashi Vishwanath Temple is one of the most famous Hindu temples dedicated to Lord Shiva. It is located in Vishwanath Gali, near Varanasi, the oldest living city in the world. The temple stands on the western bank of the holy river Ganga, and is one of the twelve Jyotirlingas, the holiest of Shiva temples.',
      significance: "Also a Shakti Peetha, making it doubly significant"
    },
    {
      id: 3,
      name: 'Meenakshi Amman',
      location: 'Madurai, Tamil Nadu',
      deity: 'Goddess Meenakshi',
      image: 'https://www.billiontrips.com/sites/default/files/2019-07/meenakshi-temple-banner.jpg',
      history: 'The Meenakshi Amman Temple is a historic Hindu temple located on the southern bank of the Vaigai River in the temple city of Madurai, Tamil Nadu, India. It is dedicated to Meenakshi, a form of Parvati, and her consort, Sundareshwarar, a form of Shiva. The temple was originally built by the Pandyan dynasty in the 6th century CE.',
      significance: "One of the most beautiful modern temple complexes"
    },
    {
      id: 4,
      name: 'Jagannath Puri',
      location: 'Puri, Odisha',
      deity: 'Lord Jagannath',
      image: 'https://www.templedairy.in/wp-content/uploads/2020/11/Jagannath-Temple-banner.png',
      history: 'The Jagannath Temple is an important Hindu temple dedicated to Jagannath, a form of Vishnu, in Puri in the state of Odisha on the eastern coast of India. The present temple was rebuilt from the 10th century onwards, on the site of an earlier temple, and begun by Anantavarman Chodaganga Deva, the first king of the Eastern Ganga dynasty.',
      significance: "Famous for Navratri celebrations and powerful Devi worship"
    },
    {
      id: 5,
      name: 'Somnath Temple',
      location: 'Gujarat',
      deity: 'Lord Shiva',
      image: 'https://pravase.co.in/admin_pravase/uploads/yatradham/Sonath%20Temple_1558702865.JPG',
      history: 'The Somnath temple, also called Somanātha temple or Deo Patan, is located in Prabhas Patan, Veraval in Gujarat, India. It is one of the most sacred pilgrimage sites for Hindus and is believed to be first among the twelve Jyotirlinga shrines of Shiva.',
      significance: "One of the most visited temples in Andhra Pradesh"
    },
    {
      id: 6,
      name: 'Vaishno Devi',
      location: 'Jammu & Kashmir',
      deity: 'Goddess Vaishno Devi',
      image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202110/Grand_Decorations_during_Navra_0_1200x768.jpeg?size=690:388',
      history: 'Vaishno Devi, also known as Mata Rani, Trikuta, Ambe and Vaishnavi, is a manifestation of the Hindu Mother Goddess, Devi. The words "Maa" and "Mata" are commonly used in India for mother, and thus are often heavily used in connection with Vaishno Devi.',
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
      icon: FaGopuram,
      title: "Temple-Centric Journeys",
      description: "Every journey revolves around the temple, its rituals, and spiritual significance"
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
            className={`text-lg ${index < rating ? 'text-yellow-400' : 'text-gray-300'
              }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-500 via-white to-orange-500">
      {/* 1️⃣ Hero Section */}
      <section className="relative h-screen md:h-[90vh] overflow-hidden">

        {/* 🔁 Hero Background Carousel */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentHeroSlide}
              src={heroSlides[currentHeroSlide].image}
              alt="Devotional background"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </AnimatePresence>

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30 z-10" />
        </div>

        {/* 🌟 Hero Content */}
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Icons */}
              <div className="flex justify-center space-x-6 mb-6">
                <FaOm className="text-4xl md:text-5xl text-yellow-300" />
                <FaBell className="text-4xl md:text-5xl text-yellow-300" />
                <FaWineBottle className="text-4xl md:text-5xl text-yellow-300" />
                <FaLeaf className="text-4xl md:text-5xl text-yellow-300" />
              </div>

              {/* Dynamic Text */}
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-display font-bold text-white mb-4 md:mb-6 leading-tight">
                {heroSlides[currentHeroSlide].title}
              </h1>

              <p className="text-lg md:text-xl text-yellow-100 mb-10 max-w-3xl mx-auto leading-relaxed px-4">
                {heroSlides[currentHeroSlide].subtitle}
              </p>

              {/* CTA */}
              <div className="flex justify-center">
                <Link
                  to="/temples"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition shadow-xl"
                >
                  Explore Temples
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 🔘 Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroSlide(index)}
              className={`h-2 rounded-full transition-all ${index === currentHeroSlide
                  ? "w-8 bg-yellow-400"
                  : "w-2 bg-white/50"
                }`}
            />
          ))}
        </div>
      </section>


      {/* Introduction Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-12"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-blue-500 mb-4 leading-tight">
                Welcome to  <span className="text-orange-500">Anand Devocation</span>
              </h2>
              <div className="w-16 md:w-20 h-1 mx-auto mb-4 md:mb-6 bg-blue-800 rounded"></div>
              <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed px-2">
                Anand Devocation is created for devotees who wish to experience pilgrimage in
                its purest and most meaningful form. We curate spiritually enriched journeys to
                sacred destinations, offering complete guidance, knowledge, and support so
                devotees can explore holy places with confidence, comfort, and peace of mind.
                Each pilgrimage is thoughtfully designed to reflect the authentic essence of the
                temple its history, rituals, traditions, and cultural significance. We also craft
                thematic experiences that help devotees deeply connect with the divine
                atmosphere.
                At our stay locations, devotees will find complete information about the temple,
                along with natural, culturally inspired amenities that allow them to experience the
                true spirit and ambiance of the region. This creates a serene environment that
                enhances devotion and inner peace
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="px-2"
              >
                <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-3 md:mb-4">Our Mission</h3>
                <p className="text-gray-700 mb-3 md:mb-4 leading-relaxed text-sm md:text-base">
                  "Satyam Shivam Sundaram" – Our mission is to make pilgrimage a transformative spiritual experience.
                  We guide devotees with compassion, knowledge, and support, ensuring that every journey nurtures faith,
                  clarity, and inner peace.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  By creating thoughtfully designed itineraries, thematic experiences, and serene accommodations,
                  we aim to immerse devotees in the sacred essence of each temple, fostering devotion, cultural
                  understanding, and a harmonious connection with the divine.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-4 md:p-6 rounded-xl shadow-lg mx-2"
              >
                <h4 className="text-lg md:text-xl font-semibold text-blue-800 mb-3 md:mb-4">What We Do</h4>
                <ul className="space-y-2 md:space-y-3">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2 md:mr-3 mt-1 text-sm">•</span>
                    <span className="text-gray-700 text-sm md:text-base">Curate spiritually enriching journeys to sacred temples and pilgrimage sites</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2 md:mr-3 mt-1 text-sm">•</span>
                    <span className="text-gray-700 text-sm md:text-base">Offer thematic experiences to deeply connect with rituals, traditions, and divine ambiance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2 md:mr-3 mt-1 text-sm">•</span>
                    <span className="text-gray-700 text-sm md:text-base">Provide guidance, support, and knowledge for a peaceful and confident pilgrimage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2 md:mr-3 mt-1 text-sm">•</span>
                    <span className="text-gray-700 text-sm md:text-base">Offer culturally inspired accommodations and serene environments to enhance devotion and inner peace</span>
                  </li>
                </ul>
              </motion.div>
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
              const handleImageError = (e) => {
                // Fallback to a generic temple image from Unsplash
                e.target.src = 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=800&q=80';
              };

              return (
                <Link
                  to={`/temples/${temple.id}`}
                  key={temple.id}
                  state={{ from: '/', fromName: 'Home' }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  >
                    {/* Image Section */}
                    <div className="relative h-56 md:h-64 overflow-hidden bg-gray-200">
                      <img
                        src={temple.image}
                        alt={temple.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        onError={handleImageError}
                        loading="lazy"
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-blue-500 mb-4 leading-tight">
              Spiritual  <span className="text-orange-500">Tone</span>
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
                  className={`w-3 h-3 rounded-full transition-all ${index === currentTestimonial
                    ? 'bg-orange-400 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                />
              ))}
            </div>
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
              Experience pilgrimage in its trust and most meaningful form
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-2xl"
              >
                Book a Temple Visit
              </Link>

            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;