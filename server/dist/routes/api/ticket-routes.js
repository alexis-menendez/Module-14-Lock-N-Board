// file path Module-14-Lock-N-Board/server/dist/routes/api/ticket-routes.js

import express from 'express';
import { getAllTickets, getTicketById, createTicket, updateTicket, deleteTicket, } from '../../controllers/ticket-controller.js';
const router = express.Router();

router.get('/', getAllTickets);

router.get('/:id', getTicketById);

router.post('/', createTicket);

router.put('/:id', updateTicket);

router.delete('/:id', deleteTicket);
export { router as ticketRouter };