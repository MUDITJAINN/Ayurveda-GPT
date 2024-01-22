// ChatScreen.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./App.css"

const ChatScreen = () => 
  {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    // Your Ayurveda GPT functionality here
    // Example: AyurvedaGPT.sendMessage(newMessage).then(response => handleGPTResponse(response));
  };

  // Handle Ayurveda GPT responses
  const handleGPTResponse = (response) => {
    const newMessages = [...messages, { text: response, sender: 'gpt' }];
    setMessages(newMessages);
  };

  return (
    <div className="chat-screen">
      <div style={{ height: '500px', border: '1px solid #ccc', overflowY: 'auto' }}>
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === 'user' ? 'user-message' : 'gpt-message'}>
            {msg.text}
          </div>
        ))}
      </div>
      <div style={{ marginTop: '10px' }}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default ChatScreen;
