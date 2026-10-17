const mongoose = require("mongoose");

const timetableSchema = new mongoose.Schema(
  {
    class: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
    day: {
      type: String,
      enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      required: true,
    },
    subjects: [
      {
        subjectName: { type: String, required: true },
        startTime: {
  type: String,
  required: true,
  match: /^([0][1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/, // Example: 09:00 AM
},
endTime: {
  type: String,
  required: true,
  match: /^([0][1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/, // Example: 10:45 PM
},
        teacher: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Teacher",
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Timetable", timetableSchema);