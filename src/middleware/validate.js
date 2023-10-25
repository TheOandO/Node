const joi = require('joi');

exports.validateData = (data, schema) => {
    const { error } = schema.validate(data);
    if (error) {
        return res.status(400).json({ error: error });
    }
    return error ? error.details[0].message : null;
};