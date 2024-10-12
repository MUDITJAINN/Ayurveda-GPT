import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/ChatScreen.module.css';

const ChatScreen = ({ isDarkMode }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    const updatedMessages = [...messages, { text: newMessage, sender: 'user' }];
    setMessages(updatedMessages);
    handleGPTResponse("Mock GPT Response");
  };

  const handleGPTResponse = (response) => {
    const newMessages = [...messages, { text: response, sender: 'gpt' }];
    setMessages(newMessages);
  };

  return (
    <div className={`${styles['chat-screen']} ${isDarkMode ? styles.dark : ''}`}>
      <div className={styles['chat-messages']}>
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === 'user' ? styles['user-message'] : styles['gpt-message']}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className={styles['chat-input']}>
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
