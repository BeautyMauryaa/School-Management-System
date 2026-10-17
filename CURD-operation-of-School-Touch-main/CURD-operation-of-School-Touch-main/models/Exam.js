// models/Exam.js
const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
  title: { type: String, required: true },
  className: { type: String, required: true },
  subject: { type: String, required: true },
  date: { type: Date, required: true },
  totalMarks: { type: Number, required: true },
});

module.exports = mongoose.model('Exam', examSchema);
