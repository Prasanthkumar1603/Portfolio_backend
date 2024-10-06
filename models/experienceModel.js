// models/Experience.js
const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
    position: { type: String, required: true },
    companyName: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    isPresent: { type: Boolean, default: false },
    description: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Experience', ExperienceSchema)