const router = require('express').Router();
const todoController = require('../controller/todo.controller');

router
    .get('/', todoController.getTodos)
    .post('/', todoController.createTodo)
    .put('/:todoID', todoController.updateTodo)
    .delete('/:todoID', todoController.deleteTodo);

module.exports = router;