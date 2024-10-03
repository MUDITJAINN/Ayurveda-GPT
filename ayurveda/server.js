const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// API endpoint to handle chat messages
app.post('/api/chat', async (req, res) => {
    const userMessage = req.body.message;

    try {
        // Make a request to OpenAI's API
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions', // Update this if necessary
            {
                model: 'gpt-3.5-turbo', // Specify your model
                messages: [{ role: 'user', content: userMessage }],
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`, // Use API key from .env
                    'Content-Type': 'application/json',
                },
            }
        );

        // Get the GPT's reply
        const botReply = response.data.choices[0].message.content;
        res.json({ reply: botReply }); // Send back the response
    } catch (error) {
        console.error('Error fetching from OpenAI API:', error);
        res.status(500).send('Something went wrong while fetching the response');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
