import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './layout/Header';

import Footer from './layout/Footer';
import HomePage from './pages/HomePage';


function App() {
  return (
    <>
      <Header /> {/* This will be shown on all pages */}
       <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer /> {/* This will be shown on all pages */}
    </>
  );
}

export default App;
