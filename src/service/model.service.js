// services.js
const users = require('../model/user.model'); // Import your User model
const todos = require('../model/todo.model');

async function checkUserExistence(userID) {
    try {
        const user = await users.findById(userID);
        
        if (!user) {
            throw new Error('User not found');
        }
    } catch (error) {
        throw error;
    }
};

async function checkTodoExistence(todoID) {
    try {
        const todo = await todos.findById(todoID);
        
        if (!todo) {
            throw new Error('Todo not found');
        }
    } catch (error) {
        throw error;
    }
};

async function checkExists(model, cond) {
    try {
        const entity = await model.findOne({ _id: cond });
        if (!entity) {
            throw new Error('Entity not found');
        }
    }
    catch (error) {
        throw error;
    }
}

module.exports = {
    checkUserExistence,
    checkTodoExistence,
    checkExists
};
