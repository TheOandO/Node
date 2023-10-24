// services.js
const users = require('../model/user.model'); // Import your User model

async function checkUserExistence(userID) {
    try {
        const user = await users.findById(userID);
        
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
