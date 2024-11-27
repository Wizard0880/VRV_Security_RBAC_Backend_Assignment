import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true, // Removes extra spaces from the title
        },
        body: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ['Pending', 'Approved', 'Rejected', 'Reviewed'],  // Added Reviewed status
            default: 'Pending',
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // Establish a reference to the User model
            required: true,
        },
        feedback: {
            type: String,  // Add feedback field
        }
    },
    {
        timestamps: true, // Adds createdAt and updatedAt fields
    }
);

// Virtual field to include creator's details if populated
contentSchema.virtual('creatorDetails', {
    ref: 'User',
    localField: 'createdBy',
    foreignField: '_id',
    justOne: true,
});

// Static method to fetch content by status
contentSchema.statics.findByStatus = async function (status) {
    return this.find({ status });
};

// Static method to fetch all content created by a specific user
contentSchema.statics.findByCreator = async function (userId) {
    return this.find({ createdBy: userId });
};

// Check if the model already exists before defining it
const Content = mongoose.models.Content || mongoose.model('Content', contentSchema);

export default Content;
