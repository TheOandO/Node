const todos = require('../model/todo.model')
const service = require('../service/');
const { catchAsync } = require('../util/catchAsync');
const { todoValidationSchema } = require('../util/validation');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.getTodos = catchAsync(async (req, res) => {
    try {
        const todo = await todos.find();

        res.json(todo);
    }
    catch (error){
        res.status(500).json({ error: 'GET Todos failed'});
    }
});

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.createTodo = catchAsync(async (req, res) => {
    const { error } = todoValidationSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    
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
});

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
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
        await service.checkExists(todos, todoID);

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
});

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
exports.deleteTodo = catchAsync(async (req, res) => {
    try {
        const todoID = req.params.todoID

        //Check if todo exists
        //await service.checkExists(todos, todoID);

        await todos.deleteOne({_id: todoID});

        res.json("Todo deleted successfully");
    }
    catch (error){
        res.status(500).json({ error: 'Delete failed'});
    }
});