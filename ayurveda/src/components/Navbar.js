import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/chat">Chat</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/resources">Resources</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/about">About</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/ayurveda-books">Ayurveda Books</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
