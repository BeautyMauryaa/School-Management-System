const ClassTest = require("../models/ClassTest");
const TestMarks = require("../models/TestMarks");

// 🔸 Schedule Test
const createTest = async (req, res) => {
  try {
    const { testName, subject, class: className, date, totalMarks } = req.body;
    const createdBy = req.user.id;

    const test = new ClassTest({ testName, subject, class: className, date, totalMarks, createdBy });
    await test.save();
    res.status(201).json({ msg: "Test scheduled!", test });
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
};

// 🔸 Add Marks
const addTestMarks = async (req, res) => {
  try {
    const { testId, studentId, marksObtained } = req.body;

    const newMarks = new TestMarks({ test: testId, student: studentId, marksObtained });
    await newMarks.save();

    res.status(201).json({ msg: "Marks added!", result: newMarks });
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
};

module.exports = { createTest, addTestMarks };