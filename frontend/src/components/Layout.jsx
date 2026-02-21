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
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-[#D6EFD8] shadow-sm">
        <nav className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group" data-testid="logo-link">
              <div className="bg-[#14532D] p-2 rounded-full">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-heading font-bold text-[#14532D] tracking-tight">
                GreenGold Grocers
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                data-testid="nav-home"
                className={`text-base font-medium tracking-wide transition-colors ${
                  isActive('/') ? 'text-[#14532D] font-semibold' : 'text-[#3f6212] hover:text-[#14532D]'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                data-testid="nav-about"
                className={`text-base font-medium tracking-wide transition-colors ${
                  isActive('/about') ? 'text-[#14532D] font-semibold' : 'text-[#3f6212] hover:text-[#14532D]'
                }`}
              >
                About Us
              </Link>
              <Link
                to="/products"
                data-testid="nav-products"
                className={`text-base font-medium tracking-wide transition-colors ${
                  isActive('/products') ? 'text-[#14532D] font-semibold' : 'text-[#3f6212] hover:text-[#14532D]'
                }`}
              >
                Our Products
              </Link>
              <Link
                to="/enquiry"
                data-testid="nav-enquiry"
                className="bg-[#14532D] text-white px-6 py-3 rounded-full font-medium text-base hover:bg-[#14532D]/90 transition-all shadow-lg shadow-[#14532D]/20 hover:shadow-xl hover:shadow-[#14532D]/30 active:scale-95"
              >
                Enquiry
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-[#14532D]" data-testid="mobile-menu-button">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-[#14532D] text-white mt-auto">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="bg-white p-2 rounded-full">
                  <Leaf className="w-5 h-5 text-[#14532D]" />
                </div>
                <span className="text-xl font-heading font-bold">GreenGold Grocers</span>
              </div>
              <p className="text-white/80 leading-relaxed">
                Your trusted source for premium organic groceries. Bringing nature's best to your doorstep.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-heading font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-white/80 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-white/80 hover:text-white transition-colors">
                    Our Products
                  </Link>
                </li>
                <li>
                  <Link to="/enquiry" className="text-white/80 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-heading font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-white/80">+91 98765 43210</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-white/80">hello@greengoldgrocers.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-white/80">Mumbai, Maharashtra, India</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60 text-sm">
            <p>© 2025 GreenGold Grocers. All rights reserved. | Pure Nature, Delivered to Your Door.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;