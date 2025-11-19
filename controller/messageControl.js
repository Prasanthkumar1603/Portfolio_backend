const Message = require('../models/messageModel');

// Submit a new message
const submitMessage = async (req, res) => {
  try {
    const { name, whatsapp, message } = req.body;

    if (!name || !whatsapp || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newMessage = new Message({
      name,
      whatsapp,
      message
    });

    await newMessage.save();
    res.status(201).json({ message: 'Message saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all messages
const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a single message by ID
const deleteMessage = async (req, res) => {
  try {
    const message = await Message.findByIdAndDelete(req.params.id);
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }
    res.json({ message: 'Message deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete all messages
const deleteAllMessages = async (req, res) => {
  try {
    await Message.deleteMany();
    res.json({ message: 'All messages deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  submitMessage,
  getMessages,
  deleteMessage,
  deleteAllMessages,
};
