const mongoose = require("mongoose");

const testMarksSchema = new mongoose.Schema({
  test: { type: mongoose.Schema.Types.ObjectId, ref: "ClassTest", required: true },
  student: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
  marksObtained: { type: Number, required: true }
});

module.exports = mongoose.model("TestMarks", testMarksSchema);