// models/AssignmentSubmission.js
const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  homeworkId: { type: mongoose.Schema.Types.ObjectId, ref: 'Homework', required: true },
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  submissionDate: { type: Date, default: Date.now },
  fileURL: { type: String }, // Link to submitted assignment (Google Drive, Cloud, etc.)
  grade: { type: String }, // A, B, C, etc. (Optional)
  feedback: { type: String }, // Optional
});

module.exports = mongoose.model('AssignmentSubmission', submissionSchema);
