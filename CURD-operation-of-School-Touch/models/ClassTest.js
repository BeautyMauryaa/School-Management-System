const mongoose = require("mongoose");

const classTestSchema = new mongoose.Schema({
  testName: { type: String, required: true },
  subject: { type: String, required: true },
  class: { type: String, required: true },
  date: { type: Date, required: true },
  totalMarks: { type: Number, required: true },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Teacher
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("ClassTest", classTestSchema);