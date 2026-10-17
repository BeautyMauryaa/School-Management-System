// models/notificationModel.js
const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  message: String,
  date: {
    type: Date,
    default: Date.now,
  },
  seen: {
    type: Boolean,
    default: false,
  }
});

module.exports = mongoose.model('Notification', notificationSchema);