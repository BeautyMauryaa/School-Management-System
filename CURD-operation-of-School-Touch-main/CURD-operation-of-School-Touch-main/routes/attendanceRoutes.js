const express = require("express");
const router = express.Router();
const Attendance = require("../models/attendance");
const { verifyToken, checkRole } = require("../middleware/authMiddleware");

// ✅ Get Attendance Report for a Student (Admin, Teacher, Student)
router.get("/report/:studentId", verifyToken, checkRole(["admin", "teacher", "student"]), async (req, res) => {
  try {
    const records = await Attendance.find({ student: req.params.studentId });

    const totalClasses = records.length;
    const presentCount = records.filter((r) => r.status === "Present").length;
    const absentCount = records.filter((r) => r.status === "Absent").length;
    const lateCount = records.filter((r) => r.status === "Late").length;

    const attendancePercentage = totalClasses > 0 ? ((presentCount / totalClasses) * 100).toFixed(2) : 0;

    res.status(200).json({
      studentId: req.params.studentId,
      totalClasses,
      presentCount,
      absentCount,
      lateCount,
      attendancePercentage,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get Overall Attendance Summary (Admin & Teacher)
router.get("/summary", verifyToken, checkRole(["admin", "teacher"]), async (req, res) => {
  try {
    const records = await Attendance.find();
    const totalClasses = records.length;

    const presentCount = records.filter((r) => r.status === "Present").length;
    const absentCount = records.filter((r) => r.status === "Absent").length;
    const lateCount = records.filter((r) => r.status === "Late").length;

    const attendancePercentage = totalClasses > 0 ? ((presentCount / totalClasses) * 100).toFixed(2) : 0;

    res.status(200).json({
      totalClasses,
      presentCount,
      absentCount,
      lateCount,
      attendancePercentage,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
