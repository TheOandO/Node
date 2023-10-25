const USER_MODEL = require('../model/user.model');
const { service } = require('../service/');
const { catchAsync } = require('../util/catchAsync');
const { userValidationSchema } = require('../middleware/validation');

/**
 * Get all users
 * @param {Request} req 
 * @param {Response} res 
 */
exports.getUsers = catchAsync(async (req, res) => {
    try {
        const user = await USER_MODEL.find();

        res.json(user);
    }
    catch (error){
        res.status(500).json({ error: 'GET Users failed'});
    }
});

/**
 *  Create a user
 * @param {Request} req 
 * @param {Response} res 
 * @returns {Object} user
 */
exports.createUser = catchAsync(async (req, res) => {

    
    try {
        const { username, password, email } = req.body;
        const { error } = userValidationSchema.validate(req.body);

        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const user = new USER_MODEL({
            username, password, email
        });

        const existingUser = await USER_MODEL.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: 'Username already taken' });
        }

        await user.save()
            .then(user => {
                res.json(user)
            })
    }
    catch (error){
        res.status(500).json({ error: 'POST user failed'});
    }
});

/**
 * Update a user
 * @param {Request} req 
 * @param {Response} res 
 * @returns {Object} updatedUser
 */
exports.updateUser = catchAsync(async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const userID = req.params.userID;

        const { error } = userValidationSchema.validate(req.body);

        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        //Check if user exists
        //await service.checkExists(USER_MODEL, userID);

        const updatedUser = await USER_MODEL.findOneAndUpdate(
            { _id: userID },
            {
                $set: {
                    username,
                    password,
                    email
                },
            },
            { new: true },
        )
        res.json(updatedUser);
    }
    catch (error){
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Update failed' });
    }
});

/**
 * Delete a user
 * @param {Request} req 
 * @param {Response} res 
 * @returns {void}
 */
exports.deleteUser = catchAsync(async (req, res) => {
    try {
        const userID = req.params.userID;

        //Check if user exists
        //await service.checkExists(USER_MODEL, userID);

        await USER_MODEL.deleteOne({_id: userID});
        
        res.json("User deleted successfully");
    }
    catch (error){
        res.status(500).json({ error: 'Delete failed'});
    }
});