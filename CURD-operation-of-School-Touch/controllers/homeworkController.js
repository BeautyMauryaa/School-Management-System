const Homework = require("../models/Homework");

// 🔸 Add Homework
const createHomework = async (req, res) => {
  try {
    const { title, description, subject, class: className, deadline } = req.body;
    const createdBy = req.user.id;

    const hw = new Homework({ title, description, subject, class: className, deadline, createdBy });
    await hw.save();
    res.status(201).json({ msg: "Homework created!", homework: hw });
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
};

// 🔸 Get Homework by Class
const getHomeworkByClass = async (req, res) => {
  try {
    const { className } = req.params;
    const hw = await Homework.find({ class: className });
    res.status(200).json(hw);
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
};

module.exports = { createHomework, getHomeworkByClass };