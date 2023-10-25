const mongoose = require('mongoose');
const { USER_MODEL } = require('../util/constants/modelNames');
const bcrypt = require('bcrypt');
const saltRounds = 10;
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
//Pre-save hook to save password
UserSchema.pre('save', function (next) {
    if (!this.isModified('password')) return next();

    bcrypt.hash(this.password, saltRounds, (err, hash) => {
        if (err) return next(err);

        this.password = hash;
        next();
    });
});

// Pre-update hook to hash password when updating
UserSchema.pre('findOneAndUpdate', function (next) {
    const update = this.getUpdate();
    if (!update.password) return next();

    bcrypt.hash(update.password, saltRounds, (err, hash) => {
        if (err) return next(err);

        update.password = hash;
        next();
    });
});

module.exports = mongoose.model(USER_MODEL, UserSchema);