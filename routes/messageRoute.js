const express = require('express');
const router = express.Router();
const { submitMessage, getMessages, deleteMessage, deleteAllMessages } = require('../controller/messageControl');

// POST /api/messages - Submit a contact message
router.post('/', submitMessage);

// GET /api/messages - Get all contact messages for admin
router.get('/', getMessages);

// DELETE /api/messages/:id - Delete a single message by ID
router.delete('/:id', deleteMessage);

// DELETE /api/messages - Delete all messages
router.delete('/', deleteAllMessages);

module.exports = router;
