import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import healthCheck from './routes/healthCheck';
import config from './config';

const app = express();
const PORT = config.port;

// Middleware to parse JSON
app.use(express.json());
app.use('/healthCheck', healthCheck);

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello from TypeScript Express!',
    mode: config.nodeEnv,
  });
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
