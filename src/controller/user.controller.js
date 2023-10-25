const users = require('../model/user.model');
const { service } = require('../service/');
const { catchAsync } = require('../util/catchAsync');
const { userValidationSchema } = require('../util/validation');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.getUsers = catchAsync(async (req, res) => {
    try {
        const user = await users.find();

        res.json(user);
    }
    catch (error){
        res.status(500).json({ error: 'GET Users failed'});
    }
});

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.createUser = catchAsync(async (req, res) => {
    const { error } = userValidationSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    
    try {
        const { username, password, email } = req.body;

        const user = new users({
            username, password, email
        });

        const existingUser = await users.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: 'Username already taken' });
        }

        await user.save()
            .then(user => {
                res.json(user)
            })
    }
    catch (error){
        res.status(500).json({ error: 'Create failed'});
    }
});

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
exports.updateUser = catchAsync(async (req, res) => {
    const { error } = userValidationSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    try {
        const { username, password, email } = req.body;
        const userID = req.params.userID;

        //Check if user exists
        await service.checkExists(users, userID);

        const updatedUser = await users.findOneAndUpdate(
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
        res.status(500).json({ error: 'Update failed'});
    }
});

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
exports.deleteUser = catchAsync(async (req, res) => {
    try {
        const userID = req.params.userID;

        //Check if user exists
        //await service.checkExists(users, userID);

        await users.deleteOne({_id: userID});
        
        res.json("User deleted successfully");
    }
    catch (error){
        res.status(500).json({ error: 'Delete failed'});
    }
});