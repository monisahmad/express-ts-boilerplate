import { Request, Response } from 'express';

export const getHealth = (req: Request, res: Response) => {
  res.status(200).json({
    status: 'OK',
    uptime: process.uptime(), // seconds the process has been running
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
  });
};
