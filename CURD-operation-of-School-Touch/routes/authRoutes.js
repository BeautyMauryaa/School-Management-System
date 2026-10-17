// const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const { body, validationResult } = require("express-validator");
// const User = require("../models/user"); 


// const router = express.Router();
// const JWT_SECRET = "your_secret_key_here"; // Change this to an environment variable

// // User Registration
// router.post("/register", [
//   body("name").notEmpty().withMessage("Name is required"),
//   body("email").isEmail().withMessage("Invalid email"),
//   body("password").isLength({ min: 6 }).withMessage("Password must be 6+ chars")
// ], async (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

//   const { name, email, password, role } = req.body;
  
//   try {
//     let user = await User.findOne({ email });
//     if (user) return res.status(400).json({ message: "User already exists" });

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     user = new User({ name, email, password: hashedPassword, role });
//     await user.save();

//     res.status(201).json({ message: "User registered successfully!" });
//   } catch (err) {
//     res.status(500).json({ message: "Server Error", error: err.message });
//   }
// });

// // User Login
// router.post("/login", [
//   body("email").isEmail().withMessage("Invalid email"),
//   body("password").notEmpty().withMessage("Password is required")
// ], async (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: "Invalid Credentials" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: "Invalid Credentials" });

//     const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: "1h" });

//     res.json({ token });
//   } catch (err) {
//     res.status(500).json({ message: "Server Error", error: err.message });
//   }
// });

// module.exports = router;

// const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const { body, validationResult } = require("express-validator");
// const User = require("../models/user");

// const router = express.Router();
// const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key_here"; // Store in .env

// // ✅ User Registration Route
// router.post(
//   "/register",
//   [
//     body("name").notEmpty().withMessage("Name is required"),
//     body("email").isEmail().withMessage("Invalid email"),
//     body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

//     const { name, email, password, role } = req.body;

//     try {
//       let user = await User.findOne({ email });
//       if (user) return res.status(400).json({ error: "User already exists" });

//       const salt = await bcrypt.genSalt(10);
//       const hashedPassword = await bcrypt.hash(password, salt);

//       user = new User({ name, email, password: hashedPassword, role });
//       await user.save();

//       res.status(201).json({ message: "User registered successfully!" });
//     } catch (err) {
//       res.status(500).json({ error: "Server Error", details: err.message });
//     }
//   }
// );

// // ✅ User Login Route
// router.post(
//   "/login",
//   [
//     body("email").isEmail().withMessage("Invalid email"),
//     body("password").notEmpty().withMessage("Password is required"),
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

//     const { email, password } = req.body;

//     try {
//       const user = await User.findOne({ email });
//       if (!user) return res.status(400).json({ error: "Invalid credentials" });

//       const isMatch = await bcrypt.compare(password, user.password);
//       if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

//       const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: "1h" });

//       res.json({ token, message: "Login successful!" });
//     } catch (err) {
//       res.status(500).json({ error: "Server Error", details: err.message });
//     }
//   }
// );

// module.exports = router;


// const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const { body, validationResult } = require("express-validator");
// const User = require("../models/user");

// const router = express.Router();
// const JWT_SECRET = process.env.JWT_SECRET;

// if (!JWT_SECRET) {
//     console.error("❌ JWT_SECRET is missing in .env file");
//     process.exit(1); // Prevent server from starting if no secret key
// }

// // ✅ User Registration Route
// router.post(
//   "/register",
//   [
//     body("name").notEmpty().withMessage("Name is required"),
//     body("email").isEmail().withMessage("Invalid email"),
//     body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

//     const { name, email, password, role } = req.body;

//     try {
//       let user = await User.findOne({ email });
//       if (user) return res.status(400).json({ error: "User already exists" });

//       const hashedPassword = await bcrypt.hash(password, 10); // ✅ Cleaner hashing method
//       const userRole = role || "user"; // ✅ Default role if not provided

//       user = new User({ name, email, password: hashedPassword, role: userRole });
//       await user.save();

//       res.status(201).json({ message: "User registered successfully!" });
//     } catch (err) {
//       res.status(500).json({ error: "Server Error", details: err.message });
//     }
//   }
// );

