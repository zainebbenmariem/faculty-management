const {
	getStudents,
	createStudent,
    getStudent,
    deleteStudent,
    updateStudent,
    getStudentsByFaculty,
} = require("../controllers/student.controllers");

const verifyToken = require("../middleware/verifyToken");

const router = require("express").Router();

router.get("/", getStudents);
router.get('/:facultyId/faculty', getStudentsByFaculty);
router.get("/:studentId", getStudent);
router.delete("/:studentId", deleteStudent);
router.put("/:studentId", updateStudent);
router.post("/",verifyToken, createStudent);

module.exports = router;
