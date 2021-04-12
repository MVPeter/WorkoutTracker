// const express = require("express");

// const app = express();
const db = require("../models");

module.exports = (app) => {
    app.get("/api/workouts", (req, res) => {
        db.WorkOut.find({})
            .sort({ day: -1 })
            .limit(5)
            .populate("exercises")
            .then(workoutDB => {
                res.json(workoutDB);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.put("/api/workouts/:id", (req, res) => {
        if (req.body.type === "cardio") {
            db.Cardio.create(req.body)
                .then(({ _id }) => db.Exercise.findOneAndUpdate({},
                    { $push: { exercise: _id } }, { new: true }))
                .then(workoutDB => {
                    res.json(workoutDB);
                })
                .catch(err => {
                    res.json(err);
                })

        } else if (req.body.type === "resistance") {
            db.Resistance.create(req.body)
                .then(({ _id }) => db.Exercise.findOneAndUpdate({},
                    { $push: { exercise: _id } }, { new: true }))
                .then(workoutDB => {
                    res.json(workoutDB);
                })
                .catch(err => {
                    res.json(err);
                })
        } 
    })

    app.post("/api/workouts", ({ body }, res) => {
        db.Exercise.create(body)
            .then(workoutDB => {
                res.json(workoutDB);
            })
            .catch(err => {
                res.json(err);
            });
    });
}