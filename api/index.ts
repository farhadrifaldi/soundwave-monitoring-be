import { VercelRequest, VercelResponse } from '@vercel/node';
import app from '../express-app';

export default function handler(req: VercelRequest, res: VercelResponse) {
  app(req, res);
}
