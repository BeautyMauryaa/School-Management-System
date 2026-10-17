const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  teacherId:{
   type:String,
   required:true,
   unique:true
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
  },
  subject: {
    type: String,
    required: true,
  },
  classes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
    },
  ],
  role: {
    type: String,
    default: "teacher",
  },
  dateOfJoining: {
    type: Date,
    default: Date.now,
  },
});

const Teacher = mongoose.model("Teacher", teacherSchema);
module.exports = Teacher;
