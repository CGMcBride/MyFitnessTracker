const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const e = require("express");
const PORT = process.env.PORT || 3000;
const app = express();


app.use(morgan("dev"));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static("public"));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnesstrackerdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
app.listen(PORT, function () {
    return console.log("this is running on 3000")
});
