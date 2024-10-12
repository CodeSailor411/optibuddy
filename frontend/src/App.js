import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';

// Authentication components

import SignUp from './components/Navbar/SignUp';

// Custom hooks and components
import { useDocTitle } from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  // AOS initialization for animations
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    };

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  // Set the document title
  useDocTitle("MLD | Molad e Konsult - Bespoke Web and Mobile Applications");

  return (
    <Router>
      <ScrollToTop>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-demo" element={<DemoProduct />} /> 

          {/* Authentication Routes */}
         
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
