const {
	getFaculty,
	createFaculty,
    getFaculties,
    deleteFaculty,
    updateFaculty,
} = require("../controllers/faculty.controllers");

const router = require("express").Router();

router.get("/", getFaculties);
router.get('/:facultyId', getFaculty)
router.delete("/:facultyId", deleteFaculty);
router.put("/:facultyId", updateFaculty);
router.post("/",verifyToken, createFaculty);

module.exports = router;