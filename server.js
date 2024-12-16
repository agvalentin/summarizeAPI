import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import routes from './src/routes/routes.js';
import errorHandler from './src/middlewares/errorHandler.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', routes);

// Error handling
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});