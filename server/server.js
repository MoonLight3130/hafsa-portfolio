import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', contactRoutes);

// Root greeting & status
app.get('/', (req, res) => {
  res.json({
    message: 'Chandni Chauhan Portfolio API is active',
    endpoints: {
      health: '/api/health',
      contact: 'POST /api/contact',
    },
  });
});

// Initialize database & start server
const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`🚀 Portfolio backend server running on http://localhost:${PORT}`);
  });
};

startServer();
