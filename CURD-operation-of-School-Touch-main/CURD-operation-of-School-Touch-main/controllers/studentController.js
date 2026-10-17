// const Student = require("../models/student");

// // ✅ Get all students
// exports.getAllStudents = async (req, res) => {
//     try {
//         const students = await Student.find();
//         res.json(students);
//     } catch (err) {
//         res.status(500).json({ error: "Server error" });
//     }
// };

// // ✅ Get a single student by ID
// exports.getStudentById = async (req, res) => {
//     try {
//         const student = await Student.findById(req.params.id);
//         if (!student) return res.status(404).json({ error: "Student not found" });
//         res.json(student);
//     } catch (err) {
//         res.status(500).json({ error: "Server error" });
//     }
// };

// // ✅ Add a new student
// exports.createStudent = async (req, res) => {
//     try {
//         const newStudent = new Student(req.body);
//         await newStudent.save();
//         res.status(201).json(newStudent);
//     } catch (err) {
//         res.status(500).json({ error: "Failed to create student" });
//     }
// };

// // ✅ Update student details
// exports.updateStudent = async (req, res) => {
//     try {
//         const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!student) return res.status(404).json({ error: "Student not found" });
//         res.json(student);
//     } catch (err) {
//         res.status(500).json({ error: "Failed to update student" });
//     }
// };

// // ✅ Delete a student
// exports.deleteStudent = async (req, res) => {
//     try {
//         const student = await Student.findByIdAndDelete(req.params.id);
//         if (!student) return res.status(404).json({ error: "Student not found" });
//         res.json({ message: "Student deleted successfully" });
//     } catch (err) {
//         res.status(500).json({ error: "Failed to delete student" });
//     }
// };
// controllers/studentController.js

// const Student = require("../models/student");

// exports.addStudent = async (req, res) => {
//   try {
//     const newStudent = new Student(req.body);
//     await newStudent.save();
//     res.status(201).json({ message: "Student added successfully", student: newStudent });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// exports.getAllStudents = async (req, res) => {
//   try {
//     const students = await Student.find();
//     res.status(200).json(students);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.updateStudent = async (req, res) => {
//   try {
//     const { id } = req.params;
//     if (!id.match(/^[0-9a-fA-F]{24}$/)) {
//       return res.status(400).json({ error: "Invalid student ID format" });
//     }

//     const updatedStudent = await Student.findByIdAndUpdate(id, req.body, { new: true });
//     if (!updatedStudent) {
//       return res.status(404).json({ error: "Student not found" });
//     }

//     res.status(200).json({ message: "Student updated successfully", student: updatedStudent });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// exports.deleteStudent = async (req, res) => {
//   try {
//     const { id } = req.params;
//     if (!id.match(/^[0-9a-fA-F]{24}$/)) {
//       return res.status(400).json({ error: "Invalid student ID format" });
//     }

//     const deletedStudent = await Student.findByIdAndDelete(id);
//     if (!deletedStudent) {
//       return res.status(404).json({ error: "Student not found" });
//     }

//     res.status(200).json({ message: "Student deleted successfully" });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

const Student = require("../models/student");

// ✅ Add new student
const addStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    const saved = await student.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: "Failed to add student", details: err.message });
  }
};

// ✅ Get all students
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch students", details: err.message });
  }
};

// ✅ Update student
const updateStudent = async (req, res) => {
  try {
    const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: "Student not found" });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update student", details: err.message });
  }
};

// ✅ Delete student
const deleteStudent = async (req, res) => {
  try {
    const deleted = await Student.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Student not found" });
    res.status(200).json({ message: "Student deleted successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete student", details: err.message });
  }
};

module.exports = {
  addStudent,
  getAllStudents,
  updateStudent,
  deleteStudent
};
