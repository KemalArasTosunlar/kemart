import React from 'react';
import { Switch, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ShopPageMobile from '../pages/ShopPageMobile'; // Import the Mobile Shop Page
import ShopPageDesktop from '../pages/ShopPageDesktop'; // Import the Desktop Shop Page
import ContactPageMobile from '../pages/ContactPageMobile'; // Import the Mobile Contact Page
import ContactPageDesktop from '../pages/ContactPageDesktop'; // Import the Desktop Contact Page
import ProductDetailPage from '../pages/ProductDetailPage'; // Import the new Product Detail Page

const PageContent = () => {
  const isMobile = window.innerWidth <= 768; // Adjust the width as needed

  return (
    <main className="min-h-[calc(100vh-theme(spacing.32))] container mx-auto px-4 py-8">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" element={isMobile ? <Navigate to="/shop-mobile" /> : <Navigate to="/shop-desktop" />} />
        <Route exact path="/shop-mobile" component={ShopPageMobile} /> {/* New route for Mobile Shop Page */}
        <Route exact path="/shop-desktop" component={ShopPageDesktop} /> {/* New route for Desktop Shop Page */}
        <Route exact path="/product/:id" component={ProductDetailPage} /> {/* New route for Product Detail Page */}
        <Route exact path="/contact" element={isMobile ? <Navigate to="/contact-mobile" /> : <Navigate to="/contact-desktop" />} />
        <Route exact path="/contact-mobile" component={ContactPageMobile} /> {/* New route for Mobile Contact Page */}
        <Route exact path="/contact-desktop" component={ContactPageDesktop} /> {/* New route for Desktop Contact Page */}
      </Switch>
    </main>
  );
}

export default PageContent;
