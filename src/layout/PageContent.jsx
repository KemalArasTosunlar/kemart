import React from 'react';
import { Outlet } from 'react-router-dom';

const PageContent = () => {
  return (
    <main className="min-h-[calc(100vh-theme(spacing.32))] container mx-auto px-4 py-8">
      <Outlet />
    </main>
  );
}

export default PageContent;
