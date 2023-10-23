const mongoose = require("mongoose");

//Define Todo Schema
const TodoSchema = new mongoose.Schema(
    {
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    completed: {
        type: Boolean,
    default: false,
    }},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Todo', TodoSchema);
