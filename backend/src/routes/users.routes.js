import {login, register, getProfile} from '../controllers/users.controller.js';
import express from 'express';

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.get('/profile/:userId', getProfile);

export default router;