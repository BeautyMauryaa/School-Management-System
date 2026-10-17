const PDFDocument = require("pdfkit");
const ReportCard = require("../models/ReportCard");
const Student = require("../models/student");

const generateReportCard = async (req, res) => {
  try {
    const { studentId, term } = req.params;

    const report = await ReportCard.findOne({ student: studentId, term }).populate("student");
    if (!report) {
      return res.status(404).json({ msg: "Report Card not found!" });
    }

    const doc = new PDFDocument();
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename=report-${term}.pdf`);
    doc.pipe(res);

    // PDF Content
    doc.fontSize(22).text("📚 School Report Card", { align: "center" });
    doc.moveDown();
    doc.fontSize(16).text(`Name: ${report.student.name}`);
    doc.text(`Roll No: ${report.student.rollNumber}`);
    doc.text(`Class: ${report.student.class}`);
    doc.text(`Term: ${report.term}`);
    doc.moveDown();

    report.exams.forEach((exam, index) => {
      doc.fontSize(14).text(
        `${index + 1}. ${exam.subject} - ${exam.marksObtained}/${exam.totalMarks} (${exam.grade})`
      );
    });

    doc.end();
  } catch (err) {
    console.error("❌ PDF Generation Error:", err.message);
    res.status(500).json({ msg: "Server Error" });
  }
};

module.exports = {
  generateReportCard,
};