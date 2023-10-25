const mongoose = require("mongoose");
const { TODO_MODEL } = require("../util/constants/modelNames");

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

module.exports = mongoose.model(TODO_MODEL, TodoSchema);
