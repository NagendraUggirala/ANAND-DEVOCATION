import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
    <div className="min-h-screen bg-peace-gradient py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link
          to="/temples"
          className="inline-flex items-center text-saffron hover:text-maroon mb-6 transition-colors"
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

        <div className="max-w-4xl mx-auto">
          {/* Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-4 rounded-xl shadow-md text-center">
              <div className="text-2xl mb-2">🕉️</div>
              <div className="text-sm text-earth-light mb-1">Deity</div>
              <div className="font-semibold text-earth-dark">{temple.deity}</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md text-center">
              <div className="text-2xl mb-2">📅</div>
              <div className="text-sm text-earth-light mb-1">Best Time</div>
              <div className="font-semibold text-earth-dark">{temple.bestTime}</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md text-center">
              <div className="text-2xl mb-2">📍</div>
              <div className="text-sm text-earth-light mb-1">Location</div>
              <div className="font-semibold text-earth-dark">{temple.location}</div>
            </div>
          </div>

          {/* History */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 md:p-8 rounded-xl shadow-md mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-earth-dark mb-4">
              History & Significance
            </h2>
            <p className="text-earth-light leading-relaxed mb-4">{temple.history}</p>
            <p className="text-earth-light leading-relaxed">{temple.significance}</p>
          </motion.section>

          {/* Rituals */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 md:p-8 rounded-xl shadow-md mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-earth-dark mb-4">
              Daily Rituals
            </h2>
            <ul className="space-y-3">
              {temple.rituals.map((ritual, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-saffron mr-3 mt-1">•</span>
                  <span className="text-earth-light">{ritual}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Gallery */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-6 md:p-8 rounded-xl shadow-md mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-earth-dark mb-4">
              Photo Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {temple.gallery.map((img, index) => (
                <div key={index} className="rounded-lg overflow-hidden">
                  <img
                    src={img}
                    alt={`${temple.name} ${index + 1}`}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center bg-sacred-gradient p-8 rounded-xl shadow-xl text-white"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Experience This Sacred Journey
            </h3>
            <p className="text-lg mb-6 text-white/90">
              Join our curated pilgrimage tour to {temple.name}
            </p>
            <Link
              to="/book"
              className="inline-block bg-white text-saffron px-8 py-3 rounded-lg font-semibold hover:bg-sage transition-all duration-300 transform hover:scale-105"
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
