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

// Add exercise to workout
apiRouter.put("/api/workouts/:id", (req, res) => {
    db.Workout.findOneAndUpdate({_id: ObjectId(req.params.id)}, { $push: { exercises: req.body } }, { new: true })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// get /api/workouts/range

module.exports = apiRouter;