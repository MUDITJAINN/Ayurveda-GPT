// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import ChatScreen from './ChatScreen';

function Home() {
  return (
    <div >
      <header className="App-header">
        <h1>AyurGenius: Your Ayurvedic Companion</h1>
        <p>Welcome to AyurGenius, your personal guide to Ayurveda!</p>
        <p>Ask any Ayurveda-related questions, and AyurGenius will provide insightful answers.</p>
        <Link className="App-link" to="/chat">
          Get Started
        </Link>
      </header>

      
      <section className="features">
        <h2>Key Features</h2>
        <div className="feature">
          <h3>Personalized Guidance</h3>
          <p>Get personalized Ayurvedic advice based on your health and lifestyle.</p>
        </div>
        <div className="feature">
          <h3>Natural Remedies</h3>
          <p>Explore natural remedies and herbal solutions recommended by AyurGenius.</p>
        </div>
        <div className="feature">
          <h3>Wellness Tips</h3>
          <p>Receive daily wellness tips and Ayurvedic practices to enhance your overall well-being.</p>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Experience AyurGenius?</h2>
        <p>Start your Ayurvedic journey today and discover a healthier you!</p>
        <Link className="cta-button" to="/chat">
          Get Started
        </Link>
      </section>

      <footer className="footer">
        <p>© 2024 AyurGenius. All rights reserved.</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/chat" component={ChatScreen} />
    </Router>
  );
}

export default App;
