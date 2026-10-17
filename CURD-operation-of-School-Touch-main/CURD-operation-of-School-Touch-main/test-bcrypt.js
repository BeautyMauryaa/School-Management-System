const bcrypt = require("bcrypt");

const plain = "12345678";
const hashed = "$2b$10$RdFmOpmSBY2DuEjWM0rNkOB8fIjbud99li8KjtSWeV3b2QgI173/C";

bcrypt.compare(plain, hashed).then(result => {
  console.log("✅ Result:", result);
});
