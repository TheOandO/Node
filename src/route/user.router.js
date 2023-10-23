const router = require("express").Router();
const userController = require('../controller/user.controller');

//Define routes for User entity
router
    .get('/', userController.getUsers)
    .post('/', userController.createUser)
    .put('/:userID', userController.updateUser)
    .delete('/:userID', userController.deleteUser);

module.exports = router;