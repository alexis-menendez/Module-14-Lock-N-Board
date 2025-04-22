import { Router } from 'express';
export const login = async (req, res) => {

    // TODO: If the user exists and the password is correct, return a JWT token
};
const router = Router();
router.post('/login', login);
export default router;