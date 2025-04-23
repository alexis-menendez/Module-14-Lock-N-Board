// file path Module-14-Lock-N-Board/server/src/routes/api/user-routes.ts
import express from 'express';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser, } from '../../controllers/user-controller.js';
const router = express.Router();
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
export { router as userRouter };
