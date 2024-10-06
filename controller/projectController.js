// controllers/projectController.js
const Project = require('../models/projectModel');

// Create a new project
exports.createProject = async (req, res) => {
    try {
        const { projectName, description, imageURL, sourceCodeLink } = req.body;
        const newProject = new Project({ projectName, description, imageURL, sourceCodeLink });
        await newProject.save();
        res.status(201).json({ message: 'Project added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all projects
exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Update a project by ID
exports.updateProject = async (req, res) => {
    try {
        const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProject) return res.status(404).json({ message: 'Project not found' });
        res.json(updatedProject);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
