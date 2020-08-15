const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const PORT = process.env.PORT || 3000;
const app = express();
const path = require("path");
const Exercise = require("./models");

app.use(morgan("dev"));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(express.static("public"));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

// Html routes
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"))
});
app.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/exercise.html"))
});
app.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/stats.html"))
});

// Api Routes
app.post("/api/workouts", function (req, res) {
    Exercise.create({})
        .then(function (workout) {
            return res.json(workout)
        })
        .catch(function (err) {
            res.json(err)
        })
})


// last part to use for my code to run
app.listen(PORT, function () {
    return console.log("this is running on 3000")
});
