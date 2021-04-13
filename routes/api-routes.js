// const express = require("express");

// const app = express();
const db = require("../models");

module.exports = (app) => {
    app.get("/api/workouts", (req, res) => {
        db.WorkOut.aggregate(
            [

                {
                    $addFields: { totalDuration: { $sum: "$exercises.duration" } }
                }
            ])
            // .populate("exercises")
            .then(workoutDB => {
                res.json(workoutDB);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.get("/api/workouts/range", (req, res) => {
        db.WorkOut.aggregate(
            [
                {
                    $addFields: {
                        totalDuration: { $sum: "$exercises.duration" },
                        totalDuration: { $sum: "$exercises.duration", },
                        totalWeight: { $sum: "$exercises.weight" },
                        totalSets: { $sum: "$exercises.sets" },
                        totalReps: { $sum: "$exercises.reps" },
                        totalDistance: { $sum: "$exercises.distance" }
                    }
                },
                { "$sort": { _id: -1 } },
                { "$limit": 7 }

            ]
        )
            .then(workoutDB => {
                console.log(workoutDB)
                res.json(workoutDB);
            })
            .catch(err => {
                res.json(err);
            });
    })

    app.put("/api/workouts/:id", (req, res) => {
        let id = req.params.id
        if (req.body.type == "cardio") {

            db.WorkOut.findByIdAndUpdate(id, { $push: { exercises: req.body } })
                .then(workoutDB => {
                    console.log(workoutDB)
                    res.json(workoutDB);
                })
                .catch(err => {
                    res.json(err);
                })
        } else if (req.body.type === "resistance") {
            db.WorkOut.findByIdAndUpdate(id, { $push: { exercises: req.body } })
                .then(workoutDB => {
                    res.json(workoutDB);
                })
                .catch(err => {
                    res.json(err);
                })
        }
    })

    app.post("/api/workouts", ({ body }, res) => {
        db.WorkOut.create({})
            .then(workoutDB => {
                res.json(workoutDB);
            })
            .catch(err => {
                res.json(err);
            });
    });




}