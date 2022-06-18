const mongoose = require("mongoose");

const FacultySchema = new mongoose.Schema({
	name: { type: String },
	location: { type: String },
	foundationDate: { type: Date },
});

module.exports = mongoose.model("Faculty", FacultySchema);