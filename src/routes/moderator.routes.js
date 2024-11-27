import express from 'express';
import { viewPendingContent, submitFeedback } from '../controllers/moderator.controller.js';
import verifyToken from '../middleware/auth.middleware.js';
import roleMiddleware from '../middleware/role.middleware.js';

const router = express.Router();

router.get('/pending-content', verifyToken, roleMiddleware(['Moderator']), viewPendingContent);
router.post('/feedback', verifyToken, roleMiddleware(['Moderator']), submitFeedback);

export default router;
