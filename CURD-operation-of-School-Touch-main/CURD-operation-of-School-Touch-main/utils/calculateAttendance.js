const calculateAttendancePercentage = (attended, total) => {
  if (total === 0) return 0;
  return (attended / total) * 100;
};

module.exports = calculateAttendancePercentage;