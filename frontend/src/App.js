import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

// Chakra UI and Theme
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import Chatbot from './pages/Chatbot'; // Import the Chatbot component

// Authentication components
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn'; // Import the SignIn component

// Custom hooks and components
import { useDocTitle } from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';

// Extend the Chakra UI theme with custom colors
const theme = extendTheme({
  colors: {
    blue: {
      900: '#1A365D',  // Dark blue tone for the theme
      700: '#2A4365',  // Lighter blue for hover states
    },
    white: '#FFFFFF',  // White text for contrast
    gray: {
      800: '#1A202C',  // Dark gray for chatbot background
      600: '#2D3748',  // Gray for text inputs
      200: '#EDF2F7'   // Light gray for message bubble contrast
    }
  }
});

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
    // Wrap the app in ChakraProvider to apply the custom theme
    <ChakraProvider theme={theme}>
      <Router>
        <ScrollToTop>
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/chatbot" element={<Chatbot />} /> {/* Chatbot route */}
            
            {/* Authentication Routes */}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} /> {/* SignIn route */}
          </Routes>
        </ScrollToTop>
      </Router>
    </ChakraProvider>
  );
}

export default App;
