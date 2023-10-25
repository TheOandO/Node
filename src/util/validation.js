const joi = require('joi');

exports.userValidationSchema = joi.object({
    username: joi.string().required().max(30).label('username'),
    password: joi.string().required().max(30).label('password'),
    email: joi.string().email().label('email'),
});

exports.todoValidationSchema = joi.object({
    title: joi.string().max(300).required(),
    description: joi.string().max(1000),
    completed: joi.boolean()
});