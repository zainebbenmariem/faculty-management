const {
	getStudents,
	createStudent,
    getStudent,
    deleteStudent,
    updateStudent,
    getStudentsByFaculty,
} = require("../controllers/student.controllers");

const router = require("express").Router();

router.get("/", getStudents);
router.get('/:facultyId/faculty', getStudentsByFaculty);
router.get("/:studentId", getStudent);
router.delete("/:studentId", deleteStudent);
router.put("/:studentId", updateStudent);
router.post("/", createStudent);

module.exports = router;
