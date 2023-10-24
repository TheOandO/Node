const users = require('../model/user.model');
const service = require('../service/user.service');
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.getUsers = async (req, res) => {
    try {
        const user = await users.find()
        res.json(user);
    }
    catch (error){
        res.status(500).json({ error: 'GET Users failed'});
    }
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.createUser = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const user = new users({
            username, password, email
        });
        await user.save()
            .then(user => {
                res.json(user)
            })
    }
    catch (error){
        res.status(500).json({ error: 'Create failed'});
    }
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
exports.updateUser = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const userID = req.params.userID;

        //Check if user exists
        await service.checkUserExistence(userID);

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

}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
exports.deleteUser = async (req, res) => {
    try {
        const userID = req.params.userID;

        //Check if user exists
        await service.checkUserExistence(userID);

        await users.deleteOne({_id: userID});
        
        res.json("User deleted successfully");
    }
    catch (error){
        res.status(500).json({ error: 'Delete failed'});
    }
}