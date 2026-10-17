// const express = require("express");
// const { verifyToken, checkRole } = require("../middleware/authMiddleware");

// const router = express.Router();
// const { registerTeacher } = require("../controllers/teacherController");
// const { loginTeacher } = require("../controllers/teacherController");

// router.post("/register", registerTeacher);
// router.post("/login", loginTeacher);


// // **🔹 Teacher Only Route**
// router.get("/dashboard", verifyToken, checkRole(["Teacher"]), (req, res) => {
//   res.json({ message: "Welcome to Teacher Dashboard!" });
// });

// module.exports = router;
// const express = require("express");
// const { verifyToken, checkRole } = require("../middleware/authMiddleware");

// const router = express.Router();
// const { registerTeacher, loginTeacher } = require("../controllers/teacherController");

// // 🔐 Auth Routes
// router.post("/register", registerTeacher);
// router.post("/login", loginTeacher);

// // ✅ Teacher Dashboard (only lowercase "teacher")
// router.get("/dashboard", verifyToken, checkRole(["teacher"]), (req, res) => {
//   res.json({ message: "Welcome to Teacher Dashboard!" });
// });

// module.exports = router;

// const express = require("express");
// const router = express.Router();
// const { verifyToken, checkRole } = require("../middleware/authMiddleware");
// const teacherController = require("../controllers/teacherController");

// // ✅ Add New Teacher (Admin Only)
// router.post("/add", verifyToken, checkRole(["admin"]), teacherController.addTeacher);

// // ✅ Get All Teachers (Admin Only)
// router.get("/all", verifyToken, checkRole(["admin"]), teacherController.getAllTeachers);

// // ✅ Update Teacher (Admin Only)
// router.put("/update/:id", verifyToken, checkRole(["admin"]), teacherController.updateTeacher);

// // ✅ Delete Teacher (Admin Only)
// router.delete("/delete/:id", verifyToken, checkRole(["admin"]), teacherController.deleteTeacher);

// module.exports = router;

const express = require("express");
const router = express.Router();

const { verifyToken, checkRole } = require("../middleware/authMiddleware");
const teacherController = require("../controllers/teacherController");

// ✅ Add a Teacher (Admin only)
router.post("/add",verifyToken, checkRole(["admin"]), teacherController.addTeacher);

// ✅ Get All Teachers (Admin & Teacher)
router.get("/all", verifyToken, checkRole(["admin", "teacher"]), teacherController.getAllTeachers);

// ✅ Update Teacher Info (Admin only)
router.put("/update/:id", verifyToken, checkRole(["admin"]), teacherController.updateTeacher);

// ✅ Delete Teacher (Admin only)
router.delete("/delete/:id", verifyToken, checkRole(["admin"]), teacherController.deleteTeacher);

module.exports = router;
