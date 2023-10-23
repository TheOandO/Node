const Todo = require('../model/todo.model')

const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find()
        res.json(todos);
    }
    catch (error){
        res.status(500).json({ error: 'GET Todos failed'});
    }
    
};

const createTodo = async (req, res) => {
    try {
        const { title, description, completed } = req.body;
        const todo = new Todo({
            title, description, completed
        });
        await todo.save()
            .then(todo => {
                res.json(todo)
            })
    }
    catch (error){
        res.status(500).json({ error: 'Create failed'});
    }
};

const updateTodo = async (req, res) => {
    try {
        const { title, description, completed } = req.body;
        const updatedTodo = await Todo.findOneAndUpdate(
            { _id: req.params.todoID },
            {
                $set: {
                    title,
                    description,
                    completed
                },
            },
            { new: true },
        )
        if (!updatedTodo) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        res.json(updatedTodo)
    }
    catch (error){
        res.status(500).json({ error: 'Update failed'});
    }

}

const deleteTodo = async (req, res) => {
    try {
        const todo = await Todo.deleteOne({_id: req.params.todoID})
        .then(todo => {
            res.json(todo);
        });
        if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
        }
    }
    catch (error){
        res.status(500).json({ error: 'Delete failed'});
    }
}

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
}