import axios from 'axios';

export const summarizeText = async (req, res, next) => {
  try {
    const { text } = req.body;
    
    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }

    const API_URL = "https://api-inference.huggingface.co/models/sshleifer/distilbart-cnn-12-6";
    const response = await axios.post(
      API_URL,
      { inputs: text },
      {
        headers: {  
          'Authorization': `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const summary = response.data[0].summary_text;
    res.json({ summary });
  } catch (error) {
    next(error);
  }
};