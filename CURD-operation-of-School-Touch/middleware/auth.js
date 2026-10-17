const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("Authorization"); // Get token from headers

  if (!token) {
    return res.status(401).json({ error: "Access Denied. No token provided!" });
  }

  try {
    const verified = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
    req.user = verified; // Attach user data to request
    next(); // Proceed to next middleware/route
  } catch (error) {
    res.status(400).json({ error: "Invalid Token" });
  }
};
