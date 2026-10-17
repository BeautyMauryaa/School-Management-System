const express = require("express");
const router = express.Router();
const {
  addResult,
  getAllResults,
  getResultByStudentId,
  updateResult,
  deleteResult
} = require("../controllers/resultController");

// ➕ Add new result
router.post("/", addResult);

// 📋 Get all results
router.get("/all", getAllResults);

// 🧑‍🎓 Get result by student ID
router.get("/student/:studentId", getResultByStudentId);

// ✏️ Update result by result ID
router.put("/:id", updateResult);

// ❌ Delete result by result ID
router.delete("/:id", deleteResult);

module.exports = router;

