const Student = require('../models/student');
const Attendance = require('../models/attendance');
const calculateAttendancePercentage = require('../utils/calculateAttendance');

const ATTENDANCE_THRESHOLD = 75;

exports.getLowAttendanceAlerts = async (req, res) => {
  try {
    const students = await Student.find(); // Get all students
    const lowAttendanceList = [];

    for (const student of students) {
      const attendanceRecords = await Attendance.find({ student: student._id });

      const totalDays = attendanceRecords.length;
      const presentDays = attendanceRecords.filter(a => a.status === 'Present').length;

      const percent = calculateAttendancePercentage(presentDays, totalDays);

      if (percent < ATTENDANCE_THRESHOLD) {
        lowAttendanceList.push({
          studentId: student._id,
          name: student.name,
          class: student.className,
          attendance: `${percent.toFixed(2)}%`
        });
      }
    }

    res.status(200).json({
      success: true,
      count: lowAttendanceList.length,
      data: lowAttendanceList
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Error fetching low attendance alerts',
      error: err.message
    });
  }
};