import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Target, Users, Sparkles } from 'lucide-react';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F5EFE6]/30 to-[#FDFBF7] py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 max-w-4xl mx-auto"
          >
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-[#052e16]" data-testid="about-hero-heading">
              Our Story
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-[#6B5D52]">
              Born from a passion for healthy living and sustainable farming, GreenGold Grocers is committed to bringing you the purest organic products from India's finest farms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="https://images.unsplash.com/photo-1704989522658-81902cc56f54?auto=format&fit=crop&q=80&w=800"
                alt="Golden hour wheat farm field in India"
                className="w-full h-[500px] object-cover rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgb(20,83,45,0.15)] transition-all duration-500"
                data-testid="about-farm-image"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="inline-block">
                <span className="text-sm font-medium tracking-wider uppercase text-[#14532D]/80 bg-[#F5EFE6] px-4 py-2 rounded-full">
                  Our Journey
                </span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight text-[#052e16]" data-testid="brand-story-heading">
                Rooted in Tradition, Growing with Purpose
              </h2>
              <p className="text-base leading-relaxed text-[#6B5D52]">
                GreenGold Grocers was founded with a simple belief: that every family deserves access to nutritious, chemical-free food. We partner directly with organic farmers across India who share our commitment to sustainable agriculture and ethical practices.
              </p>
              <p className="text-base leading-relaxed text-[#6B5D52]">
                From the golden wheat fields of Punjab to the spice gardens of Kerala, we carefully source every product to ensure it meets our rigorous standards for quality and purity. Our mission is to reconnect urban families with the authentic tastes and nutritional benefits of traditional Indian agriculture.
              </p>
              <p className="text-base leading-relaxed text-[#6B5D52]">
                Today, we're proud to serve thousands of health-conscious families, delivering not just groceries, but a commitment to wellness, sustainability, and the revival of India's rich agricultural heritage.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-[#FDFBF7] to-[#F5EFE6]/20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(20,83,45,0.15)] transition-all duration-500"
              data-testid="mission-card"
            >
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="bg-[#14532D] w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
              >
                <Target className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="font-heading text-3xl md:text-4xl font-semibold text-[#052e16] mb-4">
                Our Mission
              </h3>
              <p className="text-base leading-relaxed text-[#6B5D52]">
                To make premium organic groceries accessible to every household, promoting healthier lifestyles while supporting sustainable farming practices that respect our environment and farming communities.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(20,83,45,0.15)] transition-all duration-500"
              data-testid="vision-card"
            >
              <motion.div 
                whileHover={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 0.6 }}
                className="bg-[#7A5C47] w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
              >
                <Sparkles className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="font-heading text-3xl md:text-4xl font-semibold text-[#052e16] mb-4">
                Our Vision
              </h3>
              <p className="text-base leading-relaxed text-[#6B5D52]">
                To become India's most trusted organic grocery brand, creating a thriving ecosystem where consumers, farmers, and the environment all flourish together in harmony.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
            <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight text-[#052e16] mb-4" data-testid="values-heading">
              Our Core Values
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-[#6B5D52] max-w-2xl mx-auto">
              These principles guide everything we do, from farm to table.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center space-y-4"
              data-testid="value-purity"
            >
              <div className="bg-[#F5EFE6] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto">
                <Sprout className="w-10 h-10 text-[#14532D]" />
              </div>
              <h3 className="font-heading text-2xl font-medium text-[#052e16]">
                Purity First
              </h3>
              <p className="text-base leading-relaxed text-[#6B5D52]">
                Zero chemicals, zero pesticides, zero compromise on what goes into your body.
              </p>
            </motion.div>

            {/* Value 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center space-y-4"
              data-testid="value-farmers"
            >
              <div className="bg-[#F5EFE6] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto">
                <Users className="w-10 h-10 text-[#14532D]" />
              </div>
              <h3 className="font-heading text-2xl font-medium text-[#052e16]">
                Farmer Partnerships
              </h3>
              <p className="text-base leading-relaxed text-[#6B5D52]">
                Fair prices and long-term relationships that empower our farming communities.
              </p>
            </motion.div>

            {/* Value 3 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center space-y-4"
              data-testid="value-sustainability"
            >
              <div className="bg-[#F5EFE6] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto">
                <Sprout className="w-10 h-10 text-[#14532D]" />
              </div>
              <h3 className="font-heading text-2xl font-medium text-[#052e16]">
                Sustainability
              </h3>
              <p className="text-base leading-relaxed text-[#6B5D52]">
                Eco-friendly practices that protect our planet for future generations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;