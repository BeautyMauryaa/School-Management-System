const mongoose = require("mongoose");

const homeworkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  subject: { type: String, required: true },
  class: { type: String, required: true },
  deadline: { type: Date, required: true },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Teacher
    required: true
  },
  submissions: [
    {
      student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
      fileUrl: String,
      submittedAt: Date,
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model("Homework", homeworkSchema);