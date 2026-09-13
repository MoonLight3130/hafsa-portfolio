import Contact from '../models/Contact.js';
import { getDbStatus } from '../config/db.js';

// In-memory fallback if MongoDB is not active
const memoryContacts = [];

export const submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate fields
    const errors = [];
    if (!name || name.trim().length < 2) errors.push('Name must be at least 2 characters');
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) errors.push('A valid email is required');
    if (!subject || subject.trim().length < 2) errors.push('Subject must be at least 2 characters');
    if (!message || message.trim().length < 10) errors.push('Message must be at least 10 characters');

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors,
      });
    }

    const newContactData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
      createdAt: new Date(),
    };

    if (getDbStatus()) {
      const contact = await Contact.create(newContactData);
      return res.status(201).json({
        success: true,
        message: 'Your message has been received! I will get back to you shortly.',
        data: contact,
      });
    } else {
      memoryContacts.push(newContactData);
      return res.status(201).json({
        success: true,
        message: 'Your message has been received! I will get back to you shortly.',
        data: newContactData,
        note: 'Saved in resilient memory storage',
      });
    }
  } catch (error) {
    console.error('Contact submission error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to process message. Please try again or email directly.',
    });
  }
};

export const getContacts = async (req, res) => {
  try {
    if (getDbStatus()) {
      const contacts = await Contact.find().sort({ createdAt: -1 });
      return res.json({ success: true, count: contacts.length, data: contacts });
    }
    return res.json({ success: true, count: memoryContacts.length, data: memoryContacts });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
