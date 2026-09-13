import express from 'express';
import { submitContact, getContacts } from '../controllers/contactController.js';
import { getDbStatus } from '../config/db.js';

const router = express.Router();

router.post('/contact', submitContact);
router.get('/contact', getContacts);

router.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    dbConnected: getDbStatus(),
    timestamp: new Date().toISOString(),
  });
});

export default router;
