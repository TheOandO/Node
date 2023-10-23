const User = require('../Model/User');

const getUsers = async (req, res) => {
    await User.find()
        .then(users => {
            res.json(users)
        })
        .catch(error => {
            res.send(error)
        });
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
    await User.findOneAndUpdate(
        { _id: req.params.userID },
        {
            $set: {
                username, password, email
            },
        },
        { new: true },
    ).then(user => {
        res.json(user);
    }).catch(error => {
        res.send(error);
    });
}

const deleteUser = async (req, res) => {
    await User.deleteOne({_id: req.params.userID})
        .then(user => {
            res.json(user);
        }).catch(error => {
            res.send(error)
        });
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}