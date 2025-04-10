import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Hero from './components/Hero';
import NewCars from './pages/NewCars';
import UsedCars from './pages/UsedCars';
import About from './pages/About';
import Contact from './pages/Contact';
import CarDetailPage from './pages/CarDetailPage'; // Import the new CarDetailPage

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/new-cars" element={<NewCars />} />
            <Route path="/used-cars" element={<UsedCars />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/car/:carId" element={<CarDetailPage />} /> {/* Add this route */}
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