// // ✅ User Login Route
// router.post(
//   "/login",
//   [
//     body("email").isEmail().withMessage("Invalid email"),
//     body("password").notEmpty().withMessage("Password is required"),
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

//     const { email, password } = req.body;

//     try {
//       const user = await User.findOne({ email });
//       if (!user) return res.status(400).json({ error: "Email not registered" }); // ✅ More specific error

//       const isMatch = await bcrypt.compare(password, user.password);
//       if (!isMatch) return res.status(400).json({ error: "Incorrect password" }); // ✅ More specific error

//       const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: "1h" });

//       res.json({ token, message: "Login successful!" });
//     } catch (err) {
//       res.status(500).json({ error: "Server Error", details: err.message });
//     }
//   }
// );

// module.exports = router;

// const express = require("express");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const User = require("../models/user"); // Import User Model

// const router = express.Router();

// // User Registration (Signup)
// router.post("/signup", async (req, res) => {
//   try {
//     const { name, email, password, role } = req.body;

//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     // Create a new user
//     const newUser = new User({ name, email, password, role });
//     await newUser.save();

//     res.status(201).json({ message: "User registered successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // User Login (Signin)
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if user exists
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Check password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     // Generate JWT Token
//     const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });

//     res.json({ message: "Login successful", token });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// module.exports = router;


// const express = require("express");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const User = require("../models/user"); // Import User model
// require("dotenv").config(); // Load env variables

// const router = express.Router();

// // **🔹 User Registration Route**
// router.post("/register", async (req, res) => {
//   try {
//     const { name, email, password, role } = req.body;

//     // Check if user already exists
//     let user = await User.findOne({ email });
//     if (user) return res.status(400).json({ error: "User already exists!" });

//     // Hash the password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create new user
//     user = new User({ name, email, password: hashedPassword, role });
//     await user.save();

//     res.status(201).json({ message: "User registered successfully!" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // **🔹 User Login Route**
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if user exists
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ error: "Invalid credentials!" });

//     // Compare password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ error: "Invalid credentials!" });

//     // Generate JWT Token
//     const token = jwt.sign(
//       { id: user._id, role: user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" } // Token expires in 1 hour
//     );

//     res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// module.exports = router;

// const express = require("express");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const User = require("../models/user"); // Ensure correct path
// require("dotenv").config(); // Load env variables

// const router = express.Router();

// // **🔹 User Registration Route**
// router.post("/register", async (req, res) => {
//   try {
//     const { name, email, password, role } = req.body;

//     // Validate Input
//     if (!name || !email || !password || !role) {
//       return res.status(400).json({ error: "All fields are required!" });
//     }

//     // Check if user already exists
//     let user = await User.findOne({ email });
//     if (user) return res.status(400).json({ error: "User already exists!" });

//     // Hash the password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create new user
//     user = new User({ name, email, password: hashedPassword, role });
//     await user.save();

//     res.status(201).json({ message: "User registered successfully!" });
//   } catch (error) {
//     console.error("Registration Error:", error.message);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // **🔹 User Login Route**
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Validate Input
//     if (!email || !password) {
//       return res.status(400).json({ error: "Email and password are required!" });
//     }

//     // Check if user exists
//     const user = await User.findOne({ email });
//     if (!user) return res.status(401).json({ error: "Invalid email or password!" });

//     // Compare password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(401).json({ error: "Invalid email or password!" });

//     // Ensure JWT Secret exists
//     if (!process.env.JWT_SECRET) {
//       throw new Error("Missing JWT_SECRET in .env file");
//     }

//     // Generate JWT Token
//     const token = jwt.sign(
//       { id: user._id, role: user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" } // Token expires in 1 hour
//     );

//     res.json({ 
//       token, 
//       user: { id: user._id, name: user.name, email: user.email, role: user.role } 
//     });
//   } catch (error) {
//     console.error("Login Error:", error.message);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // **🔹 Protected Route Example**
// router.get("/protected", verifyToken, (req, res) => {
//   res.json({ message: "Access granted!", user: req.user });
// });

