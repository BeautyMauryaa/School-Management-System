// const express = require("express");
// const connectDB = require("./db");
// const dotenv = require("dotenv");
// const cors = require("cors");

// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(express.json());
// app.use(cors()); // Allow cross-origin requests

// // Connect to Database
// connectDB();

// // Routes
// app.use("/students", require("./routes/student"));
// app.use("/api/auth", require("./routes/auth")); // Authentication routes
// app.use("/api/students", require("./routes/student")); // Student management routes

// // Default route
// app.get("/", (req, res) => {
//   res.send("Welcome to the School Management API!");
// });


// // Start the server


// // Start Server
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


// const express = require("express");
// const connectDB = require("./db");
// const dotenv = require("dotenv");
// const cors = require("cors");

// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(express.json());
// app.use(cors()); // Allow cross-origin requests

// // Connect to Database
// connectDB();

// // Routes
// const authRoutes = require("./routes/auth");
// const studentRoutes = require("./routes/student");

// app.use("/api/auth", authRoutes); // Authentication routes
// app.use("/api/students", studentRoutes); // Student management routes

// // Default route
// app.get("/", (req, res) => {
//   res.send("Welcome to the School Management API!");
// });

// // Handle 404 errors for unknown routes
// app.use((req, res, next) => {
//   res.status(404).json({ error: "Route not found" });
// });

// // Global error handler
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ error: "Something went wrong!" });
// });

// // Start Server
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config(); // ✅ Load environment variables FIRST

// const studentRoutes = require("./routes/student");
// app.use("/students", studentRoutes);


// const app = express();
// app.use(express.json()); // ✅ Middleware to parse JSON
// app.use(cors()); // ✅ Allow cross-origin requests

// // ✅ Ensure MONGO_URI is defined before connecting
// if (!process.env.MONGO_URI) {
//     console.error("❌ MONGO_URI is missing in .env file");
//     process.exit(1); // Exit the process if no DB URI
// }

// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => console.log("✅ MongoDB Connected"))
//   .catch(err => {
//       console.error("❌ MongoDB Connection Error:", err);
//       process.exit(1); // Exit process on DB connection failure
//   });

// // ✅ Correctly Mount Auth Routes
// app.use("/api/auth", require("./routes/auth"));

// // Default 404 route
// app.use((req, res) => {
//     res.status(404).json({ error: "Route not found" });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();
// app.use(express.json()); // ✅ Parse JSON requests
// app.use(cors()); // ✅ Enable CORS

// // ✅ Import Middleware
// const { verifyToken, checkRole } = require("./middleware/authMiddleware"); // Ensure correct function import
// const errorHandler = require("./middleware/errorHandler");

// // ✅ Import Routes
// const authRoutes = require("./routes/auth");
// const studentRoutes = require("./routes/studentRoutes");
// const adminRoutes = require("./routes/adminRoutes");
// const teacherRoutes = require("./routes/teacherRoutes");
// const attendanceRoutes = require("./routes/attendanceRoutes");

// // ✅ Use Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/students", verifyToken, studentRoutes); // ✅ Protected Route
// app.use("/api/admin", verifyToken, checkRole(["admin"]), adminRoutes); // ✅ Protected Admin Route
// app.use("/api/teachers", verifyToken, teacherRoutes); // ✅ Protected Route
// app.use("/api/attendance", verifyToken, attendanceRoutes);

// // ✅ MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     //useCreateIndex: true, // ✅ Avoids duplicate index errors
//     //useFindAndModify: false, // ✅ Prevents deprecation warnings
//   })
//   .then(() => console.log("✅ MongoDB Connected Successfully"))
//   .catch((err) => console.error("❌ MongoDB Connection Failed:", err));

// // ✅ Root Route
// app.get("/", (req, res) => {
//   res.send("🎉 Welcome to the School Management API!");
// });

// // ✅ Global Error Handling Middleware
// app.use(errorHandler); // Centralized error handler

// // ✅ Debugging: Check if Routes are Loaded
// console.log("✅ Auth Routes Loaded");
// console.log("✅ Student Routes Loaded");
// console.log("✅ Admin Routes Loaded");
// console.log("✅ Teacher Routes Loaded");
// console.log("✅ Attendance Routes Loaded");

// // ✅ Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// const express = require("express");
// const mongoose = require("mongoose");
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");

// dotenv.config();

// const app = express();
// app.use(express.json()); // ✅ Parse JSON requests
// app.use(cors()); // ✅ Enable CORS

// // ✅ Import Middleware
// const { verifyToken, checkRole } = require("./middleware/authMiddleware");
// const errorHandler = require("./middleware/errorHandler");

