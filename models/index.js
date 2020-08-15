const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutTempo = new Schema({
    day: {
        type: Date, default: Date.now
    },
    exercises: [{
        type: {
            type: String
        },
        name: {
            type: String
        },
        distance: {
            type: Number
        },
        duration: {
            type: Number
        },
        weight: {
            type: Number
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        },
    }]
})
const Exercise = mongoose.model("Workout", WorkoutTempo);

module.exports = Exercise;
