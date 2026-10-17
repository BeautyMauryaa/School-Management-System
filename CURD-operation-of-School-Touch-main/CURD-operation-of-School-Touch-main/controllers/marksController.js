// const Marks = require("../models/Marks");

// const addMarks = async (req, res) => {
//   try {
//     const { student, subject, examType, marksObtained, totalMarks, remarks } = req.body;

//     if (!student || !subject || !examType || !marksObtained || !totalMarks) {
//       return res.status(400).json({ msg: "All required fields must be filled!" });
//     }

//     const newMarks = new Marks({
//       student,
//       subject,
//       examType,
//       marksObtained,
//       totalMarks,
//       remarks,
//     });

//     await newMarks.save();
//     res.status(201).json({ msg: "Marks recorded successfully!", marks: newMarks });
//   } catch (err) {
//     console.error("❌ Error in addMarks:", err.message);
//     res.status(500).json({ msg: "Server Error" });
//   }
// };

// const getAllMarks = async (req, res) => {
//   try {
//     const data = await Marks.find().populate("student", "name email");
//     res.status(200).json(data);
//   } catch (err) {
//     console.error("❌ Error in getAllMarks:", err.message);
//     res.status(500).json({ msg: "Server Error" });
//   }
// };

// const updateMarks = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updated = await Marks.findByIdAndUpdate(id, req.body, { new: true });

//     if (!updated) return res.status(404).json({ msg: "Marks not found!" });

//     res.status(200).json({ msg: "Marks updated successfully!", marks: updated });
//   } catch (err) {
//     console.error("❌ Error in updateMarks:", err.message);
//     res.status(500).json({ msg: "Server Error" });
//   }
// };

// const deleteMarks = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleted = await Marks.findByIdAndDelete(id);

//     if (!deleted) return res.status(404).json({ msg: "Marks not found!" });

//     res.status(200).json({ msg: "Marks deleted successfully!" });
//   } catch (err) {
//     console.error("❌ Error in deleteMarks:", err.message);
//     res.status(500).json({ msg: "Server Error" });
//   }
// };

// module.exports = { addMarks, getAllMarks, updateMarks, deleteMarks };
const Mark = require("../models/Marks");

const addMark = async (req, res) => {
  try {
    const mark = new Mark(req.body);
    await mark.save();
    res.status(201).json({ msg: "Marks added successfully", mark });
  } catch (error) {
    console.error("Error adding marks:", error.message);
    res.status(500).json({ msg: "Server Error" });
  }
};

const getAllMarks = async (req, res) => {
  try {
    const marks = await Mark.find().populate("student", "name rollNo");
    res.status(200).json(marks);
  } catch (error) {
    res.status(500).json({ msg: "Error fetching marks", error });
  }
};

const getStudentMarks = async (req, res) => {
  try {
    const { studentId } = req.params;
    const marks = await Mark.find({ student: studentId }).populate("student", "name");
    res.status(200).json(marks);
  } catch (error) {
    res.status(500).json({ msg: "Error fetching student marks", error });
  }
};

const updateMark = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Mark.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ msg: "Marks updated", updated });
  } catch (error) {
    res.status(500).json({ msg: "Error updating marks", error });
  }
};

const deleteMark = async (req, res) => {
  try {
    const { id } = req.params;
    await Mark.findByIdAndDelete(id);
    res.status(200).json({ msg: "Mark deleted" });
  } catch (error) {
    res.status(500).json({ msg: "Error deleting mark", error });
  }
};

module.exports = {
  addMark,
  getAllMarks,
  getStudentMarks,
  updateMark,
  deleteMark,
};