const express = require("express");
const recordController = requiter("../../controllers/recordController");

const router = express.Router();

router.get("/:workoutId", recordController.getRecordForWorkout);

module.exports = router;