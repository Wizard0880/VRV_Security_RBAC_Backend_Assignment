import express from 'express';
import { register, login, logout } from '../controllers/auth.controller.js';
import verifyToken from '../middleware/auth.middleware.js';
import { createContent } from '../controllers/content.controller.js';
import roleMiddleware from '../middleware/role.middleware.js';

const router = express.Router();

// Route for user registration
router.post('/register', register);

// Route for user login
router.post('/login', login);

// Route for user logout with token verification
router.post('/logout', (req, res) => {
    // Clear the access and refresh tokens from cookies
    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');

    // Respond with a success message
    res.status(200).json({ message: 'Logged out successfully' });
});
router.post('/create-content', verifyToken, roleMiddleware(['User']), createContent);

export default router;
