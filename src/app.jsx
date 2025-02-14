import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './layout/Header';

import Footer from './layout/Footer';


function App() {
  return (
    <>
      <Header /> {/* This will be shown on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer /> {/* This will be shown on all pages */}
    </>
  );
}

export default App;
