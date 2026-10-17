// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// const Teacher = require("../models/Teacher");

// const registerTeacher = async (req, res) => {
//   try {
//     const { name, email, password, subject, phone, gender, dob, address } = req.body;

//     // Check if teacher already exists
//     const existingTeacher = await Teacher.findOne({ email });
//     if (existingTeacher) {
//       return res.status(400).json({ message: "Teacher already exists" });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newTeacher = new Teacher({
//       name,
//       email,
//       password: hashedPassword,
//       subject,
//       phone,
//       gender,
//       dob,
//       address,
//       role: "teacher",  // 🔥 Add this
//     });


//     console.log("Saving teacher:", newTeacher);
//     await newTeacher.save();
//     res.status(201).json({ message: "Teacher registered successfully" });

//   }// catch (error) {
//   //   res.status(500).json({ message: "Error registering teacher", error });
//   // }
//   catch (err) {
//     console.log("Registration Error:", err);  // <--- yeh daalna important hai
//     res.status(500).json({ error: "Internal Server Error" });
//  }
// };

// const loginTeacher = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const teacher = await Teacher.findOne({ email });
//     if (!teacher) {
//       return res.status(404).json({ message: "Teacher not found" });
//     }

//     const isMatch = await bcrypt.compare(password, teacher.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     const token = jwt.sign(
//       { id: teacher._id, role: teacher.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "1d" }
//     );

//     res.status(200).json({
//       message: "Login successful",
//       token,
//       teacher: {
//         id: teacher._id,
//         name: teacher.name,
//         email: teacher.email,
//         role: teacher.role,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Login failed", error });
//   }
// };

// module.exports = { registerTeacher,loginTeacher };

const Teacher = require("../models/teacher");

// ✅ Add Teacher
const addTeacher = async (req, res) => {
  try {
    const { name, email, subject, phone, gender } = req.body;

    if (!name || !email || !subject || !phone || !gender) {
      return res.status(400).json({ msg: "All fields are required!" });
    }

    const existing = await Teacher.findOne({ email });
    if (existing) {
      return res.status(400).json({ msg: "Teacher with this email already exists!" });
    }

    const newTeacher = new Teacher({ name, email, subject, phone, gender });
    await newTeacher.save();

    res.status(201).json({ msg: "Teacher added successfully!", teacher: newTeacher });
  } catch (err) {
    console.error("❌ Error in addTeacher:", err.message);
    res.status(500).json({ msg: "Server Error" });
  }
};

// ✅ Get All Teachers
const getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.status(200).json(teachers);
  } catch (err) {
    console.error("❌ Error in getAllTeachers:", err.message);
    res.status(500).json({ msg: "Server Error" });
  }
};

// ✅ Update Teacher
const updateTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Teacher.findByIdAndUpdate(id, req.body, { new: true });

    if (!updated) {
      return res.status(404).json({ msg: "Teacher not found!" });
    }

    res.status(200).json({ msg: "Teacher updated successfully!", teacher: updated });
  } catch (err) {
    console.error("❌ Error in updateTeacher:", err.message);
    res.status(500).json({ msg: "Server Error" });
  }
};

// ✅ Delete Teacher
const deleteTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Teacher.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ msg: "Teacher not found!" });
    }

    res.status(200).json({ msg: "Teacher deleted successfully!" });
  } catch (err) {
    console.error("❌ Error in deleteTeacher:", err.message);
    res.status(500).json({ msg: "Server Error" });
  }
};

module.exports = {
  addTeacher,
  getAllTeachers,
  updateTeacher,
  deleteTeacher,
};
