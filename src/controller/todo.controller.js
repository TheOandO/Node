const Todo = require('../model/todo.model');

const getTodos = async (req, res) => {
    await Todo.find()
        .then(todos => {
            res.json(todos);
        })
        .catch(err => {
            res.send(err);
        });
};

const createTodo =  async (req, res) => {
    const todo = new Todo({
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed,
    });

    await todo.save()
        .then(todo => {
            res.json(todo);
        })
        .catch(err => {
            res.send(err);
        })
};

const updateTodo = async (req, res) => {
    await Todo.findOneAndUpdate(
        { _id: req.params.todoID },
        {
            $set: {
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed,
            },
        },
        { new: true },
        
        // (err, Todo) => {
        //     if (err) {
        //         res.send(err);
        //     } else res.json(Todo);
        // }
    ).then(() => res.json({ message: "Updated"}))
    .catch((err) => res.send(err));
}

const deleteTodo = async (req, res) => {
    await Todo.deleteOne({ _id: req.params.todoID })
        .then(() => res.json({ message: "Todo Deleted" }))
        .catch((err) => res.send(err));
};

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
};
