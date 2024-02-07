const { json } = require("body-parser");
const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const Project = require("../models/project");
// const verifyToken = require("../routes/verifyLoginToken");

// GET ALL THE STUDENTS
router.get("/list", async (req, res) => {
  try {
    const projectList = await Project?.find();
    return res?.status(200)?.send(JSON.stringify(projectList));
  } catch (err) {
    console.log(`Error-log: ${err}`);
    return res.status(404).send(JSON.stringify({ message: `${err}` }));
  }
});

// FETCH SPECIFIC Project BY ID
router.get("/:projectId/detail", async (req, res) => {
  try {
    const project = await Project.findOne({ _id: req?.params?.projectId || '' });
    if (project == null) throw new Error("Bad request !"); // did not find project

    return res.status(200).send(JSON.stringify(project));
  } catch (err) {
    console.log(`Error-log: ${err}`);
    return res.status(404).send(JSON.stringify({ message: `${err}` }));
  }
});

// ADD NEW project DETAILS
router.post("/add", async (req, res) => {
  try {
    const project = new Project({
      title: req?.body?.title,
      content: req?.body?.content,
      date_modified: req?.body?.date_modified,
      live_link: req?.body?.live_link,
      repo_link: req?.body?.repo_link,
      thumbnali_link: req?.body?.thumbnali_link,
    });
    const savedProject = await Project.create(project);
    res.json(savedProject);
  } catch (err) {
    res.status(404).send({ message: err?.message || "Unable to save" });
  }
});

// UPDATE SPECIFIC STUDENT DETAIL
// router.patch("/:studentRoll/edit", verifyToken, async (req, res) => {
//   try {
//     console.log(`req body: ${req.body.score}`);
//     console.log(`get roll from parameter : ${req.params.studentRoll}`);
//     const student = await Project.updateOne(
//       { roll: req.params.studentRoll },
//       {
//         $set: {
//           name: req.body.name,
//           date_of_birth: req.body.date_of_birth,
//           score: req.body.score,
//         },
//       }
//     );
//     console.log(`updated student: ${student}`);
//     res.json(student);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// DELETE A STUDENT
// router.delete("/:studentRoll/remove", verifyToken, async (req, res) => {
//   try {
//     const student = await Project.find({ roll: req.params.studentRoll });
//     const status = await Project.deleteOne({ roll: req.params.studentRoll });
//     console.log(`----- Project deleted: ${JSON.stringify(student)} -----`);
//     res.json(status);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

module.exports = router;
