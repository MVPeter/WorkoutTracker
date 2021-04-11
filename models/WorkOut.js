const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkOutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now        
    },
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: "Exercise"
        }
    ]
});

const WorkOut = mongoose.model("WorkOut", WorkOutSchema);
module.exports = WorkOut;