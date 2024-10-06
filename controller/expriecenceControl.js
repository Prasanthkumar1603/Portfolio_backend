// controllers/experienceController.js
const Experience = require('../models/experienceModel');

// Create a new experience
exports.createExperience = async (req, res) => {
    try {
        const { position, companyName, startDate, endDate, isPresent, description } = req.body;
        const newExperience = new Experience({ position, companyName, startDate, endDate, isPresent, description });
        await newExperience.save();
        res.status(201).json({ message: 'Experience added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all experiences
exports.getAllExperiences = async (req, res) => {
    try {
        const experiences = await Experience.find().sort({ createdAt: -1 });
        res.json(experiences);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Update an experience by ID
exports.updateExperience = async (req, res) => {
    try {
        const updatedExperience = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedExperience) return res.status(404).json({ message: 'Experience not found' });
        res.json(updatedExperience);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
