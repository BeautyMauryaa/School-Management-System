const Result = require("../models/result");

const addResult = async (req, res) => {
  try {
    const result = new Result(req.body);
    await result.save();
    res.status(201).json({ msg: "Result added successfully", result });
  } catch (error) {
    console.error("Error adding result:", error);
    res.status(500).json({ msg: "Server Error" });
  }
};

// 📥 Get All Results

const getAllResults = async (req, res) => {
  try {
    const results = await Result.find().populate("student", "name email");
    res.status(200).json({
      msg: "Results fetched successfully",
      results,
    });
  } catch (error) {
    res.status(500).json({ msg: "Error fetching results", error });
  }
};

// 🧑‍🎓 Get Result by Student ID
const getResultByStudentId = async (req, res) => {
  try {
    const { studentId } = req.params;
    const result = await Result.find({ student: studentId }).populate("student", "name email");
    if (!result) return res.status(404).json({ msg: "No result found for this student" });
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching student result:", error);
    res.status(500).json({ msg: "Server Error" });
  }
};

// ✏️ Update Result
const updateResult = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Result.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ msg: "Result updated", updated });
  } catch (error) {
    console.error("Error updating result:", error);
    res.status(500).json({ msg: "Server Error" });
  }
};

// ❌ Delete Result
const deleteResult = async (req, res) => {
  try {
    const { id } = req.params;
    await Result.findByIdAndDelete(id);
    res.status(200).json({ msg: "Result deleted" });
  } catch (error) {
    console.error("Error deleting result:", error);
    res.status(500).json({ msg: "Server Error" });
  }
};



module.exports = {
  addResult,
  getAllResults,
  getResultByStudentId,
  updateResult,
  deleteResult,
};
