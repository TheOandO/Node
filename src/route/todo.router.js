const router = require('express').Router();
const todoController = require('../controller/todo.controller');
const validateTodo = require('../service/model.service')

router
    .get('/',validateTodo, todoController.getTodos)
    .post('/',validateTodo, todoController.createTodo)
    .put('/:todoID',validateTodo, todoController.updateTodo)
    .delete('/:todoID',validateTodo, todoController.deleteTodo);

module.exports = router;