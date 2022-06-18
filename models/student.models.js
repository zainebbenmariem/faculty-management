const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
	name: { type: String },
	email: { type: String },
	age: { type: Number },
	faculty: {type:mongoose.Schema.Types.ObjectId, ref: "Faculty"},
},
{ timestamps:true}
);

module.exports = mongoose.model("Student", StudentSchema);
