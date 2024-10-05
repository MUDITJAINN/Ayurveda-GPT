// src/pages/Resources.jsx
import React from 'react';
import '../App.css';

const Resources = () => {
    return (
        <div className="resources-section">
            <h1>Resources</h1>
            <p>
                Here are some valuable resources that you can explore:
            </p>
            <ul className="resource-list">
                <li><a href="#resource1" className="App-link">Resource 1</a></li>
                <li><a href="#resource2" className="App-link">Resource 2</a></li>
                <li><a href="#resource3" className="App-link">Resource 3</a></li>
            </ul>
        </div>
    );
};

export default Resources;
