import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Atta & Whole Grains', 'Healthy Cereals', 'Superfoods', 'Natural Grocery'];

  const products = [
    {
      id: 1,
      name: 'Organic Whole Wheat Atta',
      category: 'Atta & Whole Grains',
      description: 'Stone-ground whole wheat flour from organic farms',
      image: 'https://images.unsplash.com/photo-1535032756890-c4d0a4dbfd06?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: 2,
      name: 'Multigrain Atta',
      category: 'Atta & Whole Grains',
      description: 'Nutritious blend of wheat, oats, and millet',
      image: 'https://images.unsplash.com/photo-1608797178974-15b35a64ede9?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: 3,
      name: 'Organic Brown Rice',
      category: 'Atta & Whole Grains',
      description: 'Unpolished brown rice with natural fiber',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: 4,
      name: 'Steel Cut Oats',
      category: 'Healthy Cereals',
      description: 'Premium quality oats for a healthy breakfast',
      image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: 5,
      name: 'Millet Mix',
      category: 'Healthy Cereals',
      description: 'Ancient grains packed with nutrition',
      image: 'https://images.unsplash.com/photo-1607672632458-9eb56696346b?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: 6,
      name: 'Quinoa',
      category: 'Superfoods',
      description: 'Protein-rich superfood for modern diets',
      image: 'https://images.unsplash.com/photo-1515543904379-3d6e8b2e3af2?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: 7,
      name: 'Chia Seeds',
      category: 'Superfoods',
      description: 'Omega-3 rich seeds for daily wellness',
      image: 'https://images.unsplash.com/photo-1587816655854-2b8d85c597c3?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: 8,
      name: 'Organic Turmeric Powder',
      category: 'Natural Grocery',
      description: 'Pure turmeric with natural curcumin',
      image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: 9,
      name: 'Cold Pressed Coconut Oil',
      category: 'Natural Grocery',
      description: 'Virgin coconut oil for cooking and wellness',
      image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=400',
    },
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
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
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-[#052e16]" data-testid="products-hero-heading">
              Our Products
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-[#5C4A3A]">
              Discover our curated selection of premium organic groceries, sourced from the finest farms across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          {/* Category Filter */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  data-testid={`category-${category.toLowerCase().replace(/\s+/g, '-')}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full font-medium text-base transition-all ${
                    selectedCategory === category
                      ? 'bg-[#14532D] text-white shadow-lg shadow-[#14532D]/30'
                      : 'bg-white text-[#14532D] hover:bg-[#E8DCC8] border border-[#E8DCC8] hover:shadow-md'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(20,83,45,0.15)] transition-all duration-500 group"
                data-testid={`product-card-${product.id}`}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                    className="text-xs font-medium tracking-wider uppercase text-[#14532D]/80 bg-[#E8DCC8] px-3 py-1 rounded-full inline-block"
                  >
                    {product.category}
                  </motion.div>
                  <h3 className="font-heading text-2xl font-medium text-[#052e16]">
                    {product.name}
                  </h3>
                  <p className="text-base leading-relaxed text-[#5C4A3A]">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No products message */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-[#5C4A3A]">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;