import mongoose from 'mongoose';

const logSchema = new mongoose.Schema(
    {
        action: {
            type: String,
            required: true,
            enum: ['Viewed Logs', 'Updated User Status', 'Approved Content', 'Rejected Content', 'Logged In', 'Logged Out'],
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        details: {
            type: String,
            default: '',
        },
    },
    {
        timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
    }
);

logSchema.index({ user: 1, createdAt: -1 });

export default mongoose.model('Log', logSchema);
