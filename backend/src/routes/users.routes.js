import {login, register, getProfile, logout, getCurrentUser} from '../controllers/users.controller.js';
import express from 'express';

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.get('/profile', getProfile);
router.post('/logout', logout )
router.get('/current', getCurrentUser)

export default router;