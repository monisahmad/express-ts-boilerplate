import { Router } from 'express';
import { getHealth } from '../controllers/healthCheck';
import { loggerMiddleware } from '../middleware/logger';

const router = Router();

// Define the health endpoint
router.get('/', loggerMiddleware, getHealth);

export default router;
