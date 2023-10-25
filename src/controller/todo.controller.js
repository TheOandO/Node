const TODO_MODEL = require('../model/todo.model')
const service = require('../service/');
const { catchAsync } = require('../util/catchAsync');
const { todoValidationSchema } = require('../middleware/validation');

/**
 * Get all TODOS
 * @param {Request} req 
 * @param {Response} res 
 */
exports.getTodos = catchAsync(async (req, res) => {
    try {
        const todo = await TODO_MODEL.find();

        res.json(todo);
    }
    catch (error){
        res.status(500).json({ error: 'GET Todos failed'});
    }
});

/**
 *  Create a todo
 * @param {Request} req 
 * @param {Response} res
 * @returns {Object}
 */
exports.createTodo = catchAsync(async (req, res) => {
    const { error } = todoValidationSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    
    try {
        const { title, description, completed } = req.body;

        const todo = new TODO_MODEL({
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
});

/**
 * Update a todo
 * @param {Request} req 
 * @param {Response} res
 * @returns {Object} updatedtodo
 */
exports.updateTodo = catchAsync(async (req, res) => {
    const { error } = todoValidationSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    
    try {
        const { title, description, completed } = req.body;
        const todoID = req.params.todoID

        //Check if todo exists
        await service.checkExists(TODO_MODEL, todoID);

        const updatedTodo = await TODO_MODEL.findOneAndUpdate(
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
});

/**
 * Delete a todo
 * @param {Request} req 
 * @param {Response} res
 * @returns {void}
 */
exports.deleteTodo = catchAsync(async (req, res) => {
    try {
        const todoID = req.params.todoID

        //Check if todo exists
        //await service.checkExists(TODO_MODEL, todoID);

        await TODO_MODEL.deleteOne({_id: todoID});

        res.json("Todo deleted successfully");
    }
    catch (error){
        res.status(500).json({ error: 'Delete failed'});
    }
});