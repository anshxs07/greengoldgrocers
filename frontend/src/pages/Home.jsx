import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Leaf, Award, Heart, Truck } from 'lucide-react';

const Home = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FDFBF7] to-[#D6EFD8]/30">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block"
              >
                <span className="text-sm font-medium tracking-wider uppercase text-[#14532D]/80 bg-[#D6EFD8] px-4 py-2 rounded-full" data-testid="hero-badge">
                  100% Organic & Natural
                </span>
              </motion.div>
              <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-[#052e16]" data-testid="hero-headline">
                Pure Nature,<br />
                Delivered to Your Door
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-[#3f6212] max-w-xl" data-testid="hero-subtext">
                Experience the authentic taste of premium Indian organic groceries. Sustainably sourced, ethically grown, and delivered fresh to your home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/products"
                    data-testid="cta-explore-products"
                    className="bg-[#14532D] text-white px-8 py-6 rounded-full text-lg font-medium tracking-wide transition-all shadow-lg shadow-[#14532D]/20 hover:shadow-xl hover:shadow-[#14532D]/40 text-center block"
                  >
                    Explore Products
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/enquiry"
                    data-testid="cta-enquire-now"
                    className="border-2 border-[#14532D] text-[#14532D] px-8 py-6 rounded-full text-lg font-medium tracking-wide transition-all hover:bg-[#14532D]/10 hover:shadow-lg hover:shadow-[#14532D]/20 bg-transparent text-center block"
                  >
                    Enquire Now
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgb(20,83,45,0.15)]"
              >
                <img
                  src="https://images.unsplash.com/photo-1631021967261-c57ee4dfa9bb?auto=format&fit=crop&q=80&w=800"
                  alt="Fresh organic tomatoes in a woven basket"
                  className="w-full h-[500px] object-cover transition-transform duration-700"
                  data-testid="hero-image"
                />
              </motion.div>
              {/* Decorative element */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.2, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -z-10 top-10 right-10 w-64 h-64 bg-[#D97706] rounded-full blur-3xl"
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Bento Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight text-[#052e16] mb-4" data-testid="features-heading">
              Why Choose GreenGold?
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-[#3f6212] max-w-2xl mx-auto">
              We're committed to bringing you the finest organic products with uncompromising quality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(20,83,45,0.12)] transition-all duration-500"
              data-testid="feature-organic"
            >
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="bg-[#D6EFD8] w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
              >
                <Leaf className="w-8 h-8 text-[#14532D]" />
              </motion.div>
              <h3 className="font-heading text-2xl md:text-3xl font-medium text-[#052e16] mb-4">
                Organic Ingredients
              </h3>
              <p className="text-base leading-relaxed text-[#3f6212]">
                Certified 100% organic products sourced directly from sustainable farms across India.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(20,83,45,0.12)] transition-all duration-500"
              data-testid="feature-quality"
            >
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="bg-[#D6EFD8] w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
              >
                <Award className="w-8 h-8 text-[#14532D]" />
              </motion.div>
              <h3 className="font-heading text-2xl md:text-3xl font-medium text-[#052e16] mb-4">
                Premium Quality
              </h3>
              <p className="text-base leading-relaxed text-[#3f6212]">
                Rigorous quality checks ensure only the best products reach your kitchen.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(20,83,45,0.12)] transition-all duration-500"
              data-testid="feature-lifestyle"
            >
              <motion.div 
                whileHover={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5 }}
                className="bg-[#D6EFD8] w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
              >
                <Heart className="w-8 h-8 text-[#14532D]" />
              </motion.div>
              <h3 className="font-heading text-2xl md:text-3xl font-medium text-[#052e16] mb-4">
                Healthy Lifestyle
              </h3>
              <p className="text-base leading-relaxed text-[#3f6212]">
                Nourish your body with wholesome, chemical-free groceries for a healthier life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#14532D] to-[#14532D]/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight text-white" data-testid="cta-heading">
              Ready to Experience Pure Organic Goodness?
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-2xl mx-auto">
              Join thousands of families who trust GreenGold Grocers for their daily nutrition needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/products"
                  data-testid="cta-shop-now"
                  className="bg-white text-[#14532D] px-8 py-6 rounded-full text-lg font-medium tracking-wide transition-all shadow-lg hover:shadow-xl inline-block"
                >
                  Shop Now
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/enquiry"
                  data-testid="cta-contact"
                  className="border-2 border-white text-white px-8 py-6 rounded-full text-lg font-medium tracking-wide transition-all hover:bg-white/10 hover:shadow-lg bg-transparent inline-block"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;