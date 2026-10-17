const AssignmentSubmission = require('../models/AssignmentSubmission');

// ➕ Submit Assignment
exports.submitAssignment = async (req, res) => {
  try {
    const submission = await AssignmentSubmission.create(req.body);
    res.status(201).json({ success: true, data: submission });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// 📄 Get All Submissions
exports.getAllSubmissions = async (req, res) => {
  try {
    const submissions = await AssignmentSubmission.find().populate('studentId').populate('homeworkId');
    res.status(200).json({ success: true, data: submissions });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ✅ Grade Submission
exports.gradeSubmission = async (req, res) => {
  try {
    const { grade, feedback } = req.body;
    const updated = await AssignmentSubmission.findByIdAndUpdate(
      req.params.id,
      { grade, feedback },
      { new: true }
    );
    res.status(200).json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
