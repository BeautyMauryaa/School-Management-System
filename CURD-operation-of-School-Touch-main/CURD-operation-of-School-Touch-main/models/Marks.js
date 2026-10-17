// const mongoose = require("mongoose");

// const marksSchema = new mongoose.Schema({
//   student: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Student",
//     required: true,
//   },
//   subject: {
//     type: String,
//     required: true,
//   },
//   examType: {
//     type: String, // e.g., Mid-Term, Final, Unit Test
//     required: true,
//   },
//   marksObtained: {
//     type: Number,
//     required: true,
//   },
//   totalMarks: {
//     type: Number,
//     required: true,
//   },
//   remarks: {
//     type: String,
//   },
//   dateRecorded: {
//     type: Date,
//     default: Date.now,
//   },
// });

// module.exports = mongoose.model("Marks", marksSchema);

const mongoose = require("mongoose");

const markSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
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
  maxMarks: {
    type: Number,
    required: true,
  },
  examType: {
    type: String,
    enum: ["Mid-Term", "Final", "Unit Test", "Annual"],
    required: true,
  },
  term: {
    type: String,
    enum: ["Term 1", "Term 2", "Annual"],
    required: true,
  },
  remarks: {
    type: String,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model("Mark", markSchema);