const express = require("express");
const recordController = require("../../controllers/recordController");

const router = express.Router();

router.get("/", (req, res) => { res.send("Get all records") });

//router.get("/workouts", (req, res) => { res.send("Get all workouts in records") });

//router.get("/:workoutId", recordController.getRecordForWorkout);

module.exports = router;