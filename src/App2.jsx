import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import App from './App.jsx';
import ContactPageMobile from './pages/ContactPageMobile.jsx';
import ContactPageDesktop from './pages/ContactPageDesktop.jsx';
import ProductDetailPage from './pages/ProductDetailPage.jsx';
import ShopPage from './pages/ShopPage.jsx';
import ShopPageMobile from './pages/ShopPageMobile.jsx';
import ShopPageDesktop from './pages/ShopPageDesktop.jsx';
import HomePage from './pages/HomePage.jsx';
import HomePageMobile from './pages/HomePageMobile.jsx';

const Main = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route index element={isMobile ? <HomePageMobile /> : <HomePage />} />
        <Route path="contact" element={isMobile ? <Navigate to="/contact-mobile" /> : <Navigate to="/contact-desktop" />} />
        <Route path="contact-mobile" element={<ContactPageMobile />} />
        <Route path="contact-desktop" element={<ContactPageDesktop />} />
        <Route path="product/:id" element={<ProductDetailPage />} />
        <Route path="shop" element={isMobile ? <Navigate to="/shop-mobile" /> : <Navigate to="/shop-desktop" />} />
        <Route path="shop-mobile" element={<ShopPageMobile />} />
        <Route path="shop-desktop" element={<ShopPageDesktop />} />
        <Route path="about" element={<div>About Page</div>} />
        <Route path="blog" element={<div>Blog Page</div>} />
        <Route path="login" element={<div>Login Page</div>} />

      </Routes>
    </Router>
  );
};

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<Main />);
