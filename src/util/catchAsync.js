/**
 * Global handling error
 * @param {*} fn 
 * @returns 
 */
exports.catchAsync = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next);
    } catch (err) {
        next(err);
    }
};