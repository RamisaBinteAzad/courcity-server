const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
const courses = require("./data/courses.json");
const singleCourse = require("./data/SingleCourse.json");
app.get("/", (req, res) => {
  res.send("COURSES API Running");
});
app.get("/courses", (req, res) => {
  res.send(courses);
});
app.get("/singleCourse", (req, res) => {
  res.send(singleCourse);
});
 

app.get("/singleCourse/:id", (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;
  const selectedCourse = singleCourse.find((n) => n.id == id);
  res.send(selectedCourse);
});
app.listen(port, () => {
  console.log(" CourCity Server running on port", port);
});
 