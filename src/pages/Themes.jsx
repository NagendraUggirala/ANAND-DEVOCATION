// src/pages/Themes.jsx
import React, { useState, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaOm, 
  FaMountain, 
  FaMonument, 
  FaHeart, 
  FaBook, 
  FaMoneyBillWave, 
  FaLeaf, 
  FaFire, 
  FaEye, 
  FaMosque, 
  FaWater, 
  FaStar, 
  FaFireAlt,
  FaBolt,
  FaDrum,
  FaRing,
  FaMoon,
  FaTempleHindu,
  FaMountain as FaMountainIcon,
  FaUmbrellaBeach,
  FaPrayingHands
} from 'react-icons/fa';

const Themes = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const festivalScrollRef = useRef(null);

  // Deity Themes
  const deityThemes = [
    {
      id: 1,
      title: 'Lord Shiva',
      description: 'Explore temples dedicated to Lord Shiva across India, including the twelve Jyotirlingas',
      image: 'https://t3.ftcdn.net/jpg/15/30/45/52/360_F_1530455267_qa1BaPVGLT1Akqs0KUx7q365kWKBoBd1.jpg',
      icon: FaBolt,
      temples: ['Kashi Vishwanath', 'Somnath', 'Kedarnath', 'Rameshwaram'],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 2,
      title: 'Lord Vishnu',
      description: 'Divine temples of Vishnu & his avatars, including Char Dham and Divya Desams',
      image: 'https://png.pngtree.com/thumb_back/fh260/background/20250909/pngtree-lord-vishnu-resting-on-sheshnag-with-cosmic-background-image_19077337.webp',
      icon: FaOm,
      temples: ['Tirupati Balaji', 'Jagannath Puri', 'Badrinath', 'Ranganathaswamy'],
      color: 'from-purple-500 to-blue-600'
    },
    {
      id: 3,
      title: 'Lord Ganesha',
      description: 'Famous Ganesha temples & rituals for removing obstacles and seeking wisdom',
      image: 'https://apkamart.com/cdn/shop/articles/Lord-Ganesha--The-lord-of-new-beginnings.jpg?v=1586850939&width=1000',
      icon: FaPrayingHands,
      temples: ['Siddhivinayak', 'Ganpatipule', 'Ranthambore', 'Dhodh Ganesh'],
      color: 'from-orange-500 to-yellow-500'
    },
    {
      id: 4,
      title: 'Goddess Durga',
      description: 'Shakti Peethas & Devi temples dedicated to the divine feminine energy',
      image: 'https://akm-img-a-in.tosshub.com/sites/dailyo//story/embed/201803/daag_031918022301.jpg',
      icon: FaOm,
      temples: ['Vaishno Devi', 'Kamakhya', 'Kalighat', 'Meenakshi Amman'],
      color: 'from-pink-500 to-rose-600'
    },
    {
      id: 5,
      title: 'Hanuman',
      description: 'Strength & devotion temples of Hanuman, the symbol of loyalty and courage',
      image: 'https://www.shutterstock.com/shutterstock/photos/2610479149/display_1500/stock-photo-realistic-child-hanuman-is-trying-to-eat-sun-with-open-mouth-2610479149.jpg',
      icon: FaPrayingHands,
      temples: ['Hanuman Garhi', 'Sankat Mochan', 'Mehandipur Balaji', 'Salasar Balaji'],
      color: 'from-orange-600 to-red-600'
    },
    {
      id: 6,
      title: 'Lord Krishna',
      description: 'Temples celebrating the divine love and teachings of Lord Krishna',
      image: 'https://w0.peakpx.com/wallpaper/158/542/HD-wallpaper-jai-shree-krishna-bhagwan-lord-radhe-shree-krishna-shri-krishna.jpg',
      icon: FaDrum,
      temples: ['ISKCON', 'Dwarkadhish', 'Guruvayur', 'Udupi Krishna'],
      color: 'from-blue-400 to-indigo-600'
    },
    {
      id: 7,
      title: 'Goddess Lakshmi',
      description: 'Temples of prosperity and abundance, seeking blessings for wealth',
      image: 'https://as2.ftcdn.net/v2/jpg/16/29/18/95/1000_F_1629189589_1i788BYbrha4MpraxGvCah7SHNKoUWEf.jpg',
      icon: FaMoneyBillWave,
      temples: ['Mahalakshmi', 'Ashtalakshmi', 'Kolhapur Mahalakshmi', 'Sripuram'],
      color: 'from-yellow-400 to-amber-500'
    },
    {
      id: 8,
      title: 'Lord Rama',
      description: 'Temples dedicated to Lord Rama, the embodiment of righteousness',
      image: 'https://www.wallsnapy.com/img_gallery/lord-ram-face-ai-wallpaper-4k-hd-free-download-524315.jpg',
      icon: FaMosque,
      temples: ['Ayodhya Ram Temple', 'Rameshwaram', 'Bhadrachalam', 'Ramanathaswamy'],
      color: 'from-blue-600 to-cyan-600'
    }
  ];

  // Festival Themes
  const festivalThemes = [
    {
      id: 1,
      title: 'Navratri Specials',
      description: 'Special darshan and rituals during the nine nights of Navratri',
      image: 'https://as1.ftcdn.net/v2/jpg/06/54/17/10/1000_F_654171090_swvbvZlsvgzPnsQtDsETqVSmhtwMEKx3.jpg',
      icon: FaOm,
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 2,
      title: 'Diwali Darshan',
      description: 'Celebrate the festival of lights with special temple visits',
      image: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=800',
      icon: FaFire,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 3,
      title: 'Shivaratri Special',
      description: 'Night-long worship and special abhishekam at Shiva temples',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      icon: FaBolt,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 4,
      title: 'Ganesh Chaturthi',
      description: 'Celebrate the birth of Lord Ganesha with grand festivities',
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800',
      icon: FaPrayingHands,
      color: 'from-orange-500 to-yellow-500'
    },
    {
      id: 5,
      title: 'Karthika Masam',
      description: 'Sacred month dedicated to Lord Shiva with special rituals',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      icon: FaMoon,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 6,
      title: 'Vaikunta Ekadasi',
      description: 'Special darshan and rituals on this auspicious day',
      image: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=800',
      icon: FaOm,
      color: 'from-blue-600 to-cyan-600'
    }
  ];

  // Purpose-Based Themes
  const purposeThemes = [
    {
      id: 1,
      title: 'Health & Well-being',
      description: 'Temples believed to improve health and provide healing blessings',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800',
      icon: FaLeaf,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 2,
      title: 'Marriage & Love',
      description: 'Temples famous for marriage blessings and relationship harmony',
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800',
      icon: FaHeart,
      color: 'from-pink-500 to-rose-600'
    },
    {
      id: 3,
      title: 'Career & Education',
      description: 'Seek blessings for professional growth and academic success',
      image: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=800',
      icon: FaBook,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 4,
      title: 'Financial Stability',
      description: 'Temples connected with prosperity and financial abundance',
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800',
      icon: FaMoneyBillWave,
      color: 'from-yellow-500 to-amber-600'
    },
    {
      id: 5,
      title: 'Peace & Positivity',
      description: 'Mind calming spiritual places for inner peace and tranquility',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800',
      icon: FaPrayingHands,
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  // Ritual/Pooja Themes
  const ritualThemes = [
    {
      id: 1,
      title: 'Rudrabhishekam',
      description: 'Sacred abhishekam to Lord Shiva for peace and prosperity',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      icon: FaBolt,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 2,
      title: 'Kalyanam Seva',
      description: 'Divine marriage ceremony of deities performed with devotion',
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800',
      icon: FaRing,
      color: 'from-pink-500 to-rose-600'
    },
    {
      id: 3,
      title: 'Archana / Abhishekam',
      description: 'Personalized prayers and sacred bathing rituals',
      image: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=800',
      icon: FaFire,
      color: 'from-orange-500 to-yellow-500'
    },
    {
      id: 4,
      title: 'Special Darshan',
      description: 'Exclusive darshan opportunities at famous temples',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800',
      icon: FaEye,
      color: 'from-purple-500 to-indigo-600'
    },
    {
      id: 5,
      title: 'Homam / Yagams',
      description: 'Sacred fire rituals for specific purposes and blessings',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      icon: FaFireAlt,
      color: 'from-red-500 to-orange-600'
    }
  ];

  // Location Themes
  const locationThemes = [
    {
      id: 1,
      title: 'South India Temples',
      description: 'Explore the magnificent Dravidian architecture and spiritual heritage',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEihbY9q-92gOtuDP2qYFMCbT7wYHHnJ3-9TzD3EhEijtP5-6Fap5sOloTRQ1C4ylQZMua5xHQGo3ot__66OEBkU1VaRoRWR1yFcV2oacUqDY6rV7erqvhNl9wzE46Islw4Q_IrdUApELCfvRA9vuUjO6y8gUH4_fotEzrizuBuiSIb60VO_ze4GvsD2dU5J/w640-h400-rw/IndianTemplesList%20Blog%20HD%20Image.webp',
      icon: FaMonument,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 2,
      title: 'North India Temples',
      description: 'Discover the ancient temples of the northern regions',
      image: 'https://www.bespokeindiaholidays.com/wp-content/uploads/2013/05/North-India-Tours.gif',
      icon: FaMountain,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 3,
      title: 'Hill Temples',
      description: 'Sacred abodes in the mountains - Tirumala, Sabarimala, Vaishno Devi',
      image: 'https://www.ramadakatra.com/blog/admin/assets/img/post/image_2025-07-18-11-33-50_687a311ead86e.jpg',
      icon: FaMountainIcon,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 4,
      title: 'River Temples',
      description: 'Temples on the banks of sacred rivers - Ganga, Yamuna, Godavari',
      image: 'https://blog.zenithholidays.com/wp-content/uploads/2024/11/A-glimpse-into-nature_s-lifeline-explore-the-rivers-of-India.jpg.webp',
      icon: FaWater,
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  // Trending Themes
  const trendingThemes = [
    {
      id: 1,
      title: 'Most Visited Temples',
      description: 'Top pilgrimage destinations visited by millions',
      image: 'https://www.indiapilgrimtours.com/articles/wp-content/uploads/2018/09/Sree-Padmanabhaswamy-Temple-1.jpg',
      visits: '10M+',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 2,
      title: 'Highly Rated Temples',
      description: 'Temples with highest devotee ratings and reviews',
      image: 'https://www.tripsavvy.com/thmb/3Nr1GxKOrB4NvBsAm5rRTbV4QEc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-140824086-58dd02593df78c5162898c0a.jpg',
      rating: '4.9/5',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 3,
      title: 'Viral This Week',
      description: 'Temples trending on social media this week',
      image: 'https://c.ndtvimg.com/2024-01/cttj2n2_ram-temple-mandir_625x300_22_January_24.jpeg?downsize=773:435',
      trend: 'Trending',
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 4,
      title: 'Top 10 This Month',
      description: 'Most popular temples this month',
      image: 'https://lp-cms-production.imgix.net/2025-04/Shutterstock374175955.jpg?auto=format,compress&q=72&w=1024&h=810&fit=crop',
      rank: '#1',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  // Combine all themes for filtering
  const allThemes = [
    ...deityThemes.map(t => ({ ...t, type: 'deity' })),
    ...festivalThemes.map(t => ({ ...t, type: 'festival' })),
    ...purposeThemes.map(t => ({ ...t, type: 'purpose' })),
    ...ritualThemes.map(t => ({ ...t, type: 'ritual' })),
    ...locationThemes.map(t => ({ ...t, type: 'location' })),
    ...trendingThemes.map(t => ({ ...t, type: 'trending' }))
  ];

  // Filter logic
  const filteredThemes = useMemo(() => {
    return allThemes.filter(theme => {
      const matchesSearch = theme.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           theme.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = filterType === 'all' || theme.type === filterType;
      return matchesSearch && matchesType;
    });
  }, [searchQuery, filterType]);

  const filterTypes = [
    { value: 'all', label: 'All Themes' },
    { value: 'deity', label: 'Deity' },
    { value: 'festival', label: 'Festival' },
    { value: 'purpose', label: 'Purpose' },
    { value: 'ritual', label: 'Ritual' },
    { value: 'location', label: 'Location' },
    { value: 'trending', label: 'Trending' }
  ];

  const ThemeCard = ({ theme, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img
          src={theme.image}
          alt={theme.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${theme.color} opacity-80`} />
        <div className="absolute inset-0 bg-black/20" />
        {theme.icon && (
          <div className="absolute top-4 left-4">
            {React.createElement(theme.icon, { className: "text-4xl md:text-5xl text-white" })}
          </div>
        )}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-xl md:text-2xl font-display font-bold mb-1">
            {theme.title}
          </h3>
        </div>
      </div>
      <div className="p-4 md:p-6">
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {theme.description}
        </p>
        {theme.temples && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {theme.temples.slice(0, 3).map((temple, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold"
                >
                  {temple}
                </span>
              ))}
            </div>
          </div>
        )}
        <Link
          to="/temples"
          className="inline-block w-full text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105"
        >
          Explore →
        </Link>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-orange-50">
      {/* 1️⃣ Hero Banner */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-black/40 bg-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              Explore Your Devotional Journey by <span className="text-yellow-400">Special Poojas</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mt-2">
              Discover temples, rituals, and spiritual experiences tailored to your needs and interests
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-6 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search for Special Poojas... (E.g., Shiva, Marriage, Navratri)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border-2 border-blue-200 p-4 pl-12 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none text-gray-700"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {filterTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setFilterType(type.value)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                    filterType === type.value
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2️⃣ Deity Themes Grid */}
      <section className="py-12 md:py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=1920')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">
              Deity <span className="text-blue-600">Special Poojas</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore temples dedicated to different gods and goddesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {deityThemes.map((theme, index) => (
              <ThemeCard key={theme.id} theme={theme} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ Festival Themes Slider */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">
              Festival <span className="text-orange-600">Divisions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Special Poojas based on festivals and auspicious occasions
            </p>
          </motion.div>

          <div className="relative">
            {/* Left Scroll Button */}
            <button
              onClick={() => {
                if (festivalScrollRef.current) {
                  festivalScrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
                }
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-orange-50 transition-all hover:scale-110 border-2 border-orange-200"
              aria-label="Scroll left"
            >
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Scroll Button */}
            <button
              onClick={() => {
                if (festivalScrollRef.current) {
                  festivalScrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
                }
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-orange-50 transition-all hover:scale-110 border-2 border-orange-200"
              aria-label="Scroll right"
            >
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Scrollable Container */}
            <div 
              ref={festivalScrollRef}
              className="overflow-x-auto scroll-smooth scrollbar-hide px-12"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
                .scrollbar-hide {
                  -ms-overflow-style: none;
                  scrollbar-width: none;
                }
              `}</style>
              <div className="flex gap-4 md:gap-6" style={{ minWidth: 'max-content' }}>
                {festivalThemes.map((theme, index) => (
                  <motion.div
                    key={theme.id}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="min-w-[280px] md:min-w-[320px] bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                  >
                    <div className={`relative h-40 bg-gradient-to-br ${theme.color} p-6 text-white`}>
                      <div className="mb-2">
                        {React.createElement(theme.icon, { className: "text-4xl text-white" })}
                      </div>
                      <h3 className="text-xl font-display font-bold">{theme.title}</h3>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-600 text-sm mb-4">{theme.description}</p>
                      <Link
                        to="/temples"
                        className="inline-block w-full text-center bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-yellow-600 transition-all"
                      >
                        Explore →
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ Purpose-Based Themes */}
      <section className="py-12 md:py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1920')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">
              Purpose-Based <span className="text-blue-600">Themes</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find temples based on your life goals and aspirations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {purposeThemes.map((theme, index) => (
              <motion.div
                key={theme.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className={`bg-gradient-to-br ${theme.color} p-8 text-white text-center`}>
                  <div className="mb-4 flex justify-center">
                    {React.createElement(theme.icon, { className: "text-5xl text-white" })}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2">{theme.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{theme.description}</p>
                  <Link
                    to="/temples"
                    className="inline-block w-full text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all"
                  >
                    Explore →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ Ritual/Pooja Themes */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50 to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">
              Ritual & <span className="text-orange-600">Special Poojas</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore temples offering specific rituals and pooja services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {ritualThemes.map((theme, index) => (
              <motion.div
                key={theme.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all text-center"
              >
                <div className={`bg-gradient-to-br ${theme.color} p-6 text-white`}>
                  <div className="mb-2 flex justify-center">
                    {React.createElement(theme.icon, { className: "text-4xl text-white" })}
                  </div>
                  <h3 className="text-lg font-display font-bold">{theme.title}</h3>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-xs mb-3">{theme.description}</p>
                  <Link
                    to="/temples"
                    className="text-blue-600 font-semibold text-sm hover:text-blue-700"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6️⃣ Location Themes */}
      <section className="py-12 md:py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">
              Location <span className="text-blue-600">Themes</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore temples by region and geographical features
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {locationThemes.map((theme, index) => (
              <ThemeCard key={theme.id} theme={theme} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 7️⃣ Trending Themes */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=1920')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">
              Trending <span className="text-orange-600">Themes</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Most popular and trending themes this week
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {trendingThemes.map((theme, index) => (
              <motion.div
                key={theme.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all relative"
              >
                <div className="relative h-48">
                  <img
                    src={theme.image}
                    alt={theme.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${theme.color} opacity-80`} />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    {theme.visits && <span className="text-sm font-bold text-gray-800">{theme.visits}</span>}
                    {theme.rating && <span className="text-sm font-bold text-gray-800">{theme.rating}</span>}
                    {theme.trend && (
                      <>
                        <FaFireAlt className="text-orange-600" />
                        <span className="text-sm font-bold text-orange-600">{theme.trend}</span>
                      </>
                    )}
                    {theme.rank && <span className="text-sm font-bold text-purple-600">{theme.rank}</span>}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-gray-800 mb-2">{theme.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{theme.description}</p>
                  <Link
                    to="/temples"
                    className="inline-block w-full text-center bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-yellow-600 transition-all"
                  >
                    Explore →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Begin Your Spiritual Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Explore our curated packages and start your divine pilgrimage
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              <Link
                to="/book"
                className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-2xl"
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

export default Themes;
