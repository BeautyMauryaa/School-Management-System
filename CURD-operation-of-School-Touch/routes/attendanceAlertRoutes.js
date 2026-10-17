const express = require('express');
const router = express.Router();
const { getLowAttendanceAlerts } = require('../controllers/attendanceAlertController');

// GET /api/alerts/low-attendance
router.get('/low-attendance', getLowAttendanceAlerts);

module.exports = router;