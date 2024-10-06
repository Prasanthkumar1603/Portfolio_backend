// models/Project.js
const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    projectName: { type: String, required: true },
    description: { type: String, required: true },
    imageURL: { type: String, required: true },
    sourceCodeLink: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);
