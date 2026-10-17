// const express = require("express");
// const { verifyToken, checkRole } = require("../middleware/authMiddleware");

// const router = express.Router();

// // **🔹 Admin Dashboard Route (Only Admins can access)**
// router.get("/dashboard",  checkRole(["admin"]), (req, res) => {
//   res.json({ message: "Welcome to Admin Panel!" });
// });

// // **🔹 Example Admin Route**
// router.get("/manage-users", checkRole(["admin"]), (req, res) => {
//   res.json({ message: "Admin can manage users here!" });
// });

// module.exports = router;

const express = require("express");
const { verifyToken, checkRole } = require("../middleware/authMiddleware");

const router = express.Router();

// ✅ Token + Role Middleware Order is IMPORTANT

// 🔹 Admin Dashboard Route (Only Admins can access)
router.get("/dashboard", verifyToken, checkRole(["admin"]), (req, res) => {
  res.json({ message: "Welcome to Admin Panel!" });
});

// 🔹 Example Admin Route
router.get("/manage-users", verifyToken, checkRole(["admin"]), (req, res) => {
  res.json({ message: "Admin can manage users here!" });
});

module.exports = router;
