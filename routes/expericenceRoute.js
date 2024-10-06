// routes/experienceRoutes.js
const express = require('express');
const router = express.Router();
const experienceController = require('../controller/expriecenceControl');

// POST /api/experience - Add a new experience
router.post('/', experienceController.createExperience);

// GET /api/experience - Get all experiences
router.get('/', experienceController.getAllExperiences);

// PUT /api/experience/:id - Update an experience by ID
router.put('/:id', experienceController.updateExperience);

module.exports = router;
