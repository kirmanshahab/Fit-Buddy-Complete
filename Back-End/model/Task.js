const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    excercise: String,
    description: String,
    duration: String,
    date: String
});

module.exports = mongoose.model("Task", taskSchema);