import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import ProductDetailPage from '../pages/ProductDetailPage'; // Import the new Product Detail Page

const PageContent = () => {
  return (
    <main className="min-h-[calc(100vh-theme(spacing.32))] container mx-auto px-4 py-8">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/product/:id" component={ProductDetailPage} /> {/* New route for Product Detail Page */}
      </Switch>
    </main>
  );
}

export default PageContent;
