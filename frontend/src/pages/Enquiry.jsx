import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = 'Phone must be 10 digits';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await axios.post(`${API}/enquiry`, formData);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      alert('Failed to submit enquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#E8DCC8]/30 to-[#FDFBF7] py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 max-w-4xl mx-auto"
          >
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-[#052e16]" data-testid="enquiry-hero-heading">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-[#5C4A3A]">
              Have questions about our products or want to place a bulk order? We'd love to hear from you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight text-[#052e16] mb-6" data-testid="contact-info-heading">
                  Contact Information
                </h2>
                <p className="text-base leading-relaxed text-[#5C4A3A]">
                  Reach out to us through any of these channels. Our team is ready to assist you with your organic grocery needs.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div 
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(20,83,45,0.12)] transition-all duration-300" 
                  data-testid="contact-phone"
                >
                  <motion.div 
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#E8DCC8] p-3 rounded-xl"
                  >
                    <Phone className="w-6 h-6 text-[#14532D]" />
                  </motion.div>
                  <div>
                    <h3 className="font-heading text-xl font-medium text-[#052e16] mb-1">Phone</h3>
                    <p className="text-base text-[#5C4A3A]">+91 98765 43210</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(20,83,45,0.12)] transition-all duration-300" 
                  data-testid="contact-email"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#E8DCC8] p-3 rounded-xl"
                  >
                    <Mail className="w-6 h-6 text-[#14532D]" />
                  </motion.div>
                  <div>
                    <h3 className="font-heading text-xl font-medium text-[#052e16] mb-1">Email</h3>
                    <p className="text-base text-[#5C4A3A]">hello@greengoldgrocers.com</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(20,83,45,0.12)] transition-all duration-300" 
                  data-testid="contact-location"
                >
                  <motion.div 
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#E8DCC8] p-3 rounded-xl"
                  >
                    <MapPin className="w-6 h-6 text-[#14532D]" />
                  </motion.div>
                  <div>
                    <h3 className="font-heading text-xl font-medium text-[#052e16] mb-1">Location</h3>
                    <p className="text-base text-[#5C4A3A]">Mumbai, Maharashtra, India</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            >
              {submitSuccess && (
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6 p-4 bg-[#E8DCC8] rounded-xl flex items-center gap-3" 
                  data-testid="success-message"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                  >
                    <CheckCircle className="w-6 h-6 text-[#14532D]" />
                  </motion.div>
                  <p className="text-[#14532D] font-medium">Thank you! We'll get back to you soon.</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" data-testid="enquiry-form">
                <motion.div whileFocus={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                  <label htmlFor="name" className="block text-base font-medium text-[#052e16] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    data-testid="input-name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#E8DCC8] bg-white/50 focus:bg-white focus:border-[#14532D] focus:shadow-lg focus:shadow-[#14532D]/10 outline-none transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                </motion.div>

                <motion.div whileFocus={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                  <label htmlFor="email" className="block text-base font-medium text-[#052e16] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    data-testid="input-email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#E8DCC8] bg-white/50 focus:bg-white focus:border-[#14532D] focus:shadow-lg focus:shadow-[#14532D]/10 outline-none transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                </motion.div>

                <motion.div whileFocus={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                  <label htmlFor="phone" className="block text-base font-medium text-[#052e16] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    data-testid="input-phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#E8DCC8] bg-white/50 focus:bg-white focus:border-[#14532D] focus:shadow-lg focus:shadow-[#14532D]/10 outline-none transition-all duration-300"
                    placeholder="10-digit phone number"
                  />
                  {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
                </motion.div>

                <motion.div whileFocus={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                  <label htmlFor="message" className="block text-base font-medium text-[#052e16] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    data-testid="input-message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#E8DCC8] bg-white/50 focus:bg-white focus:border-[#14532D] focus:shadow-lg focus:shadow-[#14532D]/10 outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                  {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
                </motion.div>

                <motion.button
                  type="submit"
                  data-testid="submit-button"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-[#14532D] text-white px-8 py-4 rounded-full text-lg font-medium tracking-wide transition-all shadow-lg shadow-[#14532D]/20 hover:shadow-xl hover:shadow-[#14532D]/40 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enquiry;