const mongoose = require("mongoose");

const performanceSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  examType: {
    type: String,
    enum: ["Monthly Test", "Mid Term", "Final Exam", "Unit Test", "Other"],
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  marksObtained: {
    type: Number,
    required: true,
  },
  totalMarks: {
    type: Number,
    required: true,
  },
  remarks: {
    type: String,
    default: "",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Performance = mongoose.model("Performance", performanceSchema);
module.exports = Performance;
