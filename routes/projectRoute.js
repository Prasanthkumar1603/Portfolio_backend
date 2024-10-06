// routes/projectRoutes.js
const express = require('express');
const router = express.Router();
const projectController = require('../controller/projectController');

// POST /api/projects - Add a new project
router.post('/', projectController.createProject);

// GET /api/projects - Get all projects
router.get('/', projectController.getAllProjects);

// PUT /api/projects/:id - Update a project by ID
router.put('/:id', projectController.updateProject);

module.exports = router;
