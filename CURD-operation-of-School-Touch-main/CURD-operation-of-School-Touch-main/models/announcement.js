const mongoose = require("mongoose");

const announcementSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // can be admin or teacher
    required: true,
  },
  targetAudience: {
    type: [String],
    enum: ["Students", "Teachers", "Parents", "All"],
    default: ["All"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Announcement = mongoose.model("Announcement", announcementSchema);
module.exports = Announcement;
