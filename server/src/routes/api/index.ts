// file path Module-14-Lock-N-Board/server/src/routes/api/index.ts

import { Router } from 'express';
import { ticketRouter } from './ticket-routes.js';
import { userRouter } from './user-routes.js';

const router = Router();

router.use('/tickets', ticketRouter);
router.use('/users', userRouter);

export default router;
