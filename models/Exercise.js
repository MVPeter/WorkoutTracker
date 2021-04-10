const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    exercise: {
        type: String,
        trim: true,
        required: "Name of the exercise is required"
    },
    duration: {
        type: Number,
        required: "Length of time is required"
    }
})

const Exercise = mongoose.model("Exercise", ExerciseSchema);
module.exports = Exercise;