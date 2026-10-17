const express = require("express");
const { createTest, addTestMarks } = require("../controllers/testController");
const { verifyToken, checkRole } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", verifyToken, checkRole(["teacher", "admin"]), createTest);
router.post("/add-marks", verifyToken, checkRole(["teacher"]), addTestMarks);

module.exports = router;