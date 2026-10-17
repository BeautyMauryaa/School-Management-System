// const mongoose = require("mongoose");

// const attendanceSchema = new mongoose.Schema({
//   student: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
//   date: { type: Date, default: Date.now }, // Auto-sets current date
//   status: { type: String, enum: ["Present", "Absent", "Late"], required: true },
//   remarks: { type: String } // Optional field for remarks
// });

// module.exports = mongoose.model("Attendance", attendanceSchema);

const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
    required: true,
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  status: {
    type: String,
    enum: ["Present", "Absent", "Leave"],
    default: "Present",
  },
  markedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
  },
});

const Attendance = mongoose.model("Attendance", attendanceSchema);
module.exports = Attendance;
