// services.js
const entity = require('../model/');
const joi = require('joi');

async function checkUserExistence(userID) {
    try {
        const user = await entity.findById(userID);
        
        if (!user) {
            throw new Error('User not found');
        }
    } catch (error) {
        throw error;
    }
};

async function checkTodoExistence(todoID) {
    try {
        const todo = await entity.findById(todoID);
        
        if (!todo) {
            throw new Error('Todo not found');
        }
    } catch (error) {
        throw error;
    }
};

async function checkExists(model, cond) {
    try {
        const entity = await model.findOne(cond);
        if (!entity) {
            throw new Error('Entity not found');
        }
        return entity;
    }
    catch (error) {
        throw error;
    }
}

exports.validateUser = (req, res, next) => {
    const { error } = userValidationSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
};

exports.validateTodo = (req, res, next) => {
    const { error } = todoValidationSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
};

module.exports = {
    checkUserExistence,
    checkTodoExistence,
    checkExists
};
