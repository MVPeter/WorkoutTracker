const express = require("express");

const app = express();
const db = require("../models");

app.get("/api/workout", ({ body }, res) => {
    db.WorkOuts.find({})
})

module.exports = db