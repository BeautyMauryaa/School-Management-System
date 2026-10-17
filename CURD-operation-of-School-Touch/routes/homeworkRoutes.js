const express = require("express");
const { createHomework, getHomeworkByClass } = require("../controllers/homeworkController");
const { verifyToken, checkRole } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", verifyToken, checkRole(["teacher", "admin"]), createHomework);
router.get("/:className", verifyToken, getHomeworkByClass);

module.exports = router;