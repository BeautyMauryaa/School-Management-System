const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Parent", // Assuming there's a parent model
    required: true,
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  type: {
    type: String,
    enum: ["Feedback", "Complaint", "Suggestion"],
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  reply: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    enum: ["Pending", "Reviewed", "Resolved"],
    default: "Pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const Feedback = mongoose.model("Feedback", feedbackSchema);
module.exports = Feedback;