// // **🔹 Test Route**
// router.get("/test", (req, res) => {
//   res.send("Auth route is working!");
// });

// // **🔹 Middleware to Verify Token**
// function verifyToken(req, res, next) {
//   const authHeader = req.header("Authorization");

//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res.status(403).json({ error: "Access denied! No token provided." });
//   }

//   const token = authHeader.split(" ")[1]; // Extract token after "Bearer "

//   try {
//     const verified = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = verified;
//     next();
//   } catch (error) {
//     res.status(401).json({ error: "Invalid token!" });
//   }
// }

// module.exports = router;

// const express = require("express");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const User = require("../models/user");
// require("dotenv").config();

// const router = express.Router();

// // **🔹 User Registration Route**
// router.post("/register", async (req, res) => {
//   try {
//     console.log("🔹 Register API Hit!"); // ✅ Debugging Log

//     const { name, email, password, role } = req.body;

//     // Validate Input
//     if (!name || !email || !password || !role) {
//       return res.status(400).json({ error: "All fields are required!" });
//     }

//     // Check if user already exists
//     let user = await User.findOne({ email });
//     if (user) return res.status(400).json({ error: "User already exists!" });

//     // Hash the password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create new user
//     user = new User({ name, email, password: hashedPassword, role });
//     await user.save();

//     console.log("✅ User registered:", user.email);
//     res.status(201).json({ message: "User registered successfully!" });
//   } catch (error) {
//     console.error("❌ Registration Error:", error.message);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // **🔹 Test Route**
// router.get("/test", (req, res) => {
//   console.log("✅ Test Route Hit!");
//   res.send("Auth route is working!");
// });

// module.exports = router;

// const express = require("express");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const User = require("../models/user"); // Ensure correct path
// require("dotenv").config(); // Load env variables

// const router = express.Router();

// // **🔹 User Registration Route**
// router.post("/register", async (req, res) => {
//   try {
//     const { name, email, password, role } = req.body;

//     // Validate Input
//     if (!name || !email || !password || !role) {
//       return res.status(400).json({ error: "All fields are required!" });
//     }

//     // Check if user already exists
//     let user = await User.findOne({ email });
//     if (user) return res.status(400).json({ error: "User already exists!" });

//     // Hash the password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create new user
//     user = new User({ name, email, password: hashedPassword, role });
//     await user.save();

//     res.status(201).json({ message: "User registered successfully!" });
//   } catch (error) {
//     console.error("Registration Error:", error.message);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // **✅ User Login Route**
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Validate Input
//     if (!email || !password) {
//       return res.status(400).json({ error: "Email and password are required!" });
//     }

//     // Check if user exists
//     const user = await User.findOne({ email });
//     if (!user) return res.status(401).json({ error: "Invalid email or password!" });

//     // Compare password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(401).json({ error: "Invalid email or password!" });

//     // Ensure JWT Secret exists
//     if (!process.env.JWT_SECRET) {
//       throw new Error("Missing JWT_SECRET in .env file");
//     }

//     // Generate JWT Token
//     const token = jwt.sign(
//       { id: user._id, role: user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" } // Token expires in 1 hour
//     );

//     res.json({ 
//       token, 
//       user: { id: user._id, name: user.name, email: user.email, role: user.role } 
//     });
//   } catch (error) {
//     console.error("Login Error:", error.message);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // **🔹 Test Route**
// router.get("/test", (req, res) => {
//   res.send("Auth route is working!");
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");

router.post("/register", registerUser);
router.post("/login", loginUser);


//admin route
const bcrypt = require("bcryptjs");
const User = require("../models/user"); // ✅ Yahan 'user' model ka path correct rakhna

// ✅ TEMP Route to create an admin manually
router.post("/create-admin", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ msg: "Admin already exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new User({
      name,
      email,
      password: hashedPassword,
      role: "admin",
    });

    await newAdmin.save();

    res.status(201).json({ msg: "Admin created successfully!", admin: newAdmin });
  } catch (err) {
    console.error("❌ Error creating admin:", err.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

module.exports = router;
