import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Packages = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [selectedPackage, setSelectedPackage] = useState(null);

  // Pooja Packages
  const poojaPackages = [
    {
      id: 1,
      name: 'Rudrabhishekam',
      category: 'pooja',
      price: 999,
      originalPrice: 1299,
      description: 'Performed by temple priests, includes sankalpam and sacred abhishekam',
      duration: '1 Hour',
      temple: 'Kashi Vishwanath',
      rating: 4.8,
      reviews: 1250,
      includes: ['Priest', 'Materials', 'Prasadam', 'Video Call'],
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      popular: true
    },
    {
      id: 2,
      name: 'Hanuman Chalisa Pooja',
      category: 'pooja',
      price: 499,
      originalPrice: 699,
      description: 'Online/Offline options available. Special prayers for strength and protection',
      duration: '30 Minutes',
      temple: 'Sankat Mochan',
      rating: 4.6,
      reviews: 890,
      includes: ['Priest', 'Materials', 'Prasadam'],
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800',
      popular: false
    },
    {
      id: 3,
      name: 'Navagraha Pooja',
      category: 'pooja',
      price: 799,
      originalPrice: 999,
      description: 'For planetary dosha relief and harmony in life',
      duration: '45 Minutes',
      temple: 'Navagraha Temple',
      rating: 4.7,
      reviews: 650,
      includes: ['Priest', 'Materials', 'Prasadam', 'Horoscope Analysis'],
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800',
      popular: true
    },
    {
      id: 4,
      name: 'Lakshmi Pooja',
      category: 'pooja',
      price: 699,
      originalPrice: 899,
      description: 'For wealth & prosperity. Special rituals for financial abundance',
      duration: '1 Hour',
      temple: 'Mahalakshmi Temple',
      rating: 4.9,
      reviews: 1100,
      includes: ['Priest', 'Materials', 'Prasadam', 'Video Call'],
      image: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=800',
      popular: true
    },
    {
      id: 5,
      name: 'Ganesh Chaturthi Pooja',
      category: 'pooja',
      price: 599,
      originalPrice: 799,
      description: 'Special pooja for removing obstacles and seeking wisdom',
      duration: '45 Minutes',
      temple: 'Siddhivinayak',
      rating: 4.5,
      reviews: 750,
      includes: ['Priest', 'Materials', 'Prasadam'],
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800',
      popular: false
    },
    {
      id: 6,
      name: 'Saraswati Pooja',
      category: 'pooja',
      price: 549,
      originalPrice: 699,
      description: 'For knowledge, education, and academic success',
      duration: '30 Minutes',
      temple: 'Saraswati Temple',
      rating: 4.6,
      reviews: 520,
      includes: ['Priest', 'Materials', 'Prasadam'],
      image: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=800',
      popular: false
    }
  ];

  // Temple Visit Packages
  const templeVisitPackages = [
    {
      id: 7,
      name: 'Tirupati Darshan Package',
      category: 'temple-visit',
      price: 1899,
      originalPrice: 2499,
      description: 'Includes darshan ticket, shuttle service, and prasadam',
      duration: '1 Day',
      temple: 'Tirupati Balaji',
      rating: 4.9,
      reviews: 2100,
      includes: ['Darshan Ticket', 'Shuttle Service', 'Prasadam', 'Guide'],
      image: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=800',
      popular: true
    },
    {
      id: 8,
      name: 'Srisailam Tour Package',
      category: 'temple-visit',
      price: 2499,
      originalPrice: 2999,
      description: '1-day trip with pooja included and annaprasadam',
      duration: '1 Day',
      temple: 'Srisailam',
      rating: 4.7,
      reviews: 980,
      includes: ['Transport', 'Pooja', 'Annaprasadam', 'Guide'],
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      popular: true
    },
    {
      id: 9,
      name: 'Char Dham Express',
      category: 'temple-visit',
      price: 45000,
      originalPrice: 55000,
      description: 'Complete Char Dham yatra with helicopter service',
      duration: '7 Days',
      temple: 'Char Dham',
      rating: 4.8,
      reviews: 450,
      includes: ['Helicopter Service', 'Premium Stay', 'All Meals', 'Expert Guide'],
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800',
      popular: true
    },
    {
      id: 10,
      name: 'Kashi Vishwanath Darshan',
      category: 'temple-visit',
      price: 1299,
      originalPrice: 1699,
      description: 'Special darshan with Ganga aarti and prasadam',
      duration: '1 Day',
      temple: 'Kashi Vishwanath',
      rating: 4.8,
      reviews: 1650,
      includes: ['VIP Darshan', 'Ganga Aarti', 'Prasadam', 'Guide'],
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      popular: true
    }
  ];

  // Festival Special Packages
  const festivalPackages = [
    {
      id: 11,
      name: 'Diwali Lakshmi Pooja Combo',
      category: 'festival',
      price: 1999,
      originalPrice: 2499,
      description: 'Special Diwali package with Lakshmi pooja and decorations',
      duration: '2 Hours',
      temple: 'Multiple Temples',
      rating: 4.9,
      reviews: 1850,
      includes: ['Lakshmi Pooja', 'Decorations', 'Prasadam', 'Video Call'],
      image: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=800',
      popular: true
    },
    {
      id: 12,
      name: 'Shivaratri Rudra Homam',
      category: 'festival',
      price: 2999,
      originalPrice: 3499,
      description: 'Night-long worship with special Rudra homam',
      duration: '12 Hours',
      temple: 'Shiva Temples',
      rating: 4.8,
      reviews: 1200,
      includes: ['Rudra Homam', 'Night Stay', 'Prasadam', 'Priest'],
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      popular: true
    },
    {
      id: 13,
      name: 'Ganesh Chaturthi 21-Pooja Package',
      category: 'festival',
      price: 4999,
      originalPrice: 5999,
      description: '21-day pooja package for Ganesh Chaturthi',
      duration: '21 Days',
      temple: 'Ganesh Temples',
      rating: 4.7,
      reviews: 650,
      includes: ['21 Poojas', 'Materials', 'Prasadam', 'Daily Updates'],
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800',
      popular: false
    },
    {
      id: 14,
      name: 'Karthika Masam Deepam Seva',
      category: 'festival',
      price: 899,
      originalPrice: 1199,
      description: 'Special deepam seva during Karthika masam',
      duration: '1 Month',
      temple: 'Shiva Temples',
      rating: 4.6,
      reviews: 890,
      includes: ['Daily Deepam', 'Prasadam', 'Monthly Report'],
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      popular: false
    }
  ];

  // Astrology + Pooja Combo Packages
  const astrologyPackages = [
    {
      id: 15,
      name: 'Horoscope Reading + Pooja',
      category: 'astrology',
      price: 2499,
      originalPrice: 3299,
      description: 'Complete horoscope analysis with personalized pooja',
      duration: '2 Hours',
      temple: 'Astrology Center',
      rating: 4.9,
      reviews: 950,
      includes: ['Horoscope Reading', 'Pooja', 'Remedies', 'Consultation'],
      image: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=800',
      popular: true
    },
    {
      id: 16,
      name: 'Marriage Matchmaking + Homam',
      category: 'astrology',
      price: 3999,
      originalPrice: 4999,
      description: 'Kundali matching with special marriage homam',
      duration: '3 Hours',
      temple: 'Marriage Temples',
      rating: 4.8,
      reviews: 750,
      includes: ['Kundali Matching', 'Homam', 'Consultation', 'Report'],
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800',
      popular: true
    },
    {
      id: 17,
      name: 'Career Astrology + Temple Seva',
      category: 'astrology',
      price: 2999,
      originalPrice: 3799,
      description: 'Career guidance with special temple seva',
      duration: '2 Hours',
      temple: 'Career Temples',
      rating: 4.7,
      reviews: 680,
      includes: ['Career Analysis', 'Temple Seva', 'Remedies', 'Consultation'],
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800',
      popular: false
    }
  ];

  // Donation Packages
  const donationPackages = [
    {
      id: 18,
      name: 'Annadanam Donation',
      category: 'donation',
      price: 501,
      description: 'Feed the devotees. Tax deduction available under 80G',
      duration: 'One-time',
      temple: 'All Temples',
      rating: 5.0,
      reviews: 2500,
      includes: ['Tax Receipt', 'Certificate', 'Photos'],
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800',
      taxDeduction: true
    },
    {
      id: 19,
      name: 'Gau Seva Donation',
      category: 'donation',
      price: 251,
      description: 'Support cow seva and protection. Tax deduction available',
      duration: 'One-time',
      temple: 'Gaushalas',
      rating: 4.9,
      reviews: 1800,
      includes: ['Tax Receipt', 'Certificate', 'Updates'],
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800',
      taxDeduction: true
    },
    {
      id: 20,
      name: 'Temple Renovation',
      category: 'donation',
      price: 1001,
      description: 'Contribute to temple renovation and maintenance',
      duration: 'One-time',
      temple: 'All Temples',
      rating: 4.8,
      reviews: 1200,
      includes: ['Tax Receipt', 'Certificate', 'Progress Report'],
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      taxDeduction: true
    }
  ];

  // Combine all packages
  const allPackages = [
    ...poojaPackages,
    ...templeVisitPackages,
    ...festivalPackages,
    ...astrologyPackages,
    ...donationPackages
  ];

  // Filter and sort logic
  const filteredPackages = useMemo(() => {
    let filtered = allPackages;

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(pkg => pkg.category === selectedCategory);
    }

    // Price range filter
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      if (max) {
        filtered = filtered.filter(pkg => pkg.price >= min && pkg.price <= max);
      } else {
        filtered = filtered.filter(pkg => pkg.price >= min);
      }
    }

    // Sort
    if (sortBy === 'price-low') {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'popular') {
      filtered = [...filtered].sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
    } else if (sortBy === 'rating') {
      filtered = [...filtered].sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  }, [selectedCategory, priceRange, sortBy]);

  const categories = [
    { value: 'all', label: 'All Packages' },
    { value: 'pooja', label: 'Pooja Services' },
    { value: 'temple-visit', label: 'Temple Visits' },
    { value: 'festival', label: 'Festival Specials' },
    { value: 'astrology', label: 'Astrology + Pooja' },
    { value: 'donation', label: 'Donations' }
  ];

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-1000', label: 'Under ₹1,000' },
    { value: '1000-5000', label: '₹1,000 - ₹5,000' },
    { value: '5000-20000', label: '₹5,000 - ₹20,000' },
    { value: '20000-', label: 'Above ₹20,000' }
  ];

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

  const PackageCard = ({ pkg, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
    >
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {pkg.popular && (
          <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            ⭐ Popular
          </div>
        )}
        
        {pkg.taxDeduction && (
          <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            💰 Tax Deduction
          </div>
        )}

        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
          <span className="text-blue-600 font-bold">₹{pkg.price.toLocaleString()}</span>
          {pkg.originalPrice && (
            <span className="text-gray-400 line-through text-xs ml-1">₹{pkg.originalPrice.toLocaleString()}</span>
          )}
        </div>

        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-xl md:text-2xl font-display font-bold mb-1">{pkg.name}</h3>
          <p className="text-sm text-yellow-200">{pkg.duration}</p>
        </div>
      </div>

      <div className="p-4 md:p-6">
        <div className="mb-3">
          <StarRating rating={pkg.rating} />
          <span className="text-xs text-gray-500 ml-2">{pkg.reviews} reviews</span>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">{pkg.description}</p>

        {pkg.temple && (
          <div className="mb-3">
            <span className="text-blue-600 font-semibold text-sm">Temple: </span>
            <span className="text-gray-700 text-sm">{pkg.temple}</span>
          </div>
        )}

        <div className="mb-4">
          <h4 className="text-orange-600 font-semibold text-sm mb-2">Includes:</h4>
          <div className="flex flex-wrap gap-2">
            {pkg.includes.map((item, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold"
              >
                ✓ {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setSelectedPackage(pkg)}
            className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-all text-sm"
          >
            View Details
          </button>
          <Link
            to="/book"
            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105"
          >
            Book Now
          </Link>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-orange-50">
      {/* 1️⃣ Hero Section */}
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
              Choose Your Spiritual <span className="text-yellow-400">Packages</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mt-2">
              Book poojas, darshans, temple visits, and devotional services with complete guidance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 text-sm ${
                    selectedCategory === cat.value
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Price Range & Sort */}
            <div className="flex flex-wrap gap-3">
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-2 border-2 border-blue-200 rounded-full font-semibold text-sm focus:ring-2 focus:ring-blue-400 outline-none"
              >
                {priceRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border-2 border-orange-200 rounded-full font-semibold text-sm focus:ring-2 focus:ring-orange-400 outline-none"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-800">
              {filteredPackages.length} {filteredPackages.length === 1 ? 'Package' : 'Packages'} Available
            </h2>
          </div>

          {filteredPackages.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🕉️</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No Packages Found</h3>
              <p className="text-gray-500">Try adjusting your filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredPackages.map((pkg, index) => (
                <PackageCard key={pkg.id} pkg={pkg} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Custom Package Form */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-2xl border border-blue-100"
          >
            <div className="text-center mb-6">
              <div className="text-5xl mb-4">✨</div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-800 mb-2">
                Request Custom Package
              </h2>
              <p className="text-gray-600">
                Create a personalized spiritual package tailored to your needs
              </p>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <textarea
                placeholder="Describe your custom package requirements..."
                rows="4"
                className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105"
              >
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Special Offers Slider */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">
              Special <span className="text-orange-600">Offers</span>
            </h2>
          </motion.div>
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-6" style={{ minWidth: 'max-content' }}>
              {allPackages.filter(p => p.popular).slice(0, 5).map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="min-w-[300px] bg-white rounded-xl overflow-hidden shadow-lg"
                >
                  <div className="relative h-40">
                    <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Special Offer
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 mb-2">{pkg.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 font-bold">₹{pkg.price.toLocaleString()}</span>
                      <Link
                        to="/book"
                        className="bg-orange-500 text-white px-4 py-1 rounded-lg text-sm font-semibold hover:bg-orange-600"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Package Details Modal */}
      {selectedPackage && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPackage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <img
                src={selectedPackage.image}
                alt={selectedPackage.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedPackage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white"
              >
                ×
              </button>
            </div>
            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-800 mb-4">
                {selectedPackage.name}
              </h2>
              <div className="mb-4">
                <StarRating rating={selectedPackage.rating} />
              </div>
              <p className="text-gray-600 mb-4">{selectedPackage.description}</p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <span className="text-blue-600 font-semibold">Price: </span>
                  <span className="text-gray-800 font-bold">₹{selectedPackage.price.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-blue-600 font-semibold">Duration: </span>
                  <span className="text-gray-800">{selectedPackage.duration}</span>
                </div>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold text-gray-800 mb-2">Includes:</h3>
                <ul className="space-y-1">
                  {selectedPackage.includes.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/book"
                className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Packages;
