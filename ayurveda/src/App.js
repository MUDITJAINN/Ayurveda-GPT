import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import ChatScreen from './components/ChatScreen';
import './styles/App.module.css';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/chat" component={ChatScreen} />
    </Router>
  );
}

export default App;
