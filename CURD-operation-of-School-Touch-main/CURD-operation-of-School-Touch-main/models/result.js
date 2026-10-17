// models/result.js

const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema(
  {
    student:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"student",
      required:true
    },
    studentId: {
    type: String,
    required: true,
    unique: true
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
    grade: {
      type: String,
      default: "Pending",
    },
    term: {
      type: String,
      enum: ["Term 1", "Term 2", "Annual"],
      required: true,
    },
    remarks: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Result", resultSchema);
