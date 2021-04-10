const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkOutSchema = new Schema({
    workout: {
        type: String,
        trim: true,
        required: "Work out name is required"
    },
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: "Exercise"
        }
    ]
});

const WorkOuts = mongoose.model("WorkOuts", WorkOutSchema);
module.exports = WorkOuts;