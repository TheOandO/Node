const router = require("express").Router();
const userController = require('./Controller/userController');

router.get("/", (req, res) => {
    res.send("Let's build a CRUD API!");
});

router.route('/')
    .get(userController.getUsers)
    .post(userController.createUser);

router.route('/:userID')
    .put(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = router;