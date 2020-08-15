const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutTempo = new Schema({
    exercise: [{
        exercisetype: {
            type: String
        },
        cardioname: {
            type: String
        },
        cardiodistance: {
            type: Number
        },
        cardioduration: {
            type: Number
        },
        resistancename: {
            type: String
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
        resistanceduration: {
            type: Number
        }
    }]
})
const Exercise = mongoose.model("Exercise", WorkoutTempo);

module.exports = Exercise;
