const router = require("express").Router();
const userController = require('../controller/user.controller');
const validateUser = require('../service/model.service')

router
    .get('/',validateUser, userController.getUsers)
    .post('/',validateUser, userController.createUser)
    .put('/:userID',validateUser, userController.updateUser)
    .delete('/:userID',validateUser, userController.deleteUser);

module.exports = router;