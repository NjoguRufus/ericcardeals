import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Home,
  CarFront,
  CarTaxiFront,
  Info,
  Mail,
  Eye, // ✅ Importing Eye icon for "View All"
} from 'lucide-react';

import logo from '../assets/logo.png'; // ✅ Adjust this path if needed

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  const navBgClass = !isHome || isScrolled
    ? 'bg-black/30 backdrop-blur-lg shadow-lg'
    : 'bg-transparent';

  const linkClass =
    'flex items-center gap-1 px-3 py-1.5 rounded-full border border-[#4A90A4]/20 bg-white/5 text-white hover:border-[#4A90A4] hover:text-[#4A90A4] backdrop-blur-md text-xs font-medium transition-all duration-300';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 rounded-b-2xl ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-16 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex ml-10 items-center space-x-3">
            <Link to="/" className={linkClass}>
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link to="/new-cars" className={linkClass}>
              <CarFront className="h-4 w-4" />
              <span>New</span>
            </Link>
            <Link to="/used-cars" className={linkClass}>
              <CarTaxiFront className="h-4 w-4" />
              <span>Used</span>
            </Link>
            <Link to="/all-cars" className={linkClass}>
              <Eye className="h-4 w-4" />
              <span>View All</span>
            </Link>
            <Link to="/about" className={linkClass}>
              <Info className="h-4 w-4" />
              <span>About</span>
            </Link>
            <Link to="/contact" className={linkClass}>
              <Mail className="h-4 w-4" />
              <span>Contact</span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#4A90A4]"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/30 backdrop-blur-lg px-4 py-3">
          <div className="flex flex-wrap justify-center gap-2">
            <Link to="/" className={linkClass}>
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link to="/new-cars" className={linkClass}>
              <CarFront className="h-4 w-4" />
              <span>New</span>
            </Link>
            <Link to="/used-cars" className={linkClass}>
              <CarTaxiFront className="h-4 w-4" />
              <span>Used</span>
            </Link>
            <Link to="/all-cars" className={linkClass}>
              <Eye className="h-4 w-4" />
              <span>View All</span>
            </Link>
            <Link to="/about" className={linkClass}>
              <Info className="h-4 w-4" />
              <span>About</span>
            </Link>
            <Link to="/contact" className={linkClass}>
              <Mail className="h-4 w-4" />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
