
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/courses', label: 'Courses' },
    { path: '/albums', label: 'Albums' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gradient-to-r from-vibrantPurple via-brightOrange to-hotPink shadow-lg shadow-vibrantPurple/20 py-2' 
          : 'bg-gradient-to-r from-vibrantPurple/95 via-brightOrange/95 to-hotPink/95 backdrop-blur-md py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-white p-2 rounded-lg shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex items-center justify-center">
              <img 
                src="https://horizons-cdn.hostinger.com/dcb273d5-021c-46a9-9400-00fcdf0852ad/28144f580308f502f13969e84c0be5c2.png" 
                alt="Kidoz World Montessori Logo" 
                className="h-10 w-10 md:h-12 md:w-12 object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-sunnyYellow tracking-wide drop-shadow-sm">
                International Kidz World
              </h1>
              <p className="text-xs md:text-sm text-white/90 font-medium">Montessori Play School</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-semibold text-sm uppercase tracking-wider transition-all duration-300 relative py-2 ${
                  location.pathname === link.path
                    ? 'text-sunnyYellow'
                    : 'text-white hover:text-sunnyYellow'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-sunnyYellow rounded-t-full"
                  />
                )}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-deepPurple border-t border-white/10 shadow-2xl"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl font-bold tracking-wide transition-all ${
                    location.pathname === link.path
                      ? 'bg-gradient-to-r from-brightOrange to-hotPink text-white shadow-md'
                      : 'text-white hover:bg-white/10 hover:text-sunnyYellow'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
