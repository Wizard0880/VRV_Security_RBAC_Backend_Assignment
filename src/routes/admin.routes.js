import express from 'express';
import {
    viewLogs,
    updateUserStatus,
    deleteUser,
} from '../controllers/admin.controller.js';
import verifyToken from '../middleware/auth.middleware.js';
import roleMiddleware from '../middleware/role.middleware.js';


const router = express.Router();

/**
 * Route: View system logs
 * Method: GET
 * Access: Admin-only
 */
router.get('/logs', verifyToken, roleMiddleware(['Admin']), viewLogs);

/**
 * Route: Update a user's status (Active/Locked)
 * Method: PUT
 * Access: Admin-only
 */
router.put('/update-user-status', verifyToken, roleMiddleware(['Admin']), updateUserStatus);

/**
 * Route: Delete a user account
 * Method: DELETE
 * Access: Admin-only
 */
router.delete('/delete-user/:userId', verifyToken, roleMiddleware(['Admin']), deleteUser);

export default router;
