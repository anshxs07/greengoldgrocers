import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, Phone, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = ({ children }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FDFBF7' }}>
      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-[#F5EFE6] shadow-sm"
      >
        <nav className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group" data-testid="logo-link">
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="bg-[#14532D] p-2 rounded-full"
              >
                <Leaf className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-2xl font-heading font-bold text-[#14532D] tracking-tight">
                GreenGold Grocers
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                data-testid="nav-home"
                className={`text-base font-medium tracking-wide transition-all hover:scale-105 ${
                  isActive('/') ? 'text-[#14532D] font-semibold' : 'text-[#6B5D52] hover:text-[#14532D]'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                data-testid="nav-about"
                className={`text-base font-medium tracking-wide transition-all hover:scale-105 ${
                  isActive('/about') ? 'text-[#14532D] font-semibold' : 'text-[#6B5D52] hover:text-[#14532D]'
                }`}
              >
                About Us
              </Link>
              <Link
                to="/products"
                data-testid="nav-products"
                className={`text-base font-medium tracking-wide transition-all hover:scale-105 ${
                  isActive('/products') ? 'text-[#14532D] font-semibold' : 'text-[#6B5D52] hover:text-[#14532D]'
                }`}
              >
                Our Products
              </Link>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/enquiry"
                  data-testid="nav-enquiry"
                  className="bg-[#14532D] text-white px-6 py-3 rounded-full font-medium text-base hover:bg-[#14532D]/90 transition-all shadow-lg shadow-[#14532D]/20 hover:shadow-xl hover:shadow-[#14532D]/40"
                >
                  Enquiry
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-[#14532D]" data-testid="mobile-menu-button">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Main Content with Page Transition */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-[#14532D] text-white mt-auto">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2">
                <div className="bg-white p-2 rounded-full">
                  <Leaf className="w-5 h-5 text-[#14532D]" />
                </div>
                <span className="text-xl font-heading font-bold">GreenGold Grocers</span>
              </div>
              <p className="text-white/80 leading-relaxed">
                Your trusted source for premium organic groceries. Bringing nature's best to your doorstep.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg font-heading font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-white/80 hover:text-white transition-all hover:translate-x-1 inline-block">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-white/80 hover:text-white transition-all hover:translate-x-1 inline-block">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-white/80 hover:text-white transition-all hover:translate-x-1 inline-block">
                    Our Products
                  </Link>
                </li>
                <li>
                  <Link to="/enquiry" className="text-white/80 hover:text-white transition-all hover:translate-x-1 inline-block">
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-heading font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 hover:translate-x-1 transition-transform">
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-white/80">+91 98765 43210</span>
                </li>
                <li className="flex items-start gap-2 hover:translate-x-1 transition-transform">
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-white/80">hello@greengoldgrocers.com</span>
                </li>
                <li className="flex items-start gap-2 hover:translate-x-1 transition-transform">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-white/80">Mumbai, Maharashtra, India</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="border-t border-white/10 mt-12 pt-8 text-center text-white/60 text-sm"
          >
            <p>© 2025 GreenGold Grocers. All rights reserved. | Pure Nature, Delivered to Your Door.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;