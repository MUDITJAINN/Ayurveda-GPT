import React from 'react';
import '../../src/App.css';

const Header = ({ toggleDarkMode, isDarkMode }) => (
  <header className={`App-header ${isDarkMode ? 'dark' : ''}`}>
    <h1>AyurGenius: Your Ayurvedic Companion</h1>
    <p>Welcome to AyurGenius, your personal guide to Ayurveda!</p>
    <button onClick={toggleDarkMode}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  </header>
);

export default Header;
