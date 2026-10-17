const mongoose = require("mongoose");

const reportCardSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  exams: [
    {
      subject: String,
      marksObtained: Number,
      totalMarks: Number,
      grade: String,
    }
  ],
  term: String, // e.g., "Term 1", "Finals"
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("ReportCard", reportCardSchema);