const mongoose = require('mongoose');
const { USER_MODEL } = require('../util/constants/modelNames');

const UserSchema = new mongoose.Schema(
    {
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String
    }}
);

module.exports = mongoose.model(USER_MODEL, UserSchema);