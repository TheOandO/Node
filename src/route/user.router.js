const router = require("express").Router();
const userController = require('../controller/user.controller');
const { catchAsync } = require("../util/catchAsync");

router
    .get('/', catchAsync(userController.getUsers))
    .post('/', catchAsync(userController.createUser))
    .put('/:userID', catchAsync(userController.updateUser))
    .delete('/:userID', catchAsync(userController.deleteUser));

module.exports = router;