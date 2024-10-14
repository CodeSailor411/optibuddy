import React, { useState, useEffect } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [fadeIn, setFadeIn] = useState(false); // State to trigger fade-in animation

  useEffect(() => {
    // Trigger fade-in after component mounts
    setFadeIn(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;

    // Basic validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Proceed with API request for sign-up
    console.log('Sign-up data:', { username, email, password });
    // You would make an API request here to send the data to the backend
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
    error: {
      color: 'red',
      marginBottom: '1rem',
    },
  };

  return (
    <>
      <NavBar /> {/* Ensure NavBar is at the top */}
      <div style={styles.container}>
        <h2 style={styles.title}>Sign Up</h2>
        {error && <p style={styles.error}>{error}</p>}
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label>Username:</label>
            <input
              style={styles.input}
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label>Email:</label>
            <input
              style={styles.input}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label>Password:</label>
            <input
              style={styles.input}
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label>Confirm Password:</label>
            <input
              style={styles.input}
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
          >
            Sign Up
          </button>
        </form>
      </div>
      <Footer /> {/* Ensure Footer is at the bottom */}
    </>
  );
};

export default SignUp;
