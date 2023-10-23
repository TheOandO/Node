const User = require('../model/user.model');

const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users);
    }
    catch (error){
        res.send(error)
    }
    
};

const createUser = async (req, res) => {
    const { username, password, email } = req.body;
    const user = new User({
        username, password, email
    });
    await user.save()
        .then(user => {
            res.json(user)
        })
        .catch(error => {
            res.send(error)
        })
};

const updateUser = async (req, res) => {
    const { username, password, email } = req.body;
    const user = await User.findOneAndUpdate(
        { _id: req.params.userID },
        {
            $set: {
                username,
                password,
                email
            },
        },
        { new: true },
    ).then(user => {
        res.json(user);
    }).catch(error => {
        res.send(error);
    });
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
}

const deleteUser = async (req, res) => {
    const user = await User.deleteOne({_id: req.params.userID})
        .then(user => {
            res.json(user);
        }).catch(error => {
            res.send(error)
        });
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}