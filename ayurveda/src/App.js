import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import ChatScreen from './components/ChatScreen';
import About from './components/About';
import Resources from './components/Resources';
import AyurvedaBooks from './components/AyurvedaBooks';
import Navbar from './components/Navbar';
import './App.css';

function App() {
    return (
        <Router>
            <Navbar />
            <Route path="/" exact component={Home} />
            <Route path="/chat" component={ChatScreen} />
            <Route path="/about" component={About} />
            <Route path="/resources" component={Resources} />
            <Route path="/ayurveda-books" component={AyurvedaBooks} />
        </Router>
    );
}

export default App;
