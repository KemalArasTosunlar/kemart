import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import ContactPageMobile from '../pages/ContactPageMobile'; // Import the Mobile Contact Page
import ContactPageDesktop from '../pages/ContactPageDesktop'; // Import the Desktop Contact Page


import ProductDetailPage from '../pages/ProductDetailPage'; // Import the new Product Detail Page

const PageContent = () => {
  return (
    <main className="min-h-[calc(100vh-theme(spacing.32))] container mx-auto px-4 py-8">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/product/:id" component={ProductDetailPage} /> {/* New route for Product Detail Page */}
        <Route exact path="/contact" component={ContactPageMobile} /> {/* New route for Mobile Contact Page */}
        <Route exact path="/contact-desktop" component={ContactPageDesktop} /> {/* New route for Desktop Contact Page */}

      </Switch>

    </main>
  );
}

export default PageContent;
