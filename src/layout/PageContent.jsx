import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const PageContent = () => {
  return (
    <main className="min-h-[calc(100vh-theme(spacing.32))] container mx-auto px-4 py-8">
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* Add more routes here */}
      </Switch>
    </main>
  );
}

export default PageContent