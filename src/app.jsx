import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './layout/Header';
import HomePage from './pages/HomePage';
import Footer from './layout/Footer';

import ShopPageDesktop from './pages/ShopPageDesktop';
import ContactPageDesktop from './pages/ContactPageDesktop';

function App() {
  return (
    <>
      <Header /> {/* This will be shown on all pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shop" element={<ShopPageDesktop />} />
        <Route path="about" element={<div>About Page</div>} />
        <Route path="blog" element={<div>Blog Page</div>} />
        <Route path="contact" element={<ContactPageDesktop/>} />
        
      </Routes>
      <Footer /> {/* This will be shown on all pages */}
    </>
  );
}

export default App;
