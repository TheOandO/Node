const todos = require('../model/todo.model')

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.getTodos = async (req, res) => {
    try {
        const todo = await todos.find()
        res.json(todo);
    }
    catch (error){
        res.status(500).json({ error: 'GET Todos failed'});
    }
    
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.createTodo = async (req, res) => {
    try {
        const { title, description, completed } = req.body;
        const todo = new todos({
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

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
exports.updateTodo = async (req, res) => {
    try {
        const { title, description, completed } = req.body;
        const updatedTodo = await todos.findOneAndUpdate(
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

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
exports.deleteTodo = async (req, res) => {
    try {
        const todo = await todos.deleteOne({_id: req.params.todoID})
        if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        res.json("Todo deleted successfully");
    }
    catch (error){
        res.status(500).json({ error: 'Delete failed'});
    }
}