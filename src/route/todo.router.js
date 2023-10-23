const router = require("express").Router();
const todoController = require('../controller/todo.controller');

//Define routes for Todo entity
router
    .get('/', todoController.getTodos)
    .post('/', todoController.createTodo)
    .put('/:todoID', todoController.updateTodo)
    .delete('/:todoID', todoController.deleteTodo);

module.exports = router;