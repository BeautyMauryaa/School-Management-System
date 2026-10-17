const express = require("express");
const router = express.Router();
const { verifyToken, checkRole } = require("../middleware/authMiddleware");
const { generateReportCard } = require("../controllers/reportController");

// 🔐 Accessible by Admin and Teacher
router.get("/download/:studentId/:term", verifyToken, checkRole(["admin", "teacher"]), generateReportCard);

module.exports = router;