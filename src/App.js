// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TemplesList from './pages/TemplesList';
import TempleDetails from './pages/TempleDetails';
import Themes from './pages/Themes';
import Packages from './pages/Packages';
import BookingPage from './pages/BookingPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ModalProvider>
      <Router>
        <div className="min-h-screen bg-cream">
          <ScrollToTop />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/temples" element={<TemplesList />} />
              <Route path="/temples/:id" element={<TempleDetails />} />
              <Route path="/themes" element={<Themes />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/book" element={<BookingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ModalProvider>
  );
}

export default App;