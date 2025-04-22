// file path Module-14-Lock-N-Board/server/dist/routes/api/index.js

import { Router } from 'express';
import { ticketRouter } from './ticket-routes.js';
import { userRouter } from './user-routes.js';
const router = Router();
router.use('/tickets', ticketRouter);
router.use('/users', userRouter);
export default router;