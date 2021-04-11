const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Exercise = require("./Exercise");

const ResistanceSchema = new Schema({
    weight: {
        type: Number
    },
    sets: {
        type: Number
    },
    reps: {
        type: Number
    },
    duration: {
        type: Number,
        required: true,
        min: [1,"Please enter a duration."]
    }
})

const Resistance = Exercise.discriminator("Resistance", ResistanceSchema);