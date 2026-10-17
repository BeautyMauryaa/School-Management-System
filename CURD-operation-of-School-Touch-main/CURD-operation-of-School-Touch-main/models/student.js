
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNumber: { type: Number, required: true, unique: true },
  class: { type: String, required: true },
  section:{type:String, required: true},
  address: {type: String},
  parentName:{type:String,required:true},
  parentContact: Number,
  attendance: [{ date: Date, status: String }],
  grades: [{ subject: String, score: Number }]
});

module.exports = mongoose.model('student', studentSchema);


