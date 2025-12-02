import express from 'express';
import { register, login, getAllUsers } from '../controllers/userController.js';
import { verifyToken, allowedTo } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/', verifyToken, allowedTo('admin'), getAllUsers);

export default router;