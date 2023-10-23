const users = require('../model/user.model');

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
        const updatedUser = await users.findOneAndUpdate(
            { _id: req.params.userID },
            {
                $set: {
                    username,
                    password,
                    email
                },
            },
            { new: true },
        )
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
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
        const user = await users.deleteOne({_id: req.params.userID})
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json("User deleted successfully");
    }
    catch (error){
        res.status(500).json({ error: 'Delete failed'});
    }
}