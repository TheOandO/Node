const mongoose = require('mongoose');

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
        type: String,
        default: 'No email'
    }}
);

module.exports = mongoose.model('users', UserSchema);