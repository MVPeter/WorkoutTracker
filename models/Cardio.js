const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Exercise = require("./Exercise.js");

const CardioSchema = new Schema({
    distance: {
        type: Number,
        required: true,
        min: [1, "Please enter a distance ran."]
    },
    duration: {
        type: Number,
        required: true,
        min: [1,"Please enter a duration."]
    }
}, Exercise.options);

const Cardio = Exercise.discriminator('Cardio', CardioSchema);


module.exports = Cardio;