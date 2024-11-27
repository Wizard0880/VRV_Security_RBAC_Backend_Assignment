import User from '../models/user.model.js';
import { generateAccessToken, generateRefreshToken } from '../utils/token.utils.js';

const register = async (req, res) => {
    try {
        const { fullname, email, password, role } = req.body;

        // Check if user with the given email already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        // Create the new user
        const newUser = new User({ fullname, email, password, role });

        // Save the new user (password hashing happens in the pre-save middleware)
        await newUser.save();

        // Send success response
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Server Error:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

const login = async (req, res) => {
    try {
        // Destructure the email and password from the request body
        const { email, password } = req.body;

        // Check if the user exists by searching for the email
        const user = await User.findOne({ email });

        // If user doesn't exist or password comparison fails, return an error response
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ message: 'Invalid Credentials' });
        }

        // Generate the access and refresh tokens
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        // Save the refresh token in the database
        user.refreshToken = refreshToken;
        await user.save();

        // Set the accessToken in an HTTP-only cookie for secure client-side access
        res.cookie('accessToken', accessToken, { httpOnly: true });

        // Set the refreshToken in an HTTP-only cookie for future token refresh
        res.cookie('refreshToken', refreshToken, { httpOnly: true });

        // Respond with a success message
        res.json({ message: 'Logged in successfully' });
    } catch (error) {
        // If an error occurs, log the error and send a 500 response
        res.status(500).json({ message: 'Server Error' });
    }
};

const logout = async (req, res) => {
    try {
        // Find the user by the refresh token or user ID
        const user = await User.findOne({ refreshToken: req.cookies.refreshToken });

        if (user) {
            // Clear the refresh token in the database
            user.refreshToken = null;
            await user.save();
        }

        // Clear the cookies for both access and refresh tokens
        res.clearCookie('accessToken');
        res.clearCookie('refreshToken');

        // Respond with a success message
        res.json({ message: 'Logged out successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

export { register, login, logout };
