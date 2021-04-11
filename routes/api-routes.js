// const express = require("express");

// const app = express();
const db = require("../models");

module.exports = (app) => {
app.get("/api/workouts", ({ body }, res) => {
    db.WorkOut.find({ })
        .sort({day: -1})
        .limit(5)
        .populate("exercises")
        .then(workoutDB => {
            res.json(workoutDB);
        })
        .catch(err => {
            res.json(err);
        });
});

app.post("/api/workouts/:id", ({body}, res) => {
    db.WorkOut.create(body)
    .then(({}))
})
}