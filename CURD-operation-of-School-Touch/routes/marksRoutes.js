// const express = require("express");
// const { verifyToken, checkRole } = require("../middleware/authMiddleware");
// const {
//   addMarks,
//   getAllMarks,
//   updateMarks,
//   deleteMarks,
// } = require("../controllers/marksController");

// const router = express.Router();

// router.post("/add", verifyToken, checkRole(["admin", "teacher"]), addMarks);
// router.get("/all", verifyToken, checkRole(["admin", "teacher"]), getAllMarks);
// router.put("/update/:id", verifyToken, checkRole(["admin", "teacher"]), updateMarks);
// router.delete("/delete/:id", verifyToken, checkRole(["admin", "teacher"]), deleteMarks);

// module.exports = router;

const express = require("express");
const { verifyToken, checkRole } = require("../middleware/authMiddleware");
const markController = require("../controllers/marksController");

const router = express.Router();

// ✅ Add Marks
router.post("/add", verifyToken, checkRole(["admin", "teacher"]), markController.addMark);

// ✅ Get All Marks
router.get("/all", verifyToken, checkRole(["admin", "teacher"]), markController.getAllMarks);

// ✅ Get Marks by Student ID
router.get("/student/:studentId", verifyToken, checkRole(["admin", "teacher", "student"]), markController.getStudentMarks);

// ✅ Update Marks
router.put("/update/:id", verifyToken, checkRole(["admin", "teacher"]), markController.updateMark);

// ✅ Delete Marks
router.delete("/delete/:id", verifyToken, checkRole(["admin"]), markController.deleteMark);

module.exports = router;