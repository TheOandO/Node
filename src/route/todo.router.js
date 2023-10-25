const router = require('express').Router();
const todoController = require('../controller/todo.controller');
const { catchAsync } = require('../util/catchAsync')
router
    .get('/', catchAsync(todoController.getTodos))
    .post('/', catchAsync(todoController.createTodo))
    .put('/:todoID', catchAsync(todoController.updateTodo))
    .delete('/:todoID', catchAsync(todoController.deleteTodo));

module.exports = router;