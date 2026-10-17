const express = require('express');
const router = express.Router();
const submissionController = require('../controllers/submissionController');

router.post('/', submissionController.submitAssignment);
router.get('/', submissionController.getAllSubmissions);
router.put('/:id/grade', submissionController.gradeSubmission);

module.exports = router;
