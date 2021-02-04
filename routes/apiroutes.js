const db = require("../models");
const apiRouter = require("express").Router();
const ObjectId = require('mongoose').Types.ObjectId;

// Get Workouts
apiRouter.get("/api/workouts", (req, res) => {
    db.Workout.aggregate([
        {
          $addFields: {
            totalDuration: {
              $sum: "$exercises.duration",
            }
          }
        }
    ])
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch(( {err} ) => {
        res.json(err);
    });
});

// Creating a New Workout
apiRouter.post("/api/workouts", (req, res) => {
    db.Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

// put /api/workouts/:id

// get /api/workouts/range

module.exports = apiRouter;