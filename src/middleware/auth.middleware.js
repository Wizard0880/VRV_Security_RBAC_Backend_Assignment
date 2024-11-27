import jwt from 'jsonwebtoken';

// Middleware to verify JWT tokens
const verifyToken = (req, res, next) => {
    try {
        // Extract token from cookies or Authorization header
        const token =
            req.cookies?.accessToken || 
            (req.headers['authorization'] && req.headers['authorization'].split(' ')[1]); // Remove "Bearer" prefix if present

        if (!token) {
            return res.status(401).json({ message: 'Access Denied: No Token Provided' });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded; // Ensure this contains `_id`
            next();
        } catch (error) {
            res.status(400).json({ success: false, message: 'Invalid token' });
        }
    } catch (err) {
        // Handle different token verification errors
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token Expired' });
        } else if (err.name === 'JsonWebTokenError') {
            return res.status(403).json({ message: 'Invalid Token' });
        } else {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }
};

export default verifyToken;
