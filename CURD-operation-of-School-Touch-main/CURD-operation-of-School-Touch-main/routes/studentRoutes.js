
// const express = require("express");
// const router = express.Router();
// const { verifyToken, checkRole } = require("../middleware/authMiddleware");
// const studentController = require("../controllers/studentController");

// // ✅ Create Student (Only Admin)
// router.post("/add", verifyToken, checkRole(["admin"]), studentController.addStudent);

// // ✅ Get All Students (Admin & Teacher)
// router.get("/all", verifyToken, checkRole(["admin", "teacher"]), studentController.getAllStudents);

// // ✅ Update Student (Admin & Teacher)
// router.put("/update/:id", verifyToken, checkRole(["admin", "teacher"]), studentController.updateStudent);

// // ✅ Delete Student (Only Admin)
// router.delete("/delete/:id", verifyToken, checkRole(["admin"]), studentController.deleteStudent);

// module.exports = router;


const express = require("express");
const router = express.Router();
const { verifyToken, checkRole } = require("../middleware/authMiddleware");
const studentController = require("../controllers/studentController");

router
  .route("/")
  .get(verifyToken, checkRole(["admin", "teacher"]), studentController.getAllStudents)
  .post(verifyToken, checkRole(["admin"]), studentController.addStudent);

router
  .route("/:id")
  .put(verifyToken, checkRole(["admin", "teacher"]), studentController.updateStudent)
  .delete(verifyToken, checkRole(["admin"]), studentController.deleteStudent);

module.exports = router;