// // ✅ Import Routes
// const authRoutes = require("./routes/auth");
// const studentRoutes = require("./routes/studentRoutes");
// const adminRoutes = require("./routes/adminRoutes");
// const teacherRoutes = require("./routes/teacherRoutes");
// const attendanceRoutes = require("./routes/attendanceRoutes");

// // ✅ Use Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/students", verifyToken, studentRoutes);
// app.use("/api/admin", verifyToken, checkRole(["admin"]), adminRoutes);
// app.use("/api/teachers", verifyToken, teacherRoutes);
// app.use("/api/attendance", verifyToken, attendanceRoutes);

// console.log("✅ All Routes Mounted!");


// // ✅ Root Route
// app.get("/", (req, res) => {
//   res.send("🎉 Welcome to the School Management API!");
// });

// app.get("/api/users", async (req, res) => {
//   const users = await User.find();  // MongoDB se users la raha hai
//   res.json(users);
// });

// // ✅ MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("✅ MongoDB Connected Successfully");

//     // ✅ Debugging: List All Registered Routes
//     console.log("\n📌 Full Registered Routes:");
//     app._router.stack.forEach((r) => {
//       if (r.route) {
//         console.log(`➡️ ${Object.keys(r.route.methods).join(", ").toUpperCase()} ${r.route.path}`);
//       } else if (r.name === "router") {
//         r.handle.stack.forEach((nestedRoute) => {
//           if (nestedRoute.route) {
//             console.log(`➡️ ${Object.keys(nestedRoute.route.methods).join(", ").toUpperCase()} ${nestedRoute.route.path}`);
//           }
//         });
//       }
//     });
//     console.log("MongoDB URI:", process.env.MONGO_URI);

//     // ✅ Start Server
//     const PORT = process.env.PORT || 5000;
//     app.listen(PORT, () => {
//       console.log(`🚀 Server running on port ${PORT}`);
//       console.log("📡 API Base URL: http://localhost:" + PORT);
//     });
//   })

//   .catch((err) => {
//     console.error("❌ MongoDB Connection Error:", err);
//   });


// // ✅ Global Error Handling Middleware
// app.use(errorHandler); // Ensure this is placed AFTER all routes
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
// const authRoutes = require("./routes/authRoutes");


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Import Middleware
const { checkRole } = require("./middleware/authMiddleware");
const errorHandler = require("./middleware/errorHandler");




// ✅ Import Routes
const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");
const adminRoutes = require("./routes/adminRoutes");
const teacherRoutes = require("./routes/teacherRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");
const timetableRoutes = require("./routes/timetableRoutes");
const resultRoutes = require("./routes/resultRoutes"); // ✅ Add this with other route imports
const markRoutes = require("./routes/marksRoutes");
const attendanceAlertRoutes = require("./routes/attendanceAlertRoutes");
const reportRoutes = require("./routes/reportRoutes");
const homeworkRoutes = require("./routes/homeworkRoutes");
const testRoutes = require("./routes/testRoutes");
const feeRoutes = require("./routes/feeRoutes");
const examRoutes = require('./routes/examRoutes');
const submissionRoutes = require('./routes/submissionRoutes');
const messageRoutes = require('./routes/messageRoutes');




// ✅ Use Routes
app.use("/api/auth", authRoutes);
app.use("/api/students",  studentRoutes);
app.use("/api/admin", checkRole(["admin"]), adminRoutes);
app.use("/api/teacher", teacherRoutes);  
app.use("/api/attendance", attendanceRoutes);
app.use("/api/timetable", timetableRoutes);
app.use("/api/result", resultRoutes); // Mount it like the boss you are
app.use("/api/marks", markRoutes);
app.use("/api/alerts", attendanceAlertRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/homework", homeworkRoutes);
app.use("/api/tests", testRoutes);
app.use("/api/fees", feeRoutes);
app.use("/api/messages", messageRoutes);
app.use('/api/exams', examRoutes);
app.use('/api/submissions', submissionRoutes);




console.log("✅ All Routes Mounted!");

// ✅ Root Route
app.get("/", (req, res) => {
  res.send("🎉 Welcome to the School Management API!");
});

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("✅ MongoDB Connected Successfully");

    // 🔍 Debugging: List all registered routes
    console.log("\n📌 Full Registered Routes:");
    app._router.stack.forEach((r) => {
      if (r.route) {
        console.log(`➡️ ${Object.keys(r.route.methods).join(", ").toUpperCase()} ${r.route.path}`);
      } else if (r.name === "router") {
        r.handle.stack.forEach((nestedRoute) => {
          if (nestedRoute.route) {
            console.log(`➡️ ${Object.keys(nestedRoute.route.methods).join(", ").toUpperCase()} ${nestedRoute.route.path}`);
          }
        });
      }
    });

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log("📡 API Base URL: http://localhost:" + PORT);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
  });


// ✅ Global Error Handler
app.use(errorHandler);

