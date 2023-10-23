const router = require("express").Router();
const { getTodos, createTodo, updateTodo, deleteTodo } = require("../controller/todo.controller");

router.get("/todos", getTodos);
router.post("/todos", createTodo);
router.put("/todos/:todoID", updateTodo);
router.delete("/todos/:todoID", deleteTodo);

module.exports = router;