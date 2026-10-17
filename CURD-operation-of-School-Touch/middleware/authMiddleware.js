// const jwt = require("jsonwebtoken");

// // **🔹 Middleware to verify JWT token**
// const verifyToken = (req, res, next) => {
//   try {
//     const authHeader = req.header("Authorization");

//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//       return res.status(401).json({ error: "Access Denied! No token provided or invalid format." });
//     }

//     // Extract token from "Bearer <token>"
//     const token = req.headers.authorization?.split(" ")[1];


//     // Verify token
//     jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//       if (err) {
//         return res.status(401).json({ error: "Invalid or expired token." });
//       }
//       req.user = decoded;
//       next();
//     });

//   } catch (error) {
//     res.status(500).json({ error: "Server error in token verification." });
//   }
// };

// // **🔹 Middleware for Role-Based Access**
// const checkRole = (roles) => (req, res, next) => {
//   try {
//     if (!req.user || !roles.includes(req.user.role)) {
//       return res.status(403).json({ error: "Access Denied! Insufficient permissions." });
//     }
//     next();
//   } catch (error) {
//     res.status(500).json({ error: "Server error in role verification." });
//   }
// };

// module.exports = { verifyToken, checkRole };


// const jwt = require("jsonwebtoken");

// const verifyToken = (req, res, next) => {
//   const authHeader = req.headers.authorization;
//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res.status(401).json({ msg: "Access denied. No token." });
//   }

//   const token = authHeader.split(" ")[1];
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (err) {
//     return res.status(401).json({ msg: "Invalid or expired token." });
//   }
// };

// const checkRole = (roles) => (req, res, next) => {
//   if (!roles.includes(req.user.role)) {
//     return res.status(403).json({ msg: "Access denied. Role not allowed." });
//   }
//   next();
// };

// module.exports = { verifyToken, checkRole };

const jwt = require("jsonwebtoken");

// 🔐 Middleware: Verify JWT token
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "Access denied. No token." });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Now contains userId, email, role
    next();
  } catch (err) {
    console.error("❌ Token verification failed:", err.message);
    return res.status(401).json({ msg: "Invalid or expired token." });
  }
};

// 🔒 Middleware: Role-based access
const checkRole = (roles) => (req, res, next) => {
  if (!req.user || !roles.includes(req.user.role)) {
    return res.status(403).json({ msg: "Access denied. Role not allowed." });
  }
  next();
};

module.exports = { verifyToken, checkRole };
