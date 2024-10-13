import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/ChatScreen.module.css';

const ChatScreen = ({ isDarkMode }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (newMessage.trim() === '') return;

    // Add user's message to the chat
    const updatedMessages = [...messages, { text: newMessage, sender: 'user' }];
    setMessages(updatedMessages);
    setNewMessage(''); // Clear input after sending

    // Call OpenAI API to get GPT response
    await getGPTResponse(newMessage);
  };

  const getGPTResponse = async (userMessage) => {
    setLoading(true); // Show loading while waiting for response

    try {
      const response = await axios.post(
          'https://api.openai.com/v1/chat/completions',
          {
            model: 'gpt-3.5-turbo',
            messages: [
              { role: 'system', content: 'You are a helpful assistant.' },
              { role: 'user', content: userMessage }
            ],
            max_tokens: 150,
          },
          {
            headers: {
              'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
              'Content-Type': 'application/json',
            },
          }
      );


      const gptMessage = response.data.choices[0].message.content;

      // Add GPT response to chat
      const newMessages = [...messages, { text: gptMessage, sender: 'gpt' }];
      setMessages(newMessages);
    } catch (error) {
      console.error('Error fetching GPT response:', error);
      // Handle error (optional)
    } finally {
      setLoading(false);
    }
  };


  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
dark-mode
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
      <div className={styles['chat-screen']}>
        <div className={styles['chat-messages']}>
          {messages.map((msg, index) => (
              <div key={index} className={msg.sender === 'user' ? styles['user-message'] : styles['gpt-message']}>
                {msg.text}
              </div>
          ))}
          {loading && <div className={styles['loading']}>GPT is typing...</div>}
        </div>
        <div className={styles['chat-input']}>
          <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              disabled={loading}
          />
          <button onClick={handleSendMessage} disabled={loading}>Send</button>
          <Link to="/">Back to Home</Link>
        </div>
      </div>
  );
};

export default ChatScreen;
