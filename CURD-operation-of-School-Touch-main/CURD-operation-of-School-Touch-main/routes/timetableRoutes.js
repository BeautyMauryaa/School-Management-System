const express = require("express");
const router = express.Router();
const {
  addTimetable,
  getAllTimetables,
  getTimetableByClass,
} = require("../controllers/timetableController");

router.post("/add", addTimetable);
router.get("/all", getAllTimetables);
router.get("/:className/:section", getTimetableByClass);

module.exports = router;