const mongoose = require("mongoose");

// SCHEMA OF DB
const taskSchema = mongoose.Schema({
    task:{
        type: String,
        required: true
    },
    Mark:{
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model("Tasks",taskSchema);