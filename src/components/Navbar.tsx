import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Talents', path: '/talents' },
    { name: 'Studio', path: 'https://talaref.co', external: true },
    { name: 'Contact', path: '/contact' },
  ];

  const isDarkHero = location.pathname === '/' && !scrolled;

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled ? 'bg-[#F8F7F3]/90 backdrop-blur-md py-4 border-b border-black/5' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link 
          to="/" 
          className={`text-2xl font-bold tracking-tighter transition-colors duration-300 ${
            isDarkHero ? 'text-white' : 'text-[#1A1A1A]'
          }`}
        >
          COSMOS
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            link.external ? (
              <a
                key={link.name}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-[10px] uppercase tracking-[0.25em] font-bold transition-all hover:opacity-100 ${
                  isDarkHero 
                    ? 'text-white opacity-70' 
                    : 'text-[#1A1A1A] opacity-50'
                }`}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[10px] uppercase tracking-[0.25em] font-bold transition-all hover:opacity-100 ${
                  isDarkHero 
                    ? 'text-white opacity-70' 
                    : 'text-[#1A1A1A] opacity-50'
                }`}
              >
                {link.name}
              </Link>
            )
          ))}
          <Link
            to="/contact"
            className={`px-6 py-2 border text-[9px] uppercase tracking-[0.2em] font-bold transition-all ${
              isDarkHero
                ? 'border-white/30 text-white hover:bg-white hover:text-black'
                : 'border-[#1A1A1A]/20 text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F8F7F3]'
            }`}
          >
            Partner with us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={isDarkHero ? 'text-white' : 'text-[#1A1A1A]'} />
          ) : (
            <Menu className={isDarkHero ? 'text-white' : 'text-[#1A1A1A]'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-[60vh] bg-[#F8F7F3] z-[-1] pt-24 px-8 pb-12 flex flex-col justify-between shadow-2xl md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.name}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-serif italic text-[#1A1A1A]"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-serif italic text-[#1A1A1A]"
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full py-5 bg-[#1A1A1A] text-[#F8F7F3] text-center text-xs uppercase tracking-widest font-bold"
            >
              Partner with us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
