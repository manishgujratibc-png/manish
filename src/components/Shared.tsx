import React, { useState, useEffect } from 'react';
import { Building2, ChevronRight, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { Link, useLocation } from 'react-router-dom';

export const Logo = ({ isScrolled = false, className = "" }: { isScrolled?: boolean, className?: string }) => {
  return (
    <Link to="/" className={cn("flex items-center group cursor-pointer transition-all duration-500", className)}>
      <div className="flex flex-col items-start">
        <span className={cn(
          "font-serif text-3xl md:text-4xl font-bold tracking-wider transition-colors duration-500 uppercase leading-none",
          isScrolled ? "text-primary" : "text-white"
        )}>
          SWASTIK
        </span>
        <div className="flex items-center gap-3 mt-1.5 pl-0.5">
          <span className={cn(
            "font-sans text-[0.65rem] md:text-[0.75rem] uppercase tracking-[0.4em] font-bold transition-colors duration-500",
            "text-accent"
          )}>
            ARCHITECTS
          </span>
        </div>
      </div>
    </Link>
  );
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: isHomePage ? '#home' : '/' },
    { name: 'About', href: isHomePage ? '#about' : '/#about' },
    { name: 'Services', href: isHomePage ? '#services' : '/#services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Clients', href: '/clients' },
    { name: 'Gallery', href: isHomePage ? '#gallery' : '/#gallery' },
    { name: 'Contact', href: isHomePage ? '#contact' : '/#contact' },
  ];

  // Force scrolled state on non-home pages
  const effectiveScrolled = isHomePage ? isScrolled : true;

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      effectiveScrolled ? "bg-white/90 backdrop-blur-md py-4 shadow-md" : "bg-transparent py-5"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Logo isScrolled={effectiveScrolled} />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                effectiveScrolled ? "text-slate-700" : "text-white"
              )}
            >
              {link.name}
            </a>
          ))}
          <a
            href={isHomePage ? "#booking" : "/#booking"}
            className="bg-accent text-primary px-6 py-2.5 rounded-full text-sm font-bold hover:bg-white hover:text-primary transition-all shadow-lg"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={effectiveScrolled ? "text-primary" : "text-white"} /> : <Menu className={effectiveScrolled ? "text-primary" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-700 font-medium py-2 border-b border-slate-50"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={isHomePage ? "#booking" : "/#booking"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-primary text-white text-center py-3 rounded-xl font-bold mt-2"
              >
                Book Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="lg:col-span-2 space-y-6">
          <Logo isScrolled={false} className="mb-6" />
          <p className="text-slate-400 leading-relaxed max-w-md">
            Your trusted partner for architectural and engineering solutions in Rourkela. 
            We build with precision and passion, turning architectural visions into structural reality.
          </p>
        </div>

        <div className="lg:col-span-1">
          <h4 className="font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-4">
            {['Home', 'About', 'Services', 'Projects', 'Clients', 'Gallery', 'Contact'].map((item) => (
              <li key={item}>
                <a href={item === 'Projects' ? '/projects' : item === 'Clients' ? '/clients' : `/#${item.toLowerCase()}`} className="text-slate-400 hover:text-accent transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-4 h-4 text-accent/50 group-hover:text-accent transition-colors" /> {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-1">
          <h4 className="font-bold text-lg mb-6">Services</h4>
          <ul className="space-y-4">
            {['House Planning', 'Structural Design', 'Construction', 'Renovation', 'Interior Design'].map((item) => (
              <li key={item}>
                <a href="/#services" className="text-slate-400 hover:text-accent transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-4 h-4 text-accent/50 group-hover:text-accent transition-colors" /> {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Swastik Architect & Engineering Solution. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
