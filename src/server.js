import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database.config.js';
import authRoutes from './routes/auth.routes.js';
import adminRoutes from './routes/admin.routes.js';
import moderatorRoutes from './routes/moderator.routes.js';


dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/moderator', moderatorRoutes);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
