import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaOm, 
  FaCalendar, 
  FaMapMarkerAlt, 
  FaMountain, 
  FaEye, 
  FaHeart, 
  FaBookmark, 
  FaCamera, 
  FaStar,
  FaUmbrellaBeach,
  FaHotel,
  FaScroll,
  FaPrayingHands
} from 'react-icons/fa';

const TempleDetails = () => {
  const { id } = useParams();

  // Sample temple data - in real app, fetch from API
  const temple = {
    id: parseInt(id),
    name: 'Tirupati Balaji',
    location: 'Andhra Pradesh',
    deity: 'Lord Venkateswara',
    image: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=1200',
    history: 'The Tirumala Venkateswara Temple is a landmark Vaishnavite temple situated in the hill town of Tirumala at Tirupati in the Tirupati district of Andhra Pradesh, India. The temple is built on Venkata Hill, one of the seven peaks of the Tirumala Hills.',
    rituals: [
      'Suprabhatam - Early morning awakening',
      'Tomala Seva - Garland offering',
      'Archana - Special prayers',
      'Abhishekam - Sacred bath',
      'Aarti - Evening prayers'
    ],
    significance: 'One of the richest and most visited temples in the world, attracting millions of devotees annually.',
    bestTime: 'September to March',
    gallery: [
      'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=800',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800'
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link
          to="/temples"
          className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6 transition-colors font-semibold"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Temples
        </Link>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8 shadow-xl"
        >
          <img
            src={temple.image}
            alt={temple.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-2">
              {temple.name}
            </h1>
            <p className="text-lg md:text-xl">{temple.location}</p>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-5 rounded-xl shadow-lg text-center border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-xl">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <FaOm className="text-3xl text-blue-600" />
              </div>
              <div className="text-sm text-gray-500 mb-1 font-medium">Deity</div>
              <div className="font-bold text-gray-800 text-lg">{temple.deity}</div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-lg text-center border-2 border-orange-200 hover:border-orange-400 transition-all hover:shadow-xl">
              <div className="bg-orange-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <FaCalendar className="text-3xl text-orange-600" />
              </div>
              <div className="text-sm text-gray-500 mb-1 font-medium">Best Time</div>
              <div className="font-bold text-gray-800 text-lg">{temple.bestTime}</div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-lg text-center border-2 border-green-200 hover:border-green-400 transition-all hover:shadow-xl">
              <div className="bg-green-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <FaMapMarkerAlt className="text-3xl text-green-600" />
              </div>
              <div className="text-sm text-gray-500 mb-1 font-medium">Location</div>
              <div className="font-bold text-gray-800 text-lg">{temple.location}</div>
            </div>
          </div>

          {/* History */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 md:p-8 rounded-xl shadow-lg mb-8 border-2 border-blue-100 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-600"></div>
            <div className="pl-4">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg mr-3">
                  <FaScroll className="text-xl" />
                </span>
                History & Significance
              </h2>
              <div className="bg-blue-50 p-4 rounded-lg mb-4 border-l-4 border-blue-500">
                <p className="text-gray-700 leading-relaxed font-medium">{temple.history}</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-gray-700 leading-relaxed font-medium">{temple.significance}</p>
              </div>
            </div>
          </motion.section>

          {/* Rituals */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 md:p-8 rounded-xl shadow-lg mb-8 border-2 border-orange-100 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500 to-orange-600"></div>
            <div className="pl-4">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-lg mr-3">
                  <FaPrayingHands className="text-xl" />
                </span>
                Daily Rituals
              </h2>
              <ul className="space-y-3">
                {temple.rituals.map((ritual, index) => (
                  <li key={index} className="flex items-start bg-gradient-to-r from-orange-50 to-yellow-50 p-3 rounded-lg border-l-4 border-orange-500 hover:shadow-md transition-all">
                    <span className="text-orange-600 mr-3 mt-1 font-bold text-xl">•</span>
                    <span className="text-gray-700 font-medium flex-1">{ritual}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Attractions & Features Cards */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-800 mb-6 text-center">
              Attractions & Features
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {/* Scenic Views Card */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-center text-white shadow-lg cursor-pointer"
              >
                <FaEye className="text-3xl md:text-4xl mb-2 mx-auto" />
                <h3 className="font-semibold text-sm md:text-base">Scenic Views</h3>
                <p className="text-xs md:text-sm text-blue-100 mt-1">Panoramic</p>
              </motion.div>

              {/* Spiritual Vibes Card */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl p-4 text-center text-white shadow-lg cursor-pointer"
              >
                <FaOm className="text-3xl md:text-4xl mb-2 mx-auto" />
                <h3 className="font-semibold text-sm md:text-base">Spiritual Vibes</h3>
                <p className="text-xs md:text-sm text-yellow-100 mt-1">Divine Energy</p>
              </motion.div>

              {/* Save Journey Card */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-4 text-center text-white shadow-lg cursor-pointer"
              >
                <FaBookmark className="text-3xl md:text-4xl mb-2 mx-auto" />
                <h3 className="font-semibold text-sm md:text-base">Save Journey</h3>
                <p className="text-xs md:text-sm text-orange-100 mt-1">Bookmark</p>
              </motion.div>

              {/* Attractions Card */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 text-center text-white shadow-lg cursor-pointer"
              >
                <FaStar className="text-3xl md:text-4xl mb-2 mx-auto" />
                <h3 className="font-semibold text-sm md:text-base">Attractions</h3>
                <p className="text-xs md:text-sm text-purple-100 mt-1">Must See</p>
              </motion.div>

              {/* Photo Gallery Card */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-gray-400 to-gray-500 rounded-xl p-4 text-center text-white shadow-lg cursor-pointer"
              >
                <FaCamera className="text-3xl md:text-4xl mb-2 mx-auto" />
                <h3 className="font-semibold text-sm md:text-base">Gallery</h3>
                <p className="text-xs md:text-sm text-gray-100 mt-1">Photos</p>
              </motion.div>

              {/* Nearby Places Card */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl p-4 text-center text-white shadow-lg cursor-pointer"
              >
                <FaMapMarkerAlt className="text-3xl md:text-4xl mb-2 mx-auto" />
                <h3 className="font-semibold text-sm md:text-base">Nearby</h3>
                <p className="text-xs md:text-sm text-cyan-100 mt-1">Places</p>
              </motion.div>
            </div>
          </motion.section>

          {/* Additional Features Grid */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Best Experiences Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-yellow-400 via-amber-400 to-orange-400 rounded-xl p-6 text-white shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <FaStar className="text-4xl mr-4" />
                  <div>
                    <h3 className="text-xl font-bold">Best Experiences</h3>
                    <p className="text-yellow-100 text-sm">Top-rated activities</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Morning Darshan Experience</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Special Pooja Services</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Guided Temple Tour</span>
                  </li>
                </ul>
              </motion.div>

              {/* Accommodation & Services Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-500 rounded-xl p-6 text-white shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <FaHotel className="text-4xl mr-4" />
                  <div>
                    <h3 className="text-xl font-bold">Accommodation</h3>
                    <p className="text-blue-100 text-sm">Nearby stays</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Devotional Theme Rooms</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Pilgrimage Packages</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>24/7 Support</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.section>

          {/* Gallery */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white p-6 md:p-8 rounded-xl shadow-lg mb-8 border-2 border-purple-100 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-purple-600"></div>
            <div className="pl-4">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg mr-3">
                  <FaCamera className="text-xl" />
                </span>
                Photo Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {temple.gallery.map((img, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                    <img
                      src={img}
                      alt={`${temple.name} ${index + 1}`}
                      className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-center bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-8 rounded-xl shadow-xl text-white"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Experience This Sacred Journey
            </h3>
            <p className="text-lg mb-6 text-white/90">
              Join our curated pilgrimage tour to {temple.name}
            </p>
            <Link
              to="/book"
              className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-300 transform hover:scale-105"
            >
              Book Your Pilgrimage
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TempleDetails;
