import express, { Request, Response, NextFunction } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Simple API key middleware
const API_KEY = process.env.API_KEY || 'my-default-api-key';

const apiKeyMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const apiKey = req.header('x-api-key');
  if (apiKey !== API_KEY) {
    res.status(401).json({ error: 'Unauthorized: Invalid API key' });
    return;
  }
  next();
};

app.use(apiKeyMiddleware);

app.get('/', (req, res) => {
  res.send('Hello World from Express backend!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
