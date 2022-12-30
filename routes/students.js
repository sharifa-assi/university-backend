const router = require("express").Router();
const User = require("../models/User");
const Student = require("../models/Student");

//CREATE 
router.post("/", async (req, res) => {
  const newStudent = new Student(req.body);
  try {
    const savedStudent = await newStudent.save();
    res.status(200).json(savedStudent);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE 
router.put("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (student.username === req.body.username) {
      try {
        const updatedStudent = await Student.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedStudent);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your student!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE 
router.delete("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (student.username === req.body.username) {
      try {
        await student.delete();
        res.status(200).json("Student has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your student!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET 
router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.status(200).json(student);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL 
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let students;
    if (username) {
      students = await Student.find({ username });
    } else {
      students = await Student.find();
    }
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
