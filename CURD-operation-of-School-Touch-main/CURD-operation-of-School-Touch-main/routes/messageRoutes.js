const express = require("express");
const { verifyToken, checkRole } = require("../middleware/authMiddleware");
const { sendMessage, getMessages } = require("../controllers/messageController");

const router = express.Router();

router.post("/send", verifyToken, checkRole(["admin", "teacher", "parent"]), sendMessage);
router.get("/inbox", verifyToken, checkRole(["admin", "teacher", "parent"]), getMessages);

module.exports = router;