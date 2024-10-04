import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';  // Import axios for API requests
import styles from '../styles/ChatScreen.module.css';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = async () => {
    if (newMessage.trim() === '') return;

    // Update the messages state with the user's message
    const updatedMessages = [...messages, { text: newMessage, sender: 'user' }];
    setMessages(updatedMessages);

    // Clear the input field
    setNewMessage('');

    try {
      // Send user's message to the backend server
      const response = await axios.post('http://localhost:5000/api/chat', {
        message: newMessage,
      });

      // Get GPT's response from the server
      const gptResponse = response.data.reply;

      // Handle GPT's response
      handleGPTResponse(gptResponse);
    } catch (error) {
      console.error('Error fetching response from the API:', error);
      handleGPTResponse("Sorry, I couldn't get a response. Please try again.");
    }
  };

  // Handle key press event
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleGPTResponse = (response) => {
    const newMessages = [...messages, { text: response, sender: 'gpt' }];
    setMessages(newMessages);
  };

  return (
      <div className={styles['chat-screen']}>
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
              onKeyPress={handleKeyPress}  // Add this line
          />
          <button onClick={handleSendMessage}>Send</button>
          <Link to="/">Back to Home</Link>
        </div>
      </div>
  );
};

export default ChatScreen;
