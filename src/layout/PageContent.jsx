import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ShopPageMobile from '../pages/ShopPageMobile';
import ShopPageDesktop from '../pages/ShopPageDesktop';
import ContactPageMobile from '../pages/ContactPageMobile';
import ContactPageDesktop from '../pages/ContactPageDesktop';
import ProductDetailPage from '../pages/ProductDetailPage';

const PageContent = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <main className="min-h-[calc(100vh-theme(spacing.32))] container mx-auto px-4 py-8">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={isMobile ? <Navigate to="/shop-mobile" /> : <Navigate to="/shop-desktop" />} />
        <Route path="/shop-mobile" element={<ShopPageMobile />} />
        <Route path="/shop-desktop" element={<ShopPageDesktop />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/contact" element={isMobile ? <Navigate to="/contact-mobile" /> : <Navigate to="/contact-desktop" />} />
        <Route path="/contact-mobile" element={<ContactPageMobile />} />
        <Route path="/contact-desktop" element={<ContactPageDesktop />} />
      </Routes>
    </main>
  );
}

export default PageContent;
