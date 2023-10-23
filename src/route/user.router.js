const router = require("express").Router();
const userController = require('../controller/user.controller');


router
    .get('/', userController.getUsers)
    .post('/', userController.createUser)
    .put('/:userID', userController.updateUser)
    .delete('/:userID', userController.deleteUser);

module.exports = router;