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
        const todoID = req.params.todoID

        //Check if todo exists
        await service.checkUserExistance(todoID);

        const updatedTodo = await todos.findOneAndUpdate(
            { _id: todoID },
            {
                $set: {
                    title,
                    description,
                    completed
                },
            },
            { new: true },
        )

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
        const todoID = req.params.todoID

        //Check if todo exists
        await service.checkUserExistance(todoID);

        await todos.deleteOne({_id: todoID});

        res.json("Todo deleted successfully");
    }
    catch (error){
        res.status(500).json({ error: 'Delete failed'});
    }
}