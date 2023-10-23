const mongoose = require('mongoose');

//Define User Schema
const UserSchema = new mongoose.Schema({
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
    }

});

module.exports = mongoose.model('User', UserSchema);