import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home'; 
import About from '../pages/About';
import Services from '../pages/Services';
import Products from '../pages/Products';
import ProductDetails from '../pages/ProductDetails';
import Contact from '../pages/Contact';
import Supply from '../pages/supply';
import Replacement from '../pages/replacement';
import Components from '../pages/components';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/supply" element={<Supply />} />
          <Route path="/replacement" element={<Replacement />} />
          <Route path="/components" element={<Components />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
