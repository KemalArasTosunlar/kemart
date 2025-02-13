import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './layout/Header.jsx';
import Footer from './layout/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import HomePageMobile from './pages/HomePageMobile.jsx';

function App() {
  const isMobile = window.innerWidth <= 768; // Adjust the width as needed

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {isMobile ? <HomePageMobile /> : <HomePage />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
