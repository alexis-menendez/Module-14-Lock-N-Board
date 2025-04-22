// file path Module-14-Lock-N-Board/server/dist/routes/index.js

import { Router } from 'express';
import authRoutes from './auth-routes.js';
import apiRoutes from './api/index.js';
const router = Router();
router.use('/auth', authRoutes);

// TODO: Add authentication to the API routes
router.use('/api', apiRoutes);
export default router;