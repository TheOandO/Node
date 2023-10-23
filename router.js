const router = require("express").Router();
const { getTodos, createTodo, updateTodo, deleteTodo } = require("./controller/todoController");
const { getUsers, createUser, updateUser, deleteUser } = require('./Controller/userController');
router.get("/", (req, res) => {
    res.send("Let's build a CRUD API!");
});


router.get("/todos", getTodos);
router.post("/todos", createTodo);
router.put("/todos/:todoID", updateTodo);
router.delete("/todos/:todoID", deleteTodo);

router.get("/users", getUsers);
router.post("/users", createUser);
router.put("/users/:userID", updateUser);
router.delete("/users/:userID", deleteUser);

module.exports = router;