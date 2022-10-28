const express = require("express"); 

const app = express(); 
const PORT = process.env.PORT || 3000; 

const bodyParser = require("body-parser");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const v1RecordRouter = require("./v1/routes/recordRoutes");

app.use(bodyParser.json());
app.use("/api/v1/workouts", v1WorkoutRouter);
app.use("/api/v1/records", v1RecordRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});

