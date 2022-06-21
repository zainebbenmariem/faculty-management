const mongoose = require("mongoose");

const FacultySchema = new mongoose.Schema({
	name: { type: String },
	location: { type: String },
	foundationDate: { type: Date },
	createdBy: {type:mongoose.Schema.Types.ObjectId, ref:"User"}
});

module.exports = mongoose.model("Faculty", FacultySchema);