import React, { useState, useEffect } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fadeIn, setFadeIn] = useState(false); // State to trigger fade-in animation
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Trigger fade-in after component mounts
    setFadeIn(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Authentication logic here...

    // After successful authentication, redirect to home or another page
    navigate('/'); // Use navigate to redirect
  };

  // Inline styles
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      backgroundColor: '#f4f4f4',
      minHeight: '100vh',
      opacity: fadeIn ? 1 : 0, // Transition effect
      transform: fadeIn ? 'translateY(0)' : 'translateY(20px)', // Smooth upward movement
      transition: 'opacity 1s ease, transform 1s ease', // Fade and move effect
    },
    form: {
      backgroundColor: '#ffffff',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '400px',
    },
    inputGroup: {
      marginBottom: '1.5rem',
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      fontSize: '1rem',
      borderRadius: '4px',
      border: '1px solid #ccc',
      outline: 'none',
      boxSizing: 'border-box',
    },
    button: {
      backgroundColor: '#1d4ed8',
      color: '#fff',
      padding: '0.75rem',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '1rem',
      width: '100%',
    },
    buttonHover: {
      backgroundColor: '#2563eb',
    },
    title: {
      marginBottom: '2rem',
      textAlign: 'center',
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#1d4ed8',
    },
  };

  return (
    <>
      <NavBar />
      <div style={styles.container}>
        <h2 style={styles.title}>Sign In</h2>
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label>Email:</label>
            <input
              style={styles.input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={styles.inputGroup}>
            <label>Password:</label>
            <input
              style={styles.input}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
          >
            Sign In
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
