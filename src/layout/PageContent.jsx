import React from 'react';
import { Outlet } from 'react-router-dom';

const PageContent = () => {
  return (
    <main className="min-h-[calc(100vh-theme(spacing.32))]">
      <Outlet />
    </main>
  );
}

export default PageContent;
