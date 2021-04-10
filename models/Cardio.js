const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Exercise = require("./Exercise.js");

const CardioSchema = new Schema({
    distance: {
        type: Number,
        required: true,
        min: [0, "Please enter a distance ran."]
    }
}, Exercise.options);

const Cardio = Exercise.discriminator('Cardio', CardioSchema);


module.exports = Cardio;