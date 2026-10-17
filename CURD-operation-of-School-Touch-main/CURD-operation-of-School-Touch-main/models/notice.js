const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  targetAudience: {
    type: [String],
    enum: ["Students", "Teachers", "Parents", "All"],
    default: ["All"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  issuedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin", // Assuming notice is issued by admin
    required: true,
  },
  category: {
    type: String,
    enum: ["Notice", "Event", "Circular"],
    required: true,
  },
  attachments: [{
    type: String // Could store URLs or file paths
  }]
});

const Notice = mongoose.model("Notice", noticeSchema);
module.exports = Notice;
