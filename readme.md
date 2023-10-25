---


---

<h1 id="node.js-basic-crud-api-project">Node.js Basic CRUD API Project</h1>
<p>This is a basic CRUD API project created using Node.js, Express, Mongoose, and Joi for input validation. It includes user-related functionality, such as creating, reading, updating, and deleting entity data. The project structure is organized with separate folders for controllers, models, routes, and constants.</p>
<h2 id="table-of-content">Table of Content</h2>
<h2 id="getting-started">Getting Started</h2>
<p><strong>Prerequisites</strong><br>
Before running the project, you should have the following installed:</p>
<ul>
<li>Node.js and npm.</li>
<li>MongoDB.</li>
</ul>
<p><strong>Installations</strong></p>
<ol>
<li>Clone the repository</li>
</ol>
<pre><code>git clone https://github.com/TheOandO/Node
cd Node
</code></pre>
<ol start="2">
<li>Install the dependencies:<br>
<code>npm i express mongoose nodemon joi cors dotenv bcrypt</code></li>
<li>Set up MongoDB Atlas</li>
<li>Set up environment variable<br>
Configure the MongoDB connection:</li>
</ol>
<ul>
<li>Open <code>.env</code>.</li>
<li>Update the MongoDB connection URL.<br>
<code>MONGODB_URL='mongodb://127.0.0.1:27017/urlexample'</code></li>
</ul>
<h2 id="project-structure">Project Structure</h2>
<pre><code>src\
 |--controllers\    # Route controllers (controller layer)
 |--middlewares\    # Request data validation schemas
 |--models\         # Mongoose models (data layer)
 |--routes\         # Defines API routes using Express.
 |--services\       # Business logic (service layer)
 |--utils\          # Utility classes and functions
 |--index.js        # Express App entry point
</code></pre>
<h2 id="usage">Usage</h2>
<p><strong>Running the server</strong></p>
<pre><code>npm start
</code></pre>
<p>The server will run on <code>http://localhost:8000</code> by default. You can change the port in <code>index.js</code>.</p>
<h2 id="api-endpoints">API Endpoints</h2>
<h3 id="user-api-endpoints">User API Endpoints</h3>
<ul>
<li><strong>Create User</strong>: <code>POST /api/users</code></li>
<li><strong>Read Users</strong>: <code>GET /api/users</code></li>
<li><strong>Update User by ID</strong>: <code>PUT /api/users/:userID</code></li>
<li><strong>Delete User by ID</strong>: <code>DELETE /api/users/:userID</code></li>
</ul>
<h3 id="todo-api-endpoints">Todo API Endpoints</h3>
<ul>
<li><strong>Create Todo</strong>: <code>POST /api/todos</code></li>
<li><strong>Read Todos</strong>: <code>GET /api/todos</code></li>
<li><strong>Update Todo by ID</strong>: <code>PUT /api/todos/:todoID</code></li>
<li><strong>Delete Todo by ID</strong>: <code>DELETE /api/todos/:todoID</code></li>
</ul>
<h3 id="data-validation">Data Validation</h3>
<ul>
<li>Data input is validated using Joi for user and todo endpoints. Check the <a href="https://joi.dev/api/">documentation</a> for more details on how to write Joi validation schemas.<br>
The validation schemas are defined in the <code>src/middleware</code> directory and are used in the controllers by providing them as parameters to the <code>validate</code> middleware.</li>
</ul>
<pre><code>const  joi  =  require('joi');

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
</code></pre>
<h2 id="maintainers">Maintainers</h2>
<p>@TheOandO</p>

