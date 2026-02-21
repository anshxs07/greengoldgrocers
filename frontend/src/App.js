import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Products from '@/pages/Products';
import Enquiry from '@/pages/Enquiry';
import '@/App.css';

function App() {
  return (
    <div className="App smooth-scroll">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/enquiry" element={<Enquiry />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;