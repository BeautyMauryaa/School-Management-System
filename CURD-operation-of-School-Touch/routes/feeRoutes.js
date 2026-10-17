const express = require("express");
const router = express.Router();
const { verifyToken, checkRole } = require("../middleware/authMiddleware");
const {
  addFee,
  getAllFees,
  updateFee,
  deleteFee,
} = require("../controllers/feeController");

router.post("/add", verifyToken, checkRole(["admin"]), addFee);
router.get("/all", verifyToken, checkRole(["admin", "teacher"]), getAllFees);
router.put("/update/:id", verifyToken, checkRole(["admin"]), updateFee);
router.delete("/delete/:id", verifyToken, checkRole(["admin"]), deleteFee);

module.exports = router;