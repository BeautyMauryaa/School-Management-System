const Timetable = require("../models/timetable");

// ➕ Add Timetable
const addTimetable = async (req, res) => {
  try {
    const timetable = new Timetable(req.body);
    await timetable.save();
    res.status(201).json({ msg: "Timetable added successfully", timetable });
  } catch (error) {
    console.error("Error adding timetable:", error);
    res.status(500).json({ msg: "Server Error", error });
  }
};

// 📥 Get All Timetables
const getAllTimetables = async (req, res) => {
  try {
    const timetables = await Timetable.find().populate("subjects.teacher", "name email");
    res.status(200).json({ msg: "Fetched successfully", timetables });
  } catch (error) {
    console.error("Error fetching timetables:", error);
    res.status(500).json({ msg: "Server Error", error });
  }
};

// 🧑‍🏫 Get Timetable by Class & Section
const getTimetableByClass = async (req, res) => {
  try {
    const { className, section } = req.params;
    const timetable = await Timetable.find({ class: className, section }).populate("subjects.teacher", "name email");
    if (!timetable) return res.status(404).json({ msg: "No timetable found" });
    res.status(200).json(timetable);
  } catch (error) {
    console.error("Error fetching timetable:", error);
    res.status(500).json({ msg: "Server Error", error });
  }
};

module.exports = {
  addTimetable,
  getAllTimetables,
  getTimetableByClass,
};