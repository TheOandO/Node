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
    }
    catch (error) {
        throw error;
    }
}

exports.validateData = (data, schema) => {
    const { error } = schema.validate(data);
    if (error) {
        return res.status(400).json({ error: error });
    }
    return error ? error.details[0].message : null;
};

module.exports = {
    checkUserExistence,
    checkTodoExistence,
    checkExists
};
