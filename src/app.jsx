import React from 'react';
import Header from './layout/Header';
import PageContent from './layout/PageContent';
import Footer from './layout/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <PageContent />
      <Footer />
    </div>
  );
}

export default App