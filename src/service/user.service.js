// services.js
const users = require('../model/user.model'); // Import your User model

async function checkUserExistence(userId) {
    try {
        const user = await users.findById(userId);
        if (!user) {
            throw new Error('User not found');
        }
    } catch (error) {
        throw error;
    }
}

module.exports = {
    checkUserExistence,
};
