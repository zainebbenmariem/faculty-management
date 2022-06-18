//import section
const express = require("express");
const app = express();
const mongoose = require("mongoose");
//DB connection
mongoose.connect(
  "mongodb+srv://faculty-management:cmp78vIS6UxbKVIA@cluster0.ejxuy.mongodb.net/?retryWrites=true&w=majority"
);
mongoose.connection.on("connected", () => {
  console.log("DB connected");
});
mongoose.connection.on("error", (err) => {
  console.log("mongodb failed with", err);
});
//import routes
const studentRoutes = require("./routes/student.routes");
const facultyRoutes = require("./routes/faculty.routes");
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes middleware
app.use("/students", studentRoutes);
app.use("/faculty", facultyRoutes);
//server listening
const port = 8000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
