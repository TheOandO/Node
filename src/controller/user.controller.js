const User = require('../model/user.model');

//GET all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users);
    }
    catch (error){
        res.status(500).json({ error: 'GET Users failed'});
    }
    
};

//POST an user
const createUser = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const user = new User({
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

//PUT an existing user
const updateUser = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const updatedUser = await User.findOneAndUpdate(
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

//DELETE an user
const deleteUser = async (req, res) => {
    try {
        const user = await User.deleteOne({_id: req.params.userID})
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json("User deleted successfully");
    }
    catch (error){
        res.status(500).json({ error: 'Delete failed'});
    }
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}