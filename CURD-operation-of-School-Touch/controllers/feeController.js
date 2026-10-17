const Fee = require("../models/Fee");

// ✅ Add Fee Record
const addFee = async (req, res) => {
  try {
    const { student, amount, dueDate, status, paymentDate } = req.body;

    const newFee = new Fee({ student, amount, dueDate, status, paymentDate });
    await newFee.save();

    res.status(201).json({ msg: "Fee record created!", fee: newFee });
  } catch (err) {
    console.error("❌ Error in addFee:", err.message);
    res.status(500).json({ msg: "Server Error" });
  }
};

// ✅ Get All Fee Records
const getAllFees = async (req, res) => {
  try {
    const fees = await Fee.find().populate("student", "name email");
    res.status(200).json(fees);
  } catch (err) {
    console.error("❌ Error in getAllFees:", err.message);
    res.status(500).json({ msg: "Server Error" });
  }
};

// ✅ Update Fee Status (like payment done)
const updateFee = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Fee.findByIdAndUpdate(id, req.body, { new: true });

    if (!updated) return res.status(404).json({ msg: "Fee record not found" });

    res.status(200).json({ msg: "Fee updated!", fee: updated });
  } catch (err) {
    console.error("❌ Error in updateFee:", err.message);
    res.status(500).json({ msg: "Server Error" });
  }
};

// ✅ Delete Fee Record
const deleteFee = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Fee.findByIdAndDelete(id);

    if (!deleted) return res.status(404).json({ msg: "Fee record not found" });

    res.status(200).json({ msg: "Fee record deleted" });
  } catch (err) {
    console.error("❌ Error in deleteFee:", err.message);
    res.status(500).json({ msg: "Server Error" });
  }
};

module.exports = {
  addFee,
  getAllFees,
  updateFee,
  deleteFee,
};