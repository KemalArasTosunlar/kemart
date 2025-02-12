import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import App from './App.jsx';
import ContactPageMobile from './pages/ContactPageMobile.jsx';
import ContactPageDesktop from './pages/ContactPageDesktop.jsx';
import ProductDetailPage from './pages/ProductDetailPage.jsx';
import ShopPage from './pages/ShopPage.jsx';
import HomePage from './pages/HomePage.jsx';

const Main = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <Router>
      <Routes>
        <Route path="/*" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={isMobile ? <Navigate to="/contact-mobile" /> : <Navigate to="/contact-desktop" />} />
          <Route path="contact-mobile" element={<ContactPageMobile />} />
          <Route path="contact-desktop" element={<ContactPageDesktop />} />
          <Route path="product/:id" element={<ProductDetailPage />} />
          <Route path="shop" element={<ShopPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
