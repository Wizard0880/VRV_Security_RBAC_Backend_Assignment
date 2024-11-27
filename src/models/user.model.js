import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ['User', 'Admin', 'Moderator'],
            default: 'User',
        },
        status: { // Field for account status
            type: String,
            enum: ['Active', 'Locked'],
            default: 'Active',
        },
        refreshToken: { // Field for refresh token
            type: String,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

// Pre-save middleware to hash the password before saving the user document
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    try {
        this.password = await bcrypt.hash(this.password, 10);
        next();
    } catch (err) {
        next(err);
    }
});

// Method to compare the given password with the stored hashed password
userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

// Virtual field to get full user details for logging and admin purposes
userSchema.virtual('details').get(function () {
    return {
        id: this._id,
        fullname: this.fullname,
        email: this.email,
        role: this.role,
        status: this.status,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
    };
});

// Static method to find active users by role
userSchema.statics.findActiveByRole = async function (role) {
    return this.find({ role, status: 'Active' });
};

// Check if the model already exists before defining it
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
