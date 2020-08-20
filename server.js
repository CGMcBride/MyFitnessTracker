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
app.get("/api/workouts", function (req, res) {
    Exercise.find({}).then(function (workout) {
        res.json(workout)
    })
})

app.put("/api/workouts/:id", function (req, res) {
    Exercise.findByIdAndUpdate(req.params.id, {
        exercises: req.body
    }).then(function (workout) {
        res.json(workout)
    })
})

app.post("/api/workouts", function (req, res) {
    Exercise.create({})
        .then(function (workout) {
            return res.json(workout)
        })
        .catch(function (err) {
            res.json(err)
        })
})

app.get("/api/workouts/range", function (req, res) {
    Exercise.find({}).limit(10).then(function (workout) {
        return res.json(workout)
    })
})


// last part to use for my code to run
app.listen(PORT, function () {
    return console.log("this is running on 3000")
});
