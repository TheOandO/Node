const express = require('express');
const userRoute = require('./user.router');
const todoRoute = require('./todo.router');
const router = express.Router();

const defaultRoutes = [
    {
        path: '/users',
        route: userRoute,
    },
    {
        path: '/todos',
        route: todoRoute,
    }
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;