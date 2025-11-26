import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaOm, 
  FaHeart, 
  FaRegHeart, 
  FaStar, 
  FaFire, 
  FaLeaf, 
  FaPrayingHands, 
  FaBook 
} from 'react-icons/fa';

const TemplesList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [regionFilter, setRegionFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [popularityFilter, setPopularityFilter] = useState('all');
  const [wishlist, setWishlist] = useState([]);

  // Update search query when URL param changes
  useEffect(() => {
    const searchParam = searchParams.get('search');
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [searchParams]);

  const temples = [
    {
      id: 1,
      name: 'Tirupati Balaji',
      location: 'Andhra Pradesh',
      deity: 'Lord Venkateswara',
      image: 'https://indiathrills.com/wp-content/uploads/2025/06/Tirupati-Balaji-Temple-history-location-timings-how-to-reach.webp',
      category: 'vishnu',
      region: 'south',
      type: 'divya-desam',
      popularity: 'most-visited',
      rating: 4.9,
      reviews: 1250,
      description: 'One of the richest and most visited temples in the world, dedicated to Lord Venkateswara. Millions of devotees visit annually seeking divine blessings.',
      significance: 'One of the richest and most visited temples in the world'
    },
    {
      id: 2,
      name: 'Kashi Vishwanath',
      location: 'Varanasi, Uttar Pradesh',
      deity: 'Lord Shiva',
      image: 'https://sanatansiddhi.com/wp-content/uploads/2024/09/A-majestic-view-of-Kashi-Vishwanath-Temple-in-Varanasi-1-1024x585.webp',
      category: 'shiva',
      region: 'north',
      type: 'jyotirlinga',
      popularity: 'most-visited',
      rating: 4.8,
      reviews: 980,
      description: 'One of the twelve Jyotirlingas, the holiest Shiva temples. Located on the banks of the Ganges, it is one of the most sacred pilgrimage sites.',
      significance: 'One of the twelve Jyotirlingas, the holiest Shiva temples'
    },
    {
      id: 3,
      name: 'Meenakshi Amman',
      location: 'Madurai, Tamil Nadu',
      deity: 'Goddess Meenakshi',
      image: 'https://www.poojn.in/wp-content/uploads/2025/03/Meenakshi-Amman-Temple-FAQs-Essential-Visitor-Information.jpeg.jpg',
      category: 'devi',
      region: 'south',
      type: 'shakti-peetha',
      popularity: 'trending',
      rating: 4.7,
      reviews: 750,
      description: 'Ancient temple dedicated to Goddess Meenakshi and Lord Sundareswarar. Known for its magnificent architecture and spiritual significance.',
      significance: 'Ancient temple dedicated to Goddess Meenakshi and Lord Sundareswarar'
    },
    {
      id: 4,
      name: 'Jagannath Puri',
      location: 'Puri, Odisha',
      deity: 'Lord Jagannath',
      image: 'https://sp-ao.shortpixel.ai/client/q_glossy+w_720+to_auto+ret_img/thegreenfortune.com/wp-content/uploads/2025/09/Jagarnaath-ji-mandir.jpeg',
      category: 'vishnu',
      region: 'east',
      type: 'char-dham',
      popularity: 'most-visited',
      rating: 4.8,
      reviews: 1100,
      description: 'One of the Char Dham pilgrimage sites. Famous for the annual Rath Yatra festival attracting millions of devotees.',
      significance: 'One of the Char Dham pilgrimage sites'
    },
    {
      id: 5,
      name: 'Somnath Temple',
      location: 'Gujarat',
      deity: 'Lord Shiva',
      image: 'https://c9admin.cottage9.com/uploads/5839/somnath-temple.jpg',
      category: 'shiva',
      region: 'west',
      type: 'jyotirlinga',
      popularity: 'trending',
      rating: 4.6,
      reviews: 650,
      description: 'First among the twelve Jyotirlingas. Located on the western coast, it holds immense historical and spiritual importance.',
      significance: 'First among the twelve Jyotirlingas'
    },
    {
      id: 6,
      name: 'Vaishno Devi',
      location: 'Jammu & Kashmir',
      deity: 'Goddess Vaishno Devi',
      image: 'https://substackcdn.com/image/fetch/$s_!nMlI!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8b7931c1-b550-44b2-935e-80be13f08f29_826x508.jpeg',
      category: 'devi',
      region: 'north',
      type: 'shakti-peetha',
      popularity: 'most-visited',
      rating: 4.9,
      reviews: 1400,
      description: 'Sacred cave shrine of the Mother Goddess located in the Trikuta Mountains. One of the most visited pilgrimage sites in India.',
      significance: 'Sacred cave shrine of the Mother Goddess'
    },
    {
      id: 7,
      name: 'Rameshwaram',
      location: 'Tamil Nadu',
      deity: 'Lord Shiva',
      image: 'https://sugamdarshan.com/Upload/Rameshwaram%20(Header)%2001.png',
      category: 'shiva',
      region: 'south',
      type: 'jyotirlinga',
      popularity: 'trending',
      rating: 4.7,
      reviews: 820,
      description: 'One of the twelve Jyotirlingas and one of the Char Dham. Famous for its sacred water tanks and architectural beauty.',
      significance: 'One of the twelve Jyotirlingas and Char Dham'
    },
    {
      id: 8,
      name: 'Kedarnath',
      location: 'Uttarakhand',
      deity: 'Lord Shiva',
      image: 'https://www.poojn.in/wp-content/uploads/2025/03/Experiencing-the-Divine-A-Spiritual-Journey-to-Kedarnath-Your-Guide-to-Kedarnath.jpeg.jpg',
      category: 'shiva',
      region: 'north',
      type: 'jyotirlinga',
      popularity: 'most-visited',
      rating: 4.8,
      reviews: 950,
      description: 'One of the twelve Jyotirlingas located in the Himalayas. Part of the Char Dham Yatra, accessible through a challenging trek.',
      significance: 'One of the twelve Jyotirlingas in the Himalayas'
    },
    {
      id: 9,
      name: 'Srisailam',
      location: 'Andhra Pradesh',
      deity: 'Lord Shiva',
      image: 'https://holaciti.com/assets/Articles/1756780765_unGIE8KKaY.webp',
      category: 'shiva',
      region: 'south',
      type: 'jyotirlinga',
      popularity: 'trending',
      rating: 4.5,
      reviews: 580,
      description: 'One of the twelve Jyotirlingas and also a Shakti Peetha. Located in the Nallamala Hills, it is a significant pilgrimage destination.',
      significance: 'One of the twelve Jyotirlingas and Shakti Peetha'
    }
  ];

  const regions = [
    { value: 'all', label: 'All Regions' },
    { value: 'south', label: 'South India' },
    { value: 'north', label: 'North India' },
    { value: 'west', label: 'West India' },
    { value: 'east', label: 'East India' },
    { value: 'central', label: 'Central India' }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'jyotirlinga', label: 'Jyotirlinga' },
    { value: 'shakti-peetha', label: 'Shakti Peetha' },
    { value: 'divya-desam', label: 'Divya Desam' },
    { value: 'char-dham', label: 'Char Dham' },
    { value: 'pancharama', label: 'Pancharama Temples' }
  ];

  const popularityOptions = [
    { value: 'all', label: 'All' },
    { value: 'most-visited', label: 'Most Visited' },
    { value: 'trending', label: 'Trending' },
    { value: 'newly-added', label: 'Newly Added' }
  ];

  // Filter logic
  const filteredTemples = useMemo(() => {
    return temples.filter(temple => {
      const matchesSearch = temple.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           temple.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           temple.deity.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesRegion = regionFilter === 'all' || temple.region === regionFilter;
      const matchesCategory = categoryFilter === 'all' || temple.type === categoryFilter;
      const matchesPopularity = popularityFilter === 'all' || temple.popularity === popularityFilter;

      return matchesSearch && matchesRegion && matchesCategory && matchesPopularity;
    });
  }, [searchQuery, regionFilter, categoryFilter, popularityFilter]);

  const toggleWishlist = (templeId) => {
    setWishlist(prev => 
      prev.includes(templeId) 
        ? prev.filter(id => id !== templeId)
        : [...prev, templeId]
    );
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`text-sm ${
              index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            ★
          </span>
        ))}
        <span className="text-xs text-gray-600 ml-1">({rating})</span>
      </div>
    );
  };

  const popularTemples = temples.filter(t => t.popularity === 'most-visited').slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1️⃣ Page Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-black/40 bg-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              Explore Sacred <span className="text-yellow-400">Temples</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mt-2 max-w-2xl mx-auto">
              Discover divine destinations and their spiritual significance. Find the true essence of devotion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2️⃣ Search Bar Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search temple by name, location, or deity..."
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
          </div>
        </div>
      </section>

      {/* 3️⃣ Filter Section */}
      <section className="py-6 bg-gray-100">
        <div className="container mx-auto px-4">
          {/* Region Filter */}
          <div className="mb-4">
            
            <div className="flex flex-wrap justify-center gap-3">
            
              {regions.map((region) => (
                <button
                  key={region.value}
                  type="button"
                  onClick={() => setRegionFilter(region.value)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
                    regionFilter === region.value
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-blue-700 hover:bg-blue-100 border border-blue-200'
                  }`}
                >
                  {region.label}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-4">
            
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.value}
                  type="button"
                  onClick={() => setCategoryFilter(category.value)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
                    categoryFilter === category.value
                      ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                      : 'bg-white text-orange-700 hover:bg-orange-100 border border-orange-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Popularity Filter */}
          <div>
          
            <div className="flex flex-wrap justify-center gap-3">
              {popularityOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setPopularityFilter(option.value)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
                    popularityFilter === option.value
                      ? 'bg-yellow-500 text-white shadow-lg transform scale-105'
                      : 'bg-white text-yellow-700 hover:bg-yellow-100 border border-yellow-200'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ Temples Grid Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-800">
              {filteredTemples.length} {filteredTemples.length === 1 ? 'Temple' : 'Temples'} Found
            </h2>
            {(searchQuery || regionFilter !== 'all' || categoryFilter !== 'all' || popularityFilter !== 'all') && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setRegionFilter('all');
                  setCategoryFilter('all');
                  setPopularityFilter('all');
                }}
                className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
              >
                Clear All Filters
              </button>
            )}
          </div>

          {filteredTemples.length === 0 ? (
            <div className="text-center py-16">
              <FaOm className="text-6xl mb-4 text-gray-400 mx-auto" />
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No Temples Found</h3>
              <p className="text-gray-500">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredTemples.map((temple, index) => (
                <motion.div
                  key={temple.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <Link 
                    to={`/temples/${temple.id}`}
                    state={{ from: '/temples', fromName: 'Temples List' }}
                  >
                    <div className="relative h-48 md:h-64 overflow-hidden">
                      <img
                        src={temple.image}
                        alt={temple.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      
                      {/* Wishlist Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleWishlist(temple.id);
                        }}
                        className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg z-10 cursor-pointer"
                      >
                        {wishlist.includes(temple.id) ? (
                          <FaHeart className="text-xl text-red-500" />
                        ) : (
                          <FaRegHeart className="text-xl text-gray-400" />
                        )}
                      </button>

                      {/* Popularity Badge */}
                      {temple.popularity === 'most-visited' && (
                        <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                          <FaStar className="text-xs" />
                          Most Visited
                        </div>
                      )}
                      {temple.popularity === 'trending' && (
                        <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                          <FaFire className="text-xs" />
                          Trending
                        </div>
                      )}

                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="text-xl md:text-2xl font-display font-bold mb-1">
                          {temple.name}
                        </h3>
                        <p className="text-sm text-yellow-200">{temple.location}</p>
                      </div>
                    </div>
                  </Link>

                  <div className="p-4 md:p-6">
                    <div className="mb-3">
                      <span className="text-blue-600 font-semibold text-sm">Deity: </span>
                      <span className="text-gray-700">{temple.deity}</span>
                    </div>

                    <div className="mb-3">
                      <StarRating rating={temple.rating} />
                      <span className="text-xs text-gray-500 ml-2">{temple.reviews} reviews</span>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {temple.description}
                    </p>

                    {/* Category Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                        {temple.type.replace('-', ' ').toUpperCase()}
                      </span>
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">
                        {temple.region.toUpperCase()}
                      </span>
                    </div>

                    <Link
                      to={`/temples/${temple.id}`}
                      state={{ from: '/temples', fromName: 'Temples List' }}
                      className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-md"
                    >
                      View Details
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 6️⃣ Popular Destinations Highlight */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">
              Popular <span className="text-orange-600">Destinations</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Most visited and revered temples by devotees
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {popularTemples.map((temple, index) => (
              <motion.div
                key={temple.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                <Link 
                  to={`/temples/${temple.id}`}
                  state={{ from: '/temples', fromName: 'Temples List' }}
                >
                  <div className="relative h-32 md:h-40">
                    <img
                      src={temple.image}
                      alt={temple.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2 text-white">
                      <h4 className="font-bold text-sm md:text-base">{temple.name}</h4>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ Spiritual Knowledge Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-white to-blue-50 p-8 md:p-12 rounded-2xl max-w-4xl mx-auto text-center shadow-xl border border-blue-100"
          >
            <FaOm className="text-5xl mb-4 text-blue-600 mx-auto" />
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-gray-800">
              Why Visit Sacred Temples?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Temple visits purify the mind, elevate the soul, and help devotees connect with divine energy. 
              Each temple holds unique spiritual significance, offering peace, blessings, and a deeper understanding 
              of our cultural heritage. Pilgrimage is not just a journey to a destination, but a transformative 
              experience that brings inner peace and spiritual growth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-blue-100 p-4 rounded-xl">
                <FaLeaf className="text-3xl mb-2 text-blue-600 mx-auto" />
                <h3 className="font-bold text-blue-800 mb-1">Inner Peace</h3>
                <p className="text-sm text-blue-700">Find tranquility and mental clarity</p>
              </div>
              <div className="bg-orange-100 p-4 rounded-xl">
                <FaPrayingHands className="text-3xl mb-2 text-orange-600 mx-auto" />
                <h3 className="font-bold text-orange-800 mb-1">Divine Blessings</h3>
                <p className="text-sm text-orange-700">Receive spiritual grace and protection</p>
              </div>
              <div className="bg-yellow-100 p-4 rounded-xl">
                <FaBook className="text-3xl mb-2 text-yellow-600 mx-auto" />
                <h3 className="font-bold text-yellow-800 mb-1">Cultural Heritage</h3>
                <p className="text-sm text-yellow-700">Connect with ancient traditions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7️⃣ Call-to-Action Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
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
              Begin Your Divine Journey Today
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Experience the transformative power of pilgrimage with Anand Devocation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/packages"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-orange-600 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-2xl"
              >
                Explore Packages →
              </Link>
              <Link
                to="/book"
                className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-2xl"
              >
                Book Your Yatra
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TemplesList;