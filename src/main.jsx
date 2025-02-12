import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import App from './App';
import ContactPageMobile from './pages/ContactPageMobile';
import ContactPageDesktop from './pages/ContactPageDesktop';
import ProductDetailPage from './pages/ProductDetailPage';
import ShopPage from './pages/ShopPage';
import HomePage from './pages/HomePage';

const Main = () => {
  const isMobile = window.innerWidth <= 768; // Adjust the width as needed

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={isMobile ? <Navigate to="/contact-mobile" /> : <Navigate to="/contact-desktop" />} />
        <Route path="/contact-mobile" element={<ContactPageMobile />} />
        <Route path="/contact-desktop" element={<ContactPageDesktop />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
