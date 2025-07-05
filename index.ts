import express, { Request, Response, NextFunction } from 'express';
import prisma from './prisma/client';

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
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World from Express backend!');
});

// Get all anomalies
app.get('/api/anomalies', async (req: Request, res: Response) => {
  try {
    const anomalies = await prisma.anomaly.findMany({
        orderBy: {
            timestamp: 'desc',
        }
    });
    res.json(anomalies);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch anomalies' });
  }
});

// Update anomaly by id
app.patch('/api/anomalies/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const updated = await prisma.anomaly.update({
      where: { id: Number(id) },
      data: req.body,
    });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update anomaly' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
