import Log from '../models/Log.model.js';
import User from '../models/User.model.js';

/**
 * Helper function to create a log entry
 */
const createLog = async (userId, action, details = '') => {
    if (!userId) {
        console.error('No userId provided for creating log.');
        return;
    }

    try {
        const log = await Log.create({ user: userId, action, details });
        console.log('Log created:', log);
    } catch (error) {
        console.error('Error creating log:', error.message);
    }
};

/**
 * GET /admin/view-logs
 * View all logs.
 */
export const viewLogs = async (req, res) => {
    try {
        const logs = await Log.find()
            .populate('user').exec()
            //.sort({ createdAt: -1 }); // Sort logs by latest
        console.log('Fetched logs:', logs);    
        res.status(200).json({ success: true, logs });
        
    } catch (error) {
        console.error('Error fetching logs:', error.message, error.stack);
        res.status(500).json({ success: false, message: 'Error fetching logs' });
    }
};

/**
 * POST /admin/update-user-status
 * Update user status (new route).
 * Body: { userId: String, status: "Active" | "Locked" }
 */
export const updateUserStatus = async (req, res) => {
    const { userId, status } = req.body;

    if (!userId || !['Active', 'Locked'].includes(status)) {
        return res.status(400).json({ success: false, message: 'Invalid user ID or status' });
    }

    try {
        const user = await User.findByIdAndUpdate(userId, { status }, { new: true });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        await createLog(req.user._id, 'Updated User Status', `User ${userId} status updated to ${status}`);
        res.status(200).json({
            success: true,
            message: `User status updated to ${status}`,
            user,
        });
    } catch (error) {
        console.error('Error updating user status:', error.message, error.stack);
        res.status(500).json({ success: false, message: 'Error updating user status' });
    }
};

/**
 * DELETE /admin/delete-user/:userId
 * Delete a user account (new route).
 */
export const deleteUser = async (req, res) => {
    const { userId } = req.params;

    if (!userId) {
        return res.status(400).json({ success: false, message: 'Invalid user ID' });
    }

    try {
        const user = await User.findByIdAndDelete(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        await createLog(req.user._id, 'Deleted User Account', `User with ID ${userId} was deleted`);
        res.status(200).json({
            success: true,
            message: `User with ID ${userId} successfully deleted`,
        });
    } catch (error) {
        console.error('Error deleting user:', error.message, error.stack);
        res.status(500).json({ success: false, message: 'Error deleting user' });
    }
};
