import express from 'express';
import { OpenAI } from 'openai';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config(); // Load environment variables from .env

const app = express();
const port = 3000; // You can choose any available port

// Initialize OpenAI client with your API key from environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Middleware
app.use(cors()); // Enable CORS for all origins (for development)
app.use(express.json()); // To parse JSON request bodies

// API Endpoint for Chat
app.post('/api/chat', async (req, res) => {
  const userMessage = req.body.message;
  if (!userMessage) {
    return res.status(400).json({ error: 'Message is required.' });
  }

  try {
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // You can try "gpt-4o" or "gpt-4" if you have access
      messages: [{ role: "user", content: userMessage }],
    });

    const aiResponse = chatCompletion.choices[0].message.content;
    res.json({ reply: aiResponse });

  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    res.status(500).json({ error: 'Failed to get response from AI.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Swastha AI Backend running on http://localhost:${port}`);
});