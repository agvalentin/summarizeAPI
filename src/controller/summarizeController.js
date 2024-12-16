import axios from 'axios';

export const summarizeText = async (req, res, next) => {
  try {
    const { text } = req.body;
    
    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }

    const API_URL = "https://api-inference.huggingface.co/models/google/pegasus-xsum"
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
    if (error.response && error.response.data.error) {
      const errorMessage = error.response.data.error;

      if (errorMessage.includes("Model google/pegasus-xsum is currently loading")) {
        const estimatedTime = error.response.data.estimated_time || 60;
        res.status(503).json({
          error: "An error occurred while processing your request. Please try again later. || TEST"
        });
      } else {
        next(error);
      }
    } else {
      next(error);
    }
  }
};