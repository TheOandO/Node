# Node.js Basic CRUD API Project
This is a basic CRUD API project created using Node.js, Express, Mongoose, and Joi for input validation. It includes user-related functionality, such as creating, reading, updating, and deleting entity data. The project structure is organized with separate folders for controllers, models, routes, and constants.
## Table of Content

## Getting Started
**Prerequisites**
Before running the project, you should have the following installed:
-   Node.js and npm.
-   MongoDB.

**Installations**
1. Clone the repository
```
git clone https://github.com/TheOandO/Node
cd Node
   ```

2. Install the dependencies:
`npm i express mongoose nodemon joi cors dotenv bcrypt`
3. Set up MongoDB Atlas
4. Set up environment variable
Configure the MongoDB connection:
- Open `.env`.
- Update the MongoDB connection URL.
```MONGODB_URL='mongodb://127.0.0.1:27017/urlexample'```

## Project Structure

    
```
src\
 |--controllers\    # Route controllers (controller layer)
 |--middlewares\    # Request data validation schemas
 |--models\         # Mongoose models (data layer)
 |--routes\         # Defines API routes using Express.
 |--services\       # Business logic (service layer)
 |--utils\          # Utility classes and functions
 |--index.js        # Express App entry point
```

## Usage
**Running the server**

    npm start
The server will run on `http://localhost:8000` by default. You can change the port in `index.js`.

## API Endpoints

### User API Endpoints

-   **Create User**: `POST /api/users`
-   **Read Users**: `GET /api/users`
-   **Update User by ID**: `PUT /api/users/:userID`
-   **Delete User by ID**: `DELETE /api/users/:userID`

### Todo API Endpoints

-   **Create Todo**: `POST /api/todos`
-   **Read Todos**: `GET /api/todos`
-   **Update Todo by ID**: `PUT /api/todos/:todoID`
-   **Delete Todo by ID**: `DELETE /api/todos/:todoID`
### Data Validation
-   Data input is validated using Joi for user and todo endpoints. Check the [documentation](https://joi.dev/api/) for more details on how to write Joi validation schemas.
The validation schemas are defined in the `src/middleware` directory and are used in the controllers by providing them as parameters to the `validate` middleware.
```
const  joi  =  require('joi');

exports.userValidationSchema =  joi.object({
username: joi.string().required().max(30).label('username'),
password: joi.string().required().max(30).label('password'),
email: joi.string().email().label('email'),
});

exports.todoValidationSchema =  joi.object({
title: joi.string().max(300).required(),
description: joi.string().max(1000),
completed: joi.boolean()
});
```
## Maintainers
@TheOandO

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTM3NTMyMzQzMl19
-->