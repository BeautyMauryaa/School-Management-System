const Message = require("../models/Message");

const sendMessage = async (req, res) => {
  try {
    const { receiverId, message, role } = req.body;

    if (!receiverId || !message || !role) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const newMessage = new Message({
      sender: req.user.id,
      receiver: receiverId,
      role,
      message,
    });

    await newMessage.save();
    res.status(201).json({ msg: "Message sent!", newMessage });
  } catch (err) {
    console.error("Send Message Error:", err.message);
    res.status(500).json({ msg: "Server error" });
  }
};

const getMessages = async (req, res) => {
  try {
    const messages = await Message.find({
      $or: [
        { sender: req.user.id },
        { receiver: req.user.id }
      ]
    }).populate("sender", "name email").populate("receiver", "name email");

    res.status(200).json(messages);
  } catch (err) {
    console.error("Get Messages Error:", err.message);
    res.status(500).json({ msg: "Server error" });
  }
};

module.exports = { sendMessage, getMessages };